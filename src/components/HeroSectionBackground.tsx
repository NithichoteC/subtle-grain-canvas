
import React from 'react';
import { NoiseTexture } from '@/components/ui/noise-texture';
import { colors, noiseConfigs, zIndex } from '@/lib/design-tokens';

interface HeroSectionBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Hero section background with consistent styling and borders
 * Handles the center content area background and border system
 */
const HeroSectionBackground: React.FC<HeroSectionBackgroundProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`relative font-roboto ${className}`} style={{ zIndex: zIndex.content }}>
      {/* Border styling and background container */}
      <div className="absolute inset-0" style={{ zIndex: zIndex.background }}>
        {/* Border system - left and right borders */}
        <div 
          className="border-l border-r"
          style={{ 
            borderColor: colors.white[10],
            backgroundColor: colors.dark
          }}
        >
          {/* Noise texture overlay for consistency */}
          <NoiseTexture {...noiseConfigs.hero} />
        </div>
      </div>
      
      {/* Full-width bottom border */}
      <div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-screen h-[1px]"
        style={{ 
          backgroundColor: colors.white[10],
          zIndex: zIndex.background 
        }}
      />
      
      {/* Content */}
      {children}
    </div>
  );
};

export default HeroSectionBackground;
