import { useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MotionStyle } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useMotionEnabled } from "@/lib/motion";

interface TiltOptions {
  /** Maximum rotation in degrees on each axis. */
  max?: number;
  /** Emit `--glow-x` / `--glow-y` custom properties tracking the pointer. */
  glow?: boolean;
}

export interface TiltProps {
  ref: React.RefObject<HTMLElement>;
  onMouseMove?: (event: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave?: () => void;
  style?: MotionStyle;
}

/**
 * Subtle pointer tilt for cards. The returned props spread straight onto a
 * `motion.*` element; tracking uses motion values so following the pointer
 * never re-renders. Inert on touch devices and under reduced motion.
 */
export function useTilt({ max = 5, glow = true }: TiltOptions = {}): {
  enabled: boolean;
  tiltProps: TiltProps;
} {
  const ref = useRef<HTMLElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 220, damping: 22 });
  const glowX = useTransform(px, (value) => `${value * 100}%`);
  const glowY = useTransform(py, (value) => `${value * 100}%`);

  const isMobile = useIsMobile();
  const enabled = useMotionEnabled() && !isMobile;

  if (!enabled) {
    return { enabled: false, tiltProps: { ref } };
  }

  const onMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    px.set((event.clientX - bounds.left) / bounds.width);
    py.set((event.clientY - bounds.top) / bounds.height);
  };

  const onMouseLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return {
    enabled: true,
    tiltProps: {
      ref,
      onMouseMove,
      onMouseLeave,
      style: {
        rotateX,
        rotateY,
        transformPerspective: 1000,
        ...(glow ? ({ "--glow-x": glowX, "--glow-y": glowY } as unknown as MotionStyle) : {}),
      },
    },
  };
}

export default useTilt;
