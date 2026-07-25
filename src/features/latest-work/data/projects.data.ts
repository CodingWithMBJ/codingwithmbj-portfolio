import type { Project } from "../types/project.types";

export const projects: Project[] = [
  {
    id: "finsight",
    slug: "finsight",
    title: "FinSight",
    type: "Full-Stack",
    category: "Financial Technology",
    date: "2026",
    description:
      "An AI-powered financial dashboard for managing portfolios, monitoring watchlists, analyzing holdings, and generating personalized investment insights.",
    image: "/images/projects/finsight.png",
    techStack: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Recharts",
      "FastAPI",
      "PostgreSQL",
    ],
    // githubLink: "https://github.com/Coding-Temple-Tech-Residency/FinSight-B",
    featured: true,
  },
  {
    id: "mechanic-shop-api",
    slug: "mechanic-shop-api",
    title: "Mechanic Shop API",
    type: "Backend",
    category: "REST API",
    date: "2025",
    description:
      "A RESTful shop management API for customers, mechanics, service tickets, inventory, authentication, and many-to-many service relationships.",
    image: "/images/projects/mechanic-shop-api.png",
    techStack: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "PostgreSQL",
      "JWT",
      "Swagger",
    ],
    githubLink: "https://github.com/CodingWithMBJ",
    featured: true,
  },
  {
    id: "ecommerce-firebase",
    slug: "ecommerce-firebase",
    title: "E-Commerce Store",
    type: "Frontend",
    category: "E-Commerce",
    date: "2025",
    description:
      "A responsive e-commerce application with Firebase integration, authentication, product queries, cart state, and component testing.",
    image: "/images/projects/ecommerce.png",
    techStack: [
      "React",
      "TypeScript",
      "Firebase",
      "Redux Toolkit",
      "TanStack Query",
      "Jest",
    ],
    githubLink:
      "https://github.com/CodingWithMBJ/ecommerce-typescript-firebase",
    featured: true,
  },
  {
    id: "task-manager-firebase",
    slug: "task-manager-app-w-firebase",
    title: "Task Manager App with Firebase",
    type: "Full-Stack",
    category: "Productivity Application",
    date: "",
    description:
      "A task management application with real-time task creation, editing, and deletion, Firebase authentication, persistent cloud storage, and responsive workflows.",
    image: "/images/projects/task-manager.png",
    techStack: [
      "React",
      "TypeScript",
      "Firebase",
      "Firestore",
      "Firebase Auth",
      "CSS",
    ],
    githubLink: "https://github.com/CodingWithMBJ/task-manager-app-w-firebase",
    featured: true,
  },
  {
    id: "js-memory-card-game",
    slug: "js-memory-card-game",
    title: "JavaScript Memory Card Game",
    type: "Frontend",
    category: "Interactive Game",
    date: "",
    description:
      "An interactive browser-based memory card game with card-matching logic, score tracking, reset functionality, responsive layouts, and animated visual feedback.",
    image: "/images/projects/memory-card-game.png",
    techStack: ["JavaScript", "HTML5", "CSS3", "DOM API"],
    githubLink: "https://github.com/CodingWithMBJ/js-memory-card-game",
    featured: true,
  },
  {
    id: "pet-adoption-workshop",
    slug: "pet-adoption-workshop",
    title: "Pet Adoption Workshop",
    type: "Frontend",
    category: "Web Application",
    date: "",
    description:
      "A responsive pet adoption application featuring dynamic pet listings, reusable adoption cards, filtering, accessible interface patterns, and organized component state.",
    image: "/images/projects/pet-adoption.png",
    techStack: ["React", "JavaScript", "CSS3", "Responsive Design"],
    githubLink: "https://github.com/CodingWithMBJ/pet-adoption-workshop",
    featured: false,
  },
  {
    id: "react-dynamic-form",
    slug: "react-dynamic-form",
    title: "React Dynamic Form",
    type: "Frontend",
    category: "Form Management",
    date: "",
    description:
      "A dynamic form application with reusable input components, controlled fields, conditional rendering, real-time validation, and scalable state-management patterns.",
    image: "/images/projects/react-dynamic-form.png",
    techStack: ["React", "JavaScript", "CSS3", "Form Validation"],
    githubLink: "https://github.com/CodingWithMBJ/react-dynamic-form",
    featured: false,
  },
];

export const latestProjects = projects.filter((project) => project.featured);

export const allProjects = projects;
