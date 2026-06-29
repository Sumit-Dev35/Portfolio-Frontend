import { SkillsData } from './skills.model';

export const SKILLS_DATA: SkillsData = {
  badge: 'Technical Expertise',
  title: 'Skills & Technologies',
  subtitle:
    'Full Stack Engineer with experience building enterprise applications using Angular, React, Spring Boot, Node.js and MongoDB.',
  categories: [
    {
      title: 'Programming Languages',
      icon: 'bi-code-slash',
      skills: ['Java', 'C++', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
    },
    {
      title: 'Frontend Development',
      icon: 'bi-window-stack',
      skills: [
        'Angular',
        'React',
        'RxJS',
        'HTML5',
        'CSS3',
        'Bootstrap',
        'Angular Material',
        'Responsive Design',
        'Angular Formly',
        'Web Worker',
      ],
    },
    {
      title: 'Backend Development',
      icon: 'bi-server',
      skills: [
        'Spring Boot',
        'Node.js',
        'Express.js',
        'REST APIs',
        'JWT',
        'Authentication',
        'Microservices',
      ],
    },
    {
      title: 'Databases',
      icon: 'bi-database-fill',
      skills: ['MongoDB', 'MySQL', 'Database Design', 'Query Optimization'],
    },

    {
      title: 'Cloud & DevOps',
      icon: 'bi-cloud-fill',
      skills: ['Git', 'GitHub', 'Linux', 'CI/CD'],
    },

    {
      title: 'Computer Science Fundamentals',
      icon: 'bi-cpu-fill',
      skills: [
        'Data Structures',
        'Algorithms',
        'OOP',
        'DBMS',
        'Operating Systems',
        'Computer Networks',
        'System Design',
        'Design Patterns',
      ],
    },
  ],
  expertise: [
    {
      icon: 'bi-window-sidebar',
      title: 'Frontend Engineering',
      description: 'Building responsive and scalable web applications using Angular and React.',
    },
    {
      icon: 'bi-server',
      title: 'Backend Engineering',
      description: 'Developing secure REST APIs and enterprise-grade backend services.',
    },
    {
      icon: 'bi-diagram-3-fill',
      title: 'Full Stack Development',
      description: 'Creating end-to-end applications from database design to UI implementation.',
    },
    {
      icon: 'bi-lightning-charge-fill',
      title: 'Performance Optimization',
      description: 'Improving application performance, maintainability and developer productivity.',
    },
    {
      icon: 'bi-trophy-fill',
      title: 'Competitive Programming',
      description: 'Strong algorithmic and problem-solving skills through competitive coding.',
    },
    {
      icon: 'bi-cpu-fill',
      title: 'System Design',
      description: 'Understanding scalable architectures and software design principles.',
    },
  ],
  stats: [
    {
      value: '2+',
      label: 'Years Experience',
    },
    {
      value: '2000+',
      label: 'Problems Solved',
    },
    {
      value: '10+',
      label: 'Production Features',
    },
    {
      value: '2264',
      label: 'LeetCode Rating',
    },
  ],
  platforms: [
    {
      icon: 'bi-code-square',
      title: 'LeetCode',
      value: 'Guardian • 2264',
    },
    {
      icon: 'bi-cup-hot-fill',
      title: 'CodeChef',
      value: '4★ • 1895',
    },
    {
      icon: 'bi-bar-chart-fill',
      title: 'Codeforces',
      value: 'Specialist • 1477',
    },
  ],
  certifications: [
    {
      title: 'Python Programming',
      provider: 'Professional Certification',
      icon: 'bi-patch-check-fill',
    },
    {
      title: 'Data Structures & Algorithms',
      provider: 'Professional Training',
      icon: 'bi-patch-check-fill',
    },
    {
      title: 'Java Programming',
      provider: 'Professional Certification',
      icon: 'bi-patch-check-fill',
    },
  ],
  tools: [
    'Git',
    'GitHub',
    'VS Code',
    'IntelliJ IDEA',
    'Postman',
    'MongoDB Compass',
    'Jira',
    'npm',
    'Maven',
    'Webpack',
  ],
  interests: [
    'System Design',
    'Developer Tools',
    'Backend Architecture',
    'Performance Optimization',
    'Competitive Programming',
    'Open Source',
  ],
  softSkills: [
    'Problem Solving',
    'Communication',
    'Ownership',
    'Leadership',
    'Team Collaboration',
    'Adaptability',
    'Analytical Thinking',
    'Mentoring',
  ],
};
