interface ChatResponse {
  keywords: string[];
  responses: string[];
}

const chatResponses: ChatResponse[] = [
  {
    keywords: ['anxious', 'anxiety', 'worried', 'nervous', 'panic'],
    responses: [
      "I hear that you're feeling anxious. That's a completely valid feeling. Would you like to try a quick breathing exercise? Take a deep breath in for 4 seconds, hold for 4 seconds, and exhale for 4 seconds. Repeat this a few times.",
      "Anxiety can feel overwhelming, but remember - you've gotten through difficult moments before. Let's focus on what you can control right now. What's one small thing that usually helps you feel calmer?",
      "When anxiety strikes, grounding techniques can help. Try naming 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste.",
    ],
  },
  {
    keywords: ['sad', 'depressed', 'down', 'unhappy', 'hopeless'],
    responses: [
      "I'm sorry you're feeling this way. It takes courage to express these feelings. Remember, it's okay to not be okay sometimes. Would you like to talk more about what's been weighing on you?",
      "Your feelings are valid, and you don't have to face them alone. Sometimes just acknowledging how we feel is a big first step. Have you been able to do anything that usually brings you comfort?",
      "Depression can make everything feel heavy. Small steps matter - even getting out of bed or drinking water is an achievement. What's one tiny thing you could do for yourself right now?",
    ],
  },
  {
    keywords: ['stress', 'stressed', 'overwhelmed', 'pressure', 'too much'],
    responses: [
      "Stress can really pile up. Let's try to break things down - what feels like the biggest source of stress right now? Sometimes tackling one thing at a time makes it more manageable.",
      "When we're stressed, our bodies often hold tension. Try rolling your shoulders back, unclenching your jaw, and taking three deep breaths. How does that feel?",
      "It sounds like you have a lot on your plate. Remember, it's okay to say no and set boundaries. Your mental health matters just as much as your responsibilities.",
    ],
  },
  {
    keywords: ['sleep', 'insomnia', 'tired', 'exhausted', 'rest'],
    responses: [
      "Sleep difficulties can really affect our mental health. Try creating a calming bedtime routine - no screens 30 minutes before bed, dim lights, and maybe some calming music or reading.",
      "Being tired can make everything feel harder. Have you tried any relaxation techniques before bed? Progressive muscle relaxation can be really helpful.",
      "Rest is so important for our wellbeing. If sleep has been difficult, consider keeping a sleep diary to identify patterns. Would you like some tips for better sleep hygiene?",
    ],
  },
  {
    keywords: ['help', 'need help', 'struggling', 'support'],
    responses: [
      "I'm here for you. Asking for help is a sign of strength, not weakness. What kind of support would feel most helpful right now?",
      "You've taken an important step by reaching out. I'm here to listen and support you. Would you like to talk about what's been going on, or would you prefer some coping strategies?",
      "I'm glad you reached out. Remember, you don't have to have everything figured out. Let's take this one step at a time together.",
    ],
  },
  {
    keywords: ['angry', 'frustrated', 'mad', 'irritated'],
    responses: [
      "It's okay to feel angry - it's a natural emotion. What matters is how we express it. Would you like to try some techniques for managing anger in a healthy way?",
      "Anger often signals that something important to us feels threatened. What do you think might be underlying this feeling?",
      "When we're frustrated, taking a step back can help. Try the 5-4-3-2-1 technique: count down from 5, taking a breath between each number.",
    ],
  },
  {
    keywords: ['lonely', 'alone', 'isolated', 'no friends'],
    responses: [
      "Feeling lonely is really hard. Remember, connection can come in many forms. Have you considered joining a support group or community activity?",
      "Loneliness is more common than we realize. You're not alone in feeling this way. Our peer support forum might be a great place to connect with others who understand.",
      "Even small connections matter. Is there anyone - a family member, old friend, or neighbor - you could reach out to today, even just with a text?",
    ],
  },
  {
    keywords: ['appointment', 'book', 'therapist', 'counselor', 'professional'],
    responses: [
      "That's a great step! Speaking with a professional can provide personalized support. You can book an appointment through our 'Book Appointment' feature. Would you like me to guide you there?",
      "Seeking professional help shows real self-awareness. Our appointment booking system makes it easy to schedule a session. Remember, there's no shame in getting support.",
    ],
  },
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening'],
    responses: [
      "Hello! I'm here to support you. How are you feeling today? Remember, there are no wrong answers here.",
      "Hi there! Welcome. I'm your mental health support companion. What's on your mind?",
      "Hey! I'm glad you're here. How can I help you today?",
    ],
  },
  {
    keywords: ['thank', 'thanks', 'helpful'],
    responses: [
      "You're welcome! Remember, reaching out takes courage. I'm always here if you need support.",
      "I'm glad I could help. Take care of yourself, and don't hesitate to come back anytime.",
    ],
  },
];

const defaultResponses = [
  "Thank you for sharing. I'm here to listen. Would you like to tell me more about how you're feeling?",
  "I appreciate you opening up. Remember, there's no judgment here. What would feel most supportive right now?",
  "I hear you. Sometimes just expressing our thoughts can be helpful. Is there anything specific you'd like to explore?",
  "Thank you for trusting me with this. Would you like to try some coping techniques, or would you prefer to just talk?",
];

export const getChatbotResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  for (const response of chatResponses) {
    if (response.keywords.some(keyword => lowerMessage.includes(keyword))) {
      return response.responses[Math.floor(Math.random() * response.responses.length)];
    }
  }
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};

export const disclaimer = "⚠️ Important: I'm an AI support companion, not a licensed therapist. This is not a substitute for professional mental health care. If you're in crisis or having thoughts of self-harm, please contact a crisis helpline immediately (988 in the US) or visit your nearest emergency room.";
