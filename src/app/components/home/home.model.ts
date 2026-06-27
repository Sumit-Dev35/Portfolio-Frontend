export interface HighlightItem {
  icon: string;
  text: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  url: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Achievement {
  icon: string;
  title: string;
  subtitle: string;
}

export interface HeroData {
  availabilityText: string;
  name: string;
  role: string;
  description: string;
  highlights: HighlightItem[];
  techStack: string[];
  socialLinks: SocialLink[];
  stats: StatItem[];
  achievements: Achievement[];
}