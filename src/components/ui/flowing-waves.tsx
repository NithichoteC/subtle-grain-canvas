
"use client";

import React from 'react';

interface FlowingWavesProps {
  side: 'left' | 'right';
  className?: string;
}

export function FlowingWaves({ side, className }: FlowingWavesProps) {
  // Create multiple wave paths for layered effect
  const wavePaths = [
    // Primary wave - most prominent
    "M0,100 Q50,20 100,100 T200,100 T300,100 T400,100 T500,100 T600,100 T700,100 T800,100",
    // Secondary wave - offset pattern
    "M0,150 Q30,70 80,150 T180,150 T280,150 T380,150 T480,150 T580,150 T680,150 T780,150",
    // Tertiary wave - subtle background
    "M0,200 Q70,120 140,200 T340,200 T540,200 T740,200 T940,200"
  ];

  const isLeft = side === 'left';

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ''}`}>
      {/* SVG Wave Container */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient definitions for bronze/gold effect */}
          <linearGradient id={`waveGradient1-${side}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#efcc8a" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#cd7f32" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#efcc8a" stopOpacity="0.06" />
          </linearGradient>
          
          <linearGradient id={`waveGradient2-${side}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b8860b" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#efcc8a" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#cd7f32" stopOpacity="0.04" />
          </linearGradient>

          <linearGradient id={`waveGradient3-${side}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffd700" stopOpacity="0.03" />
            <stop offset="50%" stopColor="#daa520" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#b8860b" stopOpacity="0.02" />
          </linearGradient>

          {/* Glow filter for premium effect */}
          <filter id={`glow-${side}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Primary flowing wave */}
        <path
          d={`M${isLeft ? '0' : '100'},0 Q${isLeft ? '15' : '85'},100 ${isLeft ? '0' : '100'},200 T${isLeft ? '0' : '100'},400 T${isLeft ? '0' : '100'},600 T${isLeft ? '0' : '100'},800`}
          fill="none"
          stroke={`url(#waveGradient1-${side})`}
          strokeWidth="1.5"
          filter={`url(#glow-${side})`}
          className="animate-pulse"
          style={{
            animationDuration: '4s',
            animationDelay: '0s'
          }}
        />

        {/* Secondary wave with offset */}
        <path
          d={`M${isLeft ? '0' : '100'},50 Q${isLeft ? '25' : '75'},150 ${isLeft ? '0' : '100'},250 T${isLeft ? '0' : '100'},450 T${isLeft ? '0' : '100'},650 T${isLeft ? '0' : '100'},850`}
          fill="none"
          stroke={`url(#waveGradient2-${side})`}
          strokeWidth="1"
          filter={`url(#glow-${side})`}
          className="animate-pulse"
          style={{
            animationDuration: '6s',
            animationDelay: '1s'
          }}
        />

        {/* Tertiary subtle wave */}
        <path
          d={`M${isLeft ? '0' : '100'},25 Q${isLeft ? '20' : '80'},125 ${isLeft ? '0' : '100'},225 T${isLeft ? '0' : '100'},425 T${isLeft ? '0' : '100'},625 T${isLeft ? '0' : '100'},825`}
          fill="none"
          stroke={`url(#waveGradient3-${side})`}
          strokeWidth="0.8"
          filter={`url(#glow-${side})`}
          className="animate-pulse"
          style={{
            animationDuration: '8s',
            animationDelay: '2s'
          }}
        />

        {/* Flowing particles along the waves */}
        <circle
          r="1"
          fill="#efcc8a"
          fillOpacity="0.4"
          filter={`url(#glow-${side})`}
        >
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
            path={`M${isLeft ? '0' : '100'},0 Q${isLeft ? '15' : '85'},100 ${isLeft ? '0' : '100'},200 T${isLeft ? '0' : '100'},400 T${isLeft ? '0' : '100'},600 T${isLeft ? '0' : '100'},800`}
          />
        </circle>

        <circle
          r="0.8"
          fill="#cd7f32"
          fillOpacity="0.3"
          filter={`url(#glow-${side})`}
        >
          <animateMotion
            dur="12s"
            repeatCount="indefinite"
            begin="3s"
            path={`M${isLeft ? '0' : '100'},50 Q${isLeft ? '25' : '75'},150 ${isLeft ? '0' : '100'},250 T${isLeft ? '0' : '100'},450 T${isLeft ? '0' : '100'},650 T${isLeft ? '0' : '100'},850`}
          />
        </circle>
      </svg>

      {/* Edge enhancement for seamless blending */}
      <div 
        className={`absolute top-0 bottom-0 w-8 ${
          isLeft ? 'left-0 bg-gradient-to-r from-[#efcc8a]/[0.02]' : 'right-0 bg-gradient-to-l from-[#efcc8a]/[0.02]'
        } to-transparent`}
      />
      
      {/* Subtle ambient glow */}
      <div 
        className={`absolute top-0 bottom-0 w-16 ${
          isLeft ? 'left-0' : 'right-0'
        } bg-gradient-radial from-[#efcc8a]/[0.01] via-transparent to-transparent opacity-60`}
        style={{
          background: isLeft 
            ? 'radial-gradient(ellipse 100px 100% at 0% 50%, rgba(239, 204, 138, 0.01) 0%, transparent 70%)'
            : 'radial-gradient(ellipse 100px 100% at 100% 50%, rgba(239, 204, 138, 0.01) 0%, transparent 70%)'
        }}
      />
    </div>
  );
}
