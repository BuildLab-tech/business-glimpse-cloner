
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, ChevronLeft, ArrowRight, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BusinessLocationFormProps {
  onNext: () => void;
  onBack: () => void;
}

const BusinessLocationForm: React.FC<BusinessLocationFormProps> = ({ onNext, onBack }) => {
  const [location, setLocation] = useState('');
  
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
      <div className="p-8">
        <div className="flex justify-center items-center mb-8">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
            <MapPin className="h-8 w-8 text-primary" />
          </div>
        </div>

        <button 
          onClick={onBack}
          className="text-primary flex items-center mb-4 font-medium hover:underline transition-all"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back
        </button>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Where is your business located?</h1>
        
        <div className="relative mt-6">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          
          <Input 
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your location"
            className="pl-10 pr-10 py-6 border border-gray-300 rounded-lg w-full focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          
          {location && (
            <button 
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
              onClick={() => setLocation('')}
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        
        <Button 
          onClick={onNext}
          disabled={!location}
          className={cn(
            "w-full mt-6 py-6 bg-primary hover:bg-primary/90 text-white rounded-lg flex items-center justify-center",
            !location && "opacity-70 cursor-not-allowed"
          )}
        >
          Next
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        
        <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
          <Globe className="h-4 w-4 mr-2" />
          Website Language 
          <span className="text-primary font-medium ml-2 flex items-center">
            English
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
              <path d="M8 0.5C3.85786 0.5 0.5 3.85786 0.5 8C0.5 12.1421 3.85786 15.5 8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85786 12.1421 0.5 8 0.5ZM8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8C13.5 11.0376 11.0376 13.5 8 13.5Z" fill="#6366F1" />
              <path d="M8 4.5C6.61929 4.5 5.5 5.61929 5.5 7C5.5 8.38071 6.61929 9.5 8 9.5C9.38071 9.5 10.5 8.38071 10.5 7C10.5 5.61929 9.38071 4.5 8 4.5Z" fill="#6366F1" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BusinessLocationForm;
