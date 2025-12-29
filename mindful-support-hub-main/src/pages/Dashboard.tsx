import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  MessageCircle, 
  ClipboardCheck, 
  Calendar, 
  BookOpen, 
  Users,
  ArrowRight 
} from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  color: string;
}

const FeatureCard = ({ title, description, icon, onClick, color }: FeatureCardProps) => (
  <Card 
    className="cursor-pointer hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
    onClick={onClick}
  >
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <div 
          className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${color}`}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
      </div>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Chatbot',
      description: 'Talk to our AI companion for support and coping strategies',
      icon: <MessageCircle className="h-6 w-6 text-primary-foreground" />,
      onClick: () => navigate('/chatbot'),
      color: 'gradient-primary',
    },
    {
      title: 'Mental Health Screening',
      description: 'Take a quick self-assessment to understand your wellbeing',
      icon: <ClipboardCheck className="h-6 w-6 text-primary-foreground" />,
      onClick: () => navigate('/screening'),
      color: 'bg-success',
    },
    {
      title: 'Book Appointment',
      description: 'Schedule a session with a mental health professional',
      icon: <Calendar className="h-6 w-6 text-accent-foreground" />,
      onClick: () => navigate('/appointment'),
      color: 'bg-accent',
    },
    {
      title: 'Resources',
      description: 'Access helpful articles, guides, and educational materials',
      icon: <BookOpen className="h-6 w-6 text-secondary-foreground" />,
      onClick: () => navigate('/resources'),
      color: 'bg-secondary',
    },
  ];

  return (
    <Layout title="Mental Health">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            How are you feeling today?
          </h1>
          <p className="text-muted-foreground">
            Choose an option below to get started on your wellness journey
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-4 sm:grid-cols-2 mb-8 stagger-children">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Peer Forum - Full Width */}
        <Card 
          className="cursor-pointer overflow-hidden group hover:shadow-card-hover transition-all duration-300 animate-slide-up"
          style={{ animationDelay: '0.5s' }}
          onClick={() => navigate('/forum')}
        >
          <div className="relative">
            <div className="absolute inset-0 gradient-hero opacity-90" />
            <CardContent className="relative p-8 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-card/20 backdrop-blur-sm mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-primary-foreground mb-2">
                Peer Support Forum
              </h2>
              <p className="text-primary-foreground/90 mb-4 max-w-md mx-auto">
                Connect with others who understand. Share experiences, find encouragement, and build community.
              </p>
              <Button variant="secondary" size="lg" className="group-hover:translate-x-1 transition-transform">
                Join the Community
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </div>
        </Card>

        {/* Crisis Disclaimer */}
        <Card className="mt-8 border-warning/30 bg-warning/5 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <CardContent className="p-4 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-warning">Need immediate help?</span> If you're in crisis, please call{' '}
              <a href="tel:988" className="text-primary font-medium hover:underline">988</a> (US) or your local emergency services.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;
