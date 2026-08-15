import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Figma,
  FileText,
  GitCommitHorizontal,
  Palette,
  PenTool,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import CountUp from "@/components/motion/CountUp";
import Magnetic from "@/components/motion/Magnetic";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import ExperienceSwitcher from "@/components/experience/ExperienceSwitcher";
import CollaborationForm from "@/components/workspace/CollaborationForm";
import FloatingStickers from "@/components/workspace/FloatingStickers";
import GitHubBadge from "@/components/workspace/GitHubBadge";
import TerminalCard, { type TerminalCommand } from "@/components/workspace/TerminalCard";
import WorkspaceShell, {
  WorkspaceActionButton,
  WorkspaceHeader,
} from "@/components/workspace/WorkspaceShell";
import WorkspaceTabs from "@/components/workspace/WorkspaceTabs";
import { useExperienceMode } from "@/context/ExperienceModeContext";
import { designProcess, designProjects, type DesignProject } from "@/data/design-projects";
import { LINKEDIN_URL } from "@/lib/github";
import { useMotionEnabled } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Tokens this portfolio's own design system is built from. */
const paletteTokens = [
  { name: "canvas", value: "#000000" },
  { name: "surface", value: "#161b22" },
  { name: "border", value: "#30363d" },
  { name: "ink", value: "#f0f6fc" },
  { name: "build", value: "#2ea043" },
  { name: "design", value: "#f778ba" },
  { name: "accent", value: "#7c7cff" },
  { name: "alert", value: "#f85149" },
];

const designFacts = [
  { emoji: "🎨", label: "designs in", value: "Figma" },
  { emoji: "📱", label: "focus", value: "Mobile-first interfaces" },
  { emoji: "🧩", label: "builds", value: "Design systems" },
  { emoji: "⚡", label: "ships", value: "Design → Code" },
];

function DesignReadme() {
  const enabled = useMotionEnabled();
  const platforms = new Set(designProjects.map((project) => project.platform));
  const tools = new Set(designProjects.flatMap((project) => project.tools));
  const caseStudies = designProjects.filter((project) => project.caseStudy).length;
  const screens = designProjects.reduce((sum, project) => sum + project.screenshots.length, 0);

  const commands: TerminalCommand[] = useMemo(
    () => [
      {
        id: "whoami",
        command: "whoami --design",
        output: [
          { text: "Kawtar El Gaddi — UI/UX Designer", tone: "ok" },
          { text: "designs interfaces, then builds them", tone: "plain" },
          { text: "🎨 Figma → 📱 Kotlin / Flutter", tone: "muted" },
        ],
      },
      {
        id: "ls",
        command: "ls design/",
        output: designProjects.map((project) => ({
          text: `${project.id}/`,
          tone: "accent" as const,
        })),
      },
      {
        id: "log",
        command: "git log --oneline design/",
        output: designProcess.map((step) => ({
          text: `${step.number}  ${step.title.toLowerCase()}`,
          tone: "plain" as const,
        })),
      },
    ],
    []
  );

  return (
    <section id="readme" className="workspace-panel workspace-readme" aria-labelledby="design-readme-title">
      <div className="workspace-filebar">
        <div className="workspace-filebar__label">
          <FileText aria-hidden="true" /> README.md
        </div>
        <span className="workspace-filebar__meta">kawtar-elg/ui-ux-repository</span>
        <span className="workspace-filebar__meta workspace-filebar__live">
          <Palette aria-hidden="true" /> design workspace
        </span>
      </div>

      <div className="workspace-readme__body">
        <div className="workspace-readme__identity">
          <FloatingStickers
            stickers={[
              { emoji: "🎨", top: "6%", left: "4%" },
              { emoji: "✨", top: "20%", left: "92%", delay: 0.9, scale: 0.8 },
              { emoji: "📱", top: "72%", left: "3%", delay: 0.5, scale: 0.85 },
              { emoji: "🧩", top: "80%", left: "90%", delay: 1.3, scale: 0.8 },
            ]}
          />

          <p className="workspace-code-label"># design.readme</p>
          <TextReveal
            as="h2"
            id="design-readme-title"
            text="🎨 Designing what I build"
            className="workspace-readme__title"
          />

          <Reveal delay={0.1} y={12}>
            <p className="workspace-readme__role">UI/UX Designer · Mobile Application Developer</p>
            <p className="workspace-readme__bio">
              Designing digital experiences that feel as good as they work.
            </p>
            <p className="workspace-lede">
              I craft thoughtful interfaces in Figma — flows, design systems, and polished screens — then bring
              them to life in code. Every design decision is grounded in what can actually be built.
            </p>
          </Reveal>

          <StaggerGroup className="workspace-topic-row" aria-label="Design topics">
            {["ui-design", "ux-research", "design-systems", "prototyping", "mobile-first"].map((topic) => (
              <StaggerItem key={topic} className="workspace-topic">
                {topic}
              </StaggerItem>
            ))}
          </StaggerGroup>

          <StaggerGroup className="workspace-readme__badges" stagger={0.05} aria-label="Design badges">
            <StaggerItem>
              <GitHubBadge label="tool" value="Figma" emoji="🎨" color="#f24e1e" />
            </StaggerItem>
            <StaggerItem>
              <GitHubBadge label="type" value="Design" emoji="🧩" color="#f778ba" />
            </StaggerItem>
            <StaggerItem>
              <GitHubBadge label="handoff" value="Design → Code" emoji="⚡" color="#7c7cff" />
            </StaggerItem>
          </StaggerGroup>

          <StaggerGroup className="workspace-readme__actions" stagger={0.06}>
            <StaggerItem>
              <Magnetic>
                <a className="workspace-button" href="#design-work">
                  <Figma aria-hidden="true" /> Explore the work
                </a>
              </Magnetic>
            </StaggerItem>
            <StaggerItem>
              <Magnetic>
                <a className="workspace-button workspace-button--ghost" href="#design-to-code">
                  <Sparkles aria-hidden="true" /> From Figma to Code
                </a>
              </Magnetic>
            </StaggerItem>
            <StaggerItem>
              <Magnetic>
                <a
                  className="workspace-button workspace-button--ghost"
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArrowUpRight aria-hidden="true" /> LinkedIn
                </a>
              </Magnetic>
            </StaggerItem>
          </StaggerGroup>

          <StaggerGroup className="workspace-readme__facts" stagger={0.07} aria-label="Design highlights">
            {designFacts.map((fact) => (
              <StaggerItem key={fact.label} className="workspace-readme__fact">
                <span className="workspace-readme__fact-emoji" aria-hidden="true">
                  {fact.emoji}
                </span>
                <span className="workspace-readme__fact-label">{fact.label}</span>
                <span className="workspace-readme__fact-value">{fact.value}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <div className="workspace-readme__aside">
          <Reveal y={14} className="workspace-readme__stats" aria-label="Design statistics">
            {[
              { label: "design projects", value: designProjects.length, emoji: "🎨" },
              { label: "case studies", value: caseStudies, emoji: "📄" },
              { label: "screens", value: screens, emoji: "📱" },
              { label: "platforms", value: platforms.size, emoji: "🧩" },
            ].map((stat) => (
              <div key={stat.label} className="workspace-stat">
                <span className="workspace-stat__emoji" aria-hidden="true">
                  {stat.emoji}
                </span>
                <CountUp className="workspace-stat__value" value={stat.value} />
                <span className="workspace-stat__label">{stat.label}</span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.08} y={14} className="designer-tree">
            <p className="designer-tree__label">🎨 ui-ux-repository/</p>
            <ul>
              {designProcess.map((step, index) => (
                <li key={step.number}>
                  <span className="designer-tree__branch" aria-hidden="true">
                    {index === designProcess.length - 1 ? "└──" : "├──"}
                  </span>
                  <span className="designer-tree__name">
                    {step.number}_{step.title.toLowerCase()}
                  </span>
                </li>
              ))}
            </ul>
            <p className="workspace-readme__note">
              {tools.size === 1 ? "Designed entirely in" : "Designed with"} {[...tools].join(", ")}.
            </p>
          </Reveal>

          <Reveal delay={0.14} y={14}>
            <TerminalCard commands={commands} title="kawtar@design: ~" />
          </Reveal>
        </div>
      </div>

      <div className="workspace-pipeline" aria-label="Design pipeline">
        <span className="workspace-code-label">pipeline</span>
        {designProcess.map((step, index) => (
          <motion.span
            key={step.number}
            className={
              index === designProcess.length - 1
                ? "workspace-pipeline__step workspace-pipeline__step--active"
                : "workspace-pipeline__step"
            }
            initial={enabled ? { opacity: 0, y: 6 } : undefined}
            whileInView={enabled ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {step.title}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

function DesignProjectCard({ project, index }: { project: DesignProject; index: number }) {
  const [activeScreen, setActiveScreen] = useState(0);
  const enabled = useMotionEnabled();

  return (
    <motion.article
      className="design-project"
      initial={enabled ? { opacity: 0, y: 22 } : undefined}
      whileInView={enabled ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.06 }}
    >
      <div className="design-project__content">
        <div className="design-project__repoline">
          <span className="workspace-repo-glyph" aria-hidden="true">
            <Figma />
          </span>
          <div>
            <span className="design-project__path">{project.id}</span>
            <div className="workspace-repository-meta">
              <span className="workspace-language-dot" style={{ background: "#f24e1e" }} /> Figma ·{" "}
              {project.platform}
            </div>
          </div>
          <span className="workspace-repo-visibility">Public</span>
        </div>

        <p className="workspace-repository-tagline">{project.tagline}</p>
        <p className="workspace-repository-description">{project.description}</p>

        <div className="workspace-topic-row">
          {project.tools.map((tool) => (
            <span key={tool} className="workspace-topic">
              {tool}
            </span>
          ))}
          <span className="workspace-topic">{project.role}</span>
          <span className="workspace-topic">
            {project.screenshots.length} {project.screenshots.length === 1 ? "screen" : "screens"}
          </span>
        </div>

        <div className="workspace-repository-footer">
          {project.caseStudy && (
            <a
              href={`#case-${project.id}`}
              className="workspace-repository-action workspace-repository-action--primary"
            >
              Open case study <ArrowUpRight aria-hidden="true" />
            </a>
          )}
          <span className="workspace-repository-action workspace-repository-action--static">
            <Figma aria-hidden="true" /> {project.platform}
          </span>
        </div>
      </div>

      <div className="design-project__media">
        <div className="design-project__frame">
          <div className="design-project__frame-bar">
            <span className="design-project__frame-dot" />
            <span className="design-project__frame-dot" />
            <span className="design-project__frame-dot" />
            <span className="design-project__frame-title">{project.id}.fig</span>
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
                  loading="lazy"
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
                  className={cn(
                    "design-project__thumb",
                    activeScreen === screenIndex && "design-project__thumb--active"
                  )}
                  onClick={() => setActiveScreen(screenIndex)}
                >
                  <img src={screenshot} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function SelectedWork() {
  return (
    <section id="design-work" className="workspace-section" aria-labelledby="design-work-title">
      <div className="workspace-section-heading">
        <div>
          <p className="workspace-code-label">/design-repositories</p>
          <h2 id="design-work-title">🎨 Design repositories</h2>
          <p>Interfaces and experiences designed in Figma — from mobile apps to web platforms.</p>
        </div>
        <span className="workspace-section-meta">{designProjects.length} projects</span>
      </div>
      <div className="workspace-pinned-grid">
        {designProjects.map((project, index) => (
          <Reveal
            key={project.id}
            delay={index * 0.05}
            className={index < 2 ? "workspace-pinned-grid__wide" : undefined}
          >
            <DesignProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CaseStudy({ project, index }: { project: DesignProject; index: number }) {
  const enabled = useMotionEnabled();
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
      className="workspace-panel designer-case"
      id={`case-${project.id}`}
      initial={enabled ? { opacity: 0, y: 22 } : undefined}
      whileInView={enabled ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45 }}
    >
      <div className="workspace-filebar">
        <div className="workspace-filebar__label">
          <FileText aria-hidden="true" /> {project.id}/README.md
        </div>
        <span className="workspace-filebar__meta">case study {String(index + 1).padStart(2, "0")}</span>
      </div>

      <div className="designer-case__body">
        <div className="designer-case__header">
          <h3 className="designer-case__title">{project.title}</h3>
          <p className="designer-case__tagline">{project.tagline}</p>
        </div>

        <div className="designer-case__steps">
          {steps.map((step, stepIndex) => (
            <div key={step.label} className="designer-case__step">
              <span className="designer-case__step-number">{String(stepIndex + 1).padStart(2, "0")}</span>
              <div>
                <h4 className="designer-case__step-title">## {step.label}</h4>
                <p className="designer-case__step-content">{step.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="designer-case__gallery">
          {project.screenshots.map((screenshot, screenIndex) => (
            <div key={screenshot} className="designer-case__image">
              <img
                src={screenshot}
                alt={`${project.title} case study screen ${screenIndex + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function CaseStudies() {
  return (
    <section id="design-case-studies" className="workspace-section" aria-labelledby="design-cases-title">
      <div className="workspace-section-heading">
        <div>
          <p className="workspace-code-label">/case-studies</p>
          <h2 id="design-cases-title">📄 Case studies</h2>
          <p>Each project tells a story — from the problem to the final interface.</p>
        </div>
      </div>
      <div className="designer-case-list">
        {designProjects.map((project, index) => (
          <CaseStudy key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function DesignSystemPanel() {
  return (
    <section
      id="design-system"
      className="workspace-panel workspace-stack-panel"
      aria-labelledby="design-system-title"
    >
      <div className="workspace-section-heading">
        <div>
          <p className="workspace-code-label">/design-system</p>
          <h2 id="design-system-title">🧩 The system behind the screens</h2>
          <p>The tokens and building blocks this portfolio itself is built from.</p>
        </div>
        <span className="workspace-section-meta">tokens / active</span>
      </div>

      <div className="designer-system-grid">
        <Reveal className="designer-system-card" y={14}>
          <p className="workspace-code-label">## color_tokens</p>
          <StaggerGroup className="designer-palette" stagger={0.05}>
            {paletteTokens.map((token) => (
              <StaggerItem key={token.name} className="designer-swatch">
                <span
                  className="designer-swatch__chip"
                  style={{ background: token.value }}
                  aria-hidden="true"
                />
                <strong>{token.name}</strong>
                <code>{token.value}</code>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>

        <Reveal className="designer-system-card" y={14} delay={0.08}>
          <p className="workspace-code-label">## type_scale</p>
          <div className="designer-type">
            <p className="designer-type__display">Display · Inter 600</p>
            <p className="designer-type__heading">Heading · Inter 600</p>
            <p className="designer-type__body">
              Body · Inter 400 — readable line lengths, generous leading, clear hierarchy.
            </p>
            <p className="designer-type__mono">mono · JetBrains Mono 500 — labels, paths, code</p>
          </div>
        </Reveal>

        <Reveal className="designer-system-card" y={14} delay={0.14}>
          <p className="workspace-code-label">## components</p>
          <div className="workspace-topic-row">
            {["Buttons", "Cards", "Badges", "Tabs", "Forms", "Modals", "Device mockups", "Galleries"].map(
              (item) => (
                <span key={item} className="workspace-topic workspace-topic--skill">
                  {item}
                </span>
              )
            )}
          </div>
          <div className="designer-component-preview">
            <span className="workspace-button">Primary</span>
            <span className="workspace-button workspace-button--ghost">Ghost</span>
            <GitHubBadge label="state" value="Ready" emoji="✅" color="#2ea043" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DesignToCode() {
  return (
    <section
      id="design-to-code"
      className="workspace-panel workspace-capability-panel"
      aria-labelledby="design-to-code-title"
    >
      <div className="workspace-section-heading">
        <div>
          <p className="workspace-code-label">/signature</p>
          <h2 id="design-to-code-title">⚡ From Figma to Code</h2>
          <p>I don&apos;t just design interfaces — I build them.</p>
        </div>
      </div>

      <StaggerGroup className="designer-to-code__flow" stagger={0.1}>
        <StaggerItem className="designer-to-code__step">
          <span className="designer-to-code__icon">
            <Figma aria-hidden="true" />
          </span>
          <h3>Figma Design</h3>
          <p>Interfaces, design systems, and prototypes crafted with precision.</p>
        </StaggerItem>
        <StaggerItem className="designer-to-code__arrow" aria-hidden="true">
          →
        </StaggerItem>
        <StaggerItem className="designer-to-code__step">
          <span className="designer-to-code__icon">
            <PenTool aria-hidden="true" />
          </span>
          <h3>Implementation</h3>
          <p>Pixel-perfect translation into clean, maintainable code.</p>
        </StaggerItem>
        <StaggerItem className="designer-to-code__arrow" aria-hidden="true">
          →
        </StaggerItem>
        <StaggerItem className="designer-to-code__step">
          <span className="designer-to-code__icon">
            <Smartphone aria-hidden="true" />
          </span>
          <h3>Real Product</h3>
          <p>Shipped applications that work beautifully on real devices.</p>
        </StaggerItem>
      </StaggerGroup>

      <Reveal className="designer-to-code__note" y={12}>
        <Sparkles aria-hidden="true" />
        <p>
          Several of the designs in this portfolio have been built into working mobile applications —
          including Waterly, Hamam Management, and the Robotics Club website. The same person who designed the
          interface wrote the code that brought it to life.
        </p>
      </Reveal>
    </section>
  );
}

function ProcessTimeline() {
  const enabled = useMotionEnabled();

  return (
    <div className="workspace-commitline designer-commitline">
      <ol>
        {designProcess.map((step, index) => (
          <motion.li
            key={step.number}
            initial={enabled ? { opacity: 0, x: -8 } : undefined}
            whileInView={enabled ? { opacity: 1, x: 0 } : undefined}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
          >
            <span className="workspace-commitline__node" aria-hidden="true">
              <GitCommitHorizontal />
            </span>
            <span className="designer-commit">
              <span className="designer-commit__id">commit {step.number}</span>
              <strong>{step.title}</strong>
              <span className="designer-commit__desc">{step.description}</span>
            </span>
            <span className="designer-commit__ref">
              {index === designProcess.length - 1 ? "HEAD" : `~${designProcess.length - 1 - index}`}
            </span>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

function ProcessSection() {
  return (
    <section
      id="design-process"
      className="workspace-panel workspace-activity-panel"
      aria-labelledby="design-process-title"
    >
      <div className="workspace-section-heading">
        <div>
          <p className="workspace-code-label">/process</p>
          <h2 id="design-process-title">🔁 Design commits</h2>
          <p>A structured approach that moves from understanding to shipping.</p>
        </div>
        <span className="workspace-section-meta">{designProcess.length} steps</span>
      </div>

      <ProcessTimeline />
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="design-about"
      className="workspace-panel workspace-stack-panel"
      aria-labelledby="design-about-title"
    >
      <div className="workspace-section-heading">
        <div>
          <p className="workspace-code-label">/about</p>
          <h2 id="design-about-title">👩‍💻 About</h2>
          <p>Design and engineering, from the same person.</p>
        </div>
      </div>

      <Reveal y={12} className="designer-about__content">
        <p className="workspace-lede">
          I&apos;m Kawtar El Gaddi — a UI/UX Designer and Mobile Developer who believes great products are born
          when design and engineering work as one.
        </p>
        <p className="designer-about__body">
          I design interfaces in Figma with a focus on clarity, hierarchy, and emotion. Then I build them with
          Kotlin, Jetpack Compose, Flutter, and modern web technologies. This dual perspective means every
          design decision I make is grounded in what can actually be built — and every line of code I write
          respects the design it brings to life.
        </p>
      </Reveal>

      <div className="workspace-stack-table">
        {[
          { title: "🎨 design", items: ["UI Design", "UX Research", "Design Systems", "Prototyping", "Wireframing"] },
          { title: "🛠️ build", items: ["Kotlin", "Jetpack Compose", "Flutter", "React", "Firebase"] },
          { title: "🧰 tools", items: ["Figma", "Adobe XD", "Android Studio", "VS Code", "Git"] },
        ].map((group, index) => (
          <Reveal key={group.title} className="workspace-stack-row" y={10} delay={index * 0.05}>
            <span className="workspace-stack-domain">{group.title}</span>
            <div className="workspace-topic-row">
              {group.items.map((item) => (
                <span key={item} className="workspace-topic workspace-topic--skill">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
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
    <WorkspaceShell variant="designer">
      <WorkspaceHeader
        variant="designer"
        path="README.md"
        action={
          <WorkspaceActionButton asChild>
            <a href="#collaboration">Open a collaboration</a>
          </WorkspaceActionButton>
        }
      />
      <WorkspaceTabs variant="designer" />
      <ExperienceSwitcher />
      <div className="workspace-overview-stack">
        <DesignReadme />
        <SelectedWork />
        <CaseStudies />
        <DesignSystemPanel />
        <DesignToCode />
        <ProcessSection />
        <AboutSection />
        <CollaborationForm />
      </div>
    </WorkspaceShell>
  );
}
