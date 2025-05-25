
import React from 'react';

interface NoiseTextureProps {
  opacity?: number;
  className?: string;
  baseFrequency?: number;
  numOctaves?: number;
  backgroundSize?: string;
}

/**
 * Shared noise texture component for consistent grain effects across the site
 * Eliminates duplication and ensures visual consistency
 */
export const NoiseTexture: React.FC<NoiseTextureProps> = ({ 
  opacity = 0.12, 
  className = '',
  baseFrequency = 0.65,
  numOctaves = 3,
  backgroundSize = '200px 200px'
}) => {
  const noiseFilter = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${baseFrequency}' numOctaves='${numOctaves}' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;
  
  return (
    <div 
      className={`absolute inset-0 ${className}`}
      style={{ 
        opacity,
        backgroundImage: noiseFilter,
        backgroundSize
      }}
    />
  );
};
