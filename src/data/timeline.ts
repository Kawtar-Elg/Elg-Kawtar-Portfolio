// ═══════════════════════════════════════════════════════════
// Timeline & Achievement Data
// ═══════════════════════════════════════════════════════════

export interface Achievement {
  year: string;
  title: string;
  event: string;
  description: string;
  highlight?: boolean;
}

export const achievements: Achievement[] = [
  {
    year: "2025",
    title: "GITEX AFRICA Participant",
    event: "GITEX AFRICA",
    description:
      "Participated in Africa's largest tech and startup event, presenting innovative mobile solutions.",
    highlight: true,
  },
  {
    year: "2025",
    title: "AI4SDG Hackathon",
    event: "AI for Sustainable Development Goals",
    description:
      "Competed in the AI4SDG hackathon, developing AI-driven solutions for sustainable development challenges.",
    highlight: true,
  },
  {
    year: "2024–2025",
    title: "Robotics Club CMC Leadership",
    event: "Club Robotics CMC",
    description:
      "Active member and contributor to Club Robotics CMC, organizing stands, events, and leading robotics projects at national venues including IAV Rabat and Bibliothèque Nationale.",
  },
  {
    year: "2024",
    title: "Mobile Development Focus",
    event: "Career Development",
    description:
      "Expanded into advanced mobile development with Kotlin, Jetpack Compose, and AI integrations (Gemini API, ML Kit, TensorFlow Lite).",
  },
  {
    year: "2021–2025",
    title: "UI/UX & Design Mastery",
    event: "Continuous Learning",
    description:
      "Mastered UI/UX design principles with Figma, building design systems and creating production-ready interfaces.",
  },
  {
    year: "2021",
    title: "Development Journey Began",
    event: "Career Start",
    description:
      "Started professional development career with web technologies, progressing rapidly into mobile and AI.",
  },
];
