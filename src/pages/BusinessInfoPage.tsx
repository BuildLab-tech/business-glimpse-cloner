
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import BusinessInfoForm from '@/components/BusinessInfoForm';
import LandingHeader from '@/components/LandingHeader';

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
    <div className="min-h-screen flex flex-col bg-black bg-grid">
      <LandingHeader />
      
      <div className="mt-4">
        <ProgressIndicator steps={steps} />
      </div>
      
      <div className="flex-grow flex items-center justify-center px-4 py-8">
        <BusinessInfoForm onNext={handleNext} onBack={handleBack} />
      </div>
    </div>
  );
};

export default BusinessInfoPage;
