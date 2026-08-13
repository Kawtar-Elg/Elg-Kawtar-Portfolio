import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface CollaborationFormValues {
  name: string;
  email: string;
  message: string;
  projectType: string;
  budget: string;
  website: string;
}

type ContactField = "name" | "email" | "message";
type ContactFieldErrors = Partial<Record<ContactField, string>>;
type ContactStatus = "idle" | "submitting" | "success" | "error";

const initialValues: CollaborationFormValues = {
  name: "",
  email: "",
  message: "",
  projectType: "Mobile Application",
  budget: "",
  website: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getFieldError = (field: ContactField, value: string) => {
  if (field === "name" && !value.trim()) return "Name is required.";
  if (field === "email" && !value.trim()) return "Email is required.";
  if (field === "email" && !emailPattern.test(value.trim())) return "Enter a valid email address.";
  if (field === "message" && !value.trim()) return "Message is required.";
  return "";
};

const validateValues = (values: CollaborationFormValues): ContactFieldErrors => {
  const errors: ContactFieldErrors = {};
  (['name', 'email', 'message'] as ContactField[]).forEach((field) => {
    const error = getFieldError(field, values[field]);
    if (error) errors[field] = error;
  });
  return errors;
};

export default function CollaborationForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});

  const update = (key: keyof CollaborationFormValues, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
    if (key === "name" || key === "email" || key === "message") {
      setFieldErrors((current) => {
        const next = { ...current };
        delete next[key];
        return next;
      });
    }
    setError("");
    if (status !== "submitting") setStatus("idle");
  };

  const validateField = (field: ContactField) => {
    const nextError = getFieldError(field, values[field]);
    setFieldErrors((current) => ({ ...current, ...(nextError ? { [field]: nextError } : { [field]: undefined }) }));
    return nextError;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const clientErrors = validateValues(values);
    if (Object.keys(clientErrors).length) {
      setFieldErrors(clientErrors);
      setStatus("error");
      setError("Please check the highlighted fields.");
      return;
    }

    setStatus("submitting");
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          projectType: values.projectType.trim(),
          budget: values.budget.trim(),
          website: values.website,
        }),
      });
      const responseBody = (await response.json().catch(() => null)) as { error?: string; fieldErrors?: ContactFieldErrors } | null;
      if (!response.ok) {
        setFieldErrors(responseBody?.fieldErrors ?? {});
        throw new Error(responseBody?.error ?? "Something went wrong. Please try again or contact me directly by email.");
      }

      setValues(initialValues);
      setFieldErrors({});
      setStatus("success");
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "Something went wrong. Please try again or contact me directly by email.");
      setStatus("error");
    }
  };

  const statusKey = status === "success" ? "success" : status === "error" ? "error" : "idle";

  return (
    <section id="collaboration" className="workspace-collaboration" aria-labelledby="collaboration-title">
      <div className="workspace-collaboration__intro"><p className="workspace-code-label">/new-collaboration</p><h2 id="collaboration-title">Open an issue.</h2><p>Have an idea worth building? Tell me what you&apos;re working on and let&apos;s shape a mobile experience people actually want to use.</p><div className="workspace-collaboration__template">template: collaboration<br />labels: mobile, ui/ux, product<br />assignee: kawtar-elg</div></div>
      <form className="workspace-collaboration__form" onSubmit={handleSubmit} noValidate>
        <div className="workspace-filebar"><span>new issue / collaboration.md</span><span>write</span></div>
        <div className="workspace-honeypot" aria-hidden="true">
          <label htmlFor="collab-website">Website</label>
          <input id="collab-website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => update("website", event.target.value)} />
        </div>
        <div className="workspace-form-grid">
          <div className="workspace-field">
            <Label htmlFor="collab-name">Name</Label>
            <Input id="collab-name" value={values.name} onChange={(event) => update("name", event.target.value)} onBlur={() => validateField("name")} placeholder="Your name" required aria-invalid={Boolean(fieldErrors.name)} aria-describedby={fieldErrors.name ? "collab-name-error" : undefined} />
            {fieldErrors.name && <p id="collab-name-error" className="workspace-field-error">{fieldErrors.name}</p>}
          </div>
          <div className="workspace-field">
            <Label htmlFor="collab-email">Email</Label>
            <Input id="collab-email" type="email" value={values.email} onChange={(event) => update("email", event.target.value)} onBlur={() => validateField("email")} placeholder="you@example.com" required aria-invalid={Boolean(fieldErrors.email)} aria-describedby={fieldErrors.email ? "collab-email-error" : undefined} />
            {fieldErrors.email && <p id="collab-email-error" className="workspace-field-error">{fieldErrors.email}</p>}
          </div>
          <div className="workspace-field"><Label htmlFor="collab-project-type">Project type</Label><Select value={values.projectType} onValueChange={(value) => update("projectType", value)}><SelectTrigger id="collab-project-type"><SelectValue placeholder="Choose a project type" /></SelectTrigger><SelectContent><SelectItem value="Mobile Application">Mobile Application</SelectItem><SelectItem value="UI/UX Design">UI/UX Design</SelectItem><SelectItem value="API / AI Integration">API / AI Integration</SelectItem><SelectItem value="Web Project">Web Project</SelectItem></SelectContent></Select></div>
          <div className="workspace-field"><Label htmlFor="collab-budget">Budget <span>(optional)</span></Label><Input id="collab-budget" value={values.budget} onChange={(event) => update("budget", event.target.value)} placeholder="Optional" /></div>
        </div>
        <div className="workspace-field">
          <Label htmlFor="collab-message">Message</Label>
          <Textarea id="collab-message" value={values.message} onChange={(event) => update("message", event.target.value)} onBlur={() => validateField("message")} placeholder="Tell me about your project..." required aria-invalid={Boolean(fieldErrors.message)} aria-describedby={fieldErrors.message ? "collab-message-error" : undefined} />
          {fieldErrors.message && <p id="collab-message-error" className="workspace-field-error">{fieldErrors.message}</p>}
        </div>
        <div className="workspace-form-footer">
          <div className="workspace-form-feedback" aria-live="polite" role={status === "error" ? "alert" : undefined}>
            <AnimatePresence mode="wait" initial={false}>
              {statusKey === "success" ? (
                <motion.p key="success" className="workspace-form-message workspace-form-message--success" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}>
                  <CheckCircle2 aria-hidden="true" /> <span><strong>Message sent successfully!</strong> Thanks for reaching out — I&apos;ll get back to you soon.</span>
                </motion.p>
              ) : statusKey === "error" ? (
                <motion.p key="error" className="workspace-form-message workspace-form-message--error" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}>
                  <AlertCircle aria-hidden="true" /> <span>{error}</span>
                </motion.p>
              ) : (
                <motion.p key="idle" className="workspace-form-message" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  Your message stays inside this workspace.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <Button type="submit" disabled={status === "submitting"} aria-busy={status === "submitting"}>
            {status === "submitting" ? <><Loader2 className="animate-spin" aria-hidden="true" /> Sending...</> : <><Send aria-hidden="true" /> Send Message</>}
          </Button>
        </div>
      </form>
    </section>
  );
}
