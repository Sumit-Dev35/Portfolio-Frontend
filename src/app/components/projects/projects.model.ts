export interface UpcomingProject {
  title: string;
  icon: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl: string;
  type: 'Professional' | 'Personal' | 'Learning';
}