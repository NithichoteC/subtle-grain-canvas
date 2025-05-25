
"use client";

import { AmbientParticles } from "./ambient-particles";

interface SideBlockGridsProps {
  className?: string;
}

export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`relative w-full ${className || ''}`}>
      {/* Left Side Panel - scrollable with page */}
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-[#0a0a0a] to-[#171717] overflow-hidden">
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.08]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px'
          }}
        />
        
        {/* Ambient Particles for Problems */}
        <AmbientParticles type="problems" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-transparent to-transparent" />
      </div>
      
      {/* Right Side Panel - scrollable with page */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#0a0a0a] to-[#171717] overflow-hidden">
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.08]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px'
          }}
        />
        
        {/* Ambient Particles for Solutions */}
        <AmbientParticles type="solutions" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-green-900/5 via-transparent to-transparent" />
      </div>
    </div>
  );
}
