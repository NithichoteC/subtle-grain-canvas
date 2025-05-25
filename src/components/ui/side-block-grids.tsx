
"use client";

import { FlowingWaveLines } from "./flowing-wave-lines";

interface SideBlockGridsProps {
  className?: string;
}

export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ''}`}>
      {/* Left Edge Enhancement with Flowing Waves */}
      <div className="absolute left-0 top-0 bottom-0 w-[20%] max-w-sm">
        <FlowingWaveLines side="left" />
        
        {/* Enhanced border accent */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#efcc8a]/40 via-50% to-transparent" />
      </div>
      
      {/* Right Edge Enhancement with Flowing Waves */}
      <div className="absolute right-0 top-0 bottom-0 w-[20%] max-w-sm">
        <FlowingWaveLines side="right" />
        
        {/* Enhanced border accent */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#efcc8a]/40 via-50% to-transparent" />
      </div>
      
      {/* Enhanced ambient enhancement */}
      <div className="absolute inset-0 bg-gradient-radial from-[#efcc8a]/[0.03] via-transparent to-transparent" 
           style={{ 
             background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(239, 204, 138, 0.03) 0%, transparent 70%)'
           }} 
      />
    </div>
  );
}
