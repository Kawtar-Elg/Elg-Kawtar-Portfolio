import { cn } from "@/lib/utils";

interface TechBadgeProps {
  tech: string;
  className?: string;
}

const TechBadge = ({ tech, className }: TechBadgeProps) => {
  return (
    <span className={cn("tech-badge", className)}>
      {tech}
    </span>
  );
};

export default TechBadge;
