export type ProjectCategory = 'all' | 'ml' | 'web' | 'systems' | 'cad';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  shortDescription: string;
  problemStatement?: string;
  highlights?: string[];
  tags: string[];
  codeUrl?: string;
  demoUrl?: string;
  notice?: string;
  stats?: string;
  featured?: boolean;
  image?: string;
}

export interface SkillItem {
  name: string;
  iconName: string;
  level?: 'Core' | 'Advanced' | 'Applied';
}

export interface SkillCategory {
  title: string;
  iconName: string;
  proficiency: 'Core' | 'Advanced' | 'Applied';
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl: string;
  image: string;
  summary: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  courses: string[];
}

export interface StatItem {
  label: string;
  value: string;
  icon: string;
  isDynamic?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username?: string;
}

export interface ExploringTopic {
  title: string;
  description: string;
  category: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
