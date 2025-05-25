
"use client";

interface SideBlockGridsProps {
  className?: string;
}

export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-20 ${className || ''}`}>
      {/* Left Grid Block */}
      <div className="absolute left-0 top-0 bottom-0 w-[25%]">
        {/* Left vertical border - MOVED TO RIGHT EDGE (inner border) */}
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-blue-400" />
        
        {/* Left section bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-400" />
        
        {/* Enhanced background to make the block more visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/40 via-[#0a0a0a]/20 to-[#0a0a0a]/10" />
        
        {/* Subtle bronze accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#efcc8a]/[0.02] via-transparent to-transparent" />
      </div>
      
      {/* Right Grid Block */}
      <div className="absolute right-0 top-0 bottom-0 w-[25%]">
        {/* Right vertical border - MOVED TO LEFT EDGE (inner border) */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-400" />
        
        {/* Right section bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-400" />
        
        {/* Enhanced background to make the block more visible */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a]/40 via-[#0a0a0a]/20 to-[#0a0a0a]/10" />
        
        {/* Subtle bronze accent */}
        <div className="absolute inset-0 bg-gradient-to-bl from-[#efcc8a]/[0.02] via-transparent to-transparent" />
      </div>
      
      {/* Ultra-subtle ambient enhancement for the center area */}
      <div className="absolute inset-0 bg-gradient-radial from-[#efcc8a]/[0.005] via-transparent to-transparent" 
           style={{ 
             background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(239, 204, 138, 0.005) 0%, transparent 70%)'
           }} 
      />
    </div>
  );
}
