import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { EASE_OUT, staggerContainer, staggerItem, useMotionEnabled, VIEWPORT } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  /** Seconds to wait before the reveal starts. */
  delay?: number;
  /** Travel distance in px; use 0 for a pure fade. */
  y?: number;
  amount?: number;
};

/**
 * Scroll-triggered reveal. When the visitor prefers reduced motion the
 * animation props are dropped entirely, so the content simply renders.
 */
export function Reveal({ children, delay = 0, y = 18, amount = 0.2, ...props }: RevealProps) {
  const enabled = useMotionEnabled();

  const animation: HTMLMotionProps<"div"> = enabled
    ? {
        initial: { opacity: 0, y },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount },
        transition: { duration: 0.5, ease: EASE_OUT, delay },
      }
    : {};

  return (
    <motion.div {...animation} {...props}>
      {children}
    </motion.div>
  );
}

/** Parent that cascades its `StaggerItem` children into view. */
export function StaggerGroup({
  children,
  stagger = 0.06,
  delayChildren = 0,
  ...props
}: HTMLMotionProps<"div"> & { stagger?: number; delayChildren?: number }) {
  const enabled = useMotionEnabled();

  const animation: HTMLMotionProps<"div"> = enabled
    ? {
        variants: staggerContainer(stagger, delayChildren),
        initial: "hidden",
        whileInView: "visible",
        viewport: VIEWPORT,
      }
    : {};

  return (
    <motion.div {...animation} {...props}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, ...props }: HTMLMotionProps<"div">) {
  const enabled = useMotionEnabled();
  const animation: HTMLMotionProps<"div"> = enabled ? { variants: staggerItem } : {};

  return (
    <motion.div {...animation} {...props}>
      {children}
    </motion.div>
  );
}

export default Reveal;
