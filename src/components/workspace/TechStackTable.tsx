import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { skillDomains } from "@/data/skills";
import { EASE_OUT, useMotionEnabled, VIEWPORT } from "@/lib/motion";

export default function TechStackTable() {
  const enabled = useMotionEnabled();

  return (
    <section id="skills" className="workspace-panel workspace-stack-panel" aria-labelledby="skills-title">
      <div className="workspace-section-heading">
        <div>
          <p className="workspace-code-label">/package.json</p>
          <h2 id="skills-title">🧰 Tech stack</h2>
          <p>Dependencies I reach for, grouped the way I actually use them.</p>
        </div>
        <span className="workspace-section-meta">dependencies / active</span>
      </div>

      <div className="workspace-stack-table">
        {skillDomains.map((domain, domainIndex) => (
          <Reveal key={domain.title} className="workspace-stack-row" y={10} delay={domainIndex * 0.04}>
            <span className="workspace-stack-domain">
              <span aria-hidden="true">{domain.emoji}</span>
              {domain.title.toLowerCase().replace(/ & /g, " / ")}
            </span>
            <div className="workspace-topic-row">
              {domain.items.map((item, itemIndex) => (
                <motion.span
                  className="workspace-topic workspace-topic--skill"
                  key={item}
                  initial={enabled ? { opacity: 0, y: 8 } : undefined}
                  whileInView={enabled ? { opacity: 1, y: 0 } : undefined}
                  whileHover={enabled ? { y: -3 } : undefined}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.3, ease: EASE_OUT, delay: itemIndex * 0.03 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
