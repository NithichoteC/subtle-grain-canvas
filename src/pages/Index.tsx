
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
        {/* Navigation bar positioned between the top grid lines */}
        <div className="sticky top-0 z-50 h-[72px] flex items-center px-8 md:px-16">
          <NavBarDemo />
        </div>
        <HeroDemo />
        
        {/* Add a blank space to enable scrolling for testing sticky behavior */}
        <div className="h-screen bg-background/5 border-t border-white/10 mx-8 md:mx-16 p-8">
          <h2 className="text-2xl text-white/80 font-medium mb-8">Scroll Test Area</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white/5 border border-white/10 rounded-xl p-6 h-64">
                <p className="text-white/70">Scroll content {item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
