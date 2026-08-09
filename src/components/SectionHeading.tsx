import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

const SectionHeading = ({
  number,
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12 md:mb-20",
        align === "center" ? "text-center mx-auto" : "text-left",
        className
      )}
    >
      {number && (
        <span className="section-label block mb-4">
          — {number}
        </span>
      )}
      <h2 className="headline-xl text-foreground mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="body-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
