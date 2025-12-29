import { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Heart, LogOut, ChevronLeft } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  showBack?: boolean;
}

const Layout = ({ children, title, showBack = false }: LayoutProps) => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const showHeader = isAuthenticated && location.pathname !== '/login';

  return (
    <div className="min-h-screen gradient-calm">
      {showHeader && (
        <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {showBack && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigate(-1)}
                  className="mr-1"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              )}
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => navigate('/dashboard')}
              >
                <div className="h-9 w-9 rounded-lg gradient-primary flex items-center justify-center shadow-card">
                  <Heart className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-semibold text-lg text-foreground">
                  {title || 'Mental Health'}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground hidden sm:inline">
                Welcome, {user?.username}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="gap-2"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          </div>
        </header>
      )}
      <main className={showHeader ? 'pb-8' : ''}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
