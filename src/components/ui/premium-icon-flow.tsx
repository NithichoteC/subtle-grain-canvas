
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

  // Create icons with vertical positioning - both sides flow downward
  const createIcon = useCallback((index: number) => {
    const isLeft = side === 'left';
    const columnWidth = 120; // Width of each edge column
    
    // Fixed horizontal position within edge columns
    const baseX = isLeft ? 20 : dimensions.width - columnWidth - 20; // Add padding from edges
    const randomX = baseX + Math.random() * columnWidth;
    
    // Start above viewport, stagger initial positions
    const startY = -150 - (index * 200); // More spacing between icons
    
    return {
      id: `${side}-${index}-${Date.now()}`,
      type: iconTypes[Math.floor(Math.random() * iconTypes.length)],
      x: randomX,
      y: startY,
      scale: 0.5 + Math.random() * 0.3, // Smaller icons: 0.5 to 0.8
      rotation: Math.random() * 360,
      opacity: 0.2 + Math.random() * 0.2, // 0.2 to 0.4
      speed: 0.8 + Math.random() * 0.4, // Consistent vertical speed
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

  // Animation loop - ONLY vertical downward movement for both sides
  useEffect(() => {
    let animationId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 16.67; // Normalize to 60fps
      lastTime = currentTime;

      setIcons(prevIcons => 
        prevIcons.map((icon, index) => {
          // ONLY vertical downward movement - no horizontal movement at all
          const newY = icon.y + (icon.speed * deltaTime);
          
          // Subtle horizontal floating within column bounds
          const isLeft = side === 'left';
          const columnWidth = 120;
          const baseX = isLeft ? 20 : dimensions.width - columnWidth - 20;
          const minFloat = 3; // Very minimal horizontal floating
          const floatSpeed = 0.01;
          const newX = baseX + (columnWidth * 0.5) + Math.sin(currentTime * floatSpeed + icon.verticalOffset) * minFloat;
          
          // Slow rotation
          const newRotation = icon.rotation + 0.2 * deltaTime;
          
          // Check if icon has moved below viewport
          const shouldReset = newY > dimensions.height + 150;
          
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
              duration: 1.5, 
              ease: "easeOut"
            }}
          >
            <img 
              src={getIconSource(icon.type)}
              alt=""
              className="w-24 h-24 object-contain" // Slightly smaller icons
              style={{ 
                filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.25)) drop-shadow(0 3px 6px rgba(184,134,11,0.1))',
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
