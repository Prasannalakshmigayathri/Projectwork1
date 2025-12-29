import { ScreeningQuestion } from '@/types';

export const phq9Questions: ScreeningQuestion[] = [
  {
    id: 1,
    question: "Over the last 2 weeks, how often have you had little interest or pleasure in doing things?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" },
    ],
  },
  {
    id: 2,
    question: "Over the last 2 weeks, how often have you been feeling down, depressed, or hopeless?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" },
    ],
  },
  {
    id: 3,
    question: "Over the last 2 weeks, how often have you had trouble falling or staying asleep, or sleeping too much?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" },
    ],
  },
  {
    id: 4,
    question: "Over the last 2 weeks, how often have you been feeling tired or having little energy?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" },
    ],
  },
  {
    id: 5,
    question: "Over the last 2 weeks, how often have you had poor appetite or been overeating?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" },
    ],
  },
  {
    id: 6,
    question: "Over the last 2 weeks, how often have you been feeling bad about yourself — or that you are a failure or have let yourself or your family down?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" },
    ],
  },
  {
    id: 7,
    question: "Over the last 2 weeks, how often have you had trouble concentrating on things, such as reading the newspaper or watching television?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" },
    ],
  },
  {
    id: 8,
    question: "Over the last 2 weeks, how often have you been moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" },
    ],
  },
  {
    id: 9,
    question: "Over the last 2 weeks, how often have you had thoughts that you would be better off dead or of hurting yourself in some way?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" },
    ],
  },
];

export const getScoreInterpretation = (score: number) => {
  if (score <= 4) {
    return {
      severity: "Minimal",
      color: "success",
      recommendation: "Your responses suggest minimal symptoms. Continue practicing self-care and maintaining healthy habits. Remember, it's always okay to seek support if needed.",
    };
  } else if (score <= 9) {
    return {
      severity: "Mild",
      color: "warning",
      recommendation: "Your responses suggest mild symptoms. Consider implementing stress-reduction techniques, maintaining regular sleep schedules, and staying connected with supportive people. Watchful waiting and follow-up may be helpful.",
    };
  } else if (score <= 14) {
    return {
      severity: "Moderate",
      color: "warning",
      recommendation: "Your responses suggest moderate symptoms. We recommend speaking with a mental health professional who can provide personalized support and guidance. Consider booking an appointment through our platform.",
    };
  } else if (score <= 19) {
    return {
      severity: "Moderately Severe",
      color: "destructive",
      recommendation: "Your responses suggest moderately severe symptoms. We strongly encourage you to seek professional support. A mental health professional can help develop an appropriate treatment plan. Please consider booking an appointment soon.",
    };
  } else {
    return {
      severity: "Severe",
      color: "destructive",
      recommendation: "Your responses suggest severe symptoms. Please reach out to a mental health professional as soon as possible. If you're having thoughts of self-harm, please contact a crisis helpline immediately or visit your nearest emergency room.",
    };
  }
};
