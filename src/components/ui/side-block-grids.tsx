
"use client";

interface SideBlockGridsProps {
  className?: string;
}

export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ''}`}>
      {/* Left Side - Trust & Results Focused */}
      <div className="absolute left-0 top-0 bottom-0 w-[20%] max-w-xs">
        {/* Clean edge gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/30 via-[#0a0a0a]/10 via-60% to-transparent" />
        
        {/* Minimal border accent */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#efcc8a]/20 via-50% to-transparent" />
        
        {/* 3D Asset Zone 1: Money/ROI Symbol - Top third */}
        <div className="absolute top-[20%] left-6 lg:left-8 w-12 h-12 lg:w-16 lg:h-16 opacity-60 hover:opacity-80 transition-all duration-700">
          {/* **[ASSET_REQUEST: 3D golden money bag or stack of cash - represents ROI and revenue growth]** */}
          <div className="w-full h-full bg-gradient-to-br from-[#efcc8a]/20 to-[#d4af37]/10 rounded-lg border border-[#efcc8a]/10 flex items-center justify-center">
            <span className="text-[#efcc8a]/40 text-xs">💰</span>
          </div>
        </div>
        
        {/* 3D Asset Zone 2: Shield/Security - Middle */}
        <div className="absolute top-[50%] left-4 lg:left-6 w-10 h-10 lg:w-14 lg:h-14 opacity-50 hover:opacity-70 transition-all duration-700 -translate-y-1/2">
          {/* **[ASSET_REQUEST: 3D bronze/gold shield with checkmark - represents trust and security]** */}
          <div className="w-full h-full bg-gradient-to-br from-[#efcc8a]/15 to-[#d4af37]/8 rounded-lg border border-[#efcc8a]/8 flex items-center justify-center">
            <span className="text-[#efcc8a]/30 text-xs">🛡️</span>
          </div>
        </div>
        
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>
      
      {/* Right Side - Efficiency & Partnership Focused */}
      <div className="absolute right-0 top-0 bottom-0 w-[20%] max-w-xs">
        {/* Clean edge gradient */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a]/30 via-[#0a0a0a]/10 via-60% to-transparent" />
        
        {/* Minimal border accent */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#efcc8a]/20 via-50% to-transparent" />
        
        {/* 3D Asset Zone 3: Handshake/Partnership - Top third */}
        <div className="absolute top-[25%] right-6 lg:right-8 w-12 h-12 lg:w-16 lg:h-16 opacity-60 hover:opacity-80 transition-all duration-700">
          {/* **[ASSET_REQUEST: 3D golden handshake or two hands - represents partnership and qualified leads]** */}
          <div className="w-full h-full bg-gradient-to-br from-[#efcc8a]/20 to-[#d4af37]/10 rounded-lg border border-[#efcc8a]/10 flex items-center justify-center">
            <span className="text-[#efcc8a]/40 text-xs">🤝</span>
          </div>
        </div>
        
        {/* 3D Asset Zone 4: Clock/Efficiency - Lower third */}
        <div className="absolute top-[65%] right-4 lg:right-6 w-10 h-10 lg:w-14 lg:h-14 opacity-50 hover:opacity-70 transition-all duration-700">
          {/* **[ASSET_REQUEST: 3D bronze/gold hourglass or clock - represents time savings and efficiency]** */}
          <div className="w-full h-full bg-gradient-to-br from-[#efcc8a]/15 to-[#d4af37]/8 rounded-lg border border-[#efcc8a]/8 flex items-center justify-center">
            <span className="text-[#efcc8a]/30 text-xs">⏰</span>
          </div>
        </div>
        
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>
      
      {/* Seamless Connection Layer - No gaps at any screen size */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 bottom-0 w-[25%] bg-gradient-to-r from-transparent via-[#efcc8a]/[0.015] via-90% to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-[25%] bg-gradient-to-l from-transparent via-[#efcc8a]/[0.015] via-90% to-transparent" />
      </div>
      
      {/* Ultra-subtle ambient enhancement */}
      <div className="absolute inset-0" 
           style={{ 
             background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(239, 204, 138, 0.008) 0%, transparent 70%)'
           }} 
      />
    </div>
  );
}
