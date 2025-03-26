
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import LandingHeader from '@/components/LandingHeader';
import { ChevronLeft, ArrowRight } from 'lucide-react';

const BusinessNamePage = () => {
  const navigate = useNavigate();
  
  const steps = [
    { id: 'business-info', label: 'Business Info', isCompleted: true, isCurrent: false },
    { id: 'location', label: 'Location', isCompleted: true, isCurrent: false },
    { id: 'business-name', label: 'Business Name', isCompleted: false, isCurrent: true },
  ];

  const handleNext = () => {
    navigate('/success');
  };

  const handleBack = () => {
    navigate('/register/location');
  };

  return (
    <div className="min-h-screen flex flex-col bg-theme bg-grid">
      <LandingHeader />
      
      <div className="mt-4">
        <ProgressIndicator steps={steps} />
      </div>
      
      <div className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
          <div className="p-8">
            <button 
              onClick={handleBack}
              className="text-primary flex items-center mb-4 font-medium hover:underline transition-all"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back
            </button>
            
            <h1 className="text-2xl font-bold text-gray-800 mb-6">What is your business name?</h1>
            
            <div className="space-y-4">
              <Input 
                type="text"
                placeholder="Enter your business name"
                className="w-full py-6 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            
            <Button 
              onClick={handleNext}
              className="w-full mt-6 py-6 bg-primary hover:bg-primary/90 text-white rounded-lg flex items-center justify-center"
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
