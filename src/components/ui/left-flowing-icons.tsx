
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FlowingIcon {
  id: string;
  icon: string;
  startY: number;
  delay: number;
  lane: number;
}

export function LeftFlowingIcons() {
  const [icons, setIcons] = useState<FlowingIcon[]>([]);
  
  // Left side icons
  const leftIcons = [
    '/lovable-uploads/b0c0234e-dcb0-411b-92c3-cd4b7f02f33c.png', // hourglass
    '/lovable-uploads/0d0105b1-367f-4bcc-b5fc-e609a75d3abf.png', // coin
    '/lovable-uploads/62ea6bf2-2d09-47bf-9dc8-c30be11f434f.png'  // ghost
  ];

  useEffect(() => {
    const spawnIcon = () => {
      const newIcon: FlowingIcon = {
        id: `left-${Date.now()}-${Math.random()}`,
        icon: leftIcons[Math.floor(Math.random() * leftIcons.length)],
        startY: -60,
        delay: 0,
        lane: Math.floor(Math.random() * 3) // 3 lanes
      };
      
      setIcons(prev => [...prev, newIcon]);
    };

    // Spawn first batch
    for (let i = 0; i < 3; i++) {
      setTimeout(() => spawnIcon(), i * 800);
    }

    // Continue spawning every 1.2 seconds
    const interval = setInterval(spawnIcon, 1200);

    return () => clearInterval(interval);
  }, []);

  // Clean up icons that have moved off screen
  useEffect(() => {
    const cleanup = setInterval(() => {
      setIcons(prev => prev.filter(icon => 
        Date.now() - parseInt(icon.id.split('-')[1]) < 12000 // Remove after 12 seconds
      ));
    }, 2000);

    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className="absolute left-0 top-0 w-60 h-full overflow-hidden pointer-events-none">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute"
          initial={{ 
            y: icon.startY, 
            x: icon.lane * 60 + 20,
            opacity: 0,
            scale: 0.3,
            rotate: 0
          }}
          animate={{ 
            y: window.innerHeight + 60,
            opacity: [0, 0.6, 0.4, 0.2, 0],
            scale: [0.3, 0.5, 0.4, 0.3],
            rotate: 360
          }}
          transition={{
            duration: 10,
            ease: "linear",
            times: [0, 0.1, 0.5, 0.8, 1]
          }}
        >
          <img 
            src={icon.icon}
            alt=""
            className="w-12 h-12 object-contain"
            style={{ 
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3)) drop-shadow(0 0 8px rgba(184,134,11,0.2))',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
