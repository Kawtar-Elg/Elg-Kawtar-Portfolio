// ═══════════════════════════════════════════════════════════
// Skills Data — Technical credibility organized by domain
// ═══════════════════════════════════════════════════════════

export interface SkillDomain {
  title: string;
  emoji: string;
  items: string[];
}

export const skillDomains: SkillDomain[] = [
  {
    title: "Mobile",
    emoji: "📱",
    items: ["Kotlin", "Jetpack Compose", "Flutter", "Dart", "Android SDK"],
  },
  {
    title: "Architecture",
    emoji: "🏗️",
    items: ["MVVM", "Clean Architecture", "MVI", "Repository Pattern"],
  },
  {
    title: "State Management",
    emoji: "🔄",
    items: ["BLoC", "Riverpod", "Provider", "ViewModel"],
  },
  {
    title: "Backend & APIs",
    emoji: "🔌",
    items: ["REST APIs", "Firebase", "JSON", "Retrofit", "Room"],
  },
  {
    title: "Data & Storage",
    emoji: "🗄️",
    items: ["SQLite", "Room", "MySQL", "SharedPreferences", "Firebase Firestore"],
  },
  {
    title: "AI & ML",
    emoji: "🤖",
    items: ["Gemini API", "ML Kit", "TensorFlow Lite", "Computer Vision"],
  },
  {
    title: "Design",
    emoji: "🎨",
    items: ["Figma", "Design Systems", "Prototyping", "Wireframing", "UI Design"],
  },
  {
    title: "Quality & Testing",
    emoji: "✅",
    items: ["JUnit", "Espresso", "Unit Testing", "UI Testing"],
  },
  {
    title: "DevOps & Deployment",
    emoji: "🚀",
    items: ["Git", "GitHub", "CI/CD", "Google Play", "GitHub Actions"],
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the product, users, and business goals.",
  },
  {
    number: "02",
    title: "Design",
    description: "Create UX flows, wireframes, prototypes, and polished UI in Figma.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop scalable mobile applications using Flutter & Kotlin.",
  },
  {
    number: "04",
    title: "Integrate",
    description: "Connect APIs, databases, Firebase, authentication, AI, and notifications.",
  },
  {
    number: "05",
    title: "Test",
    description: "Ensure reliability, performance, accessibility, and quality.",
  },
  {
    number: "06",
    title: "Deploy",
    description: "Prepare and publish production-ready applications to app stores.",
  },
];

export const pipelineSteps = [
  "Figma",
  "Design System",
  "Flutter / Kotlin",
  "API / Firebase",
  "Testing",
  "CI/CD",
  "Google Play",
];
