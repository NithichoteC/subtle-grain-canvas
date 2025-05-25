
"use client";

interface SideBlockGridsProps {
  className?: string;
}

export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ''}`}>
      {/* Left Grid Block */}
      <div className="absolute left-0 top-0 bottom-0 w-[25%]">
        {/* Left vertical border */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-500" />
        
        {/* Left section bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-blue-500" />
        
        {/* Subtle background enhancement */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/30 via-[#0a0a0a]/10 via-60% to-transparent" />
      </div>
      
      {/* Right Grid Block */}
      <div className="absolute right-0 top-0 bottom-0 w-[25%]">
        {/* Right vertical border */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-blue-500" />
        
        {/* Right section bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-blue-500" />
        
        {/* Subtle background enhancement */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a]/30 via-[#0a0a0a]/10 via-60% to-transparent" />
      </div>
      
      {/* Middle section will have its own borders from HeroDemo */}
      
      {/* Ultra-subtle ambient enhancement */}
      <div className="absolute inset-0 bg-gradient-radial from-[#efcc8a]/[0.01] via-transparent to-transparent" 
           style={{ 
             background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(239, 204, 138, 0.01) 0%, transparent 70%)'
           }} 
      />
    </div>
  );
}
