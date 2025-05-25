
"use client";

import { NoiseTexture } from '@/components/ui/noise-texture';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { colors, layout, noiseConfigs, zIndex } from '@/lib/design-tokens';

interface SideBlockGridsProps {
  className?: string;
}

/**
 * Side block grid enhancements with animated gradient backgrounds
 * Uses toned-down bronze/gold color palette with differentiated left/right animations
 * Enhanced cursor responsiveness and rich texture matching hero section
 */
export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ''}`}>
      {/* Left Edge Enhancement - Original animation timing */}
      <div 
        className="absolute left-0 top-0 bottom-0"
        style={{ width: 'calc(50vw - 640px)' }}
      >
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(23, 23, 23)"
          gradientBackgroundEnd="rgb(35, 35, 35)"
          firstColor="130, 95, 8"      // Darker bronze
          secondColor="165, 102, 40"   // Muted bronze medium  
          thirdColor="200, 170, 0"     // Toned gold
          fourthColor="119, 89, 33"    // Deep bronze
          fifthColor="180, 166, 156"   // Subtle bronze light
          pointerColor="210, 180, 120" // Enhanced pointer intensity
          size="120%"
          blendingValue="overlay"
          interactive={true}
          containerClassName="h-full w-full"
          className="relative z-0"
          animationSet="left"
          cursorResponsiveness="enhanced"
        >
          {/* 3D Asset Zone */}
          <div 
            className="absolute top-1/4 left-8 w-16 h-16 opacity-0 transition-opacity duration-500 hover:opacity-100 z-10"
            aria-label="Reserved space for 3D assets"
          />
          
          {/* Rich texture overlay matching hero section */}
          <div className="absolute inset-0 z-10">
            <NoiseTexture {...noiseConfigs.hero} />
          </div>
        </BackgroundGradientAnimation>
      </div>
      
      {/* Right Edge Enhancement - Offset animation timing */}
      <div 
        className="absolute right-0 top-0 bottom-0"
        style={{ width: 'calc(50vw - 640px)' }}
      >
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(23, 23, 23)"
          gradientBackgroundEnd="rgb(35, 35, 35)"
          firstColor="180, 166, 156"   // Subtle bronze light (swapped order)
          secondColor="119, 89, 33"    // Deep bronze
          thirdColor="130, 95, 8"      // Darker bronze
          fourthColor="200, 170, 0"    // Toned gold
          fifthColor="165, 102, 40"    // Muted bronze medium
          pointerColor="210, 180, 120" // Enhanced pointer intensity
          size="120%"
          blendingValue="overlay"
          interactive={true}
          containerClassName="h-full w-full"
          className="relative z-0"
          animationSet="right"
          cursorResponsiveness="enhanced"
        >
          {/* 3D Asset Zone */}
          <div 
            className="absolute top-1/3 right-8 w-16 h-16 opacity-0 transition-opacity duration-500 hover:opacity-100 z-10"
            aria-label="Reserved space for 3D assets"
          />
          
          {/* Rich texture overlay matching hero section */}
          <div className="absolute inset-0 z-10">
            <NoiseTexture {...noiseConfigs.hero} />
          </div>
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
      
      {/* Ultra-subtle ambient enhancement */}
      <div 
        className="absolute inset-0 z-5"
        style={{ 
          background: `radial-gradient(ellipse 80% 50% at 50% 50%, ${colors.bronze.base}01 0%, transparent 70%)`
        }}
      />
    </div>
  );
}
