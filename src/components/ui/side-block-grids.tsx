
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
          gradientBackgroundStart="rgb(20, 20, 20)"
          gradientBackgroundEnd="rgb(30, 30, 30)"
          firstColor="226, 209, 195"   // Bronze light (start with light)
          secondColor="255, 215, 0"    // Gold
          thirdColor="205, 127, 50"    // Bronze medium
          fourthColor="184, 134, 11"   // Bronze dark
          fifthColor="149, 111, 41"    // Bronze deep
          pointerColor="239, 204, 138" // Bronze base
          size="140%"
          blendingValue="multiply"
          interactive={false}
          containerClassName="h-full w-full"
          className="relative z-0"
          animationSpeed="slow"
          animationDelay="0s"
        >
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 z-10">
            <NoiseTexture {...noiseConfigs.sideBlocks} />
          </div>

          {/* Left side flowing effect */}
          <div 
            className="absolute inset-0 z-5 animate-flow-left"
            style={{ 
              background: `linear-gradient(45deg, 
                ${colors.bronze.light}08 0%, 
                ${colors.bronze.gold}12 25%, 
                ${colors.bronze.medium}06 50%, 
                ${colors.bronze.dark}10 75%, 
                ${colors.bronze.deep}04 100%)`
            }}
          />
        </BackgroundGradientAnimation>
      </div>
      
      {/* Right Edge Enhancement - Flows left-to-right with faster timing, reversed colors */}
      <div 
        className="absolute right-0 top-0 bottom-0"
        style={{ width: 'calc(50vw - 640px)' }}
      >
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(20, 20, 20)"
          gradientBackgroundEnd="rgb(30, 30, 30)"
          firstColor="149, 111, 41"    // Bronze deep (start with deep)
          secondColor="184, 134, 11"   // Bronze dark
          thirdColor="205, 127, 50"    // Bronze medium
          fourthColor="255, 215, 0"    // Gold
          fifthColor="226, 209, 195"   // Bronze light
          pointerColor="239, 204, 138" // Bronze base
          size="140%"
          blendingValue="multiply"
          interactive={false}
          containerClassName="h-full w-full"
          className="relative z-0"
          animationSpeed="fast"
          animationDelay="2s"
        >
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 z-10">
            <NoiseTexture {...noiseConfigs.sideBlocks} />
          </div>

          {/* Right side flowing effect - opposite direction */}
          <div 
            className="absolute inset-0 z-5 animate-flow-right"
            style={{ 
              background: `linear-gradient(-45deg, 
                ${colors.bronze.deep}04 0%, 
                ${colors.bronze.dark}10 25%, 
                ${colors.bronze.medium}06 50%, 
                ${colors.bronze.gold}12 75%, 
                ${colors.bronze.light}08 100%)`
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
      
      {/* Dynamic cross-flow connector */}
      <div 
        className="absolute inset-0 z-6 animate-cross-flow"
        style={{ 
          background: `linear-gradient(90deg, 
            ${colors.bronze.light}02 0%, 
            ${colors.bronze.medium}06 20%, 
            ${colors.bronze.gold}08 40%, 
            ${colors.bronze.base}10 50%, 
            ${colors.bronze.gold}08 60%, 
            ${colors.bronze.medium}06 80%, 
            ${colors.bronze.light}02 100%)`
        }}
      />
    </div>
  );
}
