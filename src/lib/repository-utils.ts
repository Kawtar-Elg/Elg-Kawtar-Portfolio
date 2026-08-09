import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";

export type RepositoryCategory = "All" | Project["category"];
export type RepositorySort = "Featured" | "Recent" | "Technology" | "Category";

export interface RepositoryRecord extends Project {
  slug: string;
  topics: string[];
  language: string;
  featured: boolean;
  deviceType?: "iphone" | "android";
}

const featuredIds = new Set([12, 6, 7, 8]);

const topicAliases: Record<string, string[]> = {
  kotlin: ["kotlin", "android", "mobile-development"],
  java: ["java", "android"],
  "jetpack compose": ["jetpack-compose", "android", "mobile-development"],
  flutter: ["flutter", "dart", "mobile-development"],
  firebase: ["firebase", "backend"],
  "ml kit": ["ml-kit", "ai", "machine-learning"],
  "tensorflow lite": ["tensorflow-lite", "ai", "machine-learning"],
  "gemini api": ["gemini", "ai", "machine-learning"],
  "push notifications": ["push-notifications", "mobile-development"],
  "google maps": ["google-maps", "location"],
  "rest apis": ["rest-api", "api-integration"],
  "tailwind css": ["tailwind-css", "react", "ui-ux"],
  typescript: ["typescript", "react"],
  react: ["react", "ui-ux"],
  python: ["python"],
  flask: ["flask", "python"],
  html: ["html", "web"],
  css: ["css", "ui-ux", "web"],
  bootstrap: ["bootstrap", "web"],
  javascript: ["javascript", "web"],
  figma: ["figma", "ui-ux"],
};

export const normalizeTopic = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/\+/g, "plus")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const getProjectSlug = (project: Pick<Project, "id" | "title">) =>
  `${project.id}-${normalizeTopic(project.title)}`;

export const getYouTubeId = (url?: string) => {
  if (!url) return null;
  return url.match(/[?&]v=([^&]+)/)?.[1] ?? url.match(/youtu\.be\/([^?]+)/)?.[1] ?? null;
};

export const getProjectTopics = (project: Project) => {
  const topics = new Set<string>([
    normalizeTopic(project.category),
    project.category === "Mobile" ? "mobile-development" : "web-development",
  ]);

  project.technologies.forEach((technology) => {
    const normalized = normalizeTopic(technology);
    topics.add(normalized);
    (topicAliases[technology.toLowerCase()] ?? []).forEach((alias) => topics.add(alias));
  });

  if (project.title.toLowerCase().includes("keycare") || project.title.toLowerCase().includes("autobrain")) {
    topics.add("ai");
  }

  if (project.description.toLowerCase().includes("ui/ux") || project.title.toLowerCase().includes("portfolio")) {
    topics.add("ui-ux");
  }

  return [...topics];
};

export const getRepositoryRecords = (): RepositoryRecord[] =>
  projects.map((project) => ({
    ...project,
    slug: getProjectSlug(project),
    topics: getProjectTopics(project),
    language: project.technologies[0] ?? "Other",
    featured: featuredIds.has(project.id),
    deviceType: project.category === "Mobile" ? "android" : undefined,
  }));

export const repositoryMatches = (repository: RepositoryRecord, query: string) => {
  const searchable = [
    repository.title,
    repository.tagline,
    repository.description,
    repository.category,
    repository.language,
    ...repository.technologies,
    ...repository.topics,
  ]
    .join(" ")
    .toLowerCase();

  return searchable.includes(query.trim().toLowerCase());
};

export const sortRepositories = (repositories: RepositoryRecord[], sort: RepositorySort) => {
  const list = [...repositories];
  if (sort === "Featured") {
    return list.sort((a, b) => Number(b.featured) - Number(a.featured));
  }
  if (sort === "Recent") {
    // The source data has no trustworthy dates; preserve its curated order instead of inventing recency.
    return list;
  }
  if (sort === "Technology") {
    return list.sort((a, b) => a.language.localeCompare(b.language) || a.title.localeCompare(b.title));
  }
  return list.sort((a, b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title));
};

export const getAvailableTopics = (repositories: RepositoryRecord[]) => {
  const topics = new Set<string>();
  repositories.forEach((repository) => repository.topics.forEach((topic) => topics.add(topic)));
  return [...topics].sort((a, b) => a.localeCompare(b));
};
