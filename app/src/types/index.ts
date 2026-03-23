export type UserMode = 'recruiter' | 'developer' | 'hr' | null;

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  metrics?: string;
  image?: string;
  video?: string;
  github?: string;
  demo?: string;
  date: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  company?: string;
  description: string;
  projects: Project[];
  skills: string[];
  image?: string;
  video?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PersonalInfo {
  name: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  summary: string;
}
