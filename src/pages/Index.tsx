
import React from 'react';
import TextureBackground from '@/components/TextureBackground';
import { HeroDemo } from '@/components/HeroDemo';
import { EarlyAdopterSection } from '@/components/ui/early-adopter-section';
import { ProblemSolutionSection } from '@/components/ui/problem-solution-section';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <TextureBackground />
      <div className="relative w-full">
        <HeroDemo />
        <ProblemSolutionSection />
        <EarlyAdopterSection />
      </div>
    </div>
  );
};

export default Index;
