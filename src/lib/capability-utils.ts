import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";
import { skillDomains } from "@/data/skills";
import type { RepositoryRecord } from "./repository-utils";

export interface Capability {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  projectIds: number[];
}

const capabilityDefinitions = [
  {
    id: "build-mobile-applications",
    title: "Build Mobile Applications",
    description: "Develop scalable mobile experiences with Kotlin, Jetpack Compose, and Flutter.",
    keywords: ["kotlin", "flutter", "jetpack compose"],
  },
  {
    id: "design-user-experiences",
    title: "Design User Experiences",
    description: "Shape practical flows, wireframes, interfaces, and design systems in Figma.",
    keywords: ["ui/ux", "figma", "tailwind css", "react"],
  },
  {
    id: "integrate-apis",
    title: "Integrate APIs",
    description: "Connect REST APIs, Firebase, databases, authentication, and notifications.",
    keywords: ["firebase", "rest apis", "room", "mysql"],
  },
  {
    id: "build-ai-features",
    title: "Build AI-powered Features",
    description: "Bring AI and machine-learning integrations into useful product workflows.",
    keywords: ["gemini api", "ml kit", "tensorflow lite", "computer vision"],
  },
  {
    id: "test-applications",
    title: "Test Applications",
    description: "Use unit and UI testing practices to support reliable application experiences.",
    keywords: ["junit", "espresso", "unit testing", "ui testing"],
  },
  {
    id: "ship-production-apps",
    title: "Ship Production Apps",
    description: "Prepare and publish production-ready applications with deployment workflows.",
    keywords: ["google play", "github actions", "ci/cd", "git"],
  },
  {
    id: "scalable-architecture",
    title: "Design Scalable Architecture",
    description: "Organize application code around MVVM, clean architecture, MVI, and repositories.",
    keywords: ["mvvm", "clean architecture", "mvi", "repository pattern"],
  },
] as const;

const domainItems = skillDomains.flatMap((domain) => domain.items);

const projectSearchText = (project: Project) =>
  [project.title, project.tagline, project.description, project.category, ...project.technologies]
    .join(" ")
    .toLowerCase();

export const capabilities: Capability[] = capabilityDefinitions.map((capability) => {
  const technologies = domainItems.filter((item) =>
    capability.keywords.some((keyword) => item.toLowerCase().includes(keyword.toLowerCase())),
  );
  const projectIds = projects
    .filter((project) => {
      const searchText = projectSearchText(project);
      return capability.keywords.some((keyword) => searchText.includes(keyword.toLowerCase()));
    })
    .map((project) => project.id);

  return {
    id: capability.id,
    title: capability.title,
    description: capability.description,
    technologies: technologies.length ? technologies : capability.keywords.map((keyword) => keyword),
    projectIds,
  };
});

export const getCapabilityProjects = (capability: Capability, repositories: RepositoryRecord[]) =>
  repositories.filter((repository) => capability.projectIds.includes(repository.id));
