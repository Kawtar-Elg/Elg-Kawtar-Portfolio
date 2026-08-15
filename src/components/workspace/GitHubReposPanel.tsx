import { motion } from "framer-motion";
import { ArrowUpRight, GitFork, Radio, Star } from "lucide-react";
import { useMemo } from "react";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { useGitHubRepos } from "@/hooks/use-github";
import { formatRelativeDate, getLanguageColor, GITHUB_URL } from "@/lib/github";
import { useMotionEnabled } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface GitHubReposPanelProps {
  /** How many repositories to list. */
  limit?: number;
}

/**
 * The raw public repository list, straight from the GitHub API — the
 * counterpart to the curated case studies above it.
 */
export default function GitHubReposPanel({ limit = 8 }: GitHubReposPanelProps) {
  const { data: repos, isLive } = useGitHubRepos();
  const enabled = useMotionEnabled();

  const visible = useMemo(() => repos.filter((repo) => !repo.fork).slice(0, limit), [limit, repos]);

  if (!visible.length) return null;

  return (
    <section id="github" className="workspace-section" aria-labelledby="github-repos-title">
      <div className="workspace-section-heading">
        <div>
          <p className="workspace-code-label">/github</p>
          <h2 id="github-repos-title">📦 Straight from GitHub</h2>
          <p>The most recently pushed public repositories on @Kawtar-Elg — real language, stars and last push.</p>
        </div>
        <span className={cn("workspace-live-pill", isLive && "workspace-live-pill--on")}>
          <Radio aria-hidden="true" /> {isLive ? "live" : "snapshot"}
        </span>
      </div>

      <StaggerGroup className="workspace-gh-grid" stagger={0.05}>
        {visible.map((repo) => (
          <StaggerItem key={repo.name}>
            <motion.a
              className="workspace-gh-repo"
              href={repo.htmlUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={enabled ? { y: -3 } : undefined}
              transition={{ duration: 0.2 }}
            >
              <span className="workspace-gh-repo__head">
                <span className="workspace-gh-repo__name">
                  <span aria-hidden="true">📁</span> {repo.name}
                </span>
                <ArrowUpRight className="workspace-gh-repo__arrow" aria-hidden="true" />
              </span>

              {repo.description && <p className="workspace-gh-repo__desc">{repo.description}</p>}

              <span className="workspace-gh-repo__meta">
                {repo.language && (
                  <span className="workspace-gh-repo__lang">
                    <i style={{ background: getLanguageColor(repo.language) }} aria-hidden="true" />
                    {repo.language}
                  </span>
                )}
                {repo.stars > 0 && (
                  <span>
                    <Star aria-hidden="true" /> {repo.stars}
                  </span>
                )}
                {repo.forks > 0 && (
                  <span>
                    <GitFork aria-hidden="true" /> {repo.forks}
                  </span>
                )}
                <span className="workspace-gh-repo__date">{formatRelativeDate(repo.pushedAt)}</span>
              </span>
            </motion.a>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <a className="workspace-inline-link workspace-gh-grid__all" href={`${GITHUB_URL}?tab=repositories`} target="_blank" rel="noreferrer">
        View all repositories on GitHub <ArrowUpRight aria-hidden="true" />
      </a>
    </section>
  );
}
