
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface GridBlock {
  id: string;
  icon: string;
  row: number;
  col: number;
  delay: number;
}

export function LeftGridBackground() {
  const [gridBlocks, setGridBlocks] = useState<GridBlock[]>([]);
  
  // Icon sources for left side
  const leftIcons = [
    '/lovable-uploads/b0c0234e-dcb0-411b-92c3-cd4b7f02f33c.png', // hourglass
    '/lovable-uploads/0d0105b1-367f-4bcc-b5fc-e609a75d3abf.png', // coin
    '/lovable-uploads/62ea6bf2-2d09-47bf-9dc8-c30be11f434f.png'  // ghost
  ];

  useEffect(() => {
    const blocks: GridBlock[] = [];
    const rows = 8;
    const cols = 3;
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        blocks.push({
          id: `left-${row}-${col}`,
          icon: leftIcons[Math.floor(Math.random() * leftIcons.length)],
          row,
          col,
          delay: (row + col) * 0.1
        });
      }
    }
    
    setGridBlocks(blocks);
  }, []);

  return (
    <div className="absolute left-0 top-0 h-full w-60 pointer-events-none overflow-hidden">
      <div className="relative h-full">
        {gridBlocks.map((block) => (
          <motion.div
            key={block.id}
            className="absolute"
            style={{
              left: `${block.col * 80}px`,
              top: `${block.row * 120 + 50}px`,
            }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: [0, 0.15, 0.08, 0.12],
              scale: [0, 0.3, 0.25, 0.28],
              rotate: [0, 360, 720, 1080],
              y: [0, -10, 0, -5]
            }}
            transition={{
              duration: 8,
              delay: block.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img 
              src={block.icon}
              alt=""
              className="w-16 h-16 object-contain"
              style={{ 
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15)) drop-shadow(0 1px 2px rgba(184,134,11,0.1))',
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
