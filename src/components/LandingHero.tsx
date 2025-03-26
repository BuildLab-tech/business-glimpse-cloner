
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingHero: React.FC = () => {
  const [businessType, setBusinessType] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/register/location');
  };
  
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 sm:px-6 animate-fade-in">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up">
          AI that builds a<br />website for you.
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto animate-fade-up animate-delay-100">
          Get your business online in 30 seconds with the<br className="hidden md:block" />
          #1 AI website builder and marketing platform.
        </p>
        
        <div className="w-full max-w-xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden animate-fade-up animate-delay-200">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch">
            <div className="flex-grow p-4 sm:p-6">
              <Input
                type="text"
                placeholder="Retail"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full h-full text-lg border-none focus:ring-0 px-2"
              />
            </div>
            
            <div className="p-4 sm:p-3">
              <Button 
                type="submit"
                className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-amber-900 font-medium text-lg py-6 px-6 rounded-lg transition-all"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Generate website
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
