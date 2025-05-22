
import React from 'react';
import TextureBackground from '@/components/TextureBackground';
import { HeroDemo } from '@/components/HeroDemo';
import { ProcessStepsDemo } from '@/components/ProcessStepsDemo';

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <TextureBackground />
      <div className="min-h-screen w-full relative">
        <HeroDemo />
        <ProcessStepsDemo />
      </div>
    </div>
  );
};

export default Index;
