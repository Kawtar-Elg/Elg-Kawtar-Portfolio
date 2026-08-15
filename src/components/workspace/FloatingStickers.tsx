import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useMotionEnabled } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface Sticker {
  emoji: string;
  /** Percentage offsets inside the host element. */
  top: string;
  left: string;
  delay?: number;
  scale?: number;
}

const DEFAULT_STICKERS: Sticker[] = [
  { emoji: "☕", top: "6%", left: "4%", delay: 0 },
  { emoji: "🤖", top: "68%", left: "2%", delay: 0.6, scale: 0.85 },
  { emoji: "✨", top: "18%", left: "92%", delay: 1.1, scale: 0.8 },
  { emoji: "🚀", top: "78%", left: "88%", delay: 0.3 },
  { emoji: "🌚", top: "44%", left: "96%", delay: 1.6, scale: 0.75 },
];

/**
 * Purely decorative drifting emoji. Skipped on mobile and under reduced
 * motion, and always hidden from assistive technology.
 */
export default function FloatingStickers({
  stickers = DEFAULT_STICKERS,
  className,
}: {
  stickers?: Sticker[];
  className?: string;
}) {
  const isMobile = useIsMobile();
  const enabled = useMotionEnabled();

  if (!enabled || isMobile) return null;

  return (
    <div className={cn("workspace-stickers", className)} aria-hidden="true">
      {stickers.map((sticker) => (
        <motion.span
          key={sticker.emoji}
          className="workspace-sticker"
          style={{ top: sticker.top, left: sticker.left, fontSize: `${(sticker.scale ?? 1) * 20}px` }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 0.75, 0.75], scale: 1, y: [0, -9, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: sticker.delay ?? 0 },
            scale: { duration: 0.5, delay: sticker.delay ?? 0 },
            y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: sticker.delay ?? 0 },
          }}
        >
          {sticker.emoji}
        </motion.span>
      ))}
    </div>
  );
}
