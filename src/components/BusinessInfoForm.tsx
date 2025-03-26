
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, X, Building } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BusinessInfoFormProps {
  onNext: () => void;
  onBack: () => void;
}

const BusinessInfoForm: React.FC<BusinessInfoFormProps> = ({ onNext, onBack }) => {
  const [businessType, setBusinessType] = useState('');
  
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
      <div className="p-8">
        <div className="flex justify-center items-center mb-8">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
            <Building className="h-8 w-8 text-primary" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Tell us about your business</h1>
        <p className="text-gray-600 mb-6">
          Please provide information about your business to help us customize your experience.
        </p>
        
        <div className="relative mt-6">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Building className="h-5 w-5 text-gray-400" />
          </div>
          
          <Input 
            type="text"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            placeholder="Type of business (e.g., Retail, Restaurant)"
            className="pl-10 pr-10 py-6 border border-gray-300 rounded-lg w-full focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          
          {businessType && (
            <button 
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
              onClick={() => setBusinessType('')}
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        
        <Button 
          onClick={onNext}
          disabled={!businessType}
          className={cn(
            "w-full mt-6 py-6 bg-primary hover:bg-primary/90 text-white rounded-lg flex items-center justify-center",
            !businessType && "opacity-70 cursor-not-allowed"
          )}
        >
          Next
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default BusinessInfoForm;
