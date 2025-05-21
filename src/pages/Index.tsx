
import React from 'react';
import TextureBackground from '@/components/TextureBackground';
import { NavBarDemo } from '@/components/NavBarDemo';
import { HeroDemo } from '@/components/HeroDemo';
import GridLines from '@/components/GridLines';

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <TextureBackground />
      <GridLines />
      <div className="min-h-screen w-full relative">
        <div className="sticky top-0 z-50 pt-4 px-8 md:px-16 flex items-center">
          <NavBarDemo />
        </div>
        <HeroDemo />
      </div>
    </div>
  );
};

export default Index;
