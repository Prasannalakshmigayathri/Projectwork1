import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon, User, Mail, Phone, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const Appointment = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });
  const [date, setDate] = useState<Date>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone || !date) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    toast.success('Appointment booked successfully!');
  };

  if (isSubmitted) {
    return (
      <Layout title="Appointment Confirmed" showBack>
        <div className="container mx-auto px-4 py-8 max-w-md">
          <Card className="animate-scale-in text-center">
            <CardContent className="pt-8 pb-8">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-success/10 mb-6">
                <CheckCircle2 className="h-10 w-10 text-success" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Appointment Confirmed!
              </h2>
              <p className="text-muted-foreground mb-6">
                We've received your booking request. A confirmation email will be sent to {formData.email}.
              </p>
              <div className="p-4 rounded-xl bg-secondary mb-6 text-left">
                <p className="text-sm text-muted-foreground">Appointment Details:</p>
                <p className="font-medium text-foreground">{formData.fullName}</p>
                <p className="text-sm text-muted-foreground">
                  {date && format(date, 'EEEE, MMMM d, yyyy')}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button onClick={() => navigate('/dashboard')}>
                  Return to Dashboard
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ fullName: '', email: '', phone: '' });
                    setDate(undefined);
                  }}
                >
                  Book Another Appointment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Book Appointment" showBack>
      <div className="container mx-auto px-4 py-8 max-w-md">
        <Card className="animate-scale-in">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Book an Appointment</CardTitle>
            <CardDescription>
              Schedule a session with a mental health professional
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Date Picker */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Preferred Date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        'w-full justify-start text-left font-normal',
                        !date && 'text-muted-foreground'
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, 'PPP') : 'Pick a date'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? 'Booking...' : 'Book Appointment'}
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-6">
              Our team will contact you within 24 hours to confirm your appointment.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Appointment;
