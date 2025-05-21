
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
    >
      <motion.div
        className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full py-3 px-4 text-glow shadow-lg cursor-pointer"
        animate={{
          width: isExpanded ? 'auto' : '56px',
        }}
      >
        <Calendar className="w-6 h-6 text-zinc-900" />
        <motion.span
          className="text-zinc-900 font-medium whitespace-nowrap"
          animate={{
            opacity: isExpanded ? 1 : 0,
            scale: isExpanded ? 1 : 0.8,
          }}
        >
          Book Call
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default FloatingCTA;
