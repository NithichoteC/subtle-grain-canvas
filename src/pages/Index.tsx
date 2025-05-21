
import React from 'react';
import TextureBackground from '@/components/TextureBackground';
import { NavBarDemo } from '@/components/NavBarDemo';

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <TextureBackground />
      <div className="min-h-screen w-full">
        <NavBarDemo />
      </div>
    </div>
  );
};

export default Index;
