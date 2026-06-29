import { NavbarConfig } from './navbar.model';

export const NAVBAR_CONFIG: NavbarConfig = {
  name: 'Sumit Tiwari',
  role: 'Full Stack Developer',
  initials: 'ST',
  resumeUrl: '/Sumit_Tiwari_Software_Dev_Resume _Updated.pdf',

  menuItems: [
    {
      label: 'Home',
      route: '/home',
      icon: 'bi-house-door',
      exact: true
    },
    {
      label: 'About',
      route: '/about',
      icon: 'bi-person'
    },
    {
      label: 'Skills',
      route: '/skills',
      icon: 'bi-code-slash'
    },
    {
      label: 'Projects',
      route: '/projects',
      icon: 'bi-folder2-open'
    },
    {
      label: 'Experience',
      route: '/experience',
      icon: 'bi-briefcase'
    },
    {
      label: 'Contact',
      route: '/contact',
      icon: 'bi-envelope'
    }
  ]
};