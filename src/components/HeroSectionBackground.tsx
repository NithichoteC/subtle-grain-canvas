
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
    <div className={`relative z-10 py-12 ${className || ''}`}>
      {/* Border styling to match the navigation line */}
      <div className="absolute inset-0 z-[-1] border-l border-r border-b border-white/10">
        {/* Main background - transparent to let the canvas effect show through */}
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
      
      {/* Content */}
      {children}
    </div>
  );
};

export default HeroSectionBackground;
