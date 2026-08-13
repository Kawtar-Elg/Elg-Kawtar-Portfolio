// ═══════════════════════════════════════════════════════════
// Project Data — Centralized project definitions
// ═══════════════════════════════════════════════════════════

import rbtc from "@/assets/rbtc.png";
import project1 from "@/assets/1.png";
import portfoliopic from "@/assets/portfoliopic.png";
import appvers from "@/assets/appvers.png";
import appvers2 from "@/assets/appvers (2).png";
import bstamyImage from "@/assets/Bstamy+_Presentation.png";
import waterlyImage from "@/assets/Waterly Presentation.png";
import waterly1 from "@/assets/waterly/screen1.png";
import waterly2 from "@/assets/waterly/screen2.png";
import waterly3 from "@/assets/waterly/screen3.png";
import waterly4 from "@/assets/waterly/screen4.png";
import waterly5 from "@/assets/waterly/screen5.png";
import waterly6 from "@/assets/waterly/screen6.png";
import waterly7 from "@/assets/waterly/screen7.png";
import waterly8 from "@/assets/waterly/screen8.png";
import waterlyLogo from "@/assets/waterly-logo.png";
import taxiHubImage from "@/assets/T°axi Hub Presentation.png";
import taxiHubLogo from "@/assets/taxihub-logo.png";
import taxihubOnboard1 from "@/assets/taxihub/onboard1.png";
import taxihubOnboard2 from "@/assets/taxihub/onboard2.png";
import taxihubOnboard3 from "@/assets/taxihub/onboard3.png";
import taxihub1 from "@/assets/taxihub/screen1.png";
import taxihub2 from "@/assets/taxihub/screen2.png";
import taxihub3 from "@/assets/taxihub/screen3.png";
import taxihub4 from "@/assets/taxihub/screen4.png";
import taxihub5 from "@/assets/taxihub/screen5.png";
import taxihub6 from "@/assets/taxihub/screen6.png";
import taxihub7 from "@/assets/taxihub/screen7.png";
import taxihub8 from "@/assets/taxihub/screen8.png";
import dashlyImage from "@/assets/postlinkdin.png";
import dashly1 from "@/assets/dashly/screen1.png";
import dashly2 from "@/assets/dashly/screen2.png";
import dashly3 from "@/assets/dashly/screen3.png";
import dashly4 from "@/assets/dashly/screen4.png";
import dashly5 from "@/assets/dashly/screen5.png";
import dashlyLogo from "@/assets/dashly-logo.png";
import bstamyOnboarding from "@/assets/bstamy/screen_onboarding.png";
import bstamy1 from "@/assets/bstamy/screen1.png";
import bstamy2 from "@/assets/bstamy/screen2.png";
import bstamy3 from "@/assets/bstamy/screen3.png";
import bstamy4 from "@/assets/bstamy/screen4.png";
import bstamy5 from "@/assets/bstamy/screen5.png";
import bstamyLogo from "@/assets/bstamy-logo.png";
import autobrain from "@/assets/autobrain.png";
import autobrain1 from "@/assets/autobrain/screen1.png";
import autobrain2 from "@/assets/autobrain/screen2.png";
import autobrain3 from "@/assets/autobrain/screen3.png";
import autobrain4 from "@/assets/autobrain/screen4.png";
import autobrain5 from "@/assets/autobrain/screen5.png";
import autobrain6 from "@/assets/autobrain/screen6.png";
import autobrain7 from "@/assets/autobrain/screen7.png";
import autobrain8 from "@/assets/autobrain/screen8.png";
import autobrainLogo from "@/assets/autobrain-logo.png";
import keycarePpt from "@/assets/keycare/KEYCARE PPT.png";
import keycarePresentation1 from "@/assets/keycare/Section 1.png";
import keycarePresentation2 from "@/assets/keycare/Section 2.png";
import keycarePresentation3 from "@/assets/keycare/Section 3.png";
import keycareKeyboardRisky from "@/assets/keycare/keyboard_risky_state.png";
import keycareKeyboardSafe from "@/assets/keycare/keyboard_safe_state.png";
import keycareOnboardingAi from "@/assets/keycare/onboarding_ai_guidance.png";
import keycareOnboardingKeyboard from "@/assets/keycare/onboarding_enable_keyboard.png";
import keycareOnboardingWelcome from "@/assets/keycare/onboarding_welcome.png";
import keycareRewriteTone from "@/assets/keycare/rewrite_tone_selection.png";
import keycareScreen4 from "@/assets/keycare/screen4.png";
import keycareSettings from "@/assets/keycare/settings_privacy.png";
import keycareWarning from "@/assets/keycare/warning_content_alert.png";
import keycareLogo from "@/assets/keycare/keycare-logo.png";

export interface Project {
  id: number;
  title: string;
  tagline: string;
  category: "Mobile" | "Web" | "Other";
  description: string;
  problem?: string;
  solution?: string;
  role?: string;
  keyFeatures?: string[];
  technologies: string[];
  image: string;
  screens?: string[];
  presentationImages?: string[];
  logo?: string;
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  storeUrl?: string;
  viewUrl?: string;
}

export const projects: Project[] = [
  {
    id: 12,
    title: "KEYCARE",
    tagline: "AI-Powered Keyboard for Better Words",
    category: "Mobile",
    description:
      "An AI-powered keyboard that helps people choose better words in real time. KEYCARE uses machine learning to suggest contextually appropriate vocabulary, improving communication quality.",
    problem: "People often struggle to find the right words, especially in professional or multilingual contexts.",
    solution: "An intelligent keyboard overlay that analyzes context and suggests better word choices in real time using ML Kit.",
    role: "Full-stack mobile developer — UI/UX design, ML integration, deployment",
    keyFeatures: [
      "Real-time word suggestions",
      "Context-aware AI analysis",
      "Custom keyboard integration",
      "Multi-language support",
    ],
    technologies: ["Kotlin", "Java", "ML Kit", "Android SDK"],
    image: keycarePpt,
    presentationImages: [keycarePresentation1, keycarePresentation2, keycarePresentation3],
    screens: [
      keycareOnboardingWelcome,
      keycareOnboardingAi,
      keycareOnboardingKeyboard,
      keycareKeyboardRisky,
      keycareKeyboardSafe,
      keycareRewriteTone,
      keycareSettings,
      keycareWarning,
      keycareScreen4,
    ],
    logo: keycareLogo,
    liveUrl: "https://key-care.app/",
    videoUrl: "https://www.youtube.com/watch?v=r2qN9kBoU8w",
    githubUrl: "https://github.com/Kawtar-Elg",
  },
  {
    id: 6,
    title: "AutoBrain",
    tagline: "AI-Powered Automotive Diagnostics",
    category: "Mobile",
    description:
      "Application de Diagnostic Automobile par Intelligence Artificielle. AutoBrain combines computer vision and AI to analyze vehicle issues and provide instant diagnostic insights.",
    problem: "Car diagnostics are expensive and inaccessible for most people.",
    solution: "A mobile app that uses AI (Gemini API, TensorFlow Lite) to analyze car problems through photos and descriptions.",
    role: "Full-stack mobile developer — Architecture, AI integration, UI/UX",
    keyFeatures: [
      "AI-powered diagnostics",
      "Photo-based analysis",
      "Real-time results with Gemini API",
      "Offline capabilities with TensorFlow Lite",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Firebase", "ML Kit", "TensorFlow Lite", "Gemini API"],
    image: autobrain,
    screens: [autobrain1, autobrain2, autobrain3, autobrain4, autobrain5, autobrain6, autobrain7, autobrain8],
    logo: autobrainLogo,
    storeUrl: "https://play.google.com/store/apps/details?id=com.app.autobrain",
    videoUrl: "https://www.youtube.com/watch?v=-XepwjbQ1HY",
    githubUrl: "https://github.com/Kawtar-Elg",
  },
  {
    id: 7,
    title: "DASHLY",
    tagline: "Record Your Journey & Park with Confidence",
    category: "Mobile",
    description:
      "DASHLY helps drivers record their journeys securely and find parking with confidence. A comprehensive driving companion that combines trip recording with smart parking features.",
    keyFeatures: [
      "Journey recording & tracking",
      "Smart parking assistant",
      "Offline data persistence with Room",
      "Real-time location services",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Room"],
    image: dashlyImage,
    screens: [dashly1, dashly2, dashly3, dashly4, dashly5],
    logo: dashlyLogo,
    githubUrl: "https://github.com/Kawtar-Elg/Dashly.git",
  },
  {
    id: 9,
    title: "BSTAMY+",
    tagline: "Modern Mobile Banking Experience",
    category: "Mobile",
    description:
      "Bstamy+ is a mobile banking app that helps users manage accounts and transactions, make transfers, track activity, and receive real-time notifications. Built with a focus on security and ease of use.",
    keyFeatures: [
      "Account & transaction management",
      "Secure transfers",
      "Real-time push notifications",
      "Activity tracking dashboard",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Push Notifications"],
    image: bstamyImage,
    screens: [bstamyOnboarding, bstamy1, bstamy2, bstamy3, bstamy4, bstamy5],
    logo: bstamyLogo,
    liveUrl: "https://bstamy-web-site.vercel.app",
    githubUrl: "https://github.com/Kawtar-Elg/BstamyPlus",
    viewUrl: "https://bstamy-web-site.vercel.app",
  },
  {
    id: 8,
    title: "WATERLY",
    tagline: "Build Better Hydration Habits",
    category: "Mobile",
    description:
      "Waterly helps users build better daily hydration habits by tracking water intake, setting personal goals, sending reminders, and showing progress through clear, intuitive charts.",
    keyFeatures: [
      "Daily intake tracking",
      "Personal goal setting",
      "Smart reminders",
      "Progress visualization charts",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Push Notifications"],
    image: waterlyImage,
    screens: [waterly1, waterly2, waterly3, waterly4, waterly5, waterly6, waterly7, waterly8],
    logo: waterlyLogo,
    githubUrl: "https://github.com/Kawtar-Elg/waterly",
  },
  {
    id: 10,
    title: "TaxiHub",
    tagline: "Smart Meter for Modern Taxi Drivers",
    category: "Mobile",
    description:
      "Taxi Hub is an innovative mobile app that acts as a smart meter, allowing drivers to manage trips and estimate fares in real time based on time, distance, and cost, with a smooth and transparent experience.",
    keyFeatures: [
      "Real-time GPS tracking",
      "Dynamic fare calculation",
      "Automated receipt generation",
      "Shift and revenue tracking",
    ],
    technologies: ["Kotlin", "Firebase", "Push Notifications", "Google Maps"],
    image: taxiHubImage,
    logo: taxiHubLogo,
    screens: [taxihubOnboard1, taxihubOnboard2, taxihubOnboard3, taxihub1, taxihub2, taxihub3, taxihub4, taxihub5, taxihub6, taxihub7, taxihub8],
    githubUrl: "https://github.com/Kawtar-Elg/Taxi-Hub",
  },
  {
    id: 2,
    title: "Alf-Layla",
    tagline: "Luxury Accommodation Booking",
    category: "Web",
    description:
      "A simple, modern, and intuitive digital solution that allows users to book luxury accommodations in just a few clicks.",
    technologies: ["HTML", "CSS", "Bootstrap", "Python"],
    image: project1,
    liveUrl: "https://alf-layla.great-site.net",
    githubUrl: "https://github.com/Kawtar-Elg/Alf-Laylaa.git",
  },
  {
    id: 1,
    title: "Robotics Club CMC",
    tagline: "Student Robotics Community Platform",
    category: "Web",
    description:
      "Website for Robotics Club CMC — a student community passionate about robotics, AI, and innovation.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: rbtc,
    liveUrl: "https://robotics-cmc.tech/",
    githubUrl: "https://github.com/Kawtar-Elg",
  },
  {
    id: 3,
    title: "Portfolio Website",
    tagline: "Personal Developer Portfolio",
    category: "Web",
    description:
      "Responsive portfolio website with modern design and smooth animations.",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    image: portfoliopic,
    liveUrl: "https://elg-kawtar-portfolio.vercel.app/",
    githubUrl: "https://github.com/Kawtar-Elg/Elg-Kawtar-Portfolio.git",
  },
  {
    id: 4,
    title: "Management App",
    tagline: "Business Management Solution",
    category: "Other",
    description: "Gérez votre hamam en toute simplicité ! A comprehensive management application for small business operations.",
    technologies: ["Kotlin", "Flutter", "React"],
    image: appvers,
    githubUrl: "https://github.com/Kawtar-Elg",
  },
  {
    id: 5,
    title: "Management Desktop",
    tagline: "Desktop Business Management",
    category: "Other",
    description: "Gérez votre hamam en toute simplicité ! Desktop version with Python backend.",
    technologies: ["Python", "Flask", "Tkinter"],
    image: appvers2,
    githubUrl: "https://github.com/Kawtar-Elg",
  },
];

export const projectCategories = ["All", "Mobile", "Web", "Other"] as const;
