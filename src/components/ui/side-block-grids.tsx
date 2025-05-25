
"use client";

import { FlowingWaveLines } from "./flowing-wave-lines";

interface SideBlockGridsProps {
  className?: string;
}

export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ''}`}>
      {/* Left Edge Enhancement - Made wider and more visible */}
      <div className="absolute left-0 top-0 bottom-0 w-[200px] z-[5]">
        <FlowingWaveLines side="left" />
        
        {/* Strong border accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#efcc8a]/60 via-50% to-transparent" />
      </div>
      
      {/* Right Edge Enhancement - Made wider and more visible */}
      <div className="absolute right-0 top-0 bottom-0 w-[200px] z-[5]">
        <FlowingWaveLines side="right" />
        
        {/* Strong border accent */}
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#efcc8a]/60 via-50% to-transparent" />
      </div>
      
      {/* Enhanced ambient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-[#efcc8a]/[0.08] via-transparent to-transparent z-[1]" 
           style={{ 
             background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(239, 204, 138, 0.08) 0%, transparent 70%)'
           }} 
      />
    </div>
  );
}
