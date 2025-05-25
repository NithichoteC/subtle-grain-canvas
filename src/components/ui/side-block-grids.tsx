
"use client";

import { NoiseTexture } from '@/components/ui/noise-texture';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { colors, layout, noiseConfigs, zIndex } from '@/lib/design-tokens';

interface SideBlockGridsProps {
  className?: string;
}

/**
 * Side block grid enhancements with animated gradient backgrounds
 * Creates illusion of continuous gradient flow across the page with offset timing and mirrored directions
 * Uses bronze/gold color palette with coordinated gradient animations
 */
export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ''}`}>
      {/* Left Edge Enhancement - Flows right-to-left with slower timing */}
      <div 
        className="absolute left-0 top-0 bottom-0"
        style={{ width: 'calc(50vw - 640px)' }}
      >
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(23, 23, 23)"
          gradientBackgroundEnd="rgb(35, 35, 35)"
          firstColor="184, 134, 11"    // Bronze dark
          secondColor="205, 127, 50"   // Bronze medium  
          thirdColor="255, 215, 0"     // Gold
          fourthColor="149, 111, 41"   // Bronze deep
          fifthColor="226, 209, 195"   // Bronze light
          pointerColor="239, 204, 138" // Bronze base
          size="120%"
          blendingValue="overlay"
          interactive={true}
          containerClassName="h-full w-full"
          className="relative z-0"
          animationSpeed="slow"
        >
          {/* 3D Asset Zone */}
          <div 
            className="absolute top-1/4 left-8 w-16 h-16 opacity-0 transition-opacity duration-500 hover:opacity-100 z-10"
            aria-label="Reserved space for 3D assets"
          />
          
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 z-10">
            <NoiseTexture {...noiseConfigs.sideBlocks} />
          </div>

          {/* Left side breathing effect - starts with 3s delay */}
          <div 
            className="absolute inset-0 z-5 animate-breathe-left"
            style={{ 
              background: `radial-gradient(ellipse 120% 80% at 80% 50%, ${colors.bronze.base}02 0%, transparent 60%)`
            }}
          />
        </BackgroundGradientAnimation>
      </div>
      
      {/* Right Edge Enhancement - Flows left-to-right with faster timing */}
      <div 
        className="absolute right-0 top-0 bottom-0"
        style={{ width: 'calc(50vw - 640px)' }}
      >
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(23, 23, 23)"
          gradientBackgroundEnd="rgb(35, 35, 35)"
          firstColor="226, 209, 195"   // Bronze light (reversed order for flow effect)
          secondColor="149, 111, 41"   // Bronze deep
          thirdColor="184, 134, 11"    // Bronze dark
          fourthColor="255, 215, 0"    // Gold
          fifthColor="205, 127, 50"    // Bronze medium
          pointerColor="239, 204, 138" // Bronze base
          size="120%"
          blendingValue="overlay"
          interactive={true}
          containerClassName="h-full w-full"
          className="relative z-0"
          animationSpeed="fast"
        >
          {/* 3D Asset Zone */}
          <div 
            className="absolute top-1/3 right-8 w-16 h-16 opacity-0 transition-opacity duration-500 hover:opacity-100 z-10"
            aria-label="Reserved space for 3D assets"
          />
          
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 z-10">
            <NoiseTexture {...noiseConfigs.sideBlocks} />
          </div>

          {/* Right side breathing effect - starts immediately */}
          <div 
            className="absolute inset-0 z-5 animate-breathe-right"
            style={{ 
              background: `radial-gradient(ellipse 120% 80% at 20% 50%, ${colors.bronze.base}02 0%, transparent 60%)`
            }}
          />
        </BackgroundGradientAnimation>
      </div>
      
      {/* Center connection zone - fills the 1280px center area */}
      <div 
        className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2"
        style={{ width: '1280px' }}
      >
        <div 
          className="absolute inset-0"
          style={{ 
            background: colors.dark,
            borderLeft: `1px solid ${colors.white[10]}`,
            borderRight: `1px solid ${colors.white[10]}`
          }}
        >
          {/* Noise texture for consistency */}
          <NoiseTexture {...noiseConfigs.hero} />
        </div>
      </div>
      
      {/* Cross-flow ambient enhancement - creates connection between sides */}
      <div 
        className="absolute inset-0 z-5 animate-cross-flow"
        style={{ 
          background: `linear-gradient(90deg, ${colors.bronze.base}01 0%, ${colors.bronze.base}03 30%, ${colors.bronze.base}03 70%, ${colors.bronze.base}01 100%)`
        }}
      />
    </div>
  );
}
