
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

  // Create initial icons with proper positioning
  const createIcon = useCallback((index: number, reset: boolean = false) => {
    const isLeft = side === 'left';
    
    // Starting positions - well outside viewport
    const startX = isLeft ? -200 : dimensions.width + 200;
    
    // Staggered vertical positioning across the screen height
    const baseY = (dimensions.height / (density + 1)) * (index + 1);
    const randomYOffset = (Math.random() - 0.5) * 150; // Less random variation
    
    return {
      id: `${side}-${index}-${Date.now()}`,
      type: iconTypes[Math.floor(Math.random() * iconTypes.length)],
      x: startX,
      y: baseY + randomYOffset,
      scale: 0.6 + Math.random() * 0.4, // Larger icons: 0.6 to 1.0
      rotation: Math.random() * 360,
      opacity: 0.15 + Math.random() * 0.25, // More visible: 0.15 to 0.4
      speed: 0.8 + Math.random() * 0.6, // Consistent speed
      verticalOffset: Math.random() * Math.PI * 2
    };
  }, [side, density, dimensions, iconTypes]);

  // Initialize icons
  useEffect(() => {
    if (dimensions.width === 0) return;

    const initialIcons: FlowingIcon[] = [];
    for (let i = 0; i < density; i++) {
      initialIcons.push(createIcon(i));
    }
    setIcons(initialIcons);
  }, [density, createIcon, dimensions]);

  // Animation loop with proper directional movement
  useEffect(() => {
    let animationId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 16.67; // Normalize to 60fps
      lastTime = currentTime;

      setIcons(prevIcons => 
        prevIcons.map((icon, index) => {
          const isLeft = side === 'left';
          const direction = isLeft ? 1 : -1; // Left side: move right (+), Right side: move left (-)
          
          // Calculate new horizontal position
          const newX = icon.x + (icon.speed * direction * deltaTime);
          
          // Subtle vertical floating motion
          const floatAmplitude = 12;
          const floatSpeed = 0.02;
          const newY = icon.y + Math.sin(currentTime * floatSpeed + icon.verticalOffset) * floatAmplitude;
          
          // Slow rotation
          const newRotation = icon.rotation + 0.3 * deltaTime;
          
          // Check if icon has moved off screen and needs to reset
          const shouldReset = isLeft 
            ? newX > dimensions.width + 200 
            : newX < -200;
          
          if (shouldReset) {
            return createIcon(index, true);
          }
          
          return {
            ...icon,
            x: newX,
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
              className="w-32 h-32 object-contain" // Much larger icons
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
