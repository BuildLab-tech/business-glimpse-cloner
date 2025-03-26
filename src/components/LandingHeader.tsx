
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg 
      className={cn("h-8 w-8", className)} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="8" fill="white" />
      <path d="M9 9L23 23M23 9L9 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

const LandingHeader: React.FC = () => {
  return (
    <header className="w-full py-6 px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center">
          <Logo className="text-white" />
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
