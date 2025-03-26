
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import LandingHeader from '@/components/LandingHeader';
import { CheckCircle } from 'lucide-react';

const SuccessPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col bg-theme bg-grid">
      <LandingHeader />
      
      <div className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
          <div className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Registration Complete!</h1>
            
            <p className="text-gray-600 mb-8">
              Thank you for registering your business. Your website is now being generated.
            </p>
            
            <Button 
              onClick={() => navigate('/')}
              className="w-full py-6 bg-primary hover:bg-primary/90 text-white rounded-lg"
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
