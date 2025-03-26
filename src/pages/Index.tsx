
import React from 'react';
import LandingHeader from '@/components/LandingHeader';
import LandingHero from '@/components/LandingHero';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-theme bg-grid">
      <LandingHeader />
      <div className="flex-grow flex items-center justify-center py-16">
        <LandingHero />
      </div>
    </div>
  );
};

export default Index;
