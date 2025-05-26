
import React from 'react';
import TextureBackground from '@/components/TextureBackground';
import { HeroDemo } from '@/components/HeroDemo';
import { ProblemSolutionSection } from '@/components/ui/problem-solution-section';
import { CoreCapabilitiesSection } from '@/components/ui/core-capabilities-section';
import { HowItWorksSection } from '@/components/ui/how-it-works-section';
import { ResultsMetricsSection } from '@/components/ui/results-metrics-section';
import { FinalCtaSection } from '@/components/ui/final-cta-section';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <TextureBackground />
      <div className="relative w-full">
        <HeroDemo />
        <ProblemSolutionSection />
        <CoreCapabilitiesSection />
        <HowItWorksSection />
        <ResultsMetricsSection />
        <FinalCtaSection />
      </div>
    </div>
  );
};

export default Index;
