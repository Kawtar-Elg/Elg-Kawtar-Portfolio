import { motion } from "framer-motion";
import { GitCommitHorizontal, Radio } from "lucide-react";
import { useMemo } from "react";
import CountUp from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { useGitHubProfile, useGitHubRepos } from "@/hooks/use-github";
import {
  formatRelativeDate,
  getLanguageColor,
  getLanguageShares,
  getMonthlyActivity,
  getTotalStars,
} from "@/lib/github";
import { EASE_OUT, useMotionEnabled, VIEWPORT } from "@/lib/motion";
import { cn } from "@/lib/utils";

const COLUMN_CELLS = 5;

const intensityLevel = (count: number) => {
  if (count === 0) return 0;
  if (count === 1) return 1;
  if (count <= 2) return 2;
  if (count <= 4) return 3;
  return 4;
};

export default function ActivityGraph() {
  const { data: repos, isLive } = useGitHubRepos();
  const { data: profile } = useGitHubProfile();
  const enabled = useMotionEnabled();

  const months = useMemo(() => getMonthlyActivity(repos, 12), [repos]);
  const languages = useMemo(() => getLanguageShares(repos), [repos]);
  const recent = useMemo(() => repos.slice(0, 5), [repos]);
  const totalStars = useMemo(() => getTotalStars(repos), [repos]);
  const activeMonths = months.filter((month) => month.count > 0).length;
  const memberSince = new Date(profile.createdAt).getUTCFullYear();

  return (
    <section id="activity" className="workspace-panel workspace-activity-panel" aria-labelledby="activity-title">
      <div className="workspace-section-heading">
        <div>
          <p className="workspace-code-label">/activity</p>
          <h2 id="activity-title">📈 Developer activity</h2>
          <p>Repository activity across the last 12 months, read straight from GitHub timestamps.</p>
        </div>
        <span className={cn("workspace-live-pill", isLive && "workspace-live-pill--on")}>
          <Radio aria-hidden="true" /> {isLive ? "live" : "snapshot"}
        </span>
      </div>

      <Reveal y={12} className="workspace-activity-stats">
        {[
          { label: "public repos", value: profile.publicRepos, emoji: "📦" },
          { label: "stars", value: totalStars, emoji: "⭐" },
          { label: "languages", value: languages.length, emoji: "🧩" },
          { label: "active months", value: activeMonths, emoji: "🔥" },
        ].map((item) => (
          <div key={item.label} className="workspace-activity-stat">
            <span aria-hidden="true">{item.emoji}</span>
            <CountUp value={item.value} className="workspace-activity-stat__value" />
            <span className="workspace-activity-stat__label">{item.label}</span>
          </div>
        ))}
      </Reveal>

      <div className="workspace-contrib" aria-hidden="true">
        {months.map((month, columnIndex) => {
          const level = intensityLevel(month.count);
          const filled = Math.min(month.count, COLUMN_CELLS);
          return (
            <div className="workspace-contrib__column" key={month.key}>
              <div className="workspace-contrib__cells">
                {Array.from({ length: COLUMN_CELLS }).map((_, cellIndex) => {
                  const isOn = cellIndex < filled;
                  return (
                    <motion.span
                      key={cellIndex}
                      className={cn(
                        "workspace-contrib__cell",
                        isOn && `workspace-contrib__cell--l${level}`
                      )}
                      initial={enabled ? { opacity: 0, scale: 0.6 } : undefined}
                      whileInView={enabled ? { opacity: 1, scale: 1 } : undefined}
                      viewport={VIEWPORT}
                      transition={{
                        duration: 0.28,
                        ease: EASE_OUT,
                        delay: columnIndex * 0.035 + cellIndex * 0.015,
                      }}
                    />
                  );
                })}
              </div>
              <span className="workspace-contrib__label">{month.label}</span>
            </div>
          );
        })}
      </div>

      <p className="sr-only">
        Repository activity by month:{" "}
        {months
          .map((month) => `${month.label} ${month.year}: ${month.count} repositories`)
          .join(", ")}
        .
      </p>

      <div className="workspace-contrib__legend">
        <span>
          {months[0]?.label} {months[0]?.year} → {months[months.length - 1]?.label}{" "}
          {months[months.length - 1]?.year}
        </span>
        <span className="workspace-contrib__scale">
          Less
          {[0, 1, 2, 3, 4].map((level) => (
            <i key={level} className={cn("workspace-contrib__cell", level > 0 && `workspace-contrib__cell--l${level}`)} />
          ))}
          More
        </span>
      </div>

      <div className="workspace-commitline">
        <p className="workspace-code-label">## recent_pushes</p>
        <ol>
          {recent.map((repo, index) => (
            <motion.li
              key={repo.name}
              initial={enabled ? { opacity: 0, x: -8 } : undefined}
              whileInView={enabled ? { opacity: 1, x: 0 } : undefined}
              viewport={VIEWPORT}
              transition={{ duration: 0.35, ease: EASE_OUT, delay: index * 0.06 }}
            >
              <span className="workspace-commitline__node" aria-hidden="true">
                <GitCommitHorizontal />
              </span>
              <a href={repo.htmlUrl} target="_blank" rel="noreferrer">
                {repo.name}
              </a>
              {repo.language && (
                <span className="workspace-commitline__lang">
                  <i style={{ background: getLanguageColor(repo.language) }} aria-hidden="true" />
                  {repo.language}
                </span>
              )}
              <time dateTime={repo.pushedAt}>{formatRelativeDate(repo.pushedAt)}</time>
            </motion.li>
          ))}
        </ol>
        <p className="workspace-readme__note">
          On GitHub since {memberSince} · counts reflect repositories created or pushed in each month.
        </p>
      </div>
    </section>
  );
}
