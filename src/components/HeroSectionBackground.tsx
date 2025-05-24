
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
    <div className={`relative z-10 pt-8 pb-8 font-roboto ${className || ''}`}>
      {/* Background styling - removed duplicate borders */}
      <div className="absolute inset-0 z-[-1]">
        {/* Main background */}
        <div className="absolute inset-0 bg-dark"></div>
        
        {/* Noise texture overlay - matches the TextureBackground component */}
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
