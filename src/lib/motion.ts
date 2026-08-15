import { useReducedMotion } from "framer-motion";
import type { Transition, Variants } from "framer-motion";

/** Shared easing — a soft "GitHub UI" out-expo curve. */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const SPRING: Transition = { type: "spring", stiffness: 320, damping: 30, mass: 0.6 };

/** True when the visitor has not asked for reduced motion. */
export const useMotionEnabled = () => !useReducedMotion();

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

export const staggerContainer = (stagger = 0.06, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: EASE_OUT } },
};

/** Standard once-only in-view trigger used across the workspace. */
export const VIEWPORT = { once: true, amount: 0.2 } as const;
