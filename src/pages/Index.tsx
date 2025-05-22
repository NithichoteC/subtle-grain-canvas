
import React from 'react';
import TextureBackground from '@/components/TextureBackground';
import { HeroDemo } from '@/components/HeroDemo';
import { EvervaultCardDemo } from '@/components/EvervaultCardDemo';

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <TextureBackground />
      <div className="min-h-screen w-full relative">
        <HeroDemo />
        <div className="py-16 w-full">
          <EvervaultCardDemo />
        </div>
      </div>
    </div>
  );
};

export default Index;
