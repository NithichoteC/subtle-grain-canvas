
"use client";

import { NoiseTexture } from '@/components/ui/noise-texture';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { colors, layout, noiseConfigs, zIndex } from '@/lib/design-tokens';

interface SideBlockGridsProps {
  className?: string;
}

/**
 * Side block grid enhancements with animated gradient backgrounds
 * Uses bronze/gold color palette with smooth gradient animations
 * Fixed for seamless edge-to-edge coverage and responsive design
 */
export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className || ''}`}>
      {/* Left Edge Enhancement - Full Height, Responsive Width */}
      <div className="absolute left-0 top-0 bottom-0 w-48 sm:w-56 md:w-64 lg:w-80 xl:w-96">
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(23, 23, 23)"
          gradientBackgroundEnd="rgb(35, 35, 35)"
          firstColor="184, 134, 11"    // Bronze dark
          secondColor="205, 127, 50"   // Bronze medium  
          thirdColor="255, 215, 0"     // Gold
          fourthColor="149, 111, 41"   // Bronze deep
          fifthColor="226, 209, 195"   // Bronze light
          pointerColor="239, 204, 138" // Bronze base
          size="140%"
          blendingValue="overlay"
          interactive={true}
          containerClassName="h-full w-full"
          className="relative z-0"
        >
          {/* Border accent */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-px z-10"
            style={{
              background: `linear-gradient(to bottom, transparent 0%, ${colors.bronze.base}30 50%, transparent 100%)`
            }}
          />
          
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 z-10">
            <NoiseTexture {...noiseConfigs.sideBlocks} />
          </div>
        </BackgroundGradientAnimation>
      </div>
      
      {/* Right Edge Enhancement - Full Height, Responsive Width */}
      <div className="absolute right-0 top-0 bottom-0 w-48 sm:w-56 md:w-64 lg:w-80 xl:w-96">
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(23, 23, 23)"
          gradientBackgroundEnd="rgb(35, 35, 35)"
          firstColor="226, 209, 195"   // Bronze light
          secondColor="149, 111, 41"   // Bronze deep
          thirdColor="184, 134, 11"    // Bronze dark
          fourthColor="255, 215, 0"    // Gold
          fifthColor="205, 127, 50"    // Bronze medium
          pointerColor="239, 204, 138" // Bronze base
          size="140%"
          blendingValue="overlay"
          interactive={true}
          containerClassName="h-full w-full"
          className="relative z-0"
        >
          {/* Border accent */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-px z-10"
            style={{
              background: `linear-gradient(to bottom, transparent 0%, ${colors.bronze.base}30 50%, transparent 100%)`
            }}
          />
          
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 z-10">
            <NoiseTexture {...noiseConfigs.sideBlocks} />
          </div>
        </BackgroundGradientAnimation>
      </div>
    </div>
  );
}
