import { Resource, ForumTopic } from '@/types';

export const resources: Resource[] = [
  {
    id: '1',
    title: 'Understanding Anxiety',
    description: 'Learn about the causes, symptoms, and coping strategies for anxiety. This comprehensive guide covers everything from understanding triggers to practical techniques for managing anxious thoughts.',
    link: '#',
    category: 'Education',
  },
  {
    id: '2',
    title: 'Mindfulness & Meditation',
    description: 'Discover the power of mindfulness and meditation for mental wellbeing. Includes guided exercises and tips for building a sustainable practice.',
    link: '#',
    category: 'Self-Help',
  },
  {
    id: '3',
    title: 'Building Healthy Relationships',
    description: 'Explore strategies for developing and maintaining healthy relationships that support your mental health. Learn about communication, boundaries, and connection.',
    link: '#',
    category: 'Relationships',
  },
  {
    id: '4',
    title: 'Sleep & Mental Health',
    description: 'Understand the crucial connection between sleep and mental health. Get practical tips for improving sleep quality and establishing healthy routines.',
    link: '#',
    category: 'Wellness',
  },
  {
    id: '5',
    title: 'Stress Management Techniques',
    description: 'A collection of evidence-based stress management techniques including breathing exercises, progressive muscle relaxation, and cognitive reframing.',
    link: '#',
    category: 'Self-Help',
  },
  {
    id: '6',
    title: 'When to Seek Professional Help',
    description: 'Learn to recognize when professional support might be beneficial and how to take the first steps toward getting help.',
    link: '#',
    category: 'Professional Help',
  },
];

export const forumTopics: ForumTopic[] = [
  {
    id: 'general',
    title: 'General Support',
    description: 'A safe space for sharing experiences and supporting each other through life\'s challenges.',
    icon: '💬',
    postCount: 128,
  },
  {
    id: 'anxiety-depression',
    title: 'Anxiety & Depression Support',
    description: 'Connect with others who understand what you\'re going through. Share coping strategies and find encouragement.',
    icon: '🤗',
    postCount: 256,
  },
  {
    id: 'student-work',
    title: 'Student & Work Stress',
    description: 'Discuss academic pressure, workplace challenges, and finding balance in demanding environments.',
    icon: '📚',
    postCount: 89,
  },
  {
    id: 'motivation',
    title: 'Motivation & Positivity',
    description: 'Share uplifting stories, motivational tips, and positive affirmations to inspire each other.',
    icon: '✨',
    postCount: 167,
  },
];
