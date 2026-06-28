export interface QuickFact {
  icon: string;
  label: string;
  value: string;
}

export interface Expertise {
  icon: string;
  title: string;
  description: string;
}

export interface Timeline {
  year: string;
  title: string;
  company: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Highlight {
  icon: string;
  title: string;
  description: string;
}

export interface AboutData {
  badge: string;
  headline: string;
  name: string;
  role: string;
  subtitle: string;

  introduction: string;
  journey: string;
  currentRole: string;
  previousRole: string;
  competitiveProgramming: string;

  quickFacts: QuickFact[];
  expertise: Expertise[];
  timeline: Timeline[];
  skills: string[];
  metrics: Metric[];
  highlights: Highlight[];
  interests: string[];

  ctaTitle: string;
  ctaDescription: string;
}