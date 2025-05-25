
"use client";

import { NoiseTexture } from '@/components/ui/noise-texture';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { DotPattern } from '@/components/ui/dot-pattern';
import { colors, layout, noiseConfigs, zIndex } from '@/lib/design-tokens';

interface SideBlockGridsProps {
  className?: string;
}

/**
 * Side block grid enhancements with animated gradient backgrounds
 * Enhanced with layered textures and high-tech geometric patterns
 * Premium enterprise aesthetic with sophisticated visual depth
 * Now fully responsive with proper visibility on all screen sizes
 */
export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ''}`}>
      {/* Left Edge Enhancement - Responsive width */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[calc(max(200px,50vw-640px))] 2xl:w-[calc(50vw-640px)]"
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
          {/* Base noise texture */}
          <div className="absolute inset-0 z-10">
            <NoiseTexture {...noiseConfigs.hero} />
          </div>
          
          {/* Enhanced dot pattern with increased visibility */}
          <div className="absolute inset-0 z-8">
            <DotPattern
              glow={true}
              dotSize={2}
              spacing={18}
              opacity={0.25}
              color={colors.bronze.base}
              glowColor={colors.bronze.light}
              className="[mask-image:radial-gradient(600px_circle_at_25%_50%,white,transparent)]"
            />
          </div>
          
          {/* Secondary dot layer for depth */}
          <div className="absolute inset-0 z-7">
            <DotPattern
              glow={false}
              dotSize={1}
              spacing={30}
              opacity={0.15}
              color={colors.bronze.medium}
              className="[mask-image:radial-gradient(500px_circle_at_40%_30%,white,transparent)]"
            />
          </div>
          
          {/* High-tech grid overlay - increased visibility */}
          <div 
            className="absolute inset-0 z-10 opacity-[0.2]"
            style={{
              backgroundImage: `
                linear-gradient(90deg, ${colors.bronze.base}40 1px, transparent 1px),
                linear-gradient(180deg, ${colors.bronze.base}40 1px, transparent 1px)
              `,
              backgroundSize: '35px 35px'
            }}
          />
          
          {/* Subtle diagonal lines for tech aesthetic */}
          <div 
            className="absolute inset-0 z-10 opacity-[0.12]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 18px,
                ${colors.bronze.light}30 18px,
                ${colors.bronze.light}30 19px
              )`
            }}
          />
          
          {/* Circuit-like pattern */}
          <div 
            className="absolute inset-0 z-10 opacity-[0.1]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, ${colors.bronze.base}50 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, ${colors.bronze.base}50 1px, transparent 1px)
              `,
              backgroundSize: '70px 70px'
            }}
          />
          
          {/* 3D Asset Zone */}
          <div 
            className="absolute top-1/4 left-8 w-16 h-16 opacity-0 transition-opacity duration-500 hover:opacity-100 z-20"
            aria-label="Reserved space for 3D assets"
          />
        </BackgroundGradientAnimation>
      </div>
      
      {/* Right Edge Enhancement - Responsive width */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[calc(max(200px,50vw-640px))] 2xl:w-[calc(50vw-640px)]"
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
          {/* Base noise texture */}
          <div className="absolute inset-0 z-10">
            <NoiseTexture {...noiseConfigs.hero} />
          </div>
          
          {/* Enhanced dot pattern with offset for asymmetry */}
          <div className="absolute inset-0 z-8">
            <DotPattern
              glow={true}
              dotSize={1.8}
              spacing={22}
              opacity={0.22}
              color={colors.bronze.medium}
              glowColor={colors.bronze.gold}
              className="[mask-image:radial-gradient(550px_circle_at_75%_40%,white,transparent)]"
            />
          </div>
          
          {/* Secondary dot layer for depth - different pattern */}
          <div className="absolute inset-0 z-7">
            <DotPattern
              glow={false}
              dotSize={0.8}
              spacing={28}
              opacity={0.12}
              color={colors.bronze.gold}
              className="[mask-image:radial-gradient(450px_circle_at_60%_60%,white,transparent)]"
            />
          </div>
          
          {/* High-tech grid overlay - offset pattern */}
          <div 
            className="absolute inset-0 z-10 opacity-[0.18]"
            style={{
              backgroundImage: `
                linear-gradient(90deg, ${colors.bronze.base}40 1px, transparent 1px),
                linear-gradient(180deg, ${colors.bronze.base}40 1px, transparent 1px)
              `,
              backgroundSize: '35px 35px',
              backgroundPosition: '17px 17px' // Offset for right side
            }}
          />
          
          {/* Diagonal lines - opposite direction */}
          <div 
            className="absolute inset-0 z-10 opacity-[0.12]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 18px,
                ${colors.bronze.light}30 18px,
                ${colors.bronze.light}30 19px
              )`
            }}
          />
          
          {/* Circuit pattern - offset positions */}
          <div 
            className="absolute inset-0 z-10 opacity-[0.1]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 75% 25%, ${colors.bronze.base}50 1px, transparent 1px),
                radial-gradient(circle at 25% 75%, ${colors.bronze.base}50 1px, transparent 1px)
              `,
              backgroundSize: '70px 70px'
            }}
          />
          
          {/* 3D Asset Zone */}
          <div 
            className="absolute top-1/3 right-8 w-16 h-16 opacity-0 transition-opacity duration-500 hover:opacity-100 z-20"
            aria-label="Reserved space for 3D assets"
          />
        </BackgroundGradientAnimation>
      </div>
      
      {/* Center connection zone - responsive width to prevent overlaps */}
      <div 
        className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1280px]"
        style={{ 
          marginLeft: 'clamp(-50vw, -640px, -640px)',
          marginRight: 'clamp(-50vw, -640px, -640px)'
        }}
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
          background: `radial-gradient(ellipse 80% 50% at 50% 50%, ${colors.bronze.base}02 0%, transparent 70%)`
        }}
      />
    </div>
  );
}
