
"use client";

import { FloatingTextAnimations } from "./floating-text-animations";

interface SideBlockGridsProps {
  className?: string;
}

export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`fixed inset-0 z-0 pointer-events-none ${className || ''}`}>
      {/* Left Side Block - full height, extends to left edge, selectable */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-[#171717] border-r border-white/10 cursor-pointer hover:bg-[#1a1a1a] transition-colors duration-300 overflow-hidden pointer-events-auto">
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />
        
        {/* Floating Text Animations for Left Side - Problems flowing toward center */}
        <FloatingTextAnimations side="left" />
        
        {/* Enhanced gradient overlay for visual depth and problem theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/8 via-transparent to-transparent pointer-events-none" />
      </div>
      
      {/* Right Side Block - full height, extends to right edge, selectable */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#171717] border-l border-white/10 cursor-pointer hover:bg-[#1a1a1a] transition-colors duration-300 overflow-hidden pointer-events-auto">
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />
        
        {/* Floating Text Animations for Right Side - Solutions flowing from center */}
        <FloatingTextAnimations side="right" />
        
        {/* Enhanced gradient overlay for visual depth and solution theme */}
        <div className="absolute inset-0 bg-gradient-to-l from-green-900/8 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
