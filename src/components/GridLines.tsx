
import React from 'react';
import { cn } from "@/lib/utils";

interface GridLinesProps {
  className?: string;
}

const GridLines: React.FC<GridLinesProps> = ({ className }) => {
  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      {/* Left vertical line */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-white/10"></div>
      
      {/* Right vertical line */}
      <div className="absolute right-6 md:right-12 top-0 bottom-0 w-[1px] bg-white/10"></div>
      
      {/* Bottom horizontal line */}
      <div className="absolute left-6 md:left-12 right-6 md:right-12 bottom-0 h-[1px] bg-white/10"></div>
    </div>
  );
};

export default GridLines;
