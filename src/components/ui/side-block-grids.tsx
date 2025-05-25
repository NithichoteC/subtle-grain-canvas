
"use client";

import { FlowingWaveLines } from "./flowing-wave-lines";

interface SideBlockGridsProps {
  className?: string;
}

export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden z-[100] ${className || ''}`}>
      {/* Debug background to see container */}
      <div className="absolute inset-0 bg-blue-500/5" />
      
      {/* Left Edge Enhancement */}
      <div className="absolute left-0 top-0 bottom-0 w-[300px] z-[110]">
        {/* Debug background for left container */}
        <div className="absolute inset-0 bg-green-500/10" />
        
        <FlowingWaveLines side="left" />
        
        {/* Visible border accent */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-transparent via-[#FFD700]/80 via-50% to-transparent" />
      </div>
      
      {/* Right Edge Enhancement */}
      <div className="absolute right-0 top-0 bottom-0 w-[300px] z-[110]">
        {/* Debug background for right container */}
        <div className="absolute inset-0 bg-purple-500/10" />
        
        <FlowingWaveLines side="right" />
        
        {/* Visible border accent */}
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-b from-transparent via-[#FFD700]/80 via-50% to-transparent" />
      </div>
      
      {/* Strong test elements to verify positioning */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-red-500 rounded-full z-[120]" />
      <div className="absolute top-10 right-10 w-4 h-4 bg-blue-500 rounded-full z-[120]" />
    </div>
  );
}
