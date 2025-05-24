
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

export function RightGridBackground() {
  const [gridBlocks, setGridBlocks] = useState<GridBlock[]>([]);
  
  // Icon sources for right side
  const rightIcons = [
    '/lovable-uploads/542f1a9f-7b91-4543-b55b-58b2fb08d566.png', // calendar
    '/lovable-uploads/65325b28-c9d6-467a-b24f-9bd58bcf64d5.png', // money-bag
    '/lovable-uploads/42096f5b-7ec3-4dc2-b82b-7e78d854afdd.png'  // handshake
  ];

  useEffect(() => {
    const blocks: GridBlock[] = [];
    const rows = 8;
    const cols = 3;
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        blocks.push({
          id: `right-${row}-${col}`,
          icon: rightIcons[Math.floor(Math.random() * rightIcons.length)],
          row,
          col,
          delay: (row + col) * 0.15 + 2 // Offset timing from left side
        });
      }
    }
    
    setGridBlocks(blocks);
  }, []);

  return (
    <div className="absolute right-0 top-0 h-full w-60 pointer-events-none overflow-hidden">
      <div className="relative h-full">
        {gridBlocks.map((block) => (
          <motion.div
            key={block.id}
            className="absolute"
            style={{
              right: `${block.col * 80}px`,
              top: `${block.row * 120 + 80}px`,
            }}
            initial={{ opacity: 0, scale: 0, rotate: 180 }}
            animate={{ 
              opacity: [0, 0.12, 0.18, 0.1],
              scale: [0, 0.28, 0.32, 0.25],
              rotate: [180, -180, -540, -900],
              y: [0, 8, 0, 12]
            }}
            transition={{
              duration: 10,
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
