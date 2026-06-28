export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface ExpertiseCard {
  icon: string;
  title: string;
  description: string;
}

export interface SkillStat {
  value: string;
  label: string;
}

export interface Certification {
  title: string;
  provider: string;
  icon: string;
}

export interface PlatformAchievement {
  icon: string;
  title: string;
  value: string;
}

export interface SkillsData {
  badge: string;
  title: string;
  subtitle: string;
  categories: SkillCategory[];
  expertise: ExpertiseCard[];
  tools: string[];
  interests: string[];
  softSkills: string[];
  certifications: Certification[];
  platforms: PlatformAchievement[];
  stats: SkillStat[];
}
