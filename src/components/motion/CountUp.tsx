import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMotionEnabled } from "@/lib/motion";

interface CountUpProps {
  value: number;
  duration?: number;
  className?: string;
  /** Rendered after the number, e.g. "+" or "k". */
  suffix?: string;
}

/**
 * Counts from zero to `value` the first time it scrolls into view. Later
 * value changes (live GitHub data replacing the snapshot) are applied
 * directly, so the number never replays its intro mid-visit.
 */
export default function CountUp({ value, duration = 1.1, className, suffix }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const enabled = useMotionEnabled();
  const hasCounted = useRef(false);
  const [display, setDisplay] = useState(() => (enabled ? 0 : value));

  useEffect(() => {
    if (!enabled || hasCounted.current) {
      setDisplay(value);
      return;
    }

    if (!inView) return;

    hasCounted.current = true;
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [duration, enabled, inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
