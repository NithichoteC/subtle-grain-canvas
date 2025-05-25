
"use client";

import { AmbientParticles } from "./ambient-particles";

interface SideBlockGridsProps {
  className?: string;
}

export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ''}`}>
      {/* Left Side Panel - Modern AI aesthetic with glassmorphism */}
      <div className="absolute left-0 top-0 bottom-0 w-72 bg-gradient-to-r from-[#0a0a0a]/95 via-[#111111]/80 to-transparent backdrop-blur-sm">
        {/* Primary gradient orb */}
        <div className="absolute top-1/4 left-12 w-32 h-32 bg-gradient-radial from-[#efcc8a]/20 via-[#efcc8a]/10 to-transparent rounded-full blur-xl animate-pulse" />
        
        {/* Secondary gradient orb */}
        <div className="absolute bottom-1/3 left-8 w-24 h-24 bg-gradient-radial from-[#cd7f32]/15 via-[#cd7f32]/8 to-transparent rounded-full blur-lg" style={{
          animation: 'pulse 4s ease-in-out infinite alternate'
        }} />
        
        {/* Sophisticated geometric grid */}
        <div className="absolute inset-0 opacity-15">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(239, 204, 138, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 204, 138, 0.15) 1px, transparent 1px),
              linear-gradient(rgba(239, 204, 138, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 204, 138, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 60px 60px, 20px 20px, 20px 20px'
          }} />
        </div>
        
        {/* Glassmorphism floating elements */}
        <div className="absolute top-1/2 left-6 w-16 h-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg transform -rotate-12" style={{
          animation: 'float 6s ease-in-out infinite'
        }} />
        
        <div className="absolute top-1/3 left-16 w-12 h-12 bg-[#efcc8a]/10 backdrop-blur-md border border-[#efcc8a]/20 rounded-lg transform rotate-45" style={{
          animation: 'float 8s ease-in-out infinite reverse'
        }} />
        
        {/* Ambient Particles */}
        <AmbientParticles type="problems" />
        
        {/* Elegant vertical accent line with glow */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#efcc8a]/40 to-transparent shadow-[0_0_10px_rgba(239,204,138,0.3)]" />
        
        {/* Subtle edge lighting */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#efcc8a]/3 via-transparent to-transparent" />
      </div>
      
      {/* Right Side Panel - Mirror with slight variations */}
      <div className="absolute right-0 top-0 bottom-0 w-72 bg-gradient-to-l from-[#0a0a0a]/95 via-[#111111]/80 to-transparent backdrop-blur-sm">
        {/* Primary gradient orb */}
        <div className="absolute top-1/3 right-12 w-28 h-28 bg-gradient-radial from-[#efcc8a]/18 via-[#efcc8a]/9 to-transparent rounded-full blur-xl" style={{
          animation: 'pulse 5s ease-in-out infinite alternate'
        }} />
        
        {/* Secondary gradient orb */}
        <div className="absolute bottom-1/4 right-8 w-20 h-20 bg-gradient-radial from-[#cd7f32]/12 via-[#cd7f32]/6 to-transparent rounded-full blur-lg animate-pulse" />
        
        {/* Sophisticated geometric grid */}
        <div className="absolute inset-0 opacity-15">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(239, 204, 138, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 204, 138, 0.15) 1px, transparent 1px),
              linear-gradient(rgba(239, 204, 138, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 204, 138, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 60px 60px, 20px 20px, 20px 20px'
          }} />
        </div>
        
        {/* Glassmorphism floating elements */}
        <div className="absolute top-2/5 right-6 w-14 h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg transform rotate-12" style={{
          animation: 'float 7s ease-in-out infinite'
        }} />
        
        <div className="absolute top-1/4 right-16 w-10 h-10 bg-[#efcc8a]/10 backdrop-blur-md border border-[#efcc8a]/20 rounded-lg transform -rotate-45" style={{
          animation: 'float 9s ease-in-out infinite reverse'
        }} />
        
        {/* Ambient Particles */}
        <AmbientParticles type="solutions" />
        
        {/* Elegant vertical accent line with glow */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#efcc8a]/40 to-transparent shadow-[0_0_10px_rgba(239,204,138,0.3)]" />
        
        {/* Subtle edge lighting */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#efcc8a]/3 via-transparent to-transparent" />
      </div>
    </div>
  );
}
