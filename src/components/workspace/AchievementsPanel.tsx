import { Calendar, Trophy } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { achievements } from "@/data/timeline";
import { GITHUB_ACHIEVEMENTS, GITHUB_URL } from "@/lib/github";

export default function AchievementsPanel() {
  return (
    <section
      id="achievements"
      className="workspace-panel workspace-achievements-panel"
      aria-labelledby="achievements-title"
    >
      <div className="workspace-section-heading">
        <div>
          <p className="workspace-code-label">/achievements</p>
          <h2 id="achievements-title">🏅 Verified milestones</h2>
        </div>
      </div>

      <StaggerGroup className="workspace-gh-achievements" stagger={0.08} aria-label="GitHub profile achievements">
        {GITHUB_ACHIEVEMENTS.map((achievement) => (
          <StaggerItem key={achievement.name}>
            <a
              className="workspace-gh-achievement"
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              title={achievement.description}
            >
              <span className="workspace-gh-achievement__medal" aria-hidden="true">
                {achievement.emoji}
              </span>
              <span>
                <strong>{achievement.name}</strong>
                <small>GitHub achievement</small>
              </span>
            </a>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <StaggerGroup className="workspace-achievements-list" stagger={0.07}>
        {achievements.slice(0, 3).map((achievement) => (
          <StaggerItem
            key={`${achievement.year}-${achievement.title}`}
            className={
              achievement.highlight
                ? "workspace-achievement workspace-achievement--featured"
                : "workspace-achievement"
            }
          >
            <div className="workspace-achievement__meta">
              <Calendar aria-hidden="true" /> {achievement.year}
              {achievement.highlight && (
                <span>
                  <Trophy aria-hidden="true" /> featured
                </span>
              )}
            </div>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
