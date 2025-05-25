
"use client";

interface SideBlockGridsProps {
  className?: string;
}

export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ''}`}>
      {/* Left Edge Enhancement - Ultra Minimal */}
      <div className="absolute left-0 top-0 bottom-0 w-[20%] max-w-xs">
        {/* Subtle edge gradient that scales with screen width */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/30 via-[#0a0a0a]/10 via-60% to-transparent" />
        
        {/* Minimal border accent - matches hero section styling */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#efcc8a]/20 via-50% to-transparent" />
        
        {/* 3D Asset Zone - Strategic positioning for your assets */}
        <div className="absolute top-1/4 left-8 w-16 h-16 opacity-0 transition-opacity duration-500 hover:opacity-100">
          {/* Reserved space for 3D assets like money bag, shield, etc. */}
        </div>
        
        {/* Subtle texture overlay - minimal grain */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>
      
      {/* Right Edge Enhancement - Ultra Minimal */}
      <div className="absolute right-0 top-0 bottom-0 w-[20%] max-w-xs">
        {/* Subtle edge gradient that scales with screen width */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a]/30 via-[#0a0a0a]/10 via-60% to-transparent" />
        
        {/* Minimal border accent - matches hero section styling */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#efcc8a]/20 via-50% to-transparent" />
        
        {/* 3D Asset Zone - Strategic positioning for your assets */}
        <div className="absolute top-1/3 right-8 w-16 h-16 opacity-0 transition-opacity duration-500 hover:opacity-100">
          {/* Reserved space for 3D assets like handshake, hourglass, etc. */}
        </div>
        
        {/* Subtle texture overlay - minimal grain */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>
      
      {/* Seamless Connection Layer - Ensures no gaps at any screen size */}
      <div className="absolute inset-0">
        {/* Left connection */}
        <div className="absolute left-0 top-0 bottom-0 w-[25%] bg-gradient-to-r from-transparent via-[#efcc8a]/[0.02] via-90% to-transparent" />
        
        {/* Right connection */}
        <div className="absolute right-0 top-0 bottom-0 w-[25%] bg-gradient-to-l from-transparent via-[#efcc8a]/[0.02] via-90% to-transparent" />
      </div>
      
      {/* Ultra-subtle ambient enhancement */}
      <div className="absolute inset-0 bg-gradient-radial from-[#efcc8a]/[0.01] via-transparent to-transparent" 
           style={{ 
             background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(239, 204, 138, 0.01) 0%, transparent 70%)'
           }} 
      />
    </div>
  );
}
