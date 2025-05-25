
import React from 'react';
import TextureBackground from '@/components/TextureBackground';
import { HeroDemo } from '@/components/HeroDemo';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <TextureBackground />
      <div className="relative w-full">
        <HeroDemo />
      </div>
    </div>
  );
};

export default Index;
