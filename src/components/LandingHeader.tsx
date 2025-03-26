
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <svg 
        className="h-8 w-8 text-primary" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="8" fill="#1EAEDB" />
        <path d="M8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24" stroke="#FF9D00" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 24C13.7909 24 12 22.2091 12 20C12 17.7909 13.7909 16 16 16C18.2091 16 20 17.7909 20 20C20 22.2091 18.2091 24 16 24Z" fill="#FF9D00" stroke="#FF9D00" strokeWidth="2" />
      </svg>
      <span className="ml-2 text-xl font-bold text-white">Simpo.ai</span>
    </div>
  );
};

const LandingHeader: React.FC = () => {
  return (
    <header className="w-full py-4 px-8 bg-black">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <Link to="/pricing" className="text-white hover:text-gray-300 transition-colors">
                Pricing
              </Link>
              <Link to="/blogs" className="text-white hover:text-gray-300 transition-colors">
                Blogs
              </Link>
              <Link to="/contact" className="text-white hover:text-gray-300 transition-colors">
                Contact Us
              </Link>
              <Link to="/signin" className="text-white hover:text-gray-300 transition-colors border-l pl-6 ml-2">
                Sign in
              </Link>
            </nav>
            
            <Button 
              asChild 
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2 px-6"
            >
              <Link to="/register/business-info">
                Generate Website
              </Link>
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
