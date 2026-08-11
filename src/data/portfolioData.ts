import passportPhoto from './PASSPORT PHOTO 2.png';
import {
  SkillCategory,
  Project,
  Experience,
  Education,
  Certification,
  Achievement,
  LeetCodeStats
} from '../types';

export const PERSONAL_INFO = {
  name: 'Venkatesh Erla',
  title: 'Software Engineer | Java Developer | Aspiring AI/ML Engineer',
  subtitles: [
    'Software Engineer',
    'Java Full Stack Developer',
    'Aspiring AI/ML Engineer',
    'Certified ServiceNow CAD & CSA'
  ],
  tagline: 'Building high-throughput Java microservices, intelligent AI platforms, and automated ServiceNow enterprise workflows.',
  aboutSummary: `I am a forward-thinking Software Engineer with a deep passion for scalable backend systems, machine learning intelligence, and enterprise automation. With expertise spanning Java Spring Boot microservices, React, PyTorch, and ServiceNow App Engine, I bridge the gap between robust software engineering and cutting-edge artificial intelligence. I have solved 100+ algorithmic challenges on LeetCode and earned top credentials including ServiceNow Certified Application Developer (CAD) and Certified System Administrator (CSA).`,
  email: 'venkatesherla21@gmail.com',
  phone: '+91 7670872362',
  location: 'Hyderabad, India (Open to Remote & Relocation)',
  github: 'https://github.com/erlavenkatesh',
  linkedin: 'https://linkedin.com/in/erlavenkatesh',
  leetcode: 'https://leetcode.com/erlavenkatesh',
  resumeDownloadUrl: '#resume-download',
  avatarUrl: passportPhoto,
  metrics: [
    { label: 'Projects Completed', value: '18+' },
    { label: 'Certifications', value: '3' },
    { label: 'LeetCode Solved', value: '100+' },
    { label: 'Hackathon Rank', value: '1st' },
    { label: 'Tech Stack Mastery', value: '25+' }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    iconName: 'Code',
    description: 'Core languages used for high-performance software engineering & algorithmic problem solving.',
    skills: [
      { name: 'Java (8/11/17)', level: 95, iconName: 'Coffee', category: 'languages', description: 'OOP, Collections, Streams, Concurrency, JVM Tuning', isPopular: true },
      { name: 'Python', level: 90, iconName: 'Terminal', category: 'languages', description: 'Data Analysis, ML/DL frameworks, Scripting, FastAPI', isPopular: true },
      { name: 'SQL', level: 88, iconName: 'Database', category: 'languages', description: 'Complex Joins, Indexing, Query Optimization, Stored Procedures' },
      { name: 'JavaScript / TypeScript', level: 85, iconName: 'FileCode', category: 'languages', description: 'ES6+, Async/Await, Type Definitions, DOM manipulation', isPopular: true },
      { name: 'C++', level: 80, iconName: 'Cpu', category: 'languages', description: 'Memory Management, STL, Competitive Programming' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Microservices',
    iconName: 'Server',
    description: 'Enterprise backend architecture, microservices, and high-concurrency RESTful APIs.',
    skills: [
      { name: 'Spring Boot', level: 92, iconName: 'Layers', category: 'backend', description: 'REST APIs, Dependency Injection, Auto-configuration', isPopular: true },
      { name: 'Spring Security & JWT', level: 88, iconName: 'Shield', category: 'backend', description: 'OAuth2, Role-Based Access Control (RBAC), Token Validation' },
      { name: 'Hibernate / Spring Data JPA', level: 90, iconName: 'Database', category: 'backend', description: 'ORM Mapping, Entity Relationships, JPQL/Native Queries' },
      { name: 'Microservices & Spring Cloud', level: 85, iconName: 'Cloud', category: 'backend', description: 'Eureka Discovery, API Gateway, Resilience4j Circuit Breakers', isPopular: true },
      { name: 'Apache Kafka & Redis', level: 82, iconName: 'Zap', category: 'backend', description: 'Event Streaming, Pub/Sub Messaging, Distributed Caching' },
      { name: 'Node.js & Express', level: 84, iconName: 'Server', category: 'backend', description: 'Asynchronous event loops, RESTful endpoints, middleware' }
    ]
  },
  {
    id: 'aiml',
    title: 'AI & Machine Learning',
    iconName: 'Brain',
    description: 'State-of-the-art AI integration, deep learning models, natural language processing, and Generative AI.',
    skills: [
      { name: 'Generative AI & LLM Architectures', level: 92, iconName: 'Sparkles', category: 'aiml', description: 'LLM Prompt Engineering, RAG Architecture, AI Chatbots', isPopular: true },
      { name: 'PyTorch & TensorFlow', level: 85, iconName: 'Activity', category: 'aiml', description: 'Neural Networks, CNNs, Model Training & Fine-Tuning', isPopular: true },
      { name: 'Scikit-Learn & Machine Learning', level: 88, iconName: 'Sliders', category: 'aiml', description: 'Classification, Regression, Clustering, XGBoost, Isolation Forest' },
      { name: 'NLP & HuggingFace', level: 84, iconName: 'MessageSquare', category: 'aiml', description: 'Text Vectorization, Embeddings, Sentiment Analysis, TF-IDF' },
      { name: 'OpenCV & Computer Vision', level: 80, iconName: 'Eye', category: 'aiml', description: 'Image Processing, Feature Extraction, Object Detection' }
    ]
  },
  {
    id: 'servicenow',
    title: 'ServiceNow Platform',
    iconName: 'Workflow',
    description: 'Certified ServiceNow Application Development and System Administration for enterprise workflows.',
    skills: [
      { name: 'ServiceNow CAD (Certified App Dev)', level: 94, iconName: 'CheckCircle', category: 'servicenow', description: 'Scoped Applications, App Engine Studio, Module Design', isPopular: true },
      { name: 'ServiceNow CSA (Certified Sys Admin)', level: 92, iconName: 'CheckCircle', category: 'servicenow', description: 'System Configuration, Users & Roles, ACL Security Rules', isPopular: true },
      { name: 'Flow Designer & IntegrationHub', level: 90, iconName: 'GitBranch', category: 'servicenow', description: 'Automated Multi-step Workflows, REST/SOAP Spoke integrations' },
      { name: 'Service Portal & Jelly Scripting', level: 88, iconName: 'Layout', category: 'servicenow', description: 'Custom Widgets, AngularJS, HTML/CSS, Client & Server Scripts' }
    ]
  },
  {
    id: 'web',
    title: 'Web & Frontend Development',
    iconName: 'Layout',
    description: 'Modern, interactive user experiences with responsive design and sleek animations.',
    skills: [
      { name: 'React.js', level: 90, iconName: 'Atom', category: 'web', description: 'Hooks, Custom Hooks, Context API, Component Lifecycle', isPopular: true },
      { name: 'Tailwind CSS', level: 92, iconName: 'Palette', category: 'web', description: 'Utility-First Styling, Custom Themes, Responsive Design', isPopular: true },
      { name: 'HTML5 & CSS3', level: 95, iconName: 'Globe', category: 'web', description: 'Semantic Markup, Flexbox, CSS Grid, Glassmorphism' },
      { name: 'Redux Toolkit / State Mgmt', level: 85, iconName: 'Sliders', category: 'web', description: 'Centralized State, Slices, Thunks, Async Handling' }
    ]
  },
  {
    id: 'databases',
    title: 'Databases & DevOps',
    iconName: 'HardDrive',
    description: 'Database management, containerization, version control, and cloud infrastructure.',
    skills: [
      { name: 'MySQL & PostgreSQL', level: 90, iconName: 'Database', category: 'databases', description: 'Relational Schema Design, Normalization, Query Optimization', isPopular: true },
      { name: 'MongoDB', level: 82, iconName: 'FileText', category: 'databases', description: 'NoSQL Document Store, Aggregation Pipelines, Mongoose' },
      { name: 'Docker', level: 85, iconName: 'Box', category: 'databases', description: 'Dockerfile, Containerization, Docker Compose, Multi-stage builds', isPopular: true },
      { name: 'Git & GitHub', level: 92, iconName: 'GitCommit', category: 'databases', description: 'Branching Strategies, Merge Resolution, Pull Requests, Actions' },
      { name: 'AWS Cloud Basics', level: 80, iconName: 'Cloud', category: 'databases', description: 'EC2, S3, IAM, CloudWatch, Lambda Functions' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'ai-resume-matcher',
    title: 'AI Smart Resume & Recruiter Matcher',
    tagline: 'Generative AI candidate screening, semantic job matching engine & interactive chatbot.',
    category: 'AI / ML',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    description: 'An intelligent candidate screening platform that parses resumes, calculates semantic skill match scores against job postings, and features an interactive recruiter chat assistant.',
    longDescription: 'Engineered an AI-driven recruiter automation platform leveraging Generative AI, PyTorch, and React.js to streamline candidate evaluation. Parses PDF/Word resumes, extracts technical skills, identifies missing competencies, and engages recruiters via an interactive chat assistant.',
    features: [
      'Automated resume parsing and entity extraction using Generative AI models',
      'Semantic vector match score computation between applicant profile and job requirements',
      'Interactive AI Recruiter Chatbot for real-time candidate Q&A and technical evaluation',
      'Missing skills detection and tailored interview question set generation',
      'Recruiter candidate pipeline analytics dashboard with export options'
    ],
    techStack: ['Java', 'Spring Boot', 'React.js', 'Python', 'Generative AI', 'PyTorch', 'MySQL', 'REST API'],
    githubUrl: 'https://github.com/erlavenkatesh/ai-resume-matcher',
    liveUrl: 'https://github.com/erlavenkatesh/ai-resume-matcher',
    metrics: [
      { label: 'Match Accuracy', value: '95%' },
      { label: 'Screening Speed', value: '10x Faster' },
      { label: 'Parsed Resumes', value: '1,000+' }
    ],
    featured: true
  },
  {
    id: 'blockchain-certificate-auth',
    title: 'Blockchain Certificate Authentication System',
    tagline: 'Decentralized certificate validation platform built with Ethereum smart contracts & SHA-256.',
    category: 'Java & Backend',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
    description: 'Built a decentralised certificate authentication platform with Ethereum smart contracts; optimised verification latency using SHA-256 hashing and Bloom Filter-based search.',
    longDescription: 'Developed an immutable academic and professional certificate verification system on the Ethereum blockchain. Implemented Solidity smart contracts for tamper-evident record keeping, integrated SHA-256 cryptographic hashing, and optimized search query latency via Bloom Filter indexing.',
    features: [
      'Solidity smart contract deployment for tamper-proof certificate issuance and verification',
      'SHA-256 cryptographic hashing ensuring document integrity and anti-forgery',
      'Bloom Filter algorithm implementation reducing search latency by 65%',
      'Java Spring Boot & Web3j integration layer connecting blockchain ledger to MySQL'
    ],
    techStack: ['Java', 'Ethereum', 'Smart Contracts', 'Solidity', 'MySQL', 'SHA-256', 'Web3j', 'Bloom Filters'],
    githubUrl: 'https://github.com/erlavenkatesh/blockchain-certificate-auth',
    liveUrl: 'https://github.com/erlavenkatesh/blockchain-certificate-auth',
    metrics: [
      { label: 'Latency Cut', value: '65%' },
      { label: 'Integrity', value: 'Immutable' }
    ],
    featured: true
  },
  {
    id: 'healthlink-telehealth',
    title: 'HealthLink — AI-Powered Telehealth Platform',
    tagline: 'Real-time health monitoring, wearable data ingestion & encrypted prescription management.',
    category: 'AI / ML',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    description: 'Architected backend REST services for real-time health monitoring, wearable data ingestion, and encrypted prescription management using Firebase cloud infrastructure; led cross-functional team of 4 engineers.',
    longDescription: 'Architected and led a 4-engineer team to build HealthLink, an AI-enhanced telehealth system. Features real-time vital sign tracking from wearable IoT devices, end-to-end encrypted prescription management, and Firebase cloud sync.',
    features: [
      'Real-time wearable sensor data ingestion via WebSocket and Firebase Realtime DB',
      'End-to-end AES-256 encrypted digital prescription management system',
      'Python AI engine for patient anomaly detection and health trend forecasting',
      'Cross-functional team leadership managing Agile sprints across backend and frontend'
    ],
    techStack: ['Python', 'Firebase', 'MySQL', 'React.js', 'REST API', 'AES-256', 'Tailwind CSS'],
    githubUrl: 'https://github.com/erlavenkatesh/healthlink-telehealth',
    liveUrl: 'https://github.com/erlavenkatesh/healthlink-telehealth',
    metrics: [
      { label: 'Team Led', value: '4 Engineers' },
      { label: 'Data Ingestion', value: 'Real-Time' }
    ],
    featured: false
  },
  {
    id: 'voting-management-system',
    title: 'Voting Management System',
    tagline: 'Secure full-stack polling application with Spring Boot backend & React.js frontend.',
    category: 'Java & Backend',
    image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1200&q=80',
    description: 'Engineered a secure full-stack poll application with Spring Boot backend and React.js frontend; implemented server-side duplicate vote prevention and validated all endpoints.',
    longDescription: 'Built a high-security voting and polling management platform using Java Spring Boot REST APIs, Spring Security, and MySQL database. Designed a responsive React.js frontend that enforces strict voter authentication, server-side duplicate vote prevention, and real-time tally visualization.',
    features: [
      'Server-side duplicate vote prevention and cryptographic voter token verification',
      'Robust RESTful API endpoints secured with JWT authentication and Spring Security',
      'Real-time poll result visualization charts in React.js frontend',
      'Optimized MySQL relational database schema with transactional integrity'
    ],
    techStack: ['Java', 'Spring Boot', 'REST API', 'React.js', 'MySQL', 'Spring Security', 'Tailwind CSS'],
    githubUrl: 'https://github.com/erlavenkatesh/voting-management-system',
    metrics: [
      { label: 'Security', value: '100% Tamper Proof' },
      { label: 'Response Time', value: '<50ms' }
    ],
    featured: true
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-javaml',
    role: 'Software Engineering Intern — ML & Backend',
    company: 'Deeksha Technologies',
    location: 'Remote',
    period: 'Dec 2025 - Mar 2026',
    type: 'Internship',
    summary: 'Designed smart contract/blockchain modules, developed Spring Boot REST APIs, and integrated machine learning models with MySQL.',
    responsibilities: [
      'Designed and deployed a blockchain application using Ethereum smart contracts for tamper-proof management of digital records and transactions.',
      'Built Spring Boot REST APIs and integrated MySQL; utilized cloud-based deployment infrastructure and practiced code review workflows with Git in a collaborative team environment.',
      'Integrated Python machine learning models and Java web services via REST API endpoints.',
      'Containerized application components using Docker and maintained CI/CD pipelines via GitHub Actions.'
    ],
    keyAchievements: [
      'Built a high-performance backend with tamper-proof blockchain verification.',
      'Improved API query speeds by 35% through SQL query optimization and JPA indexing.'
    ],
    technologies: ['Java 17', 'Spring Boot', 'Ethereum', 'Smart Contracts', 'React.js', 'Python', 'MySQL', 'Docker', 'REST APIs'],
    companyLogo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: 'exp-servicenow',
    role: 'ServiceNow Developer Intern',
    company: 'BrainOvision',
    location: 'Remote',
    period: 'May 2025 - Jun 2025',
    type: 'Internship',
    summary: 'Engineered custom ServiceNow scoped applications, automated enterprise ITSM workflows, and built Service Portal widgets.',
    responsibilities: [
      'Worked on incident, problem, and change management modules; developed and customized platform applications for enterprise workflow automation.',
      'Earned ServiceNow CSA (ID: 27498439) and CAD (ID: 27262933) certifications; collaborated with senior engineers on platform configuration and application development.',
      'Designed custom Service Portal widgets utilizing HTML, CSS, JavaScript, AngularJS, and Jelly scripting.',
      'Configured IntegrationHub spokes for REST API data exchange between ServiceNow and external enterprise tools.'
    ],
    keyAchievements: [
      'Earned ServiceNow Certified System Administrator (CSA ID: 27498439) & Certified Application Developer (CAD ID: 27262933) credentials.',
      'Streamlined ticket turnaround times through automated ITSM catalog workflows.'
    ],
    technologies: ['ServiceNow CAD', 'ServiceNow CSA', 'JavaScript', 'ITSM', 'Flow Designer', 'App Engine', 'Service Portal', 'REST APIs'],
    companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=120&q=80'
  }
];

export const EDUCATIONS: Education[] = [
  {
    id: 'edu-btech',
    degree: 'B.Tech',
    field: 'Artificial Intelligence & Machine Learning',
    institution: 'PBR Visvodaya Institute of Technology & Science (JNTUA)',
    location: 'Kavali, AP',
    period: '2022 - 2026',
    grade: '8.69 / 10',
    highlights: [
      'Relevant Coursework: Data Structures & Algorithms, OOP, DBMS, System Design, Software Engineering',
      'Dual ServiceNow Certified (CSA & CAD) and winner of multiple national level hackathons.'
    ],
    courses: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (Java)',
      'Database Management Systems (DBMS)',
      'System Design & Software Engineering',
      'Artificial Intelligence & Machine Learning'
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-servicenow-cad',
    title: 'ServiceNow Certified Application Developer (CAD)',
    issuer: 'ServiceNow',
    issueDate: '2025',
    credentialId: '27262933',
    badgeUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80',
    verifyUrl: 'https://partnerportal.service-now.com/verify',
    skillsLearned: ['Scoped Applications', 'App Engine Studio', 'Scripting (Client/Server)', 'Flow Designer', 'Service Portal']
  },
  {
    id: 'cert-servicenow-csa',
    title: 'ServiceNow Certified System Administrator (CSA)',
    issuer: 'ServiceNow',
    issueDate: '2025',
    credentialId: '27498439',
    badgeUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80',
    verifyUrl: 'https://partnerportal.service-now.com/verify',
    skillsLearned: ['System Administration', 'User & Access Controls', 'ACL Rules', 'CMDB', 'Workflow Automation']
  },
  {
    id: 'cert-dl-coursera',
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI / Coursera',
    issueDate: '2024',
    credentialId: 'DL-DEEP-33012',
    badgeUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80',
    verifyUrl: 'https://www.coursera.org/verify-specialization',
    skillsLearned: ['Convolutional Neural Networks (CNN)', 'Recurrent Neural Networks (RNN)', 'PyTorch & TensorFlow', 'Hyperparameter Tuning']
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-servicenow-certs',
    title: 'ServiceNow Dual Certifications (CSA & CAD)',
    category: 'Certification & Honor',
    date: '2025',
    organizer: 'ServiceNow',
    description: 'Earned ServiceNow CSA (ID: 27498439) & CAD (ID: 27262933) certifications demonstrating expertise in ITSM, platform admin, and cloud app development.',
    metric: 'CSA: 27498439 | CAD: 27262933',
    iconName: 'Star'
  },
  {
    id: 'ach-hackathons-1st',
    title: '1st Place — HackwithNellore & 48-hr GIST Hackathon',
    category: 'Hackathon',
    date: 'Apr 2026',
    organizer: 'Prayag 2k25 & GIST',
    description: 'Won 1st Place out of 70+ teams at HackwithNellore Hackathon and 1st Place at Geethanjali Institute 48-hr Hackathon.',
    metric: '1st Place out of 70+ Teams',
    iconName: 'Trophy'
  },
  {
    id: 'ach-national-hackathons',
    title: 'Winner of 7+ Hackathons & 20+ National Events',
    category: 'Competitive Coding',
    date: '2024 - 2026',
    organizer: 'National Coding Summits',
    description: 'Competed in 20+ national level hackathons, winning 7+ competitions with rapid AI and full stack Spring Boot prototypes.',
    metric: '7+ Wins | 20+ National Hackathons',
    iconName: 'Award'
  },
  {
    id: 'ach-leetcode',
    title: 'LeetCode Algorithmic Problem Solver',
    category: 'Algorithms',
    date: '2024 - 2026',
    organizer: 'LeetCode Community',
    description: 'Practiced Data Structures & Algorithms focusing on Data Structures, Algorithms, System Design, and OOP concepts.',
    metric: '100+ Problems Solved',
    iconName: 'Users'
  }
];

export const LEETCODE_STATS: LeetCodeStats = {
  totalSolved: 100,
  easySolved: 45,
  mediumSolved: 45,
  hardSolved: 10,
  ranking: 'Active Algorithmic Problem Solver',
  contestRating: 1650,
  badge: 'Active Problem Solver'
};

export const RECRUITER_SAMPLE_PROMPTS = [
  "What are Venkatesh's core skills in Java and Spring Boot?",
  "How experienced is Venkatesh with ServiceNow CAD and CSA?",
  "Tell me about his AI/ML projects and Generative AI experience.",
  "Why is Erla Venkatesh a strong candidate for a Full Stack / Backend role?",
  "What achievements and hackathons has Venkatesh won?"
];
