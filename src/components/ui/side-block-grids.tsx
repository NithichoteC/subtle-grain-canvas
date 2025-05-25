
"use client";

import { NoiseTexture } from '@/components/ui/noise-texture';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { colors, layout, noiseConfigs, zIndex } from '@/lib/design-tokens';
import { useState, useEffect, useRef } from 'react';

interface SideBlockGridsProps {
  className?: string;
}

/**
 * Enhanced side block grid with advanced interactivity and texture layers
 * Features mouse proximity effects, parallax scrolling, and layered textures
 */
export function SideBlockGrids({ className }: SideBlockGridsProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  // Enhanced mouse tracking with proximity detection
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const throttledMouseMove = throttle(handleMouseMove, 16); // ~60fps
    window.addEventListener('mousemove', throttledMouseMove);
    
    return () => window.removeEventListener('mousemove', throttledMouseMove);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY * 0.5); // Subtle parallax multiplier
    };

    const throttledScroll = throttle(handleScroll, 16);
    window.addEventListener('scroll', throttledScroll);
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  // Utility function for throttling
  function throttle(func: Function, limit: number) {
    let inThrottle: boolean;
    return function(this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // Calculate proximity intensity for interactive effects
  const calculateProximity = (side: 'left' | 'right') => {
    const sideWidth = window.innerWidth * 0.2; // 20% of screen width
    const threshold = 200; // pixels
    
    let distance = Infinity;
    if (side === 'left') {
      distance = mousePosition.x;
    } else {
      distance = window.innerWidth - mousePosition.x;
    }
    
    const intensity = Math.max(0, 1 - (distance / threshold));
    return intensity;
  };

  const leftProximity = calculateProximity('left');
  const rightProximity = calculateProximity('right');

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ''}`}>
      {/* Left Edge Enhancement with Advanced Interactivity */}
      <div 
        ref={leftRef}
        className="absolute left-0 top-0 bottom-0 transition-all duration-300"
        style={{ 
          width: 'calc(50vw - 640px)',
          transform: `translateY(${scrollY * 0.3}px)`,
          filter: `brightness(${1 + leftProximity * 0.3}) saturate(${1 + leftProximity * 0.2})`
        }}
      >
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(23, 23, 23)"
          gradientBackgroundEnd="rgb(35, 35, 35)"
          firstColor="110, 85, 8"      // Darker, more subtle bronze
          secondColor="145, 92, 35"    // Muted bronze medium  
          thirdColor="180, 150, 0"     // Toned gold
          fourthColor="99, 79, 28"     // Deep bronze
          fifthColor="160, 146, 136"   // Subtle bronze light
          pointerColor={`${171 + leftProximity * 30}, ${143 + leftProximity * 20}, ${100 + leftProximity * 15}`}
          size="140%"
          blendingValue="soft-light"
          interactive={true}
          containerClassName="h-full w-full"
          className="relative z-0"
          animationSet="left"
        >
          {/* Enhanced Texture Layers */}
          <div className="absolute inset-0 z-5">
            <NoiseTexture 
              opacity={0.04 + leftProximity * 0.02}
              baseFrequency={0.9}
              numOctaves={1}
              backgroundSize="100px 100px"
            />
          </div>
          
          {/* Animated Geometric Pattern */}
          <div 
            className="absolute inset-0 z-6 opacity-10"
            style={{
              background: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(${colors.bronze.base.replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(', ')}, ${0.05 + leftProximity * 0.1}) 10px,
                rgba(${colors.bronze.base.replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(', ')}, ${0.05 + leftProximity * 0.1}) 20px
              )`,
              animation: 'drift-left 20s linear infinite'
            }}
          />
          
          {/* Interactive Glow Effect */}
          <div 
            className="absolute inset-0 z-7 pointer-events-none"
            style={{
              background: `radial-gradient(
                circle at ${mousePosition.x}px ${mousePosition.y}px,
                rgba(${colors.bronze.gold.replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(', ')}, ${leftProximity * 0.15}) 0%,
                transparent 60%
              )`
            }}
          />

          {/* Edge Lighting Effect */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-1 z-8"
            style={{
              background: `linear-gradient(to bottom, 
                transparent 0%, 
                rgba(${colors.bronze.light.replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(', ')}, ${0.3 + leftProximity * 0.4}) 50%, 
                transparent 100%
              )`,
              boxShadow: `0 0 ${10 + leftProximity * 20}px rgba(${colors.bronze.gold.replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(', ')}, ${leftProximity * 0.5})`
            }}
          />
        </BackgroundGradientAnimation>
      </div>
      
      {/* Right Edge Enhancement with Offset Animations and Enhanced Interactivity */}
      <div 
        ref={rightRef}
        className="absolute right-0 top-0 bottom-0 transition-all duration-300"
        style={{ 
          width: 'calc(50vw - 640px)',
          transform: `translateY(${scrollY * -0.2}px)`, // Opposite parallax direction
          filter: `brightness(${1 + rightProximity * 0.3}) saturate(${1 + rightProximity * 0.2})`
        }}
      >
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(23, 23, 23)"
          gradientBackgroundEnd="rgb(35, 35, 35)"
          firstColor="160, 146, 136"   // Subtle bronze light (swapped order)
          secondColor="99, 79, 28"     // Deep bronze
          thirdColor="110, 85, 8"      // Darker bronze
          fourthColor="180, 150, 0"    // Toned gold
          fifthColor="145, 92, 35"     // Muted bronze medium
          pointerColor={`${151 + rightProximity * 30}, ${123 + rightProximity * 20}, ${90 + rightProximity * 15}`}
          size="140%"
          blendingValue="soft-light"
          interactive={true}
          containerClassName="h-full w-full"
          className="relative z-0"
          animationSet="right"
        >
          {/* Enhanced Texture Layers */}
          <div className="absolute inset-0 z-5">
            <NoiseTexture 
              opacity={0.04 + rightProximity * 0.02}
              baseFrequency={1.1}
              numOctaves={2}
              backgroundSize="120px 120px"
            />
          </div>
          
          {/* Animated Geometric Pattern - Different angle */}
          <div 
            className="absolute inset-0 z-6 opacity-10"
            style={{
              background: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 15px,
                rgba(${colors.bronze.base.replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(', ')}, ${0.05 + rightProximity * 0.1}) 15px,
                rgba(${colors.bronze.base.replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(', ')}, ${0.05 + rightProximity * 0.1}) 30px
              )`,
              animation: 'drift-right 25s linear infinite'
            }}
          />
          
          {/* Interactive Glow Effect */}
          <div 
            className="absolute inset-0 z-7 pointer-events-none"
            style={{
              background: `radial-gradient(
                circle at ${mousePosition.x}px ${mousePosition.y}px,
                rgba(${colors.bronze.gold.replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(', ')}, ${rightProximity * 0.15}) 0%,
                transparent 60%
              )`
            }}
          />

          {/* Edge Lighting Effect */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-1 z-8"
            style={{
              background: `linear-gradient(to bottom, 
                transparent 0%, 
                rgba(${colors.bronze.light.replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(', ')}, ${0.3 + rightProximity * 0.4}) 50%, 
                transparent 100%
              )`,
              boxShadow: `0 0 ${10 + rightProximity * 20}px rgba(${colors.bronze.gold.replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(', ')}, ${rightProximity * 0.5})`
            }}
          />
        </BackgroundGradientAnimation>
      </div>
      
      {/* Center connection zone with enhanced texture */}
      <div 
        className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2"
        style={{ width: '1280px' }}
      >
        <div 
          className="absolute inset-0"
          style={{ 
            background: colors.dark,
            borderLeft: `1px solid ${colors.white[15]}`,
            borderRight: `1px solid ${colors.white[15]}`
          }}
        >
          <NoiseTexture {...noiseConfigs.hero} />
          
          {/* Subtle scan lines for premium PWA feel */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              background: `repeating-linear-gradient(
                to bottom,
                transparent,
                transparent 2px,
                rgba(255, 255, 255, 0.02) 2px,
                rgba(255, 255, 255, 0.02) 4px
              )`,
              animation: 'scan-lines 8s linear infinite'
            }}
          />
        </div>
      </div>
      
      {/* Ultra-subtle ambient enhancement with interactive boost */}
      <div 
        className="absolute inset-0 z-5 transition-opacity duration-500"
        style={{ 
          background: `radial-gradient(ellipse 80% 50% at 50% 50%, ${colors.bronze.base}${Math.floor((0.01 + Math.max(leftProximity, rightProximity) * 0.03) * 255).toString(16).padStart(2, '0')} 0%, transparent 70%)`
        }}
      />
    </div>
  );
}
