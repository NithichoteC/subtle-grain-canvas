
"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useCallback, useMemo } from "react";

interface FlowingIcon {
  id: string;
  type: string;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  opacity: number;
  speed: number;
  waveOffset: number;
  rotationSpeed: number;
}

interface PremiumIconFlowProps {
  side: 'left' | 'right';
  iconTypes: string[];
  iconSources: Record<string, string>;
  density?: number;
}

export function PremiumIconFlow({ side, iconTypes, iconSources, density = 5 }: PremiumIconFlowProps) {
  const [icons, setIcons] = useState<FlowingIcon[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Memoize the initial position logic
  const getInitialPosition = useCallback((index: number) => {
    const isLeft = side === 'left';
    const baseX = isLeft ? -250 - Math.random() * 100 : dimensions.width + 150 + Math.random() * 100;
    const staggeredY = (index * (dimensions.height / density)) + Math.random() * 200;
    
    return {
      x: baseX,
      y: staggeredY % (dimensions.height || window.innerHeight),
      speed: 0.4 + Math.random() * 0.6,
      scale: 0.25 + Math.random() * 0.35,
      opacity: 0.12 + Math.random() * 0.18,
      rotation: Math.random() * 360,
      waveOffset: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.8
    };
  }, [side, density, dimensions]);

  // Memoize icon source getter
  const getIconSource = useCallback((type: string) => {
    return iconSources[type] || iconSources[iconTypes[0]];
  }, [iconSources, iconTypes]);

  // Initialize dimensions and icons
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

  useEffect(() => {
    if (dimensions.width === 0) return;

    const initialIcons: FlowingIcon[] = [];
    for (let i = 0; i < density; i++) {
      const position = getInitialPosition(i);
      initialIcons.push({
        id: `${side}-${i}`,
        type: iconTypes[Math.floor(Math.random() * iconTypes.length)],
        ...position
      });
    }
    setIcons(initialIcons);
  }, [density, side, iconTypes, getInitialPosition, dimensions]);

  // Optimized animation loop
  useEffect(() => {
    let animationId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 16.67; // Normalize to 60fps
      lastTime = currentTime;

      setIcons(prevIcons => 
        prevIcons.map(icon => {
          const isLeft = side === 'left';
          const direction = isLeft ? 1 : -1;
          
          // Calculate new position with wave motion
          const newX = icon.x + (icon.speed * direction * deltaTime);
          const waveAmplitude = 0.8;
          const waveFrequency = 0.008;
          const newY = icon.y + Math.sin(newX * waveFrequency + icon.waveOffset) * waveAmplitude;
          
          // Update rotation
          const newRotation = icon.rotation + (icon.rotationSpeed * deltaTime);
          
          // Check if icon needs to reset
          const shouldReset = isLeft 
            ? newX > dimensions.width + 250 
            : newX < -250;
          
          if (shouldReset) {
            const resetPosition = getInitialPosition(0);
            return {
              ...icon,
              ...resetPosition,
              type: iconTypes[Math.floor(Math.random() * iconTypes.length)]
            };
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
  }, [side, iconTypes, getInitialPosition, dimensions]);

  // Memoized icon elements
  const iconElements = useMemo(() => {
    return icons.map((icon) => (
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
          ease: "easeOut",
          opacity: { duration: 2 }
        }}
      >
        <img 
          src={getIconSource(icon.type)}
          alt=""
          className="w-20 h-20 object-contain"
          style={{ 
            filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.25)) drop-shadow(0 2px 4px rgba(184,134,11,0.1))',
            imageRendering: 'crisp-edges'
          }}
          loading="lazy"
        />
      </motion.div>
    ));
  }, [icons, getIconSource]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        {iconElements}
      </div>
    </div>
  );
}
