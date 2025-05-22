
import React from 'react';
import TextureBackground from '@/components/TextureBackground';
import { HeroDemo } from '@/components/HeroDemo';

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <TextureBackground />
      <div className="min-h-screen w-full relative">
        <HeroDemo />
      </div>
    </div>
  );
};

export default Index;
