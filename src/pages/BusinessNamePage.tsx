
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import LandingHeader from '@/components/LandingHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronLeft, ArrowRight, PenTool, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const BusinessNamePage = () => {
  const navigate = useNavigate();
  const [businessName, setBusinessName] = useState('');
  
  const steps = [
    { id: 'business-info', label: 'Business Info', isCompleted: true, isCurrent: false },
    { id: 'location', label: 'Location', isCompleted: true, isCurrent: false },
    { id: 'business-name', label: 'Business Name', isCompleted: false, isCurrent: true },
  ];

  const handleNext = () => {
    navigate('/register/building');
  };

  const handleBack = () => {
    navigate('/register/location');
  };

  return (
    <div className="min-h-screen flex flex-col bg-black bg-grid">
      <LandingHeader />
      
      <div className="mt-4">
        <ProgressIndicator steps={steps} />
      </div>
      
      <div className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
          <div className="p-8">
            <div className="flex justify-center items-center mb-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <PenTool className="h-8 w-8 text-primary" />
              </div>
            </div>

            <button 
              onClick={handleBack}
              className="text-primary flex items-center mb-4 font-medium hover:underline transition-all"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back
            </button>
            
            <h1 className="text-2xl font-bold text-gray-800 mb-2">What is your business name?</h1>
            <p className="text-gray-600 mb-6">
              This will be used to personalize your website and domain.
            </p>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <PenTool className="h-5 w-5 text-gray-400" />
              </div>
              
              <Input 
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Enter your business name"
                className="pl-10 pr-10 py-6 border border-gray-300 rounded-lg w-full focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              
              {businessName && (
                <button 
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
                  onClick={() => setBusinessName('')}
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            
            <Button 
              onClick={handleNext}
              disabled={!businessName}
              className={cn(
                "w-full mt-6 py-6 bg-primary hover:bg-primary/90 text-white rounded-lg flex items-center justify-center",
                !businessName && "opacity-70 cursor-not-allowed"
              )}
            >
              Next
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessNamePage;
