import nodemailer from "nodemailer";
import { z } from "zod";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_ATTEMPTS = 3;

interface RateLimitBucket {
  count: number;
  resetAt: number;
}

const rateLimitBuckets = new Map<string, RateLimitBucket>();

export const contactSchema = z.object({
  name: z.string({ required_error: "Name is required." }).trim().min(1, "Name is required.").max(120, "Name is too long."),
  email: z.string({ required_error: "Email is required." }).trim().min(1, "Email is required.").max(254, "Email is too long.").email("Enter a valid email address."),
  message: z.string({ required_error: "Message is required." }).trim().min(1, "Message is required.").max(5000, "Message is too long."),
  projectType: z.string().trim().max(80, "Project type is too long.").optional().default(""),
  budget: z.string().trim().max(120, "Budget is too long.").optional().default(""),
  website: z.string().max(200).optional().default(""),
});

export type ContactPayload = z.infer<typeof contactSchema>;

type HeaderValue = string | string[] | undefined;

export interface ContactRequestLike {
  method?: string;
  body?: unknown;
  headers?: Record<string, HeaderValue>;
  ip?: string;
  socket?: { remoteAddress?: string | null };
}

export interface ContactResponseLike {
  status: (code: number) => ContactResponseLike;
  json: (payload: unknown) => unknown;
  setHeader?: (name: string, value: string) => void;
}

interface ContactResponse {
  success: boolean;
  error?: string;
  fieldErrors?: Record<string, string>;
}

let cachedTransporter: ReturnType<typeof nodemailer.createTransport> | null = null;
let cachedTransporterKey = "";

const escapeHtml = (value: string) => value.replace(/[&<>"]/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
}[character] ?? character));

const getClientIp = (request: ContactRequestLike) => {
  const forwarded = request.headers?.["x-forwarded-for"];
  const forwardedValue = Array.isArray(forwarded) ? forwarded[0] : forwarded;
  return (forwardedValue?.split(",")[0]?.trim() || request.ip || request.socket?.remoteAddress || "unknown").slice(0, 100);
};

const checkRateLimit = (ip: string) => {
  const now = Date.now();

  for (const [key, bucket] of rateLimitBuckets) {
    if (bucket.resetAt <= now) rateLimitBuckets.delete(key);
  }

  const existing = rateLimitBuckets.get(ip);
  if (!existing || existing.resetAt <= now) {
    rateLimitBuckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }

  if (existing.count >= RATE_LIMIT_MAX_ATTEMPTS) {
    return { allowed: false, retryAfter: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)) };
  }

  existing.count += 1;
  return { allowed: true, retryAfter: 0 };
};

const getMailConfig = () => {
  const sender = process.env.SENDER_EMAIL?.trim();
  const password = process.env.SENDER_APP_PASSWORD?.trim();
  const receiver = process.env.RECEIVER_EMAIL?.trim();

  if (!sender || !password || !receiver) return null;
  return { sender, password, receiver };
};

const getTransporter = (config: NonNullable<ReturnType<typeof getMailConfig>>) => {
  const key = `${config.sender}:${config.receiver}`;
  if (!cachedTransporter || cachedTransporterKey !== key) {
    cachedTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: config.sender, pass: config.password },
    });
    cachedTransporterKey = key;
  }
  return cachedTransporter;
};

const buildEmail = (payload: ContactPayload, sender: string, receiver: string) => {
  const projectType = payload.projectType || "Not specified";
  const budget = payload.budget || "Not specified";
  const text = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    "",
    "Message:",
    payload.message,
    "",
    `Project type: ${projectType}`,
    `Budget: ${budget}`,
  ].join("\n");
  const html = `
    <h2>New Portfolio Contact</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(payload.message).replace(/\n/g, "<br>")}</p>
    <hr>
    <p><strong>Project type:</strong> ${escapeHtml(projectType)}</p>
    <p><strong>Budget:</strong> ${escapeHtml(budget)}</p>
  `;

  return {
    from: sender,
    to: receiver,
    replyTo: payload.email,
    subject: `New Portfolio Contact — ${payload.name}`,
    text,
    html,
  };
};

const respond = (response: ContactResponseLike, status: number, body: ContactResponse) => {
  response.status(status);
  return response.json(body);
};

export async function handleContactRequest(request: ContactRequestLike, response: ContactResponseLike) {
  if (request.method !== "POST") {
    response.setHeader?.("Allow", "POST");
    return respond(response, 405, { success: false, error: "Method not allowed." });
  }

  const parsed = contactSchema.safeParse(request.body ?? {});
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    parsed.error.issues.forEach((issue) => {
      const field = String(issue.path[0] ?? "form");
      if (!fieldErrors[field]) fieldErrors[field] = issue.message;
    });
    return respond(response, 400, {
      success: false,
      error: "Please check the highlighted fields.",
      fieldErrors,
    });
  }

  const payload = parsed.data;
  if (payload.website.trim()) {
    return respond(response, 200, { success: true });
  }

  const rateLimit = checkRateLimit(getClientIp(request));
  if (!rateLimit.allowed) {
    response.setHeader?.("Retry-After", String(rateLimit.retryAfter));
    return respond(response, 429, {
      success: false,
      error: "Too many messages. Please try again later.",
    });
  }

  const config = getMailConfig();
  if (!config) {
    console.error("Contact delivery is not configured.");
    return respond(response, 500, {
      success: false,
      error: "Something went wrong. Please try again or contact me directly by email.",
    });
  }

  try {
    const transporter = getTransporter(config);
    await transporter.sendMail(buildEmail(payload, config.sender, config.receiver));
    return respond(response, 200, { success: true });
  } catch (error) {
    console.error("Contact email delivery failed:", error instanceof Error ? error.message : "Unknown delivery error");
    return respond(response, 500, {
      success: false,
      error: "Something went wrong. Please try again or contact me directly by email.",
    });
  }
}
