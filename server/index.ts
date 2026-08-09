import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const collaborationSchema = z.object({
  title: z.string().min(1),
  projectType: z.string().min(1),
  description: z.string().min(1),
  email: z.string().email(),
  budget: z.string().optional()
});

const legacyContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1)
});

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}[character] ?? character));

app.post('/api/contact', async (req, res) => {
  try {
    const collaboration = collaborationSchema.safeParse(req.body);
    const legacy = collaboration.success ? null : legacyContactSchema.parse(req.body);
    const name = collaboration.success ? collaboration.data.title : legacy.name;
    const email = collaboration.success ? collaboration.data.email : legacy.email;
    const message = collaboration.success
      ? `Project type: ${collaboration.data.projectType}\nBudget: ${collaboration.data.budget || 'Not specified'}\n\n${collaboration.data.description}`
      : legacy.message;

    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_APP_PASSWORD
      }
    });

    await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: process.env.RECEIVER_EMAIL,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name / Title:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});