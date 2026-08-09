import { Calendar, Trophy } from "lucide-react";
import { achievements } from "@/data/timeline";

export default function AchievementsPanel() {
  return (
    <section id="achievements" className="workspace-panel workspace-achievements-panel" aria-labelledby="achievements-title">
      <div className="workspace-section-heading"><div><p className="workspace-code-label">/achievements</p><h2 id="achievements-title">Verified milestones</h2></div></div>
      <div className="workspace-achievements-list">
        {achievements.slice(0, 3).map((achievement) => (
          <article key={`${achievement.year}-${achievement.title}`} className={achievement.highlight ? "workspace-achievement workspace-achievement--featured" : "workspace-achievement"}>
            <div className="workspace-achievement__meta"><Calendar aria-hidden="true" /> {achievement.year} {achievement.highlight && <span><Trophy aria-hidden="true" /> featured</span>}</div>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
