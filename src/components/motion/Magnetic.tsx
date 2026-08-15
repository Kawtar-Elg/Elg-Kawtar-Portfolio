import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useMotionEnabled } from "@/lib/motion";

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  /** How far the element follows the pointer (0–1). */
  strength?: number;
}

/**
 * Pointer-following wrapper for buttons and links. Uses motion values so the
 * pull never triggers a React re-render, and is inert on touch devices.
 */
export default function Magnetic({ children, className, strength = 0.22 }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 300, damping: 22, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 300, damping: 22, mass: 0.5 });
  const isMobile = useIsMobile();
  const enabled = useMotionEnabled() && !isMobile;

  if (!enabled) {
    return <span className={className}>{children}</span>;
  }

  const handleMove = (event: React.MouseEvent<HTMLSpanElement>) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    rawX.set((event.clientX - (bounds.left + bounds.width / 2)) * strength);
    rawY.set((event.clientY - (bounds.top + bounds.height / 2)) * strength);
  };

  const reset = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ x, y, display: "inline-flex" }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.span>
  );
}
