
import React from 'react';
import { cn } from "@/lib/utils";

interface GridLinesProps {
  className?: string;
}

const GridLines: React.FC<GridLinesProps> = ({ className }) => {
  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      {/* Left vertical line */}
      <div className="absolute left-8 md:left-16 top-0 bottom-0 w-px bg-white/10"></div>
      
      {/* Right vertical line */}
      <div className="absolute right-8 md:right-16 top-0 bottom-0 w-px bg-white/10"></div>
      
      {/* Horizontal line separating navbar and content */}
      <div className="absolute left-0 right-0 top-[84px] h-px bg-white/10"></div>
      
      {/* Bottom horizontal line */}
      <div className="absolute left-0 right-0 bottom-0 h-px bg-white/10"></div>
    </div>
  );
};

export default GridLines;
