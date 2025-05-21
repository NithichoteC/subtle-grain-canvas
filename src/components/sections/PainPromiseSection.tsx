
import React from 'react';
import SectionLayout from '../SectionLayout';

const PainPromiseSection = () => {
  return (
    <SectionLayout variant="graphite" id="pain-promise">
      <div className="flex flex-col items-center justify-center gap-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
          [Pain → Promise Section]
        </h2>
        <div className="w-16 h-1 bg-white/20 rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Placeholder for content */}
          <div className="border border-white/10 p-8 aspect-square flex items-center justify-center">
            <span className="text-white/40 text-xl">Bullet 1</span>
          </div>
          <div className="border border-white/10 p-8 aspect-square flex items-center justify-center">
            <span className="text-white/40 text-xl">Bullet 2</span>
          </div>
          <div className="border border-white/10 p-8 aspect-square flex items-center justify-center">
            <span className="text-white/40 text-xl">Bullet 3</span>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default PainPromiseSection;
