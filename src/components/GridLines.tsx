
import React from 'react';
import { cn } from "@/lib/utils";

interface GridLinesProps {
  className?: string;
}

const GridLines: React.FC<GridLinesProps> = ({ className }) => {
  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      {/* Left vertical line - at content boundary */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10"></div>
      
      {/* Right vertical line - at content boundary */}
      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/10"></div>
    </div>
  );
};

export default GridLines;
