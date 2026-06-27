export interface NavbarItem {
  label: string;
  route: string;
  icon: string;
  exact?: boolean;
}

export interface NavbarConfig {
  name: string;
  role: string;
  initials: string;
  resumeUrl: string;
  menuItems: NavbarItem[];
}