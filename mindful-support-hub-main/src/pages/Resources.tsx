import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { resources } from '@/data/resources';
import { ExternalLink, BookOpen, Heart, Users, Moon } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'Education': <BookOpen className="h-5 w-5" />,
  'Self-Help': <Heart className="h-5 w-5" />,
  'Relationships': <Users className="h-5 w-5" />,
  'Wellness': <Moon className="h-5 w-5" />,
  'Professional Help': <ExternalLink className="h-5 w-5" />,
};

const Resources = () => {
  return (
    <Layout title="Resources" showBack>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Helpful Resources
          </h1>
          <p className="text-muted-foreground">
            Educational materials and guides to support your mental health journey
          </p>
        </div>

        {/* Resource Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 stagger-children">
          {resources.map((resource) => (
            <Card
              key={resource.id}
              className="group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {categoryIcons[resource.category] || <BookOpen className="h-5 w-5" />}
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {resource.category}
                  </span>
                </div>
                <CardTitle className="text-lg mt-4 group-hover:text-primary transition-colors">
                  {resource.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {resource.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="calm" className="w-full gap-2">
                  Read More
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Resources Banner */}
        <Card className="mt-8 border-primary/20 bg-primary/5 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Need More Support?
            </h3>
            <p className="text-muted-foreground mb-4">
              Connect with our community or speak with a professional for personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" onClick={() => window.location.href = '/forum'}>
                Join Peer Forum
              </Button>
              <Button onClick={() => window.location.href = '/appointment'}>
                Book Appointment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Resources;
