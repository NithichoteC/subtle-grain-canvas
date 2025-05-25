
"use client";

import React from 'react';

interface FlowingWavesProps {
  side: 'left' | 'right';
  className?: string;
}

export function FlowingWaves({ side, className }: FlowingWavesProps) {
  const isLeft = side === 'left';

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ''}`}>
      {/* Clean vertical line */}
      <div 
        className={`absolute top-0 bottom-0 w-px ${
          isLeft ? 'left-4' : 'right-4'
        } bg-gradient-to-b from-transparent via-[#efcc8a]/30 to-transparent`}
      />
      
      {/* Subtle accent line */}
      <div 
        className={`absolute top-0 bottom-0 w-px ${
          isLeft ? 'left-8' : 'right-8'
        } bg-gradient-to-b from-transparent via-[#efcc8a]/15 via-50% to-transparent`}
      />
      
      {/* Edge gradient for depth */}
      <div 
        className={`absolute top-0 bottom-0 w-16 ${
          isLeft ? 'left-0 bg-gradient-to-r from-[#efcc8a]/[0.03]' : 'right-0 bg-gradient-to-l from-[#efcc8a]/[0.03]'
        } to-transparent`}
      />
      
      {/* Geometric accent dots */}
      <div className={`absolute ${isLeft ? 'left-4' : 'right-4'} top-1/4`}>
        <div className="w-1 h-1 bg-[#efcc8a]/40 rounded-full" />
      </div>
      <div className={`absolute ${isLeft ? 'left-4' : 'right-4'} top-1/2`}>
        <div className="w-1 h-1 bg-[#efcc8a]/40 rounded-full" />
      </div>
      <div className={`absolute ${isLeft ? 'left-4' : 'right-4'} top-3/4`}>
        <div className="w-1 h-1 bg-[#efcc8a]/40 rounded-full" />
      </div>
    </div>
  );
}
