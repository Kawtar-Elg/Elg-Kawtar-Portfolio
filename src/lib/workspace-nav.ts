// ═══════════════════════════════════════════════════════════
// Navigation config shared by the rail and the tab strip, so both
// experiences stay in sync and highlight the same active entry.
// ═══════════════════════════════════════════════════════════

export type WorkspaceVariant = "developer" | "designer";

export interface NavItem {
  label: string;
  /** Destination. Values starting with "#" are in-page anchors. */
  to: string;
  key: string;
  emoji: string;
  /** Element id this entry corresponds to, for scroll tracking. */
  section?: string;
}

export const NAVIGATION: Record<WorkspaceVariant, NavItem[]> = {
  developer: [
    { label: "Overview", to: "/", key: "overview", emoji: "📖", section: "readme" },
    { label: "Repositories", to: "/repositories", key: "repositories", emoji: "📦" },
    { label: "GitHub", to: "/#github", key: "github", emoji: "🐙", section: "github" },
    { label: "Activity", to: "/#activity", key: "activity", emoji: "📈", section: "activity" },
    { label: "Achievements", to: "/#achievements", key: "achievements", emoji: "🏅", section: "achievements" },
    { label: "Skills", to: "/#skills", key: "skills", emoji: "🧰", section: "skills" },
  ],
  designer: [
    { label: "Overview", to: "#readme", key: "readme", emoji: "📖", section: "readme" },
    { label: "Work", to: "#design-work", key: "design-work", emoji: "🎨", section: "design-work" },
    { label: "Case Studies", to: "#design-case-studies", key: "design-case-studies", emoji: "📄", section: "design-case-studies" },
    { label: "Design System", to: "#design-system", key: "design-system", emoji: "🧩", section: "design-system" },
    { label: "Process", to: "#design-process", key: "design-process", emoji: "🔁", section: "design-process" },
    { label: "About", to: "#design-about", key: "design-about", emoji: "👩‍💻", section: "design-about" },
  ],
};

export const TABS: Record<WorkspaceVariant, NavItem[]> = {
  developer: NAVIGATION.developer,
  designer: [
    ...NAVIGATION.designer.slice(0, 4),
    { label: "Design → Code", to: "#design-to-code", key: "design-to-code", emoji: "⚡", section: "design-to-code" },
    ...NAVIGATION.designer.slice(4),
  ],
};

/** Element ids an experience can scroll between, in document order. */
export const getSectionIds = (items: NavItem[]) =>
  items.map((item) => item.section).filter((section): section is string => Boolean(section));
