import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface CollaborationFormValues {
  title: string;
  projectType: string;
  description: string;
  email: string;
  budget: string;
}

const initialValues: CollaborationFormValues = { title: "", projectType: "Mobile Application", description: "", email: "", budget: "" };

export default function CollaborationForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const update = (key: keyof CollaborationFormValues, value: string) => setValues((current) => ({ ...current, [key]: value }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!values.title.trim() || !values.description.trim() || !values.email.trim() || !values.projectType) {
      setError("Complete the required fields before submitting.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setError("");
    try {
      const response = await fetch(import.meta.env.VITE_CONTACT_API_URL || "http://localhost:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("The collaboration request could not be sent.");
      setValues(initialValues);
      setStatus("success");
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "The collaboration request could not be sent.");
      setStatus("error");
    }
  };

  return (
    <section id="collaboration" className="workspace-collaboration" aria-labelledby="collaboration-title">
      <div className="workspace-collaboration__intro"><p className="workspace-code-label">/new-collaboration</p><h2 id="collaboration-title">Open an issue.</h2><p>Have an idea worth building? Tell me what you&apos;re working on and let&apos;s shape a mobile experience people actually want to use.</p><div className="workspace-collaboration__template">template: collaboration<br />labels: mobile, ui/ux, product<br />assignee: kawtar-elg</div></div>
      <form className="workspace-collaboration__form" onSubmit={handleSubmit} noValidate>
        <div className="workspace-filebar"><span>new issue / collaboration.md</span><span>write</span></div>
        <div className="workspace-form-grid">
          <div className="workspace-field"><Label htmlFor="collab-title">Title</Label><Input id="collab-title" value={values.title} onChange={(event) => update("title", event.target.value)} placeholder="I have a mobile app idea..." required /></div>
          <div className="workspace-field"><Label htmlFor="collab-email">Email</Label><Input id="collab-email" type="email" value={values.email} onChange={(event) => update("email", event.target.value)} placeholder="you@example.com" required /></div>
          <div className="workspace-field"><Label>Project type</Label><Select value={values.projectType} onValueChange={(value) => update("projectType", value)}><SelectTrigger><SelectValue placeholder="Choose a project type" /></SelectTrigger><SelectContent><SelectItem value="Mobile Application">Mobile Application</SelectItem><SelectItem value="UI/UX Design">UI/UX Design</SelectItem><SelectItem value="API / AI Integration">API / AI Integration</SelectItem><SelectItem value="Web Project">Web Project</SelectItem></SelectContent></Select></div>
          <div className="workspace-field"><Label htmlFor="collab-budget">Budget <span>(optional)</span></Label><Input id="collab-budget" value={values.budget} onChange={(event) => update("budget", event.target.value)} placeholder="Optional" /></div>
        </div>
        <div className="workspace-field"><Label htmlFor="collab-description">Description</Label><Textarea id="collab-description" value={values.description} onChange={(event) => update("description", event.target.value)} placeholder="Tell me about your project..." required /></div>
        <div className="workspace-form-footer"><p aria-live="polite">{status === "success" ? <span className="workspace-form-success"><CheckCircle2 aria-hidden="true" /> Request sent successfully.</span> : status === "error" ? error : "Your message stays inside this workspace."}</p><Button type="submit" disabled={status === "submitting"}>{status === "submitting" ? <><Loader2 className="animate-spin" aria-hidden="true" /> Sending...</> : <><Send aria-hidden="true" /> Submit collaboration request</>}</Button></div>
      </form>
    </section>
  );
}
