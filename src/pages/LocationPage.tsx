
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import BusinessLocationForm from '@/components/BusinessLocationForm';
import LandingHeader from '@/components/LandingHeader';

const LocationPage = () => {
  const navigate = useNavigate();
  
  const steps = [
    { id: 'business-info', label: 'Business Info', isCompleted: true, isCurrent: false },
    { id: 'location', label: 'Location', isCompleted: false, isCurrent: true },
    { id: 'business-name', label: 'Business Name', isCompleted: false, isCurrent: false },
  ];

  const handleNext = () => {
    navigate('/register/business-name');
  };

  const handleBack = () => {
    navigate('/register/business-info');
  };

  return (
    <div className="min-h-screen flex flex-col bg-black bg-grid">
      <LandingHeader />
      
      <div className="mt-4">
        <ProgressIndicator steps={steps} />
      </div>
      
      <div className="flex-grow flex items-center justify-center px-4 py-8">
        <BusinessLocationForm onNext={handleNext} onBack={handleBack} />
      </div>
    </div>
  );
};

export default LocationPage;
