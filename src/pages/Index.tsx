
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
        <div className="sticky top-0 z-50">
          <NavBarDemo />
        </div>
        <HeroDemo />
      </div>
    </div>
  );
};

export default Index;
