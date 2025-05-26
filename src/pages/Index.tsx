
import React from 'react';
import TextureBackground from '@/components/TextureBackground';
import { HeroDemo } from '@/components/HeroDemo';
import { ProblemSolutionSection } from '@/components/ui/problem-solution-section';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <TextureBackground />
      <div className="relative w-full">
        <HeroDemo />
        <ProblemSolutionSection />
      </div>
    </div>
  );
};

export default Index;
