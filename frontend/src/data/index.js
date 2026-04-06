// ── Projects ──────────────────────────────────────────────────

export const PROJECTS = [
  {
    id: 'prepwise-ai',
    title: 'PrepWise-AI',
    year: 2025,
    category: 'AI Application',
    featured: true,
    color: '#fbbf24',
    description: 'AI-powered interview preparation platform for personalized technical practice.',
    longDesc:
      'PrepWise-AI is a full-stack interview preparation platform designed to help users prepare for technical interviews through AI-generated, domain-specific questions and explanations. It uses Gemini 2.0 API to create tailored interview content based on selected roles and domains. The platform also includes secure JWT authentication with RBAC, scalable MongoDB-based storage, and performance optimizations such as React Query caching and lazy loading.',
    techStack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Gemini 2.0 API',
      'JWT',
      'Tailwind CSS',
      'React Query',
    ],
    githubUrl: 'https://github.com/ashishmusmade45/PrepWise-AI',
    highlights: [
      'Generated domain-specific interview questions and AI-based explanations using Gemini 2.0 API',
      'Implemented JWT authentication with RBAC for secure session and access control',
      'Improved performance using React Query, caching, and lazy loading',
      'Structured MongoDB collections for scalable storage and fast retrieval',
    ],
  },
  {
    id: 'codeverse-ai',
    title: 'CodeVerse-AI',
    year: 2025,
    category: 'AI Application',
    featured: true,
    color: '#2dd4bf',
    description: 'AI-powered code review platform for bug detection, logic analysis, and performance feedback.',
    longDesc:
      'CodeVerse-AI is an intelligent code review platform that helps developers improve code quality through AI-driven analysis. Users can submit code snippets and receive structured feedback on bugs, logic issues, and performance bottlenecks using Gemini 2.0 API. The platform includes Clerk-based authentication, PostgreSQL with Prisma ORM for persistent review history, and RESTful backend services built with Node.js and Express.js.',
    techStack: [
      'React.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma ORM',
      'Clerk Auth',
      'Gemini 2.0 API',
      'Tailwind CSS',
    ],
    githubUrl: 'https://github.com/ashishmusmade45/CodeVerse-AI',
    highlights: [
      'Analyzed user-submitted code using Gemini 2.0 API for bugs and logic issues',
      'Built secure backend services with Clerk authentication and RESTful APIs',
      'Managed persistent code review history using PostgreSQL and Prisma ORM',
      'Reduced manual review effort through automated AI-powered workflows',
    ],
  },
  {
    id: 'getyourstay',
    title: 'GetYourStay',
    year: 2024,
    category: 'Full Stack',
    featured: true,
    color: '#fb7185',
    description: 'Full-featured accommodation booking platform with search, booking, and location-based discovery.',
    longDesc:
      'GetYourStay is a full-stack accommodation booking platform that allows users to browse, search, and book stays through a smooth end-to-end workflow. It features secure authentication, property listing management, real-time availability checks, and booking lifecycle handling. The project integrates Google Maps API for location-based property discovery and Cloudinary for optimized media management, while EJS server-side rendering ensures faster initial page loads.',
    techStack: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'EJS',
      'Google Maps API',
      'Cloudinary',
    ],
    githubUrl: 'https://github.com/ashishmusmade45/GetYourStay',
    highlights: [
      'Built a complete accommodation booking workflow with secure authentication',
      'Developed RESTful APIs for property management and booking lifecycle',
      'Integrated Google Maps API for location-based property search',
      'Used Cloudinary and EJS for optimized media handling and faster rendering',
    ],
  },
];
// ── Skills ─────────────────────────────────────────────────────

export const SKILLS = [
  { name: 'JavaScript', level: 90, category: 'Languages', color: '#60a5fa' },
  { name: 'C++',        level: 82, category: 'Languages', color: '#60a5fa' },
  { name: 'Python',     level: 76, category: 'Languages', color: '#60a5fa' },
  { name: 'SQL',        level: 78, category: 'Languages', color: '#60a5fa' },

  { name: 'React.js',     level: 88, category: 'Frontend', color: '#22d3ee' },
  { name: 'Tailwind CSS', level: 85, category: 'Frontend', color: '#22d3ee' },
  { name: 'HTML & CSS',   level: 92, category: 'Frontend', color: '#22d3ee' },

  { name: 'Node.js',    level: 84, category: 'Backend', color: '#06b6d4' },
  { name: 'Express.js', level: 83, category: 'Backend', color: '#06b6d4' },
  { name: 'REST APIs',  level: 87, category: 'Backend', color: '#06b6d4' },

  { name: 'MongoDB',    level: 82, category: 'Databases', color: '#a78bfa' },
  { name: 'PostgreSQL', level: 74, category: 'Databases', color: '#a78bfa' },

  { name: 'Git & GitHub', level: 88, category: 'Tools', color: '#c084fc' },
  { name: 'Vite',         level: 75, category: 'Tools',  color: '#c084fc' },
];

export const SKILL_CATEGORIES = ['Languages', 'Frontend', 'Backend', 'Databases', 'Tools'];



// ── Education ──────────────────────────────────────────────────

export const EDUCATION = [
  {
    id: 'edu-1',
    degree: 'B.E. Artificial Intelligence & Data Science',
    institution: 'D Y Patil College of Engineering, Akurdi',
    location: 'Pune, Maharashtra',
    duration: '2022 – 2026',
    cgpa: '8.30 / 10',
    highlights: [
      'Relevant coursework: DSA, DBMS, OS, Machine Learning, Web Technology',

    ],
  },
  {
    id: 'edu-2',
    degree: 'Higher Secondary (12th) — Science',
    institution: 'BSKP College',
    location: 'Ahemadnagar, Maharashtra',
    duration: '2020 – 2022',
    percentage: '74.67%',
    highlights: [],
  },
    {
    id: 'edu-3',
    degree: 'Secondary (10th) ',
    institution: 'PHSK',
    location: 'Ahemadnagar, Maharashtra',
    duration: '2019 – 2020',
    percentage: '85.60',
    highlights: [

    ],
  },
];


