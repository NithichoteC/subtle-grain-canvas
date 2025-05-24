
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

export function RightEdgeIconFlow() {
  const [icons, setIcons] = useState<FlowingIcon[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const iconSources = {
    calendar: '/lovable-uploads/542f1a9f-7b91-4543-b55b-58b2fb08d566.png',
    'money-bag': '/lovable-uploads/65325b28-c9d6-467a-b24f-9bd58bcf64d5.png'
  };

  const iconTypes = ['calendar', 'money-bag'];

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
    return {
      id: `right-${Date.now()}-${Math.random()}`,
      type: iconTypes[Math.floor(Math.random() * iconTypes.length)],
      x: dimensions.width + 80, // Start off-screen to the right
      y: Math.random() * (dimensions.height - 200) + 100, // Keep away from edges
      scale: 0.8 + Math.random() * 0.4,
      rotation: Math.random() * 360,
      opacity: 0.4 + Math.random() * 0.3,
      speed: 1.5 + Math.random() * 1.0
    };
  }, [dimensions, iconTypes]);

  // Continuous spawning system
  useEffect(() => {
    if (dimensions.width === 0) return;

    const spawnInterval = setInterval(() => {
      setIcons(prevIcons => {
        // Remove icons that have moved past the boundary (85% of screen width)
        const rightBoundary = dimensions.width * 0.85;
        const filteredIcons = prevIcons.filter(icon => icon.x > rightBoundary - 50);
        
        // Add new icon
        return [...filteredIcons, createIcon()];
      });
    }, 900); // Slightly different timing for variety

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
          const newX = icon.x - (icon.speed * deltaTime); // Move left
          const newRotation = icon.rotation - 0.3 * deltaTime; // Rotate opposite direction
          
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
    <div className="absolute right-0 top-0 bottom-0 w-[15%] overflow-hidden pointer-events-none z-10">
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
            duration: 1.0, 
            ease: "easeOut"
          }}
        >
          <img 
            src={iconSources[icon.type as keyof typeof iconSources]}
            alt=""
            className="w-10 h-10 object-contain"
            style={{ 
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3)) drop-shadow(0 2px 4px rgba(184,134,11,0.2))',
              imageRendering: 'crisp-edges'
            }}
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );
}
