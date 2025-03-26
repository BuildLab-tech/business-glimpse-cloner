
import React from 'react';
import { cn } from '@/lib/utils';

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
        <rect width="32" height="32" rx="8" fill="currentColor" fillOpacity="0.1" />
        <path d="M8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 24C13.7909 24 12 22.2091 12 20C12 17.7909 13.7909 16 16 16C18.2091 16 20 17.7909 20 20C20 22.2091 18.2091 24 16 24Z" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="2" />
      </svg>
      <span className="ml-2 text-xl font-bold text-white">Simpo.ai</span>
    </div>
  );
};

const LandingHeader: React.FC = () => {
  return (
    <header className="w-full py-6 px-8 bg-gradient-to-r from-primary/80 to-primary">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center">
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
