export type ProjectType = "Frontend" | "Backend" | "Full-Stack";

export type ProjectStatus = "Completed" | "In Development";

export interface Project {
  id: string;
  slug: string;
  title: string;
  type: ProjectType;
  category: string;
  date: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  featured?: boolean;
  status?: ProjectStatus;
}
