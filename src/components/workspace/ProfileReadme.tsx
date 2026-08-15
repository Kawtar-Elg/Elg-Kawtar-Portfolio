import { motion } from "framer-motion";
import { Download, FileText, Github, Linkedin, Mail, Radio, Star, Users } from "lucide-react";
import { useMemo, useState } from "react";
import kawtarProfile from "@/assets/kawtar-profile.jpeg";
import CountUp from "@/components/motion/CountUp";
import Magnetic from "@/components/motion/Magnetic";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import FloatingStickers from "@/components/workspace/FloatingStickers";
import GitHubBadge from "@/components/workspace/GitHubBadge";
import LanguageBar from "@/components/workspace/LanguageBar";
import TerminalCard, { type TerminalCommand } from "@/components/workspace/TerminalCard";
import { useGitHubProfile, useGitHubRepos } from "@/hooks/use-github";
import {
  CONTACT_EMAIL,
  GITHUB_URL,
  GITHUB_USERNAME,
  getLanguageShares,
  getTotalStars,
  LINKEDIN_URL,
  PROFILE_README_FACTS,
} from "@/lib/github";
import { useMotionEnabled } from "@/lib/motion";
import { processSteps } from "@/data/skills";

const DEVELOPER_TITLE = "Mobile Application Developer · UI/UX Designer";

export default function ProfileReadme() {
  const { data: profile, isLive: profileIsLive } = useGitHubProfile();
  const { data: repos } = useGitHubRepos();
  const [avatarFailed, setAvatarFailed] = useState(false);
  const enabled = useMotionEnabled();

  const languages = useMemo(() => getLanguageShares(repos), [repos]);
  const totalStars = useMemo(() => getTotalStars(repos), [repos]);

  const stats = [
    { key: "repositories", label: "repositories", value: profile.publicRepos, emoji: "📦" },
    { key: "stars", label: "stars earned", value: totalStars, emoji: "⭐" },
    { key: "followers", label: "followers", value: profile.followers, emoji: "🧑‍🤝‍🧑" },
    { key: "following", label: "following", value: profile.following, emoji: "🔭" },
  ];

  const commands: TerminalCommand[] = useMemo(
    () => [
      {
        id: "whoami",
        command: "whoami",
        output: [
          { text: `${GITHUB_USERNAME} — ${profile.name}`, tone: "ok" },
          { text: DEVELOPER_TITLE, tone: "plain" },
          { text: `📍 ${profile.location} 🌚`, tone: "muted" },
        ],
      },
      {
        id: "stack",
        command: "cat stack.json",
        output: [
          { text: "{", tone: "muted" },
          { text: `  "mobile": ["Kotlin", "Jetpack Compose", "Flutter"],`, tone: "accent" },
          { text: `  "backend": ["Firebase", "REST APIs", "Room"],`, tone: "accent" },
          { text: `  "ai": ["Gemini API", "ML Kit", "TensorFlow Lite"],`, tone: "accent" },
          { text: `  "design": ["Figma", "Design Systems"]`, tone: "accent" },
          { text: "}", tone: "muted" },
        ],
      },
      {
        id: "status",
        command: "git status",
        output: [
          { text: "On branch main", tone: "plain" },
          { text: "🚀 currently working on my own project", tone: "ok" },
          { text: "🧠 learning Swift", tone: "ok" },
          { text: "✅ open to collaborations", tone: "ok" },
        ],
      },
    ],
    [profile.location, profile.name]
  );

  return (
    <section id="readme" className="workspace-panel workspace-readme" aria-labelledby="profile-readme-title">
      <div className="workspace-filebar">
        <div className="workspace-filebar__label">
          <FileText aria-hidden="true" /> README.md
        </div>
        <span className="workspace-filebar__meta">{GITHUB_USERNAME}/profile</span>
        <span className="workspace-filebar__meta workspace-filebar__live">
          <Radio aria-hidden="true" />
          {profileIsLive ? "live from github" : "github snapshot"}
        </span>
      </div>

      <div className="workspace-readme__body">
        <div className="workspace-readme__identity">
          <FloatingStickers />

          <Reveal y={12} className="workspace-readme__avatar-row">
            <span className="workspace-readme__avatar-wrap">
              {enabled && <motion.span className="workspace-readme__avatar-ring" aria-hidden="true" />}
              <img
                className="workspace-readme__avatar"
                src={avatarFailed ? kawtarProfile : profile.avatarUrl}
                onError={() => setAvatarFailed(true)}
                alt={`${profile.name} GitHub avatar`}
                width={92}
                height={92}
              />
              <span className="workspace-status-dot" aria-label="Available for collaboration" />
            </span>
            <div className="workspace-readme__handle">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                @{GITHUB_USERNAME}
              </a>
              <span>{profile.name}</span>
            </div>
          </Reveal>

          <p className="workspace-code-label"># profile.readme</p>
          <TextReveal as="h2" id="profile-readme-title" text="👋 Hi, I'm Kawtar" className="workspace-readme__title" />
          <Reveal delay={0.1} y={12}>
            <p className="workspace-readme__role">{DEVELOPER_TITLE}</p>
            <p className="workspace-readme__bio">{profile.bio}</p>
            <p className="workspace-lede">
              A passionate developer dedicated to mastering digital creation. My journey spans mobile
              development, UI/UX design, and AI, with a focus on building applications that are visually
              captivating and structurally sound.
            </p>
          </Reveal>

          <StaggerGroup className="workspace-topic-row" aria-label="Profile topics">
            {["product-thinking", "mobile-first", "AI-curious", "design-led", "robotics"].map((topic) => (
              <StaggerItem key={topic} className="workspace-topic">
                {topic}
              </StaggerItem>
            ))}
          </StaggerGroup>

          <StaggerGroup className="workspace-readme__badges" stagger={0.05} aria-label="Profile badges">
            <StaggerItem>
              <GitHubBadge label="focus" value="Mobile" emoji="📱" color="#A97BFF" />
            </StaggerItem>
            <StaggerItem>
              <GitHubBadge label="also" value="UI/UX" emoji="🎨" color="#f778ba" />
            </StaggerItem>
            <StaggerItem>
              <GitHubBadge label="learning" value="Swift" emoji="🧠" color="#F05138" />
            </StaggerItem>
            <StaggerItem>
              <GitHubBadge label="followers" value={String(profile.followers)} emoji="⭐" color="#ec4899" href={`${GITHUB_URL}?tab=followers`} />
            </StaggerItem>
          </StaggerGroup>

          <StaggerGroup className="workspace-readme__actions" stagger={0.06}>
            <StaggerItem>
              <Magnetic>
                <a className="workspace-button workspace-button--github" href={GITHUB_URL} target="_blank" rel="noreferrer">
                  <Github aria-hidden="true" /> GitHub
                </a>
              </Magnetic>
            </StaggerItem>
            <StaggerItem>
              <Magnetic>
                <a className="workspace-button workspace-button--ghost" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                  <Linkedin aria-hidden="true" /> LinkedIn
                </a>
              </Magnetic>
            </StaggerItem>
            <StaggerItem>
              <Magnetic>
                <a className="workspace-button workspace-button--ghost" href="#collaboration">
                  <Mail aria-hidden="true" /> Contact
                </a>
              </Magnetic>
            </StaggerItem>
            <StaggerItem>
              <Magnetic>
                <a
                  className="workspace-button workspace-button--ghost"
                  href="/CV_EL_GADDI__KAWTAR.pdf"
                  download="CV_EL_GADDI_KAWTAR.pdf"
                >
                  <Download aria-hidden="true" /> CV
                </a>
              </Magnetic>
            </StaggerItem>
          </StaggerGroup>

          <StaggerGroup className="workspace-readme__facts" stagger={0.07} aria-label="Profile README highlights">
            {PROFILE_README_FACTS.map((fact) => (
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
          <Reveal y={14} className="workspace-readme__stats" aria-label="GitHub statistics">
            {stats.map((stat) => (
              <div key={stat.key} className="workspace-stat">
                <span className="workspace-stat__emoji" aria-hidden="true">
                  {stat.emoji}
                </span>
                <CountUp className="workspace-stat__value" value={stat.value} />
                <span className="workspace-stat__label">{stat.label}</span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.08} y={14} className="workspace-readme__languages">
            <p className="workspace-code-label">## top_languages</p>
            <LanguageBar shares={languages} />
            <p className="workspace-readme__note">
              Measured across {repos.length} public repositories on GitHub.
            </p>
          </Reveal>

          <Reveal delay={0.14} y={14}>
            <TerminalCard commands={commands} />
          </Reveal>

          <Reveal delay={0.2} y={14} className="workspace-readme__quicklinks">
            <a href={`${GITHUB_URL}?tab=repositories`} target="_blank" rel="noreferrer">
              <Star aria-hidden="true" /> {totalStars} stars across public repos
            </a>
            <a href={`${GITHUB_URL}?tab=followers`} target="_blank" rel="noreferrer">
              <Users aria-hidden="true" /> {profile.followers} followers · {profile.following} following
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <Mail aria-hidden="true" /> {CONTACT_EMAIL}
            </a>
          </Reveal>
        </div>
      </div>

      <div className="workspace-pipeline" aria-label="Product development pipeline">
        <span className="workspace-code-label">pipeline</span>
        {processSteps.map((step, index) => (
          <motion.span
            key={step.number}
            className={
              index === processSteps.length - 1
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
