import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import MagneticButton from "./MagneticButton";
import { Button } from "./ui/button";
import { Mail, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      };

      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div className="space-y-8">
            <SectionHeading 
              number="06" 
              title="Have an idea worth building?" 
              subtitle="Let's turn it into a mobile experience people actually want to use."
              className="mb-8"
            />
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <MagneticButton>
                <a href="mailto:kawtar.elgaddi@gmail.com">
                  <Button variant="default" size="lg" className="w-full sm:w-auto rounded-full px-8 h-14 text-base">
                    <Mail className="mr-2 w-5 h-5" />
                    kawtar.elgaddi@gmail.com
                  </Button>
                </a>
              </MagneticButton>
            </div>

            <div className="flex gap-4 pt-8">
              <MagneticButton>
                <a 
                  href="https://github.com/Kawtar-Elg" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full surface-card flex items-center justify-center text-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a 
                  href="https://www.linkedin.com/in/kawtar-el-gaddi-b659a8286" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full surface-card flex items-center justify-center text-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </MagneticButton>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="surface-card p-8 md:p-10 rounded-3xl relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground/80">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full rounded-xl h-12 text-base transition-all"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full mr-2"
                    />
                    Sending...
                  </span>
                ) : isSuccess ? (
                  <span className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Sent Successfully
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;