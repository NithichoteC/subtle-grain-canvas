
"use client";

import { NoiseTexture } from '@/components/ui/noise-texture';
import { colors, layout, noiseConfigs, zIndex } from '@/lib/design-tokens';

interface SideBlockGridsProps {
  className?: string;
}

/**
 * Side block grid enhancements for left and right edges
 * Provides minimal edge styling and 3D asset zones while maintaining the three-column layout
 */
export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ''}`}>
      {/* Left Edge Enhancement */}
      <div 
        className="absolute left-0 top-0 bottom-0"
        style={{ 
          width: layout.edgeEnhancementWidth,
          maxWidth: layout.sideBlockMaxWidth 
        }}
      >
        {/* Subtle edge gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${colors.dark}30 0%, ${colors.dark}10 60%, transparent 100%)`
          }}
        />
        
        {/* Minimal border accent */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-px"
          style={{
            background: `linear-gradient(to bottom, transparent 0%, ${colors.bronze.base}20 50%, transparent 100%)`
          }}
        />
        
        {/* 3D Asset Zone - positioned for future assets */}
        <div 
          className="absolute top-1/4 left-8 w-16 h-16 opacity-0 transition-opacity duration-500 hover:opacity-100"
          aria-label="Reserved space for 3D assets"
        />
        
        {/* Subtle texture overlay */}
        <NoiseTexture {...noiseConfigs.sideBlocks} />
      </div>
      
      {/* Right Edge Enhancement */}
      <div 
        className="absolute right-0 top-0 bottom-0"
        style={{ 
          width: layout.edgeEnhancementWidth,
          maxWidth: layout.sideBlockMaxWidth 
        }}
      >
        {/* Subtle edge gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to left, ${colors.dark}30 0%, ${colors.dark}10 60%, transparent 100%)`
          }}
        />
        
        {/* Minimal border accent */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-px"
          style={{
            background: `linear-gradient(to bottom, transparent 0%, ${colors.bronze.base}20 50%, transparent 100%)`
          }}
        />
        
        {/* 3D Asset Zone - positioned for future assets */}
        <div 
          className="absolute top-1/3 right-8 w-16 h-16 opacity-0 transition-opacity duration-500 hover:opacity-100"
          aria-label="Reserved space for 3D assets"
        />
        
        {/* Subtle texture overlay */}
        <NoiseTexture {...noiseConfigs.sideBlocks} />
      </div>
      
      {/* Seamless Connection Layer - maintains layout integrity */}
      <div className="absolute inset-0">
        {/* Left connection gradient */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-1/4"
          style={{
            background: `linear-gradient(to right, transparent 0%, ${colors.bronze.base}02 90%, transparent 100%)`
          }}
        />
        
        {/* Right connection gradient */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-1/4"
          style={{
            background: `linear-gradient(to left, transparent 0%, ${colors.bronze.base}02 90%, transparent 100%)`
          }}
        />
      </div>
      
      {/* Ultra-subtle ambient enhancement */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: `radial-gradient(ellipse 80% 50% at 50% 50%, ${colors.bronze.base}01 0%, transparent 70%)`
        }}
      />
    </div>
  );
}
