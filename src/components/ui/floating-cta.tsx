
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from './button';
import { motion } from 'framer-motion';

const FloatingCta: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      className="fixed bottom-20 right-6 z-50"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
    >
      <motion.div
        className="relative"
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
      >
        <Button 
          className={`rounded-full shadow-lg transition-all duration-300 ${
            isExpanded 
              ? 'bg-gradient-to-r from-amber-600 to-amber-500 px-6' 
              : 'bg-amber-500 p-3'
          }`}
        >
          <Calendar className={`${isExpanded ? 'mr-2' : ''}`} size={20} />
          {isExpanded && <span>Book Call</span>}
        </Button>
      </motion.div>
    </motion.div>
  );
};

export { FloatingCta };
