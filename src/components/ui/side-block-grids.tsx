
"use client";

import { FlowingWaves } from "./flowing-waves";

interface SideBlockGridsProps {
  className?: string;
}

export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ''}`}>
      {/* Left Side - Clean Edge Lines */}
      <div className="absolute left-0 top-0 bottom-0 w-20">
        <FlowingWaves side="left" />
      </div>
      
      {/* Right Side - Clean Edge Lines */}
      <div className="absolute right-0 top-0 bottom-0 w-20">
        <FlowingWaves side="right" />
      </div>
      
      {/* Minimal ambient enhancement */}
      <div className="absolute inset-0 bg-gradient-radial from-[#efcc8a]/[0.008] via-transparent to-transparent" 
           style={{ 
             background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(239, 204, 138, 0.008) 0%, transparent 70%)'
           }} 
      />
    </div>
  );
}
