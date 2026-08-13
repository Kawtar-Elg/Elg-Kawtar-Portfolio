// ═══════════════════════════════════════════════════════════
// Designer Projects — UI/UX design work
// Source of truth: src/assets/uxui_screens/
// ═══════════════════════════════════════════════════════════

import seatLrFirst from "@/assets/uxui_screens/First_Screen_SeatLr_App.png";
import seatLrSecond from "@/assets/uxui_screens/second_Screen_SeatLr_App.png";
import hamamApp from "@/assets/uxui_screens/Hamam_App.png";
import jabbApp from "@/assets/uxui_screens/Jabb_App.png";
import nahidStore from "@/assets/uxui_screens/Nahid_Creation_Store_App.png";
import roboticsClub from "@/assets/uxui_screens/Robotics_Club_UI_Site_Web.png";
import waterlyApp from "@/assets/uxui_screens/Waterly_App.png";

export interface DesignProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  platform: string;
  tools: string[];
  screenshots: string[];
  prototypeUrl?: string;
  caseStudy?: {
    overview: string;
    problem: string;
    uxDirection: string;
    visualDirection: string;
    outcome: string;
  };
}

export const designProjects: DesignProject[] = [
  {
    id: "seatlr",
    title: "SeatLr",
    tagline: "Seat Reservation Experience",
    description:
      "A seat reservation app designed with a clean, focused flow that guides users from browsing to booking with minimal friction.",
    role: "UI/UX Designer",
    platform: "Mobile App",
    tools: ["Figma"],
    screenshots: [seatLrFirst, seatLrSecond],
    caseStudy: {
      overview:
        "SeatLr is a mobile seat reservation application focused on making the booking process fast, clear, and pleasant.",
      problem:
        "Reservation flows are often cluttered and confusing, forcing users through unnecessary steps before reaching a booking.",
      uxDirection:
        "The experience was structured around a single, linear booking journey with clear visual hierarchy and obvious next actions.",
      visualDirection:
        "A calm, modern palette with generous spacing, rounded surfaces, and clear typographic hierarchy to keep the interface approachable.",
      outcome:
        "A polished reservation flow that reduces friction and communicates availability at a glance.",
    },
  },
  {
    id: "hamam",
    title: "Hamam Management",
    tagline: "Business Management Interface",
    description:
      "A management interface for a hamam business, designed to make daily operations simple and intuitive for the owner.",
    role: "UI/UX Designer",
    platform: "Mobile App",
    tools: ["Figma"],
    screenshots: [hamamApp],
    caseStudy: {
      overview:
        "A dedicated management app that helps a small business owner run daily operations from a single, clear dashboard.",
      problem:
        "Small business owners need a simple way to track services, clients, and revenue without complex enterprise tooling.",
      uxDirection:
        "The interface prioritizes the most frequent actions and surfaces key business data without overwhelming the user.",
      visualDirection:
        "A warm, welcoming palette with clear cards and readable metrics that feel approachable rather than corporate.",
      outcome:
        "An intuitive management experience that makes day-to-day operations feel effortless.",
    },
  },
  {
    id: "jabb",
    title: "Jabb",
    tagline: "Communication App Design",
    description:
      "A communication-focused app design with a clean, modern interface built around clarity and ease of use.",
    role: "UI/UX Designer",
    platform: "Mobile App",
    tools: ["Figma"],
    screenshots: [jabbApp],
    caseStudy: {
      overview:
        "Jabb is a messaging and communication app designed to keep conversations organized and effortless.",
      problem:
        "Communication apps often bury important actions and make navigation feel heavy and slow.",
      uxDirection:
        "The design keeps the conversation at the center, with a minimal toolbar and clear visual separation between elements.",
      visualDirection:
        "A fresh, light interface with strong contrast and a friendly accent color to make the app feel alive.",
      outcome:
        "A streamlined communication experience that feels fast, focused, and human.",
    },
  },
  {
    id: "nahid-store",
    title: "Nahid Creation Store",
    tagline: "E-commerce Store Experience",
    description:
      "An e-commerce store design for Nahid Creation, presenting products in a visually rich and shoppable layout.",
    role: "UI/UX Designer",
    platform: "Mobile App",
    tools: ["Figma"],
    screenshots: [nahidStore],
    caseStudy: {
      overview:
        "A mobile storefront for Nahid Creation that showcases products beautifully and makes browsing feel effortless.",
      problem:
        "Online stores need to balance visual appeal with clear product information and an obvious path to purchase.",
      uxDirection:
        "The layout leads the eye from product imagery to details and action, creating a natural shopping rhythm.",
      visualDirection:
        "A refined, product-first aesthetic with elegant typography and a palette that lets the products shine.",
      outcome:
        "A store experience that feels premium and makes products the hero of every screen.",
    },
  },
  {
    id: "robotics-club",
    title: "Robotics Club CMC",
    tagline: "Community Website Design",
    description:
      "A website design for Robotics Club CMC — a student community passionate about robotics, AI, and innovation.",
    role: "UI/UX Designer",
    platform: "Web",
    tools: ["Figma"],
    screenshots: [roboticsClub],
    caseStudy: {
      overview:
        "A web presence for Robotics Club CMC that communicates the energy of a student robotics community.",
      problem:
        "The club needed a site that felt modern and inspiring while clearly presenting its mission and activities.",
      uxDirection:
        "The design uses bold sections and strong imagery to tell the club's story and guide visitors toward engagement.",
      visualDirection:
        "A tech-forward palette with energetic accents that reflect the innovation and creativity of the community.",
      outcome:
        "A website that captures the spirit of the club and invites students to get involved.",
    },
  },
  {
    id: "waterly",
    title: "Waterly",
    tagline: "Hydration Tracking App",
    description:
      "A hydration tracking app design that makes building healthy water habits simple, visual, and motivating.",
    role: "UI/UX Designer",
    platform: "Mobile App",
    tools: ["Figma"],
    screenshots: [waterlyApp],
    caseStudy: {
      overview:
        "Waterly helps users build better daily hydration habits through clear tracking and gentle motivation.",
      problem:
        "People struggle to stay consistent with hydration because tracking feels tedious and disconnected from progress.",
      uxDirection:
        "The experience centers on a simple daily goal with visual progress that makes success tangible.",
      visualDirection:
        "A fresh, water-inspired palette with soft gradients and friendly data visualization that feels calm and encouraging.",
      outcome:
        "A habit-forming experience that turns daily hydration into a simple, rewarding routine.",
    },
  },
];

export const designProcess = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the product, users, and business goals before opening Figma.",
  },
  {
    number: "02",
    title: "Define",
    description: "Frame the problem, map user flows, and define the experience architecture.",
  },
  {
    number: "03",
    title: "Design",
    description: "Craft wireframes, visual systems, and polished high-fidelity interfaces.",
  },
  {
    number: "04",
    title: "Prototype",
    description: "Bring screens to life with interactive prototypes that validate the flow.",
  },
  {
    number: "05",
    title: "Build",
    description: "Translate the design into real, working products with clean code.",
  },
];