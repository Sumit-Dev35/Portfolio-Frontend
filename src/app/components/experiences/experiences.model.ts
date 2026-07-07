export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  current: boolean;
  logo?: string;
  summary: string;
  technologies: string[];
  achievements: string[];
  highlights: {
    icon: string;
    value: string;
    label: string;
  }[];
}

export interface ExperienceSection {
  badge: string;
  title: string;
  subtitle: string;
  experiences: Experience[];
}