
"use client";

import { NoiseTexture } from '@/components/ui/noise-texture';
import { DotPattern } from '@/components/ui/dot-pattern';
import { colors, noiseConfigs } from '@/lib/design-tokens';

interface CustomGradientAnimationProps {
  side: 'left' | 'right';
  className?: string;
}

/**
 * Custom gradient animation component with perfect bronze gradients
 * Eliminates glitching and provides complete control over the animation
 */
export function CustomGradientAnimation({ side, className }: CustomGradientAnimationProps) {
  const isLeft = side === 'left';
  
  return (
    <div className={`relative h-full w-full overflow-hidden ${className || ''}`}>
      {/* Base dark background */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: colors.dark }}
      />
      
      {/* Primary flowing gradient layer */}
      <div 
        className={`absolute inset-0 ${isLeft ? 'animate-gradient-flow-left' : 'animate-gradient-flow-right'}`}
        style={{
          background: isLeft 
            ? `radial-gradient(ellipse 120% 80% at 80% 50%, 
                rgba(184, 134, 11, 0.15) 0%,
                rgba(149, 111, 41, 0.12) 25%,
                rgba(205, 127, 50, 0.08) 50%,
                rgba(255, 215, 0, 0.05) 75%,
                transparent 100%)`
            : `radial-gradient(ellipse 120% 80% at 20% 50%, 
                rgba(255, 215, 0, 0.15) 0%,
                rgba(205, 127, 50, 0.12) 25%,
                rgba(149, 111, 41, 0.08) 50%,
                rgba(184, 134, 11, 0.05) 75%,
                transparent 100%)`
        }}
      />
      
      {/* Secondary gradient layer with different timing */}
      <div 
        className={`absolute inset-0 ${isLeft ? 'animate-gradient-flow-left-secondary' : 'animate-gradient-flow-right-secondary'}`}
        style={{
          background: isLeft 
            ? `linear-gradient(135deg, 
                rgba(226, 209, 195, 0.08) 0%,
                rgba(184, 134, 11, 0.06) 30%,
                rgba(205, 127, 50, 0.04) 60%,
                transparent 100%)`
            : `linear-gradient(45deg, 
                rgba(205, 127, 50, 0.08) 0%,
                rgba(184, 134, 11, 0.06) 30%,
                rgba(226, 209, 195, 0.04) 60%,
                transparent 100%)`
        }}
      />
      
      {/* Tertiary shimmer layer */}
      <div 
        className={`absolute inset-0 opacity-60 ${isLeft ? 'animate-shimmer-left' : 'animate-shimmer-right'}`}
        style={{
          background: `linear-gradient(${isLeft ? '90deg' : '-90deg'}, 
            transparent 0%,
            rgba(255, 215, 0, 0.03) 25%,
            rgba(226, 209, 195, 0.05) 50%,
            rgba(255, 215, 0, 0.03) 75%,
            transparent 100%)`
        }}
      />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 z-10">
        <NoiseTexture {...noiseConfigs.hero} />
      </div>
      
      {/* Dot pattern with bronze glow */}
      <div className="absolute inset-0 z-8">
        <DotPattern
          glow={true}
          dotSize={isLeft ? 1.2 : 1}
          spacing={isLeft ? 24 : 28}
          opacity={0.04}
          color={colors.bronze.base}
          glowColor={colors.bronze.light}
          className={`[mask-image:radial-gradient(${isLeft ? '400px' : '350px'}_circle_at_${isLeft ? '30%' : '70%'}_50%,white,transparent)]`}
        />
      </div>
      
      {/* High-tech grid overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, ${colors.bronze.base}20 1px, transparent 1px),
            linear-gradient(180deg, ${colors.bronze.base}20 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: isLeft ? '0 0' : '20px 20px'
        }}
      />
      
      {/* Diagonal tech lines */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.06]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            ${isLeft ? '45deg' : '-45deg'},
            transparent,
            transparent 20px,
            ${colors.bronze.light}15 20px,
            ${colors.bronze.light}15 21px
          )`
        }}
      />
      
      {/* Circuit-like pattern */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.04]"
        style={{
          backgroundImage: `
            radial-gradient(circle at ${isLeft ? '25% 25%' : '75% 25%'}, ${colors.bronze.base}30 1px, transparent 1px),
            radial-gradient(circle at ${isLeft ? '75% 75%' : '25% 75%'}, ${colors.bronze.base}30 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* 3D Asset placeholder */}
      <div 
        className={`absolute ${isLeft ? 'top-1/4 left-8' : 'top-1/3 right-8'} w-16 h-16 opacity-0 transition-opacity duration-500 hover:opacity-100 z-20`}
        aria-label="Reserved space for 3D assets"
      />
    </div>
  );
}
