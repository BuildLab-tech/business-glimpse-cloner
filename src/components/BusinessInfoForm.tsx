import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, X, Building, Store, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';

interface BusinessInfoFormProps {
  onNext: () => void;
  onBack?: () => void;
}

// Keywords that suggest an ecommerce business
const ECOMMERCE_KEYWORDS = [
  'shop', 'store', 'retail', 'commerce', 'ecommerce', 'e-commerce', 
  'sell', 'sales', 'product', 'marketplace', 'merchant', 'clothing', 
  'fashion', 'jewelry', 'shoes', 'electronics', 'toys', 'gifts', 
  'furniture', 'bookstore', 'grocery', 'bakery', 'food delivery',
  'subscription', 'dropshipping'
];

// Keywords that suggest an informative business
const INFORMATIVE_KEYWORDS = [
  'blog', 'news', 'magazine', 'information', 'media', 'agency', 
  'service', 'law', 'legal', 'consulting', 'advisor', 'coach',
  'education', 'school', 'university', 'non-profit', 'charity',
  'foundation', 'church', 'temple', 'mosque', 'religious',
  'healthcare', 'clinic', 'doctor', 'dentist', 'therapist',
  'counselor', 'consultant', 'portfolio', 'restaurant'
];

const BusinessInfoForm: React.FC<BusinessInfoFormProps> = ({ onNext, onBack }) => {
  const [businessType, setBusinessType] = useState('');
  const [websiteType, setWebsiteType] = useState<'unknown' | 'ecommerce' | 'informative'>('unknown');
  const [showOptions, setShowOptions] = useState(false);
  
  useEffect(() => {
    if (!businessType) {
      setWebsiteType('unknown');
      setShowOptions(false);
      return;
    }
    
    const input = businessType.toLowerCase();
    
    // Check if input matches any ecommerce keyword
    const isEcommerce = ECOMMERCE_KEYWORDS.some(keyword => input.includes(keyword));
    
    // Check if input matches any informative keyword
    const isInformative = INFORMATIVE_KEYWORDS.some(keyword => input.includes(keyword));
    
    if (isEcommerce && !isInformative) {
      setWebsiteType('ecommerce');
      setShowOptions(true);
    } else if (isInformative && !isEcommerce) {
      setWebsiteType('informative');
      setShowOptions(true);
    } else if (isEcommerce && isInformative) {
      // If keywords from both categories are detected, prioritize ecommerce
      setWebsiteType('ecommerce');
      setShowOptions(true);
    } else {
      // If no keywords are detected, still show options but keep type as unknown
      setWebsiteType('unknown');
      setShowOptions(true);
    }
  }, [businessType]);
  
  const handleWebsiteTypeClick = (type: 'ecommerce' | 'informative') => {
    setWebsiteType(type);
    toast({
      title: "Website type selected",
      description: type === 'ecommerce' 
        ? "Your site will be set up with ecommerce features." 
        : "Your site will be set up with informational features.",
      duration: 3000
    });
  };
  
  const handleNext = () => {
    // Store the website type in session storage for later use
    if (websiteType !== 'unknown') {
      sessionStorage.setItem('websiteType', websiteType);
    } else {
      // If still unknown, default to informative
      sessionStorage.setItem('websiteType', 'informative');
      toast({
        title: "Website type set to default",
        description: "We've set your website type to informative. You can change this later.",
        duration: 3000
      });
    }
    onNext();
  };
  
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
            className="pl-10 pr-10 border border-gray-300 rounded-lg w-full focus:border-primary focus:ring-2 focus:ring-primary/20"
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
        
        {businessType && showOptions && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700 mb-3">
              {websiteType !== 'unknown' 
                ? "Based on your business type, we think you might need a:" 
                : "Please select the type of website you need:"}
            </p>
            
            <div className="flex space-x-3">
              <Button
                variant={websiteType === 'ecommerce' ? 'default' : 'outline'}
                size="sm"
                className={cn(
                  "flex-1 flex items-center justify-center",
                  websiteType === 'ecommerce' && "bg-primary hover:bg-primary/90"
                )}
                onClick={() => handleWebsiteTypeClick('ecommerce')}
              >
                <Store className="mr-2 h-4 w-4" />
                E-commerce
              </Button>
              
              <Button
                variant={websiteType === 'informative' ? 'default' : 'outline'}
                size="sm"
                className={cn(
                  "flex-1 flex items-center justify-center",
                  websiteType === 'informative' && "bg-primary hover:bg-primary/90"
                )}
                onClick={() => handleWebsiteTypeClick('informative')}
              >
                <Info className="mr-2 h-4 w-4" />
                Informative
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 mt-3">
              {websiteType === 'ecommerce' 
                ? "E-commerce website will include product listings, shopping cart, and checkout features."
                : websiteType === 'informative'
                  ? "Informative website will focus on presenting your content and services clearly to visitors."
                  : "Select the option that best fits your business needs."}
            </p>
          </div>
        )}
        
        <Button 
          onClick={handleNext}
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
