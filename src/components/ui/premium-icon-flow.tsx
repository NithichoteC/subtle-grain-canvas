
"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

interface FlowingIcon {
  id: string;
  type: string;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  opacity: number;
  speed: number;
  verticalOffset: number;
}

interface PremiumIconFlowProps {
  side: 'left' | 'right';
  iconTypes: string[];
  iconSources: Record<string, string>;
  density?: number;
}

export function PremiumIconFlow({ side, iconTypes, iconSources, density = 3 }: PremiumIconFlowProps) {
  const [icons, setIcons] = useState<FlowingIcon[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Initialize dimensions
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Create initial icons with vertical positioning in edge columns
  const createIcon = useCallback((index: number) => {
    const isLeft = side === 'left';
    const columnWidth = 150; // Width of each edge column
    
    // Fixed horizontal position within edge columns
    const baseX = isLeft ? 0 : dimensions.width - columnWidth;
    const randomX = baseX + Math.random() * columnWidth;
    
    // Start above viewport, stagger initial positions
    const startY = -200 - (index * 150); // Stagger icons vertically
    
    return {
      id: `${side}-${index}-${Date.now()}`,
      type: iconTypes[Math.floor(Math.random() * iconTypes.length)],
      x: randomX,
      y: startY,
      scale: 0.6 + Math.random() * 0.4, // 0.6 to 1.0
      rotation: Math.random() * 360,
      opacity: 0.15 + Math.random() * 0.25, // 0.15 to 0.4
      speed: 1.2 + Math.random() * 0.8, // Vertical speed
      verticalOffset: Math.random() * Math.PI * 2
    };
  }, [side, dimensions, iconTypes]);

  // Initialize icons
  useEffect(() => {
    if (dimensions.width === 0) return;

    const initialIcons: FlowingIcon[] = [];
    for (let i = 0; i < density; i++) {
      initialIcons.push(createIcon(i));
    }
    setIcons(initialIcons);
  }, [density, createIcon, dimensions]);

  // Animation loop with vertical downward movement
  useEffect(() => {
    let animationId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 16.67; // Normalize to 60fps
      lastTime = currentTime;

      setIcons(prevIcons => 
        prevIcons.map((icon, index) => {
          // Vertical downward movement only
          const newY = icon.y + (icon.speed * deltaTime);
          
          // Subtle horizontal floating within column bounds
          const isLeft = side === 'left';
          const columnWidth = 150;
          const baseX = isLeft ? 0 : dimensions.width - columnWidth;
          const floatAmplitude = 8; // Small horizontal float
          const floatSpeed = 0.015;
          const newX = baseX + (columnWidth * 0.5) + Math.sin(currentTime * floatSpeed + icon.verticalOffset) * floatAmplitude + (Math.random() - 0.5) * 20;
          
          // Slow rotation
          const newRotation = icon.rotation + 0.3 * deltaTime;
          
          // Check if icon has moved below viewport
          const shouldReset = newY > dimensions.height + 200;
          
          if (shouldReset) {
            return createIcon(index);
          }
          
          return {
            ...icon,
            x: Math.max(baseX, Math.min(baseX + columnWidth, newX)), // Keep within column bounds
            y: newY,
            rotation: newRotation
          };
        })
      );

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [side, createIcon, dimensions]);

  const getIconSource = useCallback((type: string) => {
    return iconSources[type] || iconSources[iconTypes[0]];
  }, [iconSources, iconTypes]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        {icons.map((icon) => (
          <motion.div
            key={icon.id}
            className="absolute will-change-transform"
            style={{
              left: icon.x,
              top: icon.y,
              transform: `scale(${icon.scale}) rotate(${icon.rotation}deg)`,
              opacity: icon.opacity,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: icon.opacity,
              scale: icon.scale
            }}
            transition={{ 
              duration: 2, 
              ease: "easeOut"
            }}
          >
            <img 
              src={getIconSource(icon.type)}
              alt=""
              className="w-32 h-32 object-contain"
              style={{ 
                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3)) drop-shadow(0 4px 8px rgba(184,134,11,0.15))',
                imageRendering: 'crisp-edges'
              }}
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
