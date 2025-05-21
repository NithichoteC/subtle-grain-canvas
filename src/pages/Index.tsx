
import React from 'react';
import TextureBackground from '@/components/TextureBackground';
import { NavBarDemo } from '@/components/NavBarDemo';
import { HeroDemo } from '@/components/HeroDemo';

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <TextureBackground />
      <div className="min-h-screen w-full relative px-8 md:px-16">
        <div className="sticky top-0 z-50 pt-4">
          <NavBarDemo />
        </div>
        <HeroDemo />
      </div>
    </div>
  );
};

export default Index;
