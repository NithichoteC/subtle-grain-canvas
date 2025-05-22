
import React from 'react';

interface HeroSectionBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * HeroSectionBackground component provides a consistent background for the hero section
 * that matches the page background style including texture and noise effects
 */
const HeroSectionBackground: React.FC<HeroSectionBackgroundProps> = ({ children, className }) => {
  return (
    <div className={`relative z-10 pt-12 pb-12 ${className || ''}`}>
      {/* Border styling with asymmetrical edges */}
      <div className="absolute inset-x-0 top-0 bottom-0 z-[-1]">
        {/* Main background with subtle gradient overlay */}
        <div className="absolute inset-0 bg-dark bg-opacity-80"></div>
        
        {/* Left border with irregular shape */}
        <div className="absolute left-0 top-[10%] bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        
        {/* Right border with different height */}
        <div className="absolute right-0 top-[5%] h-[80%] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        
        {/* Bottom border with uneven opacity */}
        <div className="absolute left-[3%] right-[3%] bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        {/* Noise texture overlay with variable opacity */}
        <div 
          className="absolute inset-0 opacity-[0.12]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        ></div>
      </div>
      
      {/* Content */}
      {children}
    </div>
  );
};

export default HeroSectionBackground;
