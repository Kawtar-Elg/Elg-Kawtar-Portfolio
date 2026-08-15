import { motion } from "framer-motion";
import { EASE_OUT, useMotionEnabled, VIEWPORT } from "@/lib/motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
  id?: string;
}

/**
 * Reveals a heading word by word. The full string stays in the DOM as one
 * accessible label so screen readers never hear it split apart.
 */
export default function TextReveal({ text, className, delay = 0, as = "h2", id }: TextRevealProps) {
  const enabled = useMotionEnabled();
  const Tag = as;

  if (!enabled) {
    return (
      <Tag className={className} id={id}>
        {text}
      </Tag>
    );
  }

  const words = text.split(" ");

  return (
    <Tag className={className} id={id} aria-label={text}>
      <span aria-hidden="true">
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className="text-reveal__word"
            initial={{ opacity: 0, y: "0.5em" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.45, ease: EASE_OUT, delay: delay + index * 0.05 }}
          >
            {word}
            {index < words.length - 1 ? " " : ""}
          </motion.span>
        ))}
      </span>
    </Tag>
  );
}
