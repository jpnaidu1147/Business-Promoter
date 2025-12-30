export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isTyping?: boolean;
}

export enum Section {
  HOME = 'home',
  SERVICES = 'services',
  ABOUT = 'about',
  ORACLE = 'oracle',
  CONTACT = 'contact'
}