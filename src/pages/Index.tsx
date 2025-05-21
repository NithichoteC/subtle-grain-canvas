
import React from 'react';
import TextureBackground from '@/components/TextureBackground';
import { NavBarDemo } from '@/components/NavBarDemo';
import { HeroDemo } from '@/components/HeroDemo';
import { PainPromiseSection } from '@/components/sections/PainPromiseSection';
import { LiveCounterSection } from '@/components/sections/LiveCounterSection';
import { PipelineOverviewSection } from '@/components/sections/PipelineOverviewSection';
import { KPISnapshotSection } from '@/components/sections/KPISnapshotSection';
import { GuaranteeBannerSection } from '@/components/sections/GuaranteeBannerSection';
import { WhoWeServeSection } from '@/components/sections/WhoWeServeSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { FloatingCta } from '@/components/ui/floating-cta';

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <TextureBackground />
      <div className="min-h-screen w-full">
        <NavBarDemo />
        <HeroDemo />
        <PainPromiseSection />
        <LiveCounterSection />
        <PipelineOverviewSection />
        <KPISnapshotSection />
        <GuaranteeBannerSection />
        <WhoWeServeSection />
        <FAQSection />
        <FooterSection />
        <FloatingCta />
      </div>
    </div>
  );
};

export default Index;
