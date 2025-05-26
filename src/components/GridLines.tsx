
import React from 'react';
import { cn } from "@/lib/utils";

interface GridLinesProps {
  className?: string;
}

const GridLines: React.FC<GridLinesProps> = ({ className }) => {
  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      {/* Left vertical line */}
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-[1px] bg-white/10"></div>
      
      {/* Right vertical line */}
      <div className="absolute right-4 md:right-6 top-0 bottom-0 w-[1px] bg-white/10"></div>
    </div>
  );
};

export default GridLines;
