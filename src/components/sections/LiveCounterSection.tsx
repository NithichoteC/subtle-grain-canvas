
import React from 'react';
import SectionLayout from '../SectionLayout';

const LiveCounterSection = () => {
  return (
    <SectionLayout variant="dot-grid" id="live-counter">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl text-white/70 mb-2">[Live Counter Label]</h2>
        <div className="text-6xl md:text-8xl font-bold text-white mb-8 bronze-gradient">
          000
        </div>
      </div>
    </SectionLayout>
  );
};

export default LiveCounterSection;
