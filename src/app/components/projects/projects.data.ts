import { Project, UpcomingProject } from './projects.model';

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'Developer Portfolio',
    subtitle: 'Angular • TypeScript • Bootstrap',

    description:
      'Modern portfolio website built using reusable Angular architecture, model-driven rendering and responsive UI design.',

    image: 'images/sumit_portfolio_image.png',

    technologies: ['Angular', 'TypeScript', 'Bootstrap', 'RxJS', 'Angular Router'],

    highlights: [
      'Reusable Components',
      'Data Driven Rendering',
      'Responsive Design',
      'Clean Architecture',
    ],

    githubUrl: '#',
    liveUrl: '#',

    type: 'Personal',
  },

  {
    id: 2,
    title: 'Room Reservation System',

    subtitle: 'HTML • CSS • JavaScript • Bootstrap',

    description:
      'Room booking platform supporting filtering, reservation flow, cart management and responsive user experience.',

    image: 'images/room_reservation_image.png',

    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],

    highlights: ['Booking Workflow', 'Search & Filters', 'Responsive UI', 'Cart Management'],

    githubUrl: '#',
    liveUrl: '#',

    type: 'Personal',
  },

  {
    id: 3,
    title: 'Backend Engineering Lab',

    subtitle: 'Spring Boot • Java • REST APIs',

    description:
      'Ongoing backend learning project focused on API design, authentication, database integration and enterprise architecture.',

    image: 'assets/projects/backend-lab.png',

    technologies: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'Maven'],

    highlights: ['REST APIs', 'Authentication', 'Database Design', 'Exception Handling'],

    githubUrl: '#',
    liveUrl: '#',

    type: 'Learning',
  },

  {
    id: 4,
    title: 'Cloud Learning Journey',

    subtitle: 'AWS • Docker • DevOps',

    description:
      'Hands-on exploration of cloud deployment, containerization, CI/CD pipelines and scalable infrastructure practices.',

    image: 'assets/projects/cloud-learning.png',

    technologies: ['AWS', 'Docker', 'Linux', 'GitHub Actions'],

    highlights: ['Containerization', 'Cloud Concepts', 'CI/CD', 'Deployment'],

    githubUrl: '#',
    liveUrl: '#',

    type: 'Learning',
  },
];

export const UPCOMING_PROJECTS: UpcomingProject[] = [
  {
    title: 'Microservices Architecture Lab',
    icon: 'bi-diagram-3',
    description:
      'Building independent Spring Boot services with API Gateway, Service Discovery and Inter-Service Communication.',
    technologies: ['Spring Boot', 'Microservices', 'Eureka', 'API Gateway'],
  },
  {
    title: 'Dockerized Full Stack Application',
    icon: 'bi-box',
    description:
      'Containerizing Angular, Spring Boot and MongoDB applications using Docker and Docker Compose.',
    technologies: ['Docker', 'Docker Compose', 'Angular', 'Spring Boot'],
  },
  {
    title: 'AWS Cloud Deployment',
    icon: 'bi-cloud',
    description:
      'Deploying full stack applications on AWS with monitoring, scaling and security best practices.',
    technologies: ['AWS', 'EC2', 'S3', 'CloudWatch'],
  },
  {
    title: 'System Design Playground',
    icon: 'bi-cpu',
    description:
      'Studying scalable architectures, caching, load balancing and distributed systems fundamentals.',
    technologies: ['System Design', 'Redis', 'Caching', 'Scalability'],
  },
];
