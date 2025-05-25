
"use client";

import { cn } from "@/lib/utils";
import { colors } from "@/lib/design-tokens";

interface DotPatternProps {
  className?: string;
  glow?: boolean;
  dotSize?: number;
  spacing?: number;
  opacity?: number;
  color?: string;
  glowColor?: string;
}

export function DotPattern({
  className,
  glow = false,
  dotSize = 1,
  spacing = 20,
  opacity = 0.4,
  color = colors.bronze.base,
  glowColor = colors.bronze.light,
}: DotPatternProps) {
  const patternId = `dot-pattern-${Math.random().toString(36).substr(2, 9)}`;
  const glowFilterId = `glow-filter-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <svg
        className="absolute inset-0 h-full w-full"
        style={{ opacity }}
      >
        <defs>
          {glow && (
            <filter id={glowFilterId} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          )}
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={spacing}
            height={spacing}
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx={spacing / 2}
              cy={spacing / 2}
              r={dotSize}
              fill={color}
              filter={glow ? `url(#${glowFilterId})` : undefined}
            />
            {glow && (
              <circle
                cx={spacing / 2}
                cy={spacing / 2}
                r={dotSize * 2}
                fill={glowColor}
                opacity="0.3"
              />
            )}
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#${patternId})`}
        />
      </svg>
    </div>
  );
}
