export type ProjectCategory = "webApp" | "mobile" | "uiUx" | "openSource";

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: ProjectCategory;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}
