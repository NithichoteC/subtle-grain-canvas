
"use client";

interface SideBlockGridsProps {
  className?: string;
}

export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden z-[9999] ${className || ''}`}>
      {/* Left Side Grid Block - Complete with all borders */}
      <div className="absolute left-0 top-0 w-[20%] max-w-xs h-full">
        {/* Left border - bright red for visibility */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500" />
        
        {/* Bottom border for left block - bright yellow */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400" style={{ top: '100vh' }} />
        
        {/* Subtle edge gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/30 via-[#0a0a0a]/10 via-60% to-transparent" />
        
        {/* 3D Asset Zone */}
        <div className="absolute top-1/4 left-8 w-16 h-16 opacity-0 transition-opacity duration-500 hover:opacity-100">
          {/* Reserved space for 3D assets */}
        </div>
        
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>
      
      {/* Right Side Grid Block - Complete with all borders */}
      <div className="absolute right-0 top-0 w-[20%] max-w-xs h-full">
        {/* Right border - bright red for visibility */}
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-red-500" />
        
        {/* Bottom border for right block - bright yellow */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400" style={{ top: '100vh' }} />
        
        {/* Subtle edge gradient */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a]/30 via-[#0a0a0a]/10 via-60% to-transparent" />
        
        {/* 3D Asset Zone */}
        <div className="absolute top-1/3 right-8 w-16 h-16 opacity-0 transition-opacity duration-500 hover:opacity-100">
          {/* Reserved space for 3D assets */}
        </div>
        
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        />
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
