
"use client";

import { AmbientParticles } from "./ambient-particles";

interface SideBlockGridsProps {
  className?: string;
}

export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`fixed inset-0 pointer-events-none ${className || ''}`}>
      {/* Left Side Panel - Modern AI aesthetic */}
      <div className="absolute left-0 top-0 bottom-0 w-80 bg-gradient-to-r from-[#0a0a0a] via-[#111111] to-transparent">
        {/* Geometric grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(239, 204, 138, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 204, 138, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Ambient Particles */}
        <AmbientParticles type="problems" />
        
        {/* Vertical accent line */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#efcc8a]/30 to-transparent" />
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#efcc8a]/5 via-transparent to-transparent" />
      </div>
      
      {/* Right Side Panel - Modern AI aesthetic */}
      <div className="absolute right-0 top-0 bottom-0 w-80 bg-gradient-to-l from-[#0a0a0a] via-[#111111] to-transparent">
        {/* Geometric grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(239, 204, 138, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 204, 138, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Ambient Particles */}
        <AmbientParticles type="solutions" />
        
        {/* Vertical accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#efcc8a]/30 to-transparent" />
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#efcc8a]/5 via-transparent to-transparent" />
      </div>
    </div>
  );
}
