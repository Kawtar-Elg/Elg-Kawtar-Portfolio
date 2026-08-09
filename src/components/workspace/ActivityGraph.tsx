import { achievements } from "@/data/timeline";
import { motion } from "framer-motion";

const years = ["2021", "2022", "2023", "2024", "2025"];

export default function ActivityGraph() {
  return (
    <section id="activity" className="workspace-panel workspace-activity-panel" aria-labelledby="activity-title">
      <div className="workspace-section-heading">
        <div><p className="workspace-code-label">/activity</p><h2 id="activity-title">Build activity</h2><p>Meaningful milestones, not fabricated daily commits.</p></div>
        <span className="workspace-section-meta">2021 → 2025</span>
      </div>
      <div className="workspace-activity-grid" aria-label="Portfolio milestone activity from 2021 to 2025">
        {years.map((year, rowIndex) => (
          <div className="workspace-activity-row" key={year}>
            <span className="workspace-activity-year">{year}</span>
            {years.map((columnYear) => {
              const event = achievements.find((achievement) => achievement.year.includes(year) && achievement.year.includes(columnYear));
              const isActive = Boolean(event);
              return <motion.span key={`${year}-${columnYear}`} className={isActive ? "workspace-activity-cell workspace-activity-cell--active" : "workspace-activity-cell"} title={event?.title ?? "No recorded milestone"} whileInView={{ opacity: 1 }} initial={{ opacity: 0.4 }} viewport={{ once: true }} />;
            })}
          </div>
        ))}
      </div>
      <div className="workspace-activity-legend"><span><i className="workspace-activity-cell" /> quiet period</span><span><i className="workspace-activity-cell workspace-activity-cell--active" /> milestone</span><span><i className="workspace-activity-cell workspace-activity-cell--featured" /> featured</span></div>
    </section>
  );
}
