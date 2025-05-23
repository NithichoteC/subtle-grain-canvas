
import React from 'react';
import TextureBackground from '@/components/TextureBackground';
import { HeroDemo } from '@/components/HeroDemo';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { ResultsSection } from '@/components/sections/ResultsSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { GuaranteeSection } from '@/components/sections/GuaranteeSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { Footer } from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <TextureBackground />
      <div className="min-h-screen w-full relative">
        <HeroDemo />
        <ProcessSection />
        <ResultsSection />
        <TrustSection />
        <TeamSection />
        <GuaranteeSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
