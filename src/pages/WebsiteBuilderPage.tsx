
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LandingHeader from '@/components/LandingHeader';
import { Progress } from '@/components/ui/progress';
import { Sparkles, Code, Globe, Rocket } from 'lucide-react';

const LoadingMessages = [
  "Analyzing your business profile...",
  "Designing your custom website...",
  "Creating responsive layouts...",
  "Optimizing for search engines...",
  "Adding mobile-friendly features...",
  "Finalizing your website..."
];

const WebsiteBuilderPage = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(oldProgress => {
          const newProgress = oldProgress + 1;
          
          // Update message at specific progress points
          if (newProgress === 15) setMessageIndex(1);
          if (newProgress === 35) setMessageIndex(2);
          if (newProgress === 55) setMessageIndex(3);
          if (newProgress === 75) setMessageIndex(4);
          if (newProgress === 90) setMessageIndex(5);
          
          return newProgress;
        });
      } else {
        // Navigate to success page when progress is complete
        navigate('/success');
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [progress, navigate]);
  
  return (
    <div className="min-h-screen flex flex-col bg-theme bg-grid">
      <LandingHeader />
      
      <div className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
          <div className="p-8">
            <div className="flex justify-center mb-10">
              <div className="relative">
                <div className="w-28 h-28 bg-purple-100 rounded-full flex items-center justify-center">
                  <Sparkles className="h-14 w-14 text-primary animate-pulse" />
                </div>
                
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <Code className="h-6 w-6 text-white" />
                </div>
                
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
              Building Your Website
            </h1>
            
            <p className="text-gray-600 text-center mb-8">
              {LoadingMessages[messageIndex]}
            </p>
            
            <div className="space-y-6">
              <Progress value={progress} className="h-3 w-full" />
              
              <p className="text-sm text-gray-500 text-center">
                {progress}% Complete
              </p>
            </div>
            
            <div className="mt-8 flex flex-col items-center space-y-3">
              <div className="flex space-x-2 items-center">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "600ms" }}></div>
              </div>
              <p className="text-sm text-gray-500">Please wait while we work our magic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteBuilderPage;
