import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Figma, PenTool, Smartphone, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import ExperienceSwitcher from "@/components/experience/ExperienceSwitcher";
import { useExperienceMode } from "@/context/ExperienceModeContext";
import { designProcess, designProjects, type DesignProject } from "@/data/design-projects";
import { cn } from "@/lib/utils";

const designerNav = [
  { label: "Work", href: "#design-work" },
  { label: "Case Studies", href: "#design-case-studies" },
  { label: "Process", href: "#design-process" },
  { label: "Design → Code", href: "#design-to-code" },
  { label: "About", href: "#design-about" },
];

function DesignerHero() {
  return (
    <section className="designer-hero" id="design-hero">
      <div className="designer-hero__inner">
        <motion.p
          className="designer-hero__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          UI/UX Designer & Mobile Developer
        </motion.p>
        <motion.h1
          className="designer-hero__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Designing digital experiences that feel as good as they work.
        </motion.h1>
        <motion.p
          className="designer-hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I craft thoughtful interfaces and bring them to life in code — from the first wireframe to a shipped product.
        </motion.p>
        <motion.div
          className="designer-hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#design-work" className="designer-button designer-button--primary">
            Explore my work <ArrowDown aria-hidden="true" />
          </a>
          <a href="#design-to-code" className="designer-button designer-button--ghost">
            From Figma to Code <ArrowUpRight aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function DesignerNav() {
  return (
    <nav className="designer-nav" aria-label="Designer navigation">
      <div className="designer-nav__inner">
        <a href="#design-hero" className="designer-nav__brand">
          <span className="designer-nav__mark">K</span>
          <span>Kawtar El Gaddi</span>
        </a>
        <div className="designer-nav__links">
          {designerNav.map((item) => (
            <a key={item.href} href={item.href} className="designer-nav__link">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function DesignProjectCard({ project, index }: { project: DesignProject; index: number }) {
  const [activeScreen, setActiveScreen] = useState(0);
  const isEven = index % 2 === 0;

  return (
    <motion.article
      className={cn("design-project", isEven ? "design-project--even" : "design-project--odd")}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
    >
      <div className="design-project__media">
        <div className="design-project__frame">
          <div className="design-project__frame-bar">
            <span className="design-project__frame-dot" />
            <span className="design-project__frame-dot" />
            <span className="design-project__frame-dot" />
            <span className="design-project__frame-title">{project.title.toLowerCase()} / figma</span>
          </div>
          <div className="design-project__screens">
            {project.screenshots.map((screenshot, screenIndex) => (
              <div
                key={screenshot}
                className={cn(
                  "design-project__screen",
                  activeScreen === screenIndex && "design-project__screen--active"
                )}
              >
                <img
                  src={screenshot}
                  alt={`${project.title} design screen ${screenIndex + 1}`}
                  loading={screenIndex === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
          {project.screenshots.length > 1 && (
            <div className="design-project__thumbs" role="tablist" aria-label={`${project.title} screens`}>
              {project.screenshots.map((screenshot, screenIndex) => (
                <button
                  key={screenshot}
                  type="button"
                  role="tab"
                  aria-selected={activeScreen === screenIndex}
                  className={cn("design-project__thumb", activeScreen === screenIndex && "design-project__thumb--active")}
                  onClick={() => setActiveScreen(screenIndex)}
                >
                  <img src={screenshot} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="design-project__content">
        <p className="design-project__index">{String(index + 1).padStart(2, "0")}</p>
        <h3 className="design-project__title">{project.title}</h3>
        <p className="design-project__tagline">{project.tagline}</p>
        <p className="design-project__description">{project.description}</p>
        <div className="design-project__meta">
          <div className="design-project__meta-item">
            <span className="design-project__meta-label">Role</span>
            <span className="design-project__meta-value">{project.role}</span>
          </div>
          <div className="design-project__meta-item">
            <span className="design-project__meta-label">Platform</span>
            <span className="design-project__meta-value">{project.platform}</span>
          </div>
          <div className="design-project__meta-item">
            <span className="design-project__meta-label">Tools</span>
            <span className="design-project__meta-value">{project.tools.join(", ")}</span>
          </div>
        </div>
        {project.caseStudy && (
          <a href={`#case-${project.id}`} className="design-project__case-link">
            View case study <ArrowUpRight aria-hidden="true" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

function SelectedWork() {
  return (
    <section className="designer-section" id="design-work">
      <div className="designer-section__heading">
        <p className="designer-section__label">/ selected work</p>
        <h2 className="designer-section__title">Selected Work</h2>
        <p className="designer-section__intro">
          A selection of interfaces and experiences designed in Figma — from mobile apps to web platforms.
        </p>
      </div>
      <div className="design-project-list">
        {designProjects.map((project, index) => (
          <DesignProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function CaseStudy({ project, index }: { project: DesignProject; index: number }) {
  if (!project.caseStudy) return null;
  const steps = [
    { label: "Overview", content: project.caseStudy.overview },
    { label: "Problem", content: project.caseStudy.problem },
    { label: "UX Direction", content: project.caseStudy.uxDirection },
    { label: "Visual Direction", content: project.caseStudy.visualDirection },
    { label: "Outcome", content: project.caseStudy.outcome },
  ];

  return (
    <motion.article
      className="designer-case"
      id={`case-${project.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="designer-case__header">
        <span className="designer-case__number">{String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3 className="designer-case__title">{project.title}</h3>
          <p className="designer-case__tagline">{project.tagline}</p>
        </div>
      </div>
      <div className="designer-case__steps">
        {steps.map((step, stepIndex) => (
          <div key={step.label} className="designer-case__step">
            <span className="designer-case__step-number">{String(stepIndex + 1).padStart(2, "0")}</span>
            <div>
              <h4 className="designer-case__step-title">{step.label}</h4>
              <p className="designer-case__step-content">{step.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="designer-case__gallery">
        {project.screenshots.map((screenshot, screenIndex) => (
          <div key={screenshot} className="designer-case__image">
            <img src={screenshot} alt={`${project.title} case study screen ${screenIndex + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </motion.article>
  );
}

function CaseStudies() {
  return (
    <section className="designer-section" id="design-case-studies">
      <div className="designer-section__heading">
        <p className="designer-section__label">/ case studies</p>
        <h2 className="designer-section__title">Case Studies</h2>
        <p className="designer-section__intro">
          Each project tells a story — from the problem to the final interface.
        </p>
      </div>
      <div className="designer-case-list">
        {designProjects.map((project, index) => (
          <CaseStudy key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function DesignToCode() {
  return (
    <section className="designer-section designer-to-code" id="design-to-code">
      <div className="designer-section__heading">
        <p className="designer-section__label">/ signature</p>
        <h2 className="designer-section__title">From Figma to Code</h2>
        <p className="designer-section__intro">
          I don't just design interfaces — I build them. Every screen I design can become a real, working product.
        </p>
      </div>
      <div className="designer-to-code__flow">
        <div className="designer-to-code__step">
          <span className="designer-to-code__icon"><Figma aria-hidden="true" /></span>
          <h3>Figma Design</h3>
          <p>Interfaces, design systems, and prototypes crafted with precision.</p>
        </div>
        <div className="designer-to-code__arrow" aria-hidden="true">→</div>
        <div className="designer-to-code__step">
          <span className="designer-to-code__icon"><PenTool aria-hidden="true" /></span>
          <h3>Implementation</h3>
          <p>Pixel-perfect translation into clean, maintainable code.</p>
        </div>
        <div className="designer-to-code__arrow" aria-hidden="true">→</div>
        <div className="designer-to-code__step">
          <span className="designer-to-code__icon"><Smartphone aria-hidden="true" /></span>
          <h3>Real Product</h3>
          <p>Shipped applications that work beautifully on real devices.</p>
        </div>
      </div>
      <div className="designer-to-code__note">
        <Sparkles aria-hidden="true" />
        <p>
          Several of the designs in this portfolio have been built into working mobile applications — including
          Waterly, Hamam Management, and the Robotics Club website. The same person who designed the interface
          wrote the code that brought it to life.
        </p>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="designer-section" id="design-process">
      <div className="designer-section__heading">
        <p className="designer-section__label">/ process</p>
        <h2 className="designer-section__title">Design Process</h2>
        <p className="designer-section__intro">
          A structured approach that moves from understanding to shipping.
        </p>
      </div>
      <div className="designer-process">
        {designProcess.map((step) => (
          <motion.div
            key={step.number}
            className="designer-process__step"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
          >
            <span className="designer-process__number">{step.number}</span>
            <h3 className="designer-process__title">{step.title}</h3>
            <p className="designer-process__description">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="designer-section designer-about" id="design-about">
      <div className="designer-section__heading">
        <p className="designer-section__label">/ about</p>
        <h2 className="designer-section__title">About</h2>
      </div>
      <div className="designer-about__content">
        <p className="designer-about__lead">
          I'm Kawtar El Gaddi — a UI/UX Designer and Mobile Developer who believes great products are born
          when design and engineering work as one.
        </p>
        <p className="designer-about__body">
          I design interfaces in Figma with a focus on clarity, hierarchy, and emotion. Then I build them with
          Kotlin, Jetpack Compose, Flutter, and modern web technologies. This dual perspective means every design
          decision I make is grounded in what can actually be built — and every line of code I write respects the
          design it brings to life.
        </p>
        <div className="designer-about__skills">
          <div className="designer-about__skill-group">
            <h4>Design</h4>
            <span>UI Design</span>
            <span>UX Research</span>
            <span>Design Systems</span>
            <span>Prototyping</span>
            <span>Wireframing</span>
          </div>
          <div className="designer-about__skill-group">
            <h4>Build</h4>
            <span>Kotlin</span>
            <span>Jetpack Compose</span>
            <span>Flutter</span>
            <span>React</span>
            <span>Firebase</span>
          </div>
          <div className="designer-about__skill-group">
            <h4>Tools</h4>
            <span>Figma</span>
            <span>Adobe XD</span>
            <span>Android Studio</span>
            <span>VS Code</span>
            <span>Git</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DesignerExperience() {
  const { mode } = useExperienceMode();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(mode === "designer");
  }, [mode]);

  if (!isVisible) return null;

  return (
    <div className="designer-app">
      <DesignerNav />
      <main className="designer-main">
        <div className="designer-main__inner">
          <ExperienceSwitcher />
          <DesignerHero />
          <SelectedWork />
          <CaseStudies />
          <DesignToCode />
          <ProcessSection />
          <AboutSection />
          <footer className="designer-footer">
            <span>© Kawtar El Gaddi / designer workspace</span>
            <span>design → build → ship</span>
          </footer>
        </div>
      </main>
    </div>
  );
}