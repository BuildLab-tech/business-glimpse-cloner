
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import { Button } from '@/components/ui/button';
import LandingHeader from '@/components/LandingHeader';
import { ChevronLeft, ArrowRight } from 'lucide-react';

const BusinessInfoPage = () => {
  const navigate = useNavigate();
  
  const steps = [
    { id: 'business-info', label: 'Business Info', isCompleted: false, isCurrent: true },
    { id: 'location', label: 'Location', isCompleted: false, isCurrent: false },
    { id: 'business-name', label: 'Business Name', isCompleted: false, isCurrent: false },
  ];

  const handleNext = () => {
    navigate('/register/location');
  };

  const handleBack = () => {
    navigate('/');
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
            
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Tell us about your business</h1>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                Please provide information about your business to help us customize your experience.
              </p>
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

export default BusinessInfoPage;
