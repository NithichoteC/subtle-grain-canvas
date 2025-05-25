
"use client";

import { FlowingWaveLines } from "./flowing-wave-lines";

interface SideBlockGridsProps {
  className?: string;
}

export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden z-[1000] ${className || ''}`}>
      {/* Left Edge Enhancement */}
      <div className="absolute left-0 top-0 bottom-0 w-[400px] z-[1010]">
        <FlowingWaveLines side="left" />
        
        {/* Visible border accent */}
        <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-b from-transparent via-[#FFD700]/60 via-50% to-transparent" />
      </div>
      
      {/* Right Edge Enhancement */}
      <div className="absolute right-0 top-0 bottom-0 w-[400px] z-[1010]">
        <FlowingWaveLines side="right" />
        
        {/* Visible border accent */}
        <div className="absolute right-0 top-0 bottom-0 w-3 bg-gradient-to-b from-transparent via-[#FFD700]/60 via-50% to-transparent" />
      </div>
      
      {/* Test visibility elements */}
      <div className="absolute top-20 left-20 w-6 h-6 bg-[#FFD700] rounded-full z-[1020] animate-pulse" />
      <div className="absolute top-20 right-20 w-6 h-6 bg-[#FFD700] rounded-full z-[1020] animate-pulse" />
    </div>
  );
}
