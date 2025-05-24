
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
}

export function LeftEdgeIconFlow() {
  const [icons, setIcons] = useState<FlowingIcon[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const iconSources = {
    hourglass: '/lovable-uploads/b0c0234e-dcb0-411b-92c3-cd4b7f02f33c.png',
    coin: '/lovable-uploads/0d0105b1-367f-4bcc-b5fc-e609a75d3abf.png'
  };

  const iconTypes = ['hourglass', 'coin'];

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

  // Create new icon
  const createIcon = useCallback(() => {
    const leftEdgeWidth = dimensions.width * 0.15; // 15% of screen width for left edge
    
    return {
      id: `left-${Date.now()}-${Math.random()}`,
      type: iconTypes[Math.floor(Math.random() * iconTypes.length)],
      x: -150, // Start well off-screen to the left
      y: Math.random() * dimensions.height,
      scale: 0.7 + Math.random() * 0.4,
      rotation: Math.random() * 360,
      opacity: 0.2 + Math.random() * 0.25,
      speed: 1.2 + Math.random() * 0.8
    };
  }, [dimensions, iconTypes]);

  // Continuous spawning system
  useEffect(() => {
    if (dimensions.width === 0) return;

    const spawnInterval = setInterval(() => {
      setIcons(prevIcons => {
        // Remove icons that have moved past the edge boundary
        const leftEdgeWidth = dimensions.width * 0.15;
        const filteredIcons = prevIcons.filter(icon => icon.x < leftEdgeWidth + 100);
        
        // Add new icon
        return [...filteredIcons, createIcon()];
      });
    }, 1500); // Spawn new icon every 1.5 seconds

    return () => clearInterval(spawnInterval);
  }, [createIcon, dimensions]);

  // Animation loop
  useEffect(() => {
    let animationId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 16.67;
      lastTime = currentTime;

      setIcons(prevIcons => 
        prevIcons.map(icon => {
          const newX = icon.x + (icon.speed * deltaTime);
          const newRotation = icon.rotation + 0.5 * deltaTime;
          
          return {
            ...icon,
            x: newX,
            rotation: newRotation
          };
        })
      );

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="absolute left-0 top-0 bottom-0 w-[15%] overflow-hidden pointer-events-none z-5">
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
            src={iconSources[icon.type as keyof typeof iconSources]}
            alt=""
            className="w-20 h-20 object-contain"
            style={{ 
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2)) drop-shadow(0 2px 4px rgba(184,134,11,0.1))',
              imageRendering: 'crisp-edges'
            }}
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );
}
