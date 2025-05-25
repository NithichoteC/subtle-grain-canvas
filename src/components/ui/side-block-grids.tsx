
"use client";

interface SideBlockGridsProps {
  className?: string;
}

export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden z-20 ${className || ''}`}>
      {/* Left Side Grid Block - Complete grid block */}
      <div className="absolute left-0 top-0 w-[20%] max-w-xs h-screen">
        {/* Left border */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-red-500" />
        
        {/* Bottom border for left block */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-yellow-400" />
        
        {/* Subtle edge gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/30 via-[#0a0a0a]/10 via-60% to-transparent" />
        
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>
      
      {/* Right Side Grid Block - Complete grid block */}
      <div className="absolute right-0 top-0 w-[20%] max-w-xs h-screen">
        {/* Right border */}
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-red-500" />
        
        {/* Bottom border for right block */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-yellow-400" />
        
        {/* Subtle edge gradient */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a]/30 via-[#0a0a0a]/10 via-60% to-transparent" />
        
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>
    </div>
  );
}
