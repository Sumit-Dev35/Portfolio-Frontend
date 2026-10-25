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
        'Developed a visual workflow export feature in response to customer requirements, enabling users to download and save their workflows locally for review, cross-checking, documentation, and collaboration with team members. Implemented three export options—PDF, JPEG, and PNG—using dom-to-image to capture the workflow interface as an image and jsPDF to generate downloadable PDF documents. Integrated the export functionality into the Visual Builder, allowing users to convert their visual workflows into shareable formats for offline reference, team discussions, and workflow validation. This feature improved workflow accessibility, simplified documentation, and enabled users to share and review workflow designs outside the application.',
        'Integrated the Monaco Editor into the Visual Builder environment and implemented end-to-end code editing enhancements, including custom keyboard shortcuts, VS Code-style editor commands, and reusable code snippets. Developed multiple keyboard shortcuts to streamline repetitive coding tasks, reduce manual effort, and improve developer productivity. Implemented a custom snippet management feature that enabled users to create, save, and reuse their own code snippets for frequently repeated code patterns, reducing redundant typing and ensuring consistency across scripts. Integrated these capabilities into the editor to provide a familiar and efficient coding experience, improve workflow efficiency, and simplify script development within the application.',
        'Implemented real-time script compilation and error diagnostics for scripts written in multiple programming languages within Visual Builder nodes. Developed a debounced validation mechanism that triggered backend API calls after code changes, ensuring the latest script was compiled and validated while minimizing unnecessary requests. On the backend, developed custom regular expressions tailored to Ignio-specific syntax to identify and search for issue-related tokens within scripts, extract relevant diagnostic information, and return structured responses containing detected issues and their corresponding code positions. Integrated these backend diagnostics with the frontend code editor to display issues in real time, highlighting the affected code ranges with underlines and using distinct icons to differentiate errors, warnings, and other diagnostic states. Also implemented interactive issue handling, allowing users to click on reported issues to view details and access available resolution actions directly within the editor. This end-to-end implementation improved error detection, simplified debugging, and enabled users to identify and address script issues efficiently within the Visual Builder environment.',
        'Developed a Visual Builder feature for the Ignio-specific IWORKFLOW language to simplify code creation through a visual, low-code interface. Implemented a graph-based workflow editor in which individual code components were represented as nodes and connected using LeaderLine to define relationships and execution flow. Built configurable forms for each node, allowing users to provide the required inputs and configure the logic for specific code components without manually writing the entire code. Implemented the functionality to capture user inputs, construct the corresponding code for each node, and transform the configured visual workflow into valid IWORKFLOW grammar when users saved their work. This feature bridged the gap between visual workflow design and language-specific code generation, making IWORKFLOW development more accessible, reducing manual coding effort, and simplifying the creation and management of complex workflows.',
        'Worked on the Code-to-Description project, contributing to both frontend and backend development. Developed an interactive and user-friendly frontend interface to guide users through the code submission, processing, and description generation workflow. Implemented REST APIs on the backend to integrate with a third-party library developed by another team, handling API communication, processing the library’s raw output, and transforming it into meaningful, structured, application-specific data. Designed API responses to make the processed information accessible to the frontend and integrated the APIs with the user interface to enable seamless data exchange and display generated code descriptions. Contributed to the end-to-end application workflow by connecting frontend components, backend business logic, and third-party functionality, with a focus on data transformation, API integration, workflow simplification, and overall application usability.'
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
