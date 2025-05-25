
"use client";

import { NoiseTexture } from '@/components/ui/noise-texture';
import { colors, layout, noiseConfigs, zIndex } from '@/lib/design-tokens';

interface SideBlockGridsProps {
  className?: string;
}

/**
 * Side block grid enhancements for left and right edges
 * Provides clean edge styling with fine line patterns and subtle enhancements
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
        {/* Clean single gradient for depth */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${colors.dark}40 0%, ${colors.dark}20 40%, transparent 100%)`
          }}
        />
        
        {/* Fine line pattern - vertical lines */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`left-line-${i}`}
              className="absolute top-0 bottom-0"
              style={{
                left: `${12 + i * 18}px`,
                width: '1px',
                background: `linear-gradient(to bottom, transparent 0%, ${colors.bronze.base}15 20%, ${colors.bronze.base}20 50%, ${colors.bronze.base}15 80%, transparent 100%)`,
                opacity: 0.6 - (i * 0.05)
              }}
            />
          ))}
        </div>
        
        {/* Enhanced main border */}
        <div 
          className="absolute left-0 top-0 bottom-0"
          style={{
            width: '2px',
            background: `linear-gradient(to bottom, transparent 0%, ${colors.bronze.base}30 25%, ${colors.bronze.base}50 50%, ${colors.bronze.base}30 75%, transparent 100%)`,
            boxShadow: `0 0 4px ${colors.bronze.base}20`
          }}
        />
        
        {/* 3D Asset Zone - cleaned up */}
        <div 
          className="absolute top-1/4 left-6 w-12 h-12 rounded border border-white/5 opacity-30 transition-opacity duration-500 hover:opacity-60"
          style={{
            background: `radial-gradient(circle at center, ${colors.bronze.base}05, transparent 70%)`
          }}
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
        {/* Clean single gradient for depth */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to left, ${colors.dark}40 0%, ${colors.dark}20 40%, transparent 100%)`
          }}
        />
        
        {/* Fine line pattern - vertical lines */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`right-line-${i}`}
              className="absolute top-0 bottom-0"
              style={{
                right: `${12 + i * 18}px`,
                width: '1px',
                background: `linear-gradient(to bottom, transparent 0%, ${colors.bronze.base}15 20%, ${colors.bronze.base}20 50%, ${colors.bronze.base}15 80%, transparent 100%)`,
                opacity: 0.6 - (i * 0.05)
              }}
            />
          ))}
        </div>
        
        {/* Enhanced main border */}
        <div 
          className="absolute right-0 top-0 bottom-0"
          style={{
            width: '2px',
            background: `linear-gradient(to bottom, transparent 0%, ${colors.bronze.base}30 25%, ${colors.bronze.base}50 50%, ${colors.bronze.base}30 75%, transparent 100%)`,
            boxShadow: `0 0 4px ${colors.bronze.base}20`
          }}
        />
        
        {/* 3D Asset Zone - cleaned up */}
        <div 
          className="absolute top-1/3 right-6 w-12 h-12 rounded border border-white/5 opacity-30 transition-opacity duration-500 hover:opacity-60"
          style={{
            background: `radial-gradient(circle at center, ${colors.bronze.base}05, transparent 70%)`
          }}
        />
        
        {/* Subtle texture overlay */}
        <NoiseTexture {...noiseConfigs.sideBlocks} />
      </div>
      
      {/* Subtle ambient enhancement - single clean layer */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: `radial-gradient(ellipse 70% 40% at 50% 50%, ${colors.bronze.base}03 0%, transparent 60%)`
        }}
      />
    </div>
  );
}
