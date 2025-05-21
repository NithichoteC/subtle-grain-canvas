
import React from 'react';
import SectionLayout from '../SectionLayout';

const PipelineOverviewSection = () => {
  return (
    <SectionLayout variant="charcoal" id="pipeline-overview">
      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center max-w-3xl">
          [Pipeline Overview Title]
        </h2>
        <div className="w-16 h-1 bg-white/20 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-5xl">
          {Array(4).fill(null).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold">{i + 1}</span>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <div className="text-white/70 text-center">Step {i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default PipelineOverviewSection;
