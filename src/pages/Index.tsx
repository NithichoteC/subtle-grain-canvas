
import React from 'react';
import TextureBackground from '@/components/TextureBackground';
import { NavBarDemo } from '@/components/NavBarDemo';
import { HeroDemo } from '@/components/HeroDemo';
import { PainPromise } from '@/components/sections/pain-promise';
import { LiveCounter } from '@/components/sections/live-counter';
import { PipelineOverview } from '@/components/sections/pipeline-overview';
import { KpiSnapshot } from '@/components/sections/kpi-snapshot';
import { GuaranteeBanner } from '@/components/sections/guarantee-banner';
import { WhoWeServe } from '@/components/sections/who-we-serve';
import { FAQ } from '@/components/sections/faq';
import { Footer } from '@/components/sections/footer';
import { FloatingCTA } from '@/components/ui/floating-cta';

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      <TextureBackground />
      <div className="min-h-screen w-full grid grid-cols-1">
        <NavBarDemo />
        <HeroDemo />
        <PainPromise />
        <LiveCounter />
        <PipelineOverview />
        <KpiSnapshot />
        <GuaranteeBanner />
        <WhoWeServe />
        <FAQ />
        <Footer />
      </div>
      <FloatingCTA />
    </div>
  );
};

export default Index;
