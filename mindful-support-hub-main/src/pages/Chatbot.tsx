import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Bot, User, Calendar, Heart, Wind } from 'lucide-react';
import { ChatMessage } from '@/types';
import { getChatbotResponse, disclaimer } from '@/data/chatbotResponses';

const quickActions = [
  { label: 'I feel anxious', icon: <Wind className="h-4 w-4" /> },
  { label: 'I need help', icon: <Heart className="h-4 w-4" /> },
  { label: 'Book Appointment', icon: <Calendar className="h-4 w-4" /> },
];

const Chatbot = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm here to support you. How are you feeling today? Remember, this is a safe space - there's no judgment here. 💙",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Handle appointment booking
    if (text.toLowerCase().includes('book appointment')) {
      navigate('/appointment');
      return;
    }

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = getChatbotResponse(text);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <Layout title="Chatbot" showBack>
      <div className="container mx-auto px-4 py-6 h-[calc(100vh-4rem)]">
        <div className="grid lg:grid-cols-[1fr,280px] gap-6 h-full">
          {/* Chat Area */}
          <Card className="flex flex-col h-full overflow-hidden">
            {/* Disclaimer */}
            <div className="p-3 border-b border-border bg-warning/5 text-xs text-muted-foreground">
              {disclaimer}
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 animate-slide-up ${
                      message.role === 'user' ? 'flex-row-reverse' : ''
                    }`}
                  >
                    <div
                      className={`h-9 w-9 rounded-full flex items-center justify-center shrink-0 ${
                        message.role === 'user'
                          ? 'bg-primary'
                          : 'gradient-primary'
                      }`}
                    >
                      {message.role === 'user' ? (
                        <User className="h-5 w-5 text-primary-foreground" />
                      ) : (
                        <Bot className="h-5 w-5 text-primary-foreground" />
                      )}
                    </div>
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground rounded-br-md'
                          : 'bg-secondary text-secondary-foreground rounded-bl-md'
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {message.content}
                      </p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-3 animate-fade-in">
                    <div className="h-9 w-9 rounded-full gradient-primary flex items-center justify-center">
                      <Bot className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="bg-secondary text-secondary-foreground rounded-2xl rounded-bl-md px-4 py-3">
                      <div className="flex gap-1">
                        <span className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse" style={{ animationDelay: '0ms' }} />
                        <span className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse" style={{ animationDelay: '150ms' }} />
                        <span className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isTyping}
                  className="flex-1"
                />
                <Button type="submit" disabled={!input.trim() || isTyping}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </Card>

          {/* Quick Actions Sidebar */}
          <div className="hidden lg:flex flex-col gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="quickAction"
                      className="w-full justify-start gap-2"
                      onClick={() => sendMessage(action.label)}
                    >
                      {action.icon}
                      {action.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="flex-1">
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-3">Breathing Exercise</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Try the 4-7-8 technique for relaxation:
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">1.</span>
                    Breathe in for 4 seconds
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">2.</span>
                    Hold for 7 seconds
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">3.</span>
                    Exhale for 8 seconds
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-medium">4.</span>
                    Repeat 3-4 times
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chatbot;
