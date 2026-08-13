import { motion } from "framer-motion";
import { Code2, PenTool } from "lucide-react";
import { useExperienceMode, type ExperienceMode } from "@/context/ExperienceModeContext";
import { cn } from "@/lib/utils";

interface ExperienceOption {
  mode: ExperienceMode;
  label: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const options: ExperienceOption[] = [
  {
    mode: "developer",
    label: "BUILD",
    title: "Mobile Developer",
    description: "Build apps, systems, and digital products.",
    icon: <Code2 aria-hidden="true" />,
  },
  {
    mode: "designer",
    label: "DESIGN",
    title: "UI/UX Designer",
    description: "Design interfaces, experiences, and visual systems.",
    icon: <PenTool aria-hidden="true" />,
  },
];

export default function ExperienceSwitcher() {
  const { mode, setMode } = useExperienceMode();

  return (
    <section className="experience-switcher" aria-label="Choose your experience">
      <div className="experience-switcher__inner">
        <p className="experience-switcher__eyebrow">Choose your experience</p>
        <div className="experience-switcher__options" role="tablist" aria-label="Experience selector">
          {options.map((option) => {
            const isActive = mode === option.mode;
            return (
              <button
                key={option.mode}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`${option.title} experience`}
                className={cn("experience-switcher__option", isActive && "experience-switcher__option--active")}
                onClick={() => setMode(option.mode)}
              >
                {isActive && (
                  <motion.span
                    layoutId="experience-switcher-active"
                    className="experience-switcher__active-bg"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="experience-switcher__icon">{option.icon}</span>
                <span className="experience-switcher__copy">
                  <span className="experience-switcher__label">{option.label}</span>
                  <span className="experience-switcher__title">{option.title}</span>
                  <span className="experience-switcher__description">{option.description}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}