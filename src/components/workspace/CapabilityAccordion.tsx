import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { capabilities, getCapabilityProjects } from "@/lib/capability-utils";
import type { RepositoryRecord } from "@/lib/repository-utils";

export default function CapabilityAccordion({ repositories }: { repositories: RepositoryRecord[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="workspace-panel workspace-capability-panel" aria-labelledby="capabilities-title">
      <div className="workspace-section-heading"><div><p className="workspace-code-label">/skills</p><h2 id="capabilities-title">🛠️ What I build</h2><p>Capabilities backed by the technologies and projects already in this workspace.</p></div></div>
      <div className="workspace-capability-list">
        {capabilities.map((capability) => {
          const isOpen = capability.id === openId;
          const relatedProjects = getCapabilityProjects(capability, repositories);
          return (
            <div className={isOpen ? "workspace-capability workspace-capability--open" : "workspace-capability"} key={capability.id}>
              <button type="button" className="workspace-capability__trigger" aria-expanded={isOpen} onClick={() => setOpenId(isOpen ? null : capability.id)}>
                <span className="workspace-capability__index">{String(capabilities.indexOf(capability) + 1).padStart(2, "0")}</span>
                <span><strong>{capability.title}</strong><small>{capability.description}</small></span>
                <ChevronDown aria-hidden="true" />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div className="workspace-capability__details" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                    <div><p className="workspace-code-label">technologies</p><div className="workspace-topic-row">{capability.technologies.map((technology) => <span className="workspace-topic" key={technology}>{technology}</span>)}</div></div>
                    <div><p className="workspace-code-label">related repositories</p><div className="workspace-capability__projects">{relatedProjects.length ? relatedProjects.map((project) => <span key={project.id}>{project.title}</span>) : <span>No matching repository yet.</span>}</div></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
