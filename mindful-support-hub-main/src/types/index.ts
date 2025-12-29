export interface User {
  id: string;
  username: string;
  email: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ScreeningQuestion {
  id: number;
  question: string;
  options: { value: number; label: string }[];
}

export interface ScreeningResponse {
  questionId: number;
  value: number;
}

export interface Appointment {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  date: Date;
  createdAt: Date;
}

export interface ForumTopic {
  id: string;
  title: string;
  description: string;
  icon: string;
  postCount: number;
}

export interface ForumPost {
  id: string;
  topicId: string;
  author: string;
  content: string;
  createdAt: Date;
  replies: ForumReply[];
}

export interface ForumReply {
  id: string;
  postId: string;
  author: string;
  content: string;
  createdAt: Date;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  link: string;
  category: string;
}
