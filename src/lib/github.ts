// ═══════════════════════════════════════════════════════════
// GitHub identity layer
//
// Every value in this file comes from the public GitHub profile
// github.com/Kawtar-Elg (user + repos REST endpoints and the
// profile README). Nothing here is invented: the static export is a
// verbatim snapshot used as a fallback when the API is unreachable
// or rate-limited, and it is replaced by live data when the request
// succeeds.
// ═══════════════════════════════════════════════════════════

export const GITHUB_USERNAME = "Kawtar-Elg";
export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;
// The portfolio and the GitHub README point at two different LinkedIn
// vanity URLs. This keeps the one the live portfolio already used; the
// README's alternative is `in/kawtar-elg-5924402b9`.
export const LINKEDIN_URL = "https://www.linkedin.com/in/kawtar-el-gaddi-b659a8286";
export const PORTFOLIO_URL = "https://elg-kawtar-portfolio.vercel.app/";
export const GITHUB_EMAIL = "kawtarelgaddi@gmail.com";
export const CONTACT_EMAIL = "kawtar.elgaddi@gmail.com";

/** Snapshot date of the static fallback below (ISO day). */
export const GITHUB_SNAPSHOT_DATE = "2026-08-15";

export interface GitHubProfile {
  login: string;
  name: string;
  bio: string;
  avatarUrl: string;
  htmlUrl: string;
  blog: string;
  location: string;
  publicRepos: number;
  followers: number;
  following: number;
  createdAt: string;
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  htmlUrl: string;
  homepage: string | null;
  topics: string[];
  pushedAt: string;
  createdAt: string;
  fork: boolean;
}

// ── Static snapshot (real values, captured 2026-08-15) ─────────

export const GITHUB_PROFILE_FALLBACK: GitHubProfile = {
  login: "Kawtar-Elg",
  name: "ELG KAWTAR",
  bio: "𝒞𝑜𝒹𝑒 𝓁𝒾𝒻𝑒 : 𝒸𝒶𝒻𝑒 ☕ + 𝒸𝑜𝒹𝑒 💻 = 𝒽𝒶𝒸𝒸𝑒𝒹 𝒸𝒾𝓉𝓎!",
  avatarUrl: "https://avatars.githubusercontent.com/u/160422141?v=4",
  htmlUrl: GITHUB_URL,
  blog: PORTFOLIO_URL,
  location: "The Moon",
  publicRepos: 19,
  followers: 13,
  following: 15,
  createdAt: "2024-02-18T17:58:43Z",
};

export const GITHUB_REPOS_FALLBACK: GitHubRepo[] = [
  { name: "Elg-Kawtar-Portfolio", description: null, language: "TypeScript", stars: 1, forks: 0, htmlUrl: `${GITHUB_URL}/Elg-Kawtar-Portfolio`, homepage: "https://elg-kawtar-portfolio.vercel.app", topics: [], pushedAt: "2026-08-13T22:23:54Z", createdAt: "2025-09-07T11:41:31Z", fork: false },
  { name: "KAWTAR-Elg", description: null, language: null, stars: 1, forks: 0, htmlUrl: `${GITHUB_URL}/KAWTAR-Elg`, homepage: null, topics: [], pushedAt: "2026-06-05T22:06:47Z", createdAt: "2025-03-13T17:59:02Z", fork: false },
  { name: "MRC9-ESP32", description: "MRC 9.0 – Moroccan Robotics Challenge 2026 | ESP32 C code for maze solver & fire truck robot", language: "C++", stars: 0, forks: 0, htmlUrl: `${GITHUB_URL}/MRC9-ESP32`, homepage: null, topics: [], pushedAt: "2026-04-25T23:05:14Z", createdAt: "2026-04-25T16:39:48Z", fork: false },
  { name: "0X03_ENSAK", description: "Robot Arm Pick & Place State Machine", language: "C++", stars: 0, forks: 0, htmlUrl: `${GITHUB_URL}/0X03_ENSAK`, homepage: null, topics: [], pushedAt: "2026-04-25T02:22:57Z", createdAt: "2026-04-25T02:22:18Z", fork: false },
  { name: "Dashly", description: null, language: "Kotlin", stars: 0, forks: 0, htmlUrl: `${GITHUB_URL}/Dashly`, homepage: null, topics: [], pushedAt: "2026-02-18T03:05:44Z", createdAt: "2026-02-18T02:20:31Z", fork: false },
  { name: "Bstamy-WebSite", description: null, language: "HTML", stars: 1, forks: 0, htmlUrl: `${GITHUB_URL}/Bstamy-WebSite`, homepage: "https://bstamy-web-site.vercel.app", topics: [], pushedAt: "2026-01-12T06:59:12Z", createdAt: "2026-01-12T06:57:39Z", fork: false },
  { name: "Kids_Learning", description: null, language: "Kotlin", stars: 2, forks: 0, htmlUrl: `${GITHUB_URL}/Kids_Learning`, homepage: null, topics: [], pushedAt: "2026-01-13T16:39:05Z", createdAt: "2025-12-06T19:02:10Z", fork: false },
  { name: "BstamyPlus", description: null, language: "Kotlin", stars: 4, forks: 0, htmlUrl: `${GITHUB_URL}/BstamyPlus`, homepage: null, topics: [], pushedAt: "2026-01-11T23:59:30Z", createdAt: "2026-01-10T15:41:04Z", fork: false },
  { name: "waterly", description: null, language: "Kotlin", stars: 2, forks: 0, htmlUrl: `${GITHUB_URL}/waterly`, homepage: null, topics: [], pushedAt: "2025-11-21T07:27:30Z", createdAt: "2025-11-17T22:55:59Z", fork: false },
  { name: "Taxi-Hub", description: null, language: "HTML", stars: 3, forks: 0, htmlUrl: `${GITHUB_URL}/Taxi-Hub`, homepage: null, topics: [], pushedAt: "2025-11-09T18:54:57Z", createdAt: "2025-11-07T23:58:17Z", fork: false },
  { name: "gestion_de_stock_pour_une_librairie", description: null, language: "Kotlin", stars: 1, forks: 0, htmlUrl: `${GITHUB_URL}/gestion_de_stock_pour_une_librairie`, homepage: null, topics: [], pushedAt: "2025-10-28T09:29:38Z", createdAt: "2025-10-28T09:27:13Z", fork: false },
  { name: "Power_Tracker", description: null, language: "Kotlin", stars: 1, forks: 0, htmlUrl: `${GITHUB_URL}/Power_Tracker`, homepage: null, topics: [], pushedAt: "2025-10-27T01:28:28Z", createdAt: "2025-10-26T12:48:31Z", fork: false },
  { name: "ContactApp", description: null, language: null, stars: 1, forks: 0, htmlUrl: `${GITHUB_URL}/ContactApp`, homepage: null, topics: [], pushedAt: "2025-10-24T08:47:23Z", createdAt: "2025-10-24T08:47:22Z", fork: false },
  { name: "ToolBoxHub", description: null, language: "HTML", stars: 1, forks: 0, htmlUrl: `${GITHUB_URL}/ToolBoxHub`, homepage: "https://tool-box-hub-indol.vercel.app", topics: [], pushedAt: "2025-10-14T21:22:49Z", createdAt: "2025-10-12T16:45:51Z", fork: false },
  { name: "Les_Traveaux_Pratiques_KOTLIN", description: "Ce dépôt regroupe les travaux pratiques (TP) réalisés en Kotlin dans le cadre du module Kotlin. Vous y trouverez les corrections complètes des exercices, organisées par ordre de séance, avec des implémentations claires et conformes aux bonnes pratiques du langage.", language: "Kotlin", stars: 2, forks: 0, htmlUrl: `${GITHUB_URL}/Les_Traveaux_Pratiques_KOTLIN`, homepage: "", topics: [], pushedAt: "2025-10-11T18:55:52Z", createdAt: "2025-10-06T17:43:26Z", fork: false },
  { name: "gestion-library-parc-automobile-kotlin", description: "Système de gestion double (bibliothèque + parc automobile) en Kotlin.  Démonstration des concepts POO avancés avec héritage, polymorphisme et gestion d'exceptions.", language: "Kotlin", stars: 1, forks: 0, htmlUrl: `${GITHUB_URL}/gestion-library-parc-automobile-kotlin`, homepage: "", topics: [], pushedAt: "2025-10-05T09:58:52Z", createdAt: "2025-10-04T18:58:22Z", fork: false },
  { name: "Alf-Laylaa", description: null, language: "HTML", stars: 2, forks: 0, htmlUrl: `${GITHUB_URL}/Alf-Laylaa`, homepage: null, topics: [], pushedAt: "2025-07-04T06:42:59Z", createdAt: "2025-06-18T18:59:44Z", fork: false },
  { name: "User-Management-System", description: null, language: "HTML", stars: 1, forks: 0, htmlUrl: `${GITHUB_URL}/User-Management-System`, homepage: "https://user-management-system-eosin.vercel.app", topics: [], pushedAt: "2025-06-20T08:52:28Z", createdAt: "2025-06-19T19:57:01Z", fork: true },
  { name: "Robotics_Club_WebSite", description: "This repository hosts the official website for our Robotics Club, built collaboratively by our team.🤖✨", language: null, stars: 1, forks: 0, htmlUrl: `${GITHUB_URL}/Robotics_Club_WebSite`, homepage: null, topics: [], pushedAt: "2025-03-10T12:43:38Z", createdAt: "2025-06-20T10:33:49Z", fork: true },
];

/**
 * Lines taken verbatim from the profile README at
 * github.com/Kawtar-Elg/KAWTAR-Elg.
 */
export const PROFILE_README_FACTS = [
  { emoji: "🌍", label: "based in", value: "The Moon 🌚" },
  { emoji: "✉️", label: "contact", value: GITHUB_EMAIL },
  { emoji: "🚀", label: "working on", value: "my own project" },
  { emoji: "🧠", label: "learning", value: "Swift" },
] as const;

/** GitHub profile achievements shown on the public profile. */
export const GITHUB_ACHIEVEMENTS = [
  { name: "Pull Shark", emoji: "🦈", description: "Merged pull requests on GitHub." },
  { name: "YOLO", emoji: "🚀", description: "Merged a pull request without a review." },
] as const;

// ── Language colours (GitHub's own linguist palette) ──────────

const LANGUAGE_COLORS: Record<string, string> = {
  Kotlin: "#A97BFF",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#663399",
  "C++": "#f34b7d",
  C: "#555555",
  Java: "#b07219",
  Python: "#3572A5",
  Dart: "#00B4AB",
  PHP: "#4F5D95",
  Swift: "#F05138",
  Shell: "#89e051",
  SCSS: "#c6538c",
};

export const getLanguageColor = (language?: string | null) =>
  (language && LANGUAGE_COLORS[language]) || "#6e7681";

// ── Fetchers ──────────────────────────────────────────────────

const API_ROOT = "https://api.github.com";

const request = async <T>(path: string, signal?: AbortSignal): Promise<T> => {
  const response = await fetch(`${API_ROOT}${path}`, {
    signal,
    headers: { Accept: "application/vnd.github+json" },
  });

  if (!response.ok) {
    throw new Error(`GitHub API responded with ${response.status}`);
  }

  return response.json() as Promise<T>;
};

interface RawProfile {
  login: string; name: string | null; bio: string | null; avatar_url: string;
  html_url: string; blog: string | null; location: string | null;
  public_repos: number; followers: number; following: number; created_at: string;
}

interface RawRepo {
  name: string; description: string | null; language: string | null;
  stargazers_count: number; forks_count: number; html_url: string;
  homepage: string | null; topics?: string[]; pushed_at: string;
  created_at: string; fork: boolean;
}

export const fetchGitHubProfile = async (signal?: AbortSignal): Promise<GitHubProfile> => {
  const raw = await request<RawProfile>(`/users/${GITHUB_USERNAME}`, signal);
  return {
    login: raw.login,
    name: (raw.name ?? GITHUB_PROFILE_FALLBACK.name).trim(),
    bio: raw.bio ?? GITHUB_PROFILE_FALLBACK.bio,
    avatarUrl: raw.avatar_url,
    htmlUrl: raw.html_url,
    blog: raw.blog || PORTFOLIO_URL,
    location: raw.location ?? GITHUB_PROFILE_FALLBACK.location,
    publicRepos: raw.public_repos,
    followers: raw.followers,
    following: raw.following,
    createdAt: raw.created_at,
  };
};

export const fetchGitHubRepos = async (signal?: AbortSignal): Promise<GitHubRepo[]> => {
  const raw = await request<RawRepo[]>(
    `/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed`,
    signal
  );

  return raw
    .map((repo) => ({
      name: repo.name,
      description: repo.description,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      htmlUrl: repo.html_url,
      homepage: repo.homepage,
      topics: repo.topics ?? [],
      pushedAt: repo.pushed_at,
      createdAt: repo.created_at,
      fork: repo.fork,
    }))
    .sort((a, b) => b.pushedAt.localeCompare(a.pushedAt));
};

// ── Derived views (pure functions over real data) ─────────────

export interface LanguageShare {
  name: string;
  count: number;
  share: number;
  color: string;
}

export const getLanguageShares = (repos: GitHubRepo[]): LanguageShare[] => {
  const counts = new Map<string, number>();
  repos.forEach((repo) => {
    if (!repo.language) return;
    counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
  });

  const total = [...counts.values()].reduce((sum, value) => sum + value, 0);
  if (!total) return [];

  return [...counts.entries()]
    .map(([name, count]) => ({
      name,
      count,
      share: (count / total) * 100,
      color: getLanguageColor(name),
    }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
};

export const getTotalStars = (repos: GitHubRepo[]) =>
  repos.reduce((sum, repo) => sum + repo.stars, 0);

/**
 * Repository push activity per month for the trailing `months` window.
 * Each cell counts repositories that were created or pushed to in that
 * month — derived strictly from repo timestamps, never simulated.
 */
export interface ActivityMonth {
  key: string;
  label: string;
  year: number;
  monthIndex: number;
  count: number;
  repos: string[];
}

const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const getMonthlyActivity = (
  repos: GitHubRepo[],
  months = 12,
  now: Date = new Date()
): ActivityMonth[] => {
  const buckets = new Map<string, string[]>();

  const add = (iso: string, name: string) => {
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return;
    const key = `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}`;
    const existing = buckets.get(key);
    if (existing) {
      if (!existing.includes(name)) existing.push(name);
      return;
    }
    buckets.set(key, [name]);
  };

  repos.forEach((repo) => {
    add(repo.createdAt, repo.name);
    add(repo.pushedAt, repo.name);
  });

  const timeline: ActivityMonth[] = [];
  for (let offset = months - 1; offset >= 0; offset -= 1) {
    const cursor = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - offset, 1));
    const year = cursor.getUTCFullYear();
    const monthIndex = cursor.getUTCMonth();
    const key = `${year}-${String(monthIndex + 1).padStart(2, "0")}`;
    const names = buckets.get(key) ?? [];
    timeline.push({
      key,
      label: MONTH_LABELS[monthIndex],
      year,
      monthIndex,
      count: names.length,
      repos: names,
    });
  }

  return timeline;
};

/** Matches a curated project's GitHub URL to a live repository record. */
export const findRepoByUrl = (repos: GitHubRepo[], githubUrl?: string) => {
  if (!githubUrl) return undefined;
  const slug = githubUrl
    .replace(/\.git$/, "")
    .replace(/\/$/, "")
    .split("/")
    .pop();
  if (!slug || slug.toLowerCase() === GITHUB_USERNAME.toLowerCase()) return undefined;
  return repos.find((repo) => repo.name.toLowerCase() === slug.toLowerCase());
};

export const formatRelativeDate = (iso: string, now: Date = new Date()) => {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";

  const days = Math.floor((now.getTime() - date.getTime()) / 86_400_000);
  if (days <= 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days} days ago`;

  const months = Math.floor(days / 30);
  if (months < 12) return months === 1 ? "last month" : `${months} months ago`;

  const years = Math.floor(months / 12);
  return years === 1 ? "last year" : `${years} years ago`;
};
