export type ThemeMode = 'dark' | 'light';

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  iconName: string;
  category: string;
  description?: string;
  isPopular?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'AI / ML' | 'Java & Backend' | 'ServiceNow' | 'Full Stack' | 'Featured';
  image: string;
  description: string;
  longDescription: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  metrics?: { label: string; value: string }[];
  featured: boolean;
  architectureDiagram?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Internship' | 'Full-time' | 'Contract';
  summary: string;
  responsibilities: string[];
  keyAchievements: string[];
  technologies: string[];
  companyLogo?: string;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  highlights: string[];
  courses: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  badgeUrl: string;
  verifyUrl: string;
  skillsLearned: string[];
}

export interface Achievement {
  id: string;
  title: string;
  category: 'Hackathon' | 'Academic' | 'Award' | 'Leadership' | 'Certification & Honor' | 'Competitive Coding' | 'Algorithms';
  date: string;
  organizer: string;
  description: string;
  metric?: string;
  iconName: string;
}

export interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: string;
  contestRating: number;
  badge: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
