import { motion } from "framer-motion";
import { getLanguageColor } from "@/lib/github";
import { useMotionEnabled } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface GitHubBadgeProps {
  /** Left-hand grey segment, e.g. "made with". */
  label?: string;
  /** Right-hand coloured segment. */
  value: string;
  emoji?: string;
  /** Explicit accent; defaults to the linguist colour for `value`. */
  color?: string;
  className?: string;
  href?: string;
}

/**
 * A shields.io-style badge rendered natively — same two-tone silhouette as
 * the badges on the GitHub profile README, but themeable and animatable.
 */
export default function GitHubBadge({
  label,
  value,
  emoji,
  color,
  className,
  href,
}: GitHubBadgeProps) {
  const accent = color ?? getLanguageColor(value);
  const enabled = useMotionEnabled();

  const content = (
    <>
      {label && <span className="gh-badge__label">{label}</span>}
      <span className="gh-badge__value" style={{ "--badge-accent": accent } as React.CSSProperties}>
        {emoji && (
          <span className="gh-badge__emoji" aria-hidden="true">
            {emoji}
          </span>
        )}
        {value}
      </span>
    </>
  );

  const classes = cn("gh-badge", !label && "gh-badge--solo", className);

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
        whileHover={enabled ? { y: -2 } : undefined}
        transition={{ duration: 0.18 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.span className={classes} whileHover={enabled ? { y: -2 } : undefined} transition={{ duration: 0.18 }}>
      {content}
    </motion.span>
  );
}
