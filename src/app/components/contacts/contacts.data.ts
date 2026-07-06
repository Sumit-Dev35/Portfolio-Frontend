import { ContactPageData } from './contacts.model';

export const CONTACT_DATA: ContactPageData = {

  badge: 'Open to Frontend • Backend • Full Stack • Software Engineering Opportunities',

  title: "Let's Build Something Amazing Together",

  description:
    'I am actively looking for Frontend, Backend, Full Stack and Software Engineering opportunities. Whether you have an exciting project, a challenging engineering problem, or a great career opportunity, I would love to connect and discuss how I can contribute.',

  contactInfo: [

    {
      icon: 'bi-telephone-fill',
      title: 'Phone',
      value: '+91 63929 96530',
      link: 'tel:+916392996530'
    },

    {
      icon: 'bi-envelope-fill',
      title: 'Email',
      value: 'sumittiwari.dev.2001@gmail.com',
      link: 'mailto:sumittiwari.dev.2001@gmail.com'
    },

    {
      icon: 'bi-geo-alt-fill',
      title: 'Location',
      value: 'Pune, Maharashtra, India',
      link: 'https://maps.google.com/?q=Pune'
    }

  ],

  socialLinks: [

    {
      icon: 'bi-linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/sumit-tiwari-b7a5b1222',
      buttonClass: 'btn-outline-primary'
    },

    {
      icon: 'bi-github',
      label: 'GitHub',
      url: 'https://github.com/sumit',
      buttonClass: 'btn-outline-dark'
    },

    {
      icon: 'bi-code-square',
      label: 'LeetCode',
      url: 'https://leetcode.com/u/yourusername/',
      buttonClass: 'btn-outline-warning'
    },

    {
      icon: 'bi-cup-hot',
      label: 'CodeChef',
      url: 'https://www.codechef.com/users/yourusername',
      buttonClass: 'btn-outline-success'
    },

    {
      icon: 'bi-bar-chart-fill',
      label: 'Codeforces',
      url: 'https://codeforces.com/profile/yourusername',
      buttonClass: 'btn-outline-danger'
    },

    {
      icon: 'bi-file-earmark-person-fill',
      label: 'Resume',
      url: '/assets/Sumit_Tiwari_Resume.pdf',
      buttonClass: 'btn-outline-secondary'
    }

  ],

  availability: {

    icon: 'bi-lightning-charge-fill',

    title: 'Available Immediately',

    description:
      'Currently open to Frontend, Backend, Full Stack Developer and Software Engineer opportunities. I usually respond within 24 hours.'

  },

  recruiterHighlights: [

    {
      icon: 'bi-briefcase-fill',
      title: '1.5+ Years Experience',
      description:
        'Professional experience building enterprise-grade web applications using Angular, Spring Boot, Node.js and MongoDB.'
    },

    {
      icon: 'bi-cpu-fill',
      title: 'Full Stack Development',
      description:
        'Experience across frontend, backend, REST APIs, databases, performance optimization and scalable architecture.'
    },

    {
      icon: 'bi-trophy-fill',
      title: 'Competitive Programmer',
      description:
        'LeetCode Guardian (2264), CodeChef 4★, Codeforces Specialist with strong algorithmic and problem-solving skills.'
    },

    {
      icon: 'bi-rocket-takeoff-fill',
      title: 'Fast Learner',
      description:
        'Continuously learning Backend Engineering, Cloud Technologies, System Design and modern software architecture.'
    }

  ]

};