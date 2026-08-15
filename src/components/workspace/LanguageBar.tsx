import { motion } from "framer-motion";
import type { LanguageShare } from "@/lib/github";
import { EASE_OUT, useMotionEnabled, VIEWPORT } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface LanguageBarProps {
  shares: LanguageShare[];
  className?: string;
  /** Number of legend entries to show; the rest are folded into "other". */
  limit?: number;
}

/** GitHub's repository language bar, driven by the real public repo mix. */
export default function LanguageBar({ shares, className, limit = 5 }: LanguageBarProps) {
  const enabled = useMotionEnabled();
  if (!shares.length) return null;

  const legend = shares.slice(0, limit);
  const rest = shares.slice(limit);
  const restShare = rest.reduce((sum, item) => sum + item.share, 0);

  const description = shares
    .map((share) => `${share.name} ${share.share.toFixed(1)} percent`)
    .join(", ");

  return (
    <div className={cn("workspace-langbar", className)}>
      <motion.div
        className="workspace-langbar__track"
        role="img"
        aria-label={`Language distribution across public repositories: ${description}`}
        initial={enabled ? { scaleX: 0 } : undefined}
        whileInView={enabled ? { scaleX: 1 } : undefined}
        viewport={VIEWPORT}
        transition={{ duration: 0.7, ease: EASE_OUT }}
        style={{ transformOrigin: "left" }}
      >
        {shares.map((share) => (
          <span
            key={share.name}
            className="workspace-langbar__segment"
            style={{ width: `${share.share}%`, background: share.color }}
          />
        ))}
      </motion.div>

      <ul className="workspace-langbar__legend">
        {legend.map((share, index) => (
          <motion.li
            key={share.name}
            initial={enabled ? { opacity: 0, y: 6 } : undefined}
            whileInView={enabled ? { opacity: 1, y: 0 } : undefined}
            viewport={VIEWPORT}
            transition={{ duration: 0.32, ease: EASE_OUT, delay: 0.25 + index * 0.05 }}
          >
            <span className="workspace-langbar__dot" style={{ background: share.color }} aria-hidden="true" />
            <strong>{share.name}</strong>
            <span>{share.share.toFixed(1)}%</span>
          </motion.li>
        ))}
        {restShare > 0 && (
          <li>
            <span className="workspace-langbar__dot" style={{ background: "#6e7681" }} aria-hidden="true" />
            <strong>other</strong>
            <span>{restShare.toFixed(1)}%</span>
          </li>
        )}
      </ul>
    </div>
  );
}
