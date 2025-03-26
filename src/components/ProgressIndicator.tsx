
import React from 'react';
import { cn } from '@/lib/utils';

interface Step {
  id: string;
  label: string;
  isCompleted: boolean;
  isCurrent: boolean;
}

interface ProgressIndicatorProps {
  steps: Step[];
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ steps }) => {
  return (
    <div className="flex items-center justify-center w-full max-w-2xl mx-auto py-6">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className="flex flex-col items-center">
            <div 
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-200",
                step.isCompleted ? "bg-green-500 text-white" : 
                step.isCurrent ? "bg-primary text-white" : 
                "bg-gray-200 border-2 border-gray-300 text-gray-600"
              )}
            >
              {step.isCompleted ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <span className={step.isCurrent ? "text-white" : "text-gray-600 font-medium"}>{index + 1}</span>
              )}
            </div>
            <span 
              className={cn(
                "mt-2 text-sm font-medium", 
                step.isCompleted ? "text-green-500" : 
                step.isCurrent ? "text-primary font-semibold" : 
                "text-gray-500"
              )}
            >
              {step.label}
            </span>
          </div>
          
          {index < steps.length - 1 && (
            <div 
              className={cn(
                "h-1 flex-1 mx-2 rounded-full",
                step.isCompleted ? "bg-green-500" : "bg-gray-300"
              )}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressIndicator;
