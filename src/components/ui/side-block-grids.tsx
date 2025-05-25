"use client";

import { NoiseTexture } from '@/components/ui/noise-texture';
import { BackgroundGradientAnimationDebug } from '@/components/ui/background-gradient-animation-debug';
import { DotPattern } from '@/components/ui/dot-pattern';
import { colors, layout, noiseConfigs, zIndex } from '@/lib/design-tokens';

interface SideBlockGridsProps {
  className?: string;
}

/**
 * Side block grid enhancements with animated gradient backgrounds
 * Enhanced with layered textures and high-tech geometric patterns
 * Premium enterprise aesthetic with sophisticated visual depth
 */
export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ''}`}>
      {/* Left Edge Enhancement - Original animation timing */}
      <div 
        className="absolute left-0 top-0 bottom-0"
        style={{ width: 'calc(50vw - 640px)' }}
      >
        <BackgroundGradientAnimationDebug
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
          {/* Base noise texture */}
          <div className="absolute inset-0 z-10">
            <NoiseTexture {...noiseConfigs.hero} />
          </div>
          
          {/* Enhanced dot pattern with more visibility */}
          <div className="absolute inset-0 z-8">
            <DotPattern
              glow={true}
              dotSize={1.5}
              spacing={20}
              opacity={0.12}
              color={colors.bronze.base}
              glowColor={colors.bronze.light}
              className="[mask-image:radial-gradient(500px_circle_at_25%_50%,white,transparent)]"
            />
          </div>
          
          {/* Secondary dot layer for depth */}
          <div className="absolute inset-0 z-7">
            <DotPattern
              glow={false}
              dotSize={0.8}
              spacing={35}
              opacity={0.08}
              color={colors.bronze.medium}
              className="[mask-image:radial-gradient(400px_circle_at_40%_30%,white,transparent)]"
            />
          </div>
          
          {/* High-tech grid overlay */}
          <div 
            className="absolute inset-0 z-10 opacity-[0.12]"
            style={{
              backgroundImage: `
                linear-gradient(90deg, ${colors.bronze.base}30 1px, transparent 1px),
                linear-gradient(180deg, ${colors.bronze.base}30 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
          
          {/* Subtle diagonal lines for tech aesthetic */}
          <div 
            className="absolute inset-0 z-10 opacity-[0.08]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 20px,
                ${colors.bronze.light}20 20px,
                ${colors.bronze.light}20 21px
              )`
            }}
          />
          
          {/* Circuit-like pattern */}
          <div 
            className="absolute inset-0 z-10 opacity-[0.06]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, ${colors.bronze.base}40 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, ${colors.bronze.base}40 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />
          
          {/* 3D Asset Zone */}
          <div 
            className="absolute top-1/4 left-8 w-16 h-16 opacity-0 transition-opacity duration-500 hover:opacity-100 z-20"
            aria-label="Reserved space for 3D assets"
          />
        </BackgroundGradientAnimationDebug>
      </div>
      
      {/* Right Edge Enhancement - Offset animation timing */}
      <div 
        className="absolute right-0 top-0 bottom-0"
        style={{ width: 'calc(50vw - 640px)' }}
      >
        <BackgroundGradientAnimationDebug
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
          {/* Base noise texture */}
          <div className="absolute inset-0 z-10">
            <NoiseTexture {...noiseConfigs.hero} />
          </div>
          
          {/* Enhanced dot pattern with offset for asymmetry */}
          <div className="absolute inset-0 z-8">
            <DotPattern
              glow={true}
              dotSize={1.2}
              spacing={25}
              opacity={0.10}
              color={colors.bronze.medium}
              glowColor={colors.bronze.gold}
              className="[mask-image:radial-gradient(450px_circle_at_75%_40%,white,transparent)]"
            />
          </div>
          
          {/* Secondary dot layer for depth - different pattern */}
          <div className="absolute inset-0 z-7">
            <DotPattern
              glow={false}
              dotSize={0.6}
              spacing={30}
              opacity={0.06}
              color={colors.bronze.gold}
              className="[mask-image:radial-gradient(350px_circle_at_60%_60%,white,transparent)]"
            />
          </div>
          
          {/* High-tech grid overlay - offset pattern */}
          <div 
            className="absolute inset-0 z-10 opacity-[0.12]"
            style={{
              backgroundImage: `
                linear-gradient(90deg, ${colors.bronze.base}30 1px, transparent 1px),
                linear-gradient(180deg, ${colors.bronze.base}30 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              backgroundPosition: '20px 20px'
            }}
          />
          
          {/* Diagonal lines - opposite direction */}
          <div 
            className="absolute inset-0 z-10 opacity-[0.08]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 20px,
                ${colors.bronze.light}20 20px,
                ${colors.bronze.light}20 21px
              )`
            }}
          />
          
          {/* Circuit pattern - offset positions */}
          <div 
            className="absolute inset-0 z-10 opacity-[0.06]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 75% 25%, ${colors.bronze.base}40 1px, transparent 1px),
                radial-gradient(circle at 25% 75%, ${colors.bronze.base}40 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />
          
          {/* 3D Asset Zone */}
          <div 
            className="absolute top-1/3 right-8 w-16 h-16 opacity-0 transition-opacity duration-500 hover:opacity-100 z-20"
            aria-label="Reserved space for 3D assets"
          />
        </BackgroundGradientAnimationDebug>
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
