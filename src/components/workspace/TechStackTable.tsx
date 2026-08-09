import { skillDomains } from "@/data/skills";

export default function TechStackTable() {
  return (
    <section id="skills" className="workspace-panel workspace-stack-panel" aria-labelledby="skills-title">
      <div className="workspace-section-heading"><div><p className="workspace-code-label">/package.json</p><h2 id="skills-title">Tech stack</h2></div><span className="workspace-section-meta">dependencies / active</span></div>
      <div className="workspace-stack-table">
        {skillDomains.map((domain) => (
          <div className="workspace-stack-row" key={domain.title}>
            <span className="workspace-stack-domain">{domain.title.toLowerCase().replace(/ & /g, " / ")}</span>
            <div className="workspace-topic-row">{domain.items.map((item) => <span className="workspace-topic" key={item}>{item}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
