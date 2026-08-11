import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { processSteps } from "@/data/skills";

export default function ProfileReadme() {
  return (
    <motion.section
      id="readme"
      className="workspace-panel workspace-readme"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      aria-labelledby="profile-readme-title"
    >
      <div className="workspace-filebar">
        <div className="workspace-filebar__label"><FileText aria-hidden="true" /> README.md</div>
        <span className="workspace-filebar__meta">profile workspace</span>
        <span className="workspace-filebar__meta">updated / source</span>
      </div>
      <div className="workspace-readme__body">
        <div>
          <p className="workspace-code-label"># profile.readme</p>
          <h2 id="profile-readme-title">Hi, I&apos;m Kawtar</h2>
          <p className="workspace-lede">
            A passionate developer dedicated to mastering digital creation. My journey spans mobile development, UI/UX design, and AI, with a focus on building applications that are visually captivating and structurally sound.
          </p>
          <div className="workspace-topic-row" aria-label="Profile topics">
            {['product-thinking', 'mobile-first', 'AI-curious', 'design-led'].map((topic) => <span key={topic} className="workspace-topic">{topic}</span>)}
          </div>
        </div>
        <div className="workspace-readme__build">
          <p className="workspace-code-label">## what_i_build</p>
          <ol>
            <li><span>01</span> Build mobile applications</li>
            <li><span>02</span> Design user experiences</li>
            <li><span>03</span> Integrate APIs &amp; AI features</li>
            <li><span>04</span> Test and ship production apps</li>
          </ol>
        </div>
      </div>
      <div className="workspace-pipeline" aria-label="Product development pipeline">
        <span className="workspace-code-label">pipeline</span>
        {processSteps.map((step, index) => (
          <span key={step.number} className={index === processSteps.length - 1 ? "workspace-pipeline__step workspace-pipeline__step--active" : "workspace-pipeline__step"}>
            {step.title}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
