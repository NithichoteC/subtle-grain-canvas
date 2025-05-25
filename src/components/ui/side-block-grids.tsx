
"use client";

import { FlowingWaves } from "./flowing-waves";

interface SideBlockGridsProps {
  className?: string;
}

export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ''}`}>
      {/* Left Side - Flowing Waves */}
      <div className="absolute left-0 top-0 bottom-0 w-[15%] max-w-[120px] min-w-[60px]">
        <FlowingWaves side="left" />
      </div>
      
      {/* Right Side - Flowing Waves */}
      <div className="absolute right-0 top-0 bottom-0 w-[15%] max-w-[120px] min-w-[60px]">
        <FlowingWaves side="right" />
      </div>
      
      {/* Seamless Connection Layer - Ensures no gaps at any screen size */}
      <div className="absolute inset-0">
        {/* Left connection */}
        <div className="absolute left-0 top-0 bottom-0 w-[20%] bg-gradient-to-r from-transparent via-[#efcc8a]/[0.01] via-90% to-transparent" />
        
        {/* Right connection */}
        <div className="absolute right-0 top-0 bottom-0 w-[20%] bg-gradient-to-l from-transparent via-[#efcc8a]/[0.01] via-90% to-transparent" />
      </div>
      
      {/* Ultra-subtle ambient enhancement */}
      <div className="absolute inset-0 bg-gradient-radial from-[#efcc8a]/[0.005] via-transparent to-transparent" 
           style={{ 
             background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(239, 204, 138, 0.005) 0%, transparent 70%)'
           }} 
      />
    </div>
  );
}
