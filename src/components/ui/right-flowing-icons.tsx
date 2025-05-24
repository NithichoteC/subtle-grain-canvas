
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

export function RightFlowingIcons() {
  const [icons, setIcons] = useState<FlowingIcon[]>([]);
  
  // Right side icons
  const rightIcons = [
    '/lovable-uploads/542f1a9f-7b91-4543-b55b-58b2fb08d566.png', // calendar
    '/lovable-uploads/65325b28-c9d6-467a-b24f-9bd58bcf64d5.png', // money-bag
    '/lovable-uploads/42096f5b-7ec3-4dc2-b82b-7e78d854afdd.png'  // handshake
  ];

  useEffect(() => {
    const spawnIcon = () => {
      const newIcon: FlowingIcon = {
        id: `right-${Date.now()}-${Math.random()}`,
        icon: rightIcons[Math.floor(Math.random() * rightIcons.length)],
        startY: window.innerHeight + 60,
        delay: 0,
        lane: Math.floor(Math.random() * 3) // 3 lanes
      };
      
      setIcons(prev => [...prev, newIcon]);
    };

    // Spawn first batch with offset timing
    for (let i = 0; i < 3; i++) {
      setTimeout(() => spawnIcon(), i * 900 + 400);
    }

    // Continue spawning every 1.4 seconds
    const interval = setInterval(spawnIcon, 1400);

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
    <div className="absolute right-0 top-0 w-60 h-full overflow-hidden pointer-events-none">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute"
          initial={{ 
            y: icon.startY, 
            x: -(icon.lane * 60 + 20),
            opacity: 0,
            scale: 0.3,
            rotate: 180
          }}
          animate={{ 
            y: -60,
            opacity: [0, 0.5, 0.3, 0.1, 0],
            scale: [0.3, 0.6, 0.4, 0.2],
            rotate: -180
          }}
          transition={{
            duration: 11,
            ease: "linear",
            times: [0, 0.15, 0.6, 0.85, 1]
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
