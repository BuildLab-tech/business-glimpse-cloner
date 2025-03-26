
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

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
      <span className="ml-2 text-xl font-bold text-gray-800">Simpo.ai</span>
    </div>
  );
};

const LandingHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 px-8 bg-white shadow-md" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <Link to="/pricing" className="text-gray-700 hover:text-gray-900 transition-colors">
                Pricing
              </Link>
              <Link to="/blogs" className="text-gray-700 hover:text-gray-900 transition-colors">
                Blogs
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
                Contact Us
              </Link>
              <Link to="/signin" className="text-gray-700 hover:text-gray-900 transition-colors border-l pl-6 ml-2">
                Sign in
              </Link>
            </nav>
            
            <Button 
              asChild 
              className="text-white rounded-full py-2 px-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all"
            >
              <Link to="/register/business-info">
                Generate Website
              </Link>
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" className="text-gray-700" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link to="/pricing" className="text-gray-700 hover:text-gray-900 transition-colors">
                Pricing
              </Link>
              <Link to="/blogs" className="text-gray-700 hover:text-gray-900 transition-colors">
                Blogs
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
                Contact Us
              </Link>
              <Link to="/signin" className="text-gray-700 hover:text-gray-900 transition-colors">
                Sign in
              </Link>
              <Button 
                asChild 
                className="w-full text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-full py-2 px-6 transition-all"
              >
                <Link to="/register/business-info">
                  Generate Website
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default LandingHeader;
