export interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  url: string;
  buttonClass: string;
}

export interface AvailabilityCard {
  icon: string;
  title: string;
  description: string;
}

export interface RecruiterHighlight {
  icon: string;
  title: string;
  description: string;
}

export interface ContactPageData {
  badge: string;
  title: string;
  description: string;
  contactInfo: ContactInfo[];
  socialLinks: SocialLink[];
  availability: AvailabilityCard;
  recruiterHighlights: RecruiterHighlight[];
}