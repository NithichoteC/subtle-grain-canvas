
import { Calendar } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

function FloatingCTA() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="fixed bottom-8 right-8 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button 
        size="lg" 
        className="rounded-full h-14 w-14 p-0 flex items-center justify-center overflow-hidden"
      >
        <Calendar className="h-6 w-6" />
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="ml-2 whitespace-nowrap overflow-hidden"
            >
              Book Call
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    </div>
  );
}

export { FloatingCTA };
