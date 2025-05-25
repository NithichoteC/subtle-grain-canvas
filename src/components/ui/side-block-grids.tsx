
"use client";

import { NoiseTexture } from '@/components/ui/noise-texture';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { colors, layout, noiseConfigs, zIndex } from '@/lib/design-tokens';

interface SideBlockGridsProps {
  className?: string;
}

/**
 * Side block grid enhancements with animated gradient backgrounds
 * Uses sophisticated bronze/gold color palette with differentiated animations
 * Ensures perfect edge-to-edge connection with zero gaps and scrolls with page
 */
export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ''}`}>
      {/* Left Edge Enhancement - Subtle, flowing animation */}
      <div 
        className="absolute left-0 top-0 bottom-0"
        style={{ width: 'calc(50vw - 640px)' }}
      >
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(20, 20, 20)"
          gradientBackgroundEnd="rgb(25, 25, 25)"
          firstColor="120, 90, 25"      // Muted bronze dark
          secondColor="140, 100, 35"    // Muted bronze medium  
          thirdColor="160, 120, 45"     // Muted gold
          fourthColor="100, 80, 20"     // Deep muted bronze
          fifthColor="180, 150, 80"     // Light muted bronze
          pointerColor="150, 115, 50"   // Muted bronze base
          size="140%"
          blendingValue="soft-light"
          interactive={true}
          containerClassName="h-full w-full"
          className="relative z-0"
        >
          {/* Geometric overlay pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(45deg, transparent 45%, rgba(184, 134, 11, 0.1) 50%, transparent 55%),
                               linear-gradient(-45deg, transparent 45%, rgba(184, 134, 11, 0.05) 50%, transparent 55%)`,
              backgroundSize: '60px 60px'
            }}
          />
          
          {/* Enhanced texture overlay */}
          <div className="absolute inset-0 z-10">
            <NoiseTexture 
              opacity={0.15}
              baseFrequency={0.8}
              numOctaves={2}
              backgroundSize="150px 150px"
            />
          </div>
          
          {/* Subtle scan line effect */}
          <div 
            className="absolute inset-0 z-5 opacity-30"
            style={{
              background: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(184, 134, 11, 0.02) 2px,
                rgba(184, 134, 11, 0.02) 4px
              )`
            }}
          />
        </BackgroundGradientAnimation>
      </div>
      
      {/* Right Edge Enhancement - Different animation pattern */}
      <div 
        className="absolute right-0 top-0 bottom-0"
        style={{ width: 'calc(50vw - 640px)' }}
      >
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(18, 22, 20)"
          gradientBackgroundEnd="rgb(22, 26, 24)"
          firstColor="140, 110, 40"     // Different bronze light
          secondColor="110, 85, 25"     // Different bronze deep
          thirdColor="130, 95, 30"      // Different bronze dark
          fourthColor="170, 130, 55"    // Different gold
          fifthColor="120, 90, 35"      // Different bronze medium
          pointerColor="135, 105, 45"   // Different bronze base
          size="160%"
          blendingValue="multiply"
          interactive={true}
          containerClassName="h-full w-full"
          className="relative z-0"
        >
          {/* Different geometric pattern */}
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(205, 127, 50, 0.08) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
          
          {/* Enhanced texture with different settings */}
          <div className="absolute inset-0 z-10">
            <NoiseTexture 
              opacity={0.12}
              baseFrequency={1.2}
              numOctaves={3}
              backgroundSize="120px 120px"
            />
          </div>
          
          {/* Subtle mesh overlay */}
          <div 
            className="absolute inset-0 z-5 opacity-25"
            style={{
              background: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 3px,
                rgba(205, 127, 50, 0.03) 3px,
                rgba(205, 127, 50, 0.03) 6px
              )`
            }}
          />
        </BackgroundGradientAnimation>
      </div>
      
      {/* Center connection zone - enhanced with subtle texture */}
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
          {/* Enhanced noise texture for consistency */}
          <NoiseTexture {...noiseConfigs.hero} />
          
          {/* Subtle breathing effect */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{ 
              background: `radial-gradient(ellipse 60% 40% at 50% 50%, ${colors.bronze.base}20 0%, transparent 70%)`,
              animation: 'pulse 8s ease-in-out infinite'
            }}
          />
        </div>
      </div>
    </div>
  );
}
