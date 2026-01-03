
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  matrixCode: string;
  imageUrl?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  accentColor: string; // 'blue', 'cyan', or 'purple'
}

export enum AppRoute {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  PORTFOLIO = 'portfolio',
  CONTACT = 'contact',
  ORACLE = 'oracle',
  BLOG = 'blog',
  BLOG_POST = 'blog_post'
}
