import type { AboutDetail, AboutStat } from "../types/about.types";

export const aboutParagraphs = [
  "I am a full-stack software engineer focused on building responsive frontend experiences, secure APIs, and maintainable application architecture.",
  "My work combines React and TypeScript on the frontend with Python, Flask, FastAPI, SQLAlchemy, and PostgreSQL on the backend.",
  "I enjoy transforming ideas into practical products with clear user experiences, reliable data flows, and code that teams can continue to develop.",
];

export const aboutStats: AboutStat[] = [
  {
    id: "focus",
    value: "Full-Stack",
    label: "Development focus",
  },
  {
    id: "frontend",
    value: "React + TS",
    label: "Frontend foundation",
  },
  {
    id: "backend",
    value: "Python APIs",
    label: "Backend foundation",
  },
];

export const aboutDetails: AboutDetail[] = [
  {
    id: "location",
    label: "Based in",
    value: "Saint Paul, Minnesota",
  },
  {
    id: "education",
    label: "Education",
    value: "Coding Temple — Full Stack Software Engineering",
  },
  {
    id: "availability",
    label: "Current focus",
    value: "Building, learning, and seeking software engineering opportunities",
  },
];
