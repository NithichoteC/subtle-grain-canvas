
"use client";

import { NoiseTexture } from '@/components/ui/noise-texture';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { colors, layout, noiseConfigs, zIndex } from '@/lib/design-tokens';

interface SideBlockGridsProps {
  className?: string;
}

/**
 * Side block grid enhancements with completely different animated gradient backgrounds
 * Left side: Organic, breathing movements with warm color shifts
 * Right side: Geometric, tech-like movements with cooler tones
 */
export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ''}`}>
      {/* Left Edge Enhancement - Organic, breathing animation */}
      <div 
        className="absolute left-0 top-0 bottom-0"
        style={{ width: 'calc(50vw - 640px)' }}
      >
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(18, 20, 18)"
          gradientBackgroundEnd="rgb(22, 24, 20)"
          firstColor="140, 105, 35"      // Warm bronze
          secondColor="165, 125, 45"     // Golden bronze  
          thirdColor="120, 85, 25"       // Deep warm bronze
          fourthColor="180, 140, 60"     // Light warm gold
          fifthColor="100, 70, 20"       // Dark warm bronze
          pointerColor="155, 115, 40"    // Medium warm bronze
          size="200%"
          blendingValue="overlay"
          interactive={true}
          containerClassName="h-full w-full animate-organic-breathe"
          className="relative z-0"
        >
          {/* Organic flowing pattern */}
          <div 
            className="absolute inset-0 opacity-25 animate-organic-flow"
            style={{
              backgroundImage: `radial-gradient(ellipse 80px 40px at 30% 20%, rgba(180, 135, 50, 0.15) 0%, transparent 60%),
                               radial-gradient(ellipse 60px 80px at 70% 80%, rgba(165, 125, 45, 0.12) 0%, transparent 60%),
                               radial-gradient(ellipse 100px 50px at 20% 60%, rgba(140, 105, 35, 0.1) 0%, transparent 60%)`,
              backgroundSize: '300px 400px, 250px 350px, 350px 300px'
            }}
          />
          
          {/* Enhanced organic texture */}
          <div className="absolute inset-0 z-10">
            <NoiseTexture 
              opacity={0.25}
              baseFrequency={1.1}
              numOctaves={4}
              backgroundSize="180px 180px"
            />
          </div>
          
          {/* Flowing wave pattern */}
          <div 
            className="absolute inset-0 z-5 opacity-20 animate-wave-flow"
            style={{
              background: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 8px,
                rgba(180, 135, 50, 0.05) 8px,
                rgba(180, 135, 50, 0.05) 16px
              )`
            }}
          />
          
          {/* Breathing color overlay */}
          <div 
            className="absolute inset-0 z-3 opacity-15 animate-color-breathe"
            style={{
              background: `radial-gradient(ellipse 70% 50% at 40% 50%, rgba(200, 160, 80, 0.1) 0%, transparent 70%)`
            }}
          />
        </BackgroundGradientAnimation>
      </div>
      
      {/* Right Edge Enhancement - Geometric, tech animation */}
      <div 
        className="absolute right-0 top-0 bottom-0"
        style={{ width: 'calc(50vw - 640px)' }}
      >
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(16, 18, 22)"
          gradientBackgroundEnd="rgb(20, 22, 26)"
          firstColor="110, 95, 40"       // Cool bronze
          secondColor="130, 110, 50"     // Medium cool bronze
          thirdColor="95, 80, 30"        // Deep cool bronze
          fourthColor="150, 125, 55"     // Light cool gold
          fifthColor="85, 70, 25"        // Dark cool bronze
          pointerColor="125, 105, 45"    // Medium cool bronze
          size="180%"
          blendingValue="hard-light"
          interactive={true}
          containerClassName="h-full w-full animate-tech-pulse"
          className="relative z-0"
        >
          {/* Geometric tech pattern */}
          <div 
            className="absolute inset-0 opacity-20 animate-tech-grid"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(150, 125, 55, 0.1) 1px, transparent 1px),
                               linear-gradient(0deg, rgba(150, 125, 55, 0.1) 1px, transparent 1px),
                               linear-gradient(45deg, rgba(130, 110, 50, 0.08) 1px, transparent 1px)`,
              backgroundSize: '40px 40px, 40px 40px, 80px 80px'
            }}
          />
          
          {/* Tech texture with different settings */}
          <div className="absolute inset-0 z-10">
            <NoiseTexture 
              opacity={0.30}
              baseFrequency={1.5}
              numOctaves={2}
              backgroundSize="120px 120px"
            />
          </div>
          
          {/* Angular sweep pattern */}
          <div 
            className="absolute inset-0 z-5 opacity-25 animate-angular-sweep"
            style={{
              background: `repeating-linear-gradient(
                135deg,
                transparent,
                transparent 12px,
                rgba(150, 125, 55, 0.04) 12px,
                rgba(150, 125, 55, 0.04) 24px
              )`
            }}
          />
          
          {/* Tech scan lines */}
          <div 
            className="absolute inset-0 z-7 opacity-15 animate-scan-lines"
            style={{
              background: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 6px,
                rgba(130, 110, 50, 0.06) 6px,
                rgba(130, 110, 50, 0.06) 7px
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
            className="absolute inset-0 opacity-8"
            style={{ 
              background: `radial-gradient(ellipse 60% 40% at 50% 50%, ${colors.bronze.base}15 0%, transparent 70%)`,
              animation: 'pulse 12s ease-in-out infinite'
            }}
          />
        </div>
      </div>
    </div>
  );
}
