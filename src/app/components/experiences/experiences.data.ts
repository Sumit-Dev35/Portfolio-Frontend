import { ExperienceSection } from './experiences.model';

export const EXPERIENCE_DATA: ExperienceSection = {
  badge: 'Professional Journey',
  title: 'Work Experience',
  subtitle:
    'Building scalable enterprise applications, developer tooling, and full-stack solutions across product and service-based organizations.',

  experiences: [
    {
      company: 'Tata Consultancy Services (Digitate)',
      role: 'Full Stack Developer',
      location: 'Pune, Maharashtra',
      duration: 'May 2025 - Present',
      current: true,

      summary:
        'Working on enterprise-grade developer productivity platforms with Angular, Java, Monaco Editor and workflow automation systems.',

      technologies: [
        // Frontend
        'Angular',
        'React.js',
        'Angular Material',
        'Angular Formly',
        'TypeScript',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'Bootstrap',
        'Responsive Web Design',

        // Backend
        'Java',
        'Spring Boot',
        'Node.js',
        'Express.js',
        'REST APIs',
        'RESTful Web Services',
        'JSON',

        // Database
        'MongoDB',
        'MySQL',

        // Cloud & DevOps
        'Amazon Web Services (AWS)',
        'Kubernetes',
        'Jenkins',
        'Maven',
        'Git',
        'GitLab',
        'CI/CD',

        // Tools & IDEs
        'Visual Studio Code',
        'Eclipse IDE',
        'Postman',
        'Monaco Editor',
        'Prettier',

        // Performance & Browser APIs
        'Web Workers',
        'Lazy Loading',
        'Performance Optimization',
        'DOM Manipulation',
        'jsPDF',
        'dom-to-image',

        // Computer Science Fundamentals
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Database Management Systems',
        'Operating Systems',
        'Computer Networks',
        'System Design',
        'Problem Solving',
        'Clean Architecture',
        'Design Patterns',

        // Development Practices
        'Agile',
        'Scrum',
        'Debugging',
        'Code Review',
        'Unit Testing',
      ],

      highlights: [
        {
          icon: 'bi-code-slash',
          value: 'Developer Tools',
          label: 'Enterprise Scale',
        },
        {
          icon: 'bi-lightning-charge',
          value: 'Real-Time',
          label: 'Compilation Engine',
        },
        {
          icon: 'bi-file-earmark-pdf',
          value: 'PDF/Image',
          label: 'Workflow Export',
        },
      ],

      achievements: [
        'Developed visual workflow export feature using dom-to-image and jsPDF.',
        'Integrated Monaco Editor with custom snippets and VS Code style shortcuts.',
        'Built auto-compile mechanism with debouncing and real-time error highlighting.',
        'Designed Java REST compilation service and Angular integration.',
        'Optimized compile requests and improved frontend-backend communication.',
        'Followed enterprise-grade coding standards and scalable architecture practices.',
      ],
    },

    {
      company: 'upGrad Education Pvt. Ltd.',
      role: 'Full Stack Developer',
      location: 'Noida, Uttar Pradesh',
      duration: 'July 2024 - May 2025',
      current: false,

      summary:
        'Contributed to large-scale education platforms by building user-facing applications, analytics integrations and MEAN stack solutions.',

      technologies: [
        'Angular',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Angular Material',
        'Bootstrap',
        'CleverTap',
      ],

      highlights: [
        {
          icon: 'bi-graph-up-arrow',
          value: 'Analytics',
          label: 'User Insights',
        },
        {
          icon: 'bi-window',
          value: 'UI/UX',
          label: 'Interactive Interfaces',
        },
        {
          icon: 'bi-database',
          value: 'MEAN',
          label: 'Full Stack',
        },
      ],

      achievements: [
        'Implemented CleverTap event tracking and analytics.',
        'Designed and optimized Angular Material based UI components.',
        'Added comprehensive API logging and monitoring.',
        'Worked on MEAN stack applications serving thousands of learners.',
        'Collaborated with product teams for data-driven improvements.',
        'Learned enterprise software development and scalability practices.',
      ],
    },
  ],
};
