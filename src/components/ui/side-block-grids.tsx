
"use client";

interface SideBlockGridsProps {
  className?: string;
}

export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`fixed inset-0 z-0 pointer-events-none ${className || ''}`}>
      {/* Left Side Block Grid - extends to full left edge */}
      <div className="absolute left-0 top-0 bottom-0 right-1/2 border-r border-white/10">
        {/* Left block content area with bottom border */}
        <div className="absolute inset-0 border-b border-white/10 bg-[#171717]">
          {/* Noise texture overlay to match hero background */}
          <div 
            className="absolute inset-0 opacity-[0.12]" 
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px'
            }}
          ></div>
        </div>
      </div>
      
      {/* Right Side Block Grid - extends to full right edge */}
      <div className="absolute right-0 top-0 bottom-0 left-1/2 border-l border-white/10">
        {/* Right block content area with bottom border */}
        <div className="absolute inset-0 border-b border-white/10 bg-[#171717]">
          {/* Noise texture overlay to match hero background */}
          <div 
            className="absolute inset-0 opacity-[0.12]" 
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
