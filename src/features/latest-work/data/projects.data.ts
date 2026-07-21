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
    githubLink: "https://github.com/Coding-Temple-Tech-Residency/FinSight-B",
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
];

export const latestProjects = projects
  .filter((project) => project.featured)
  .slice(0, 3);
