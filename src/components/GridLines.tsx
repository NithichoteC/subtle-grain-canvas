
import React from 'react';
import { cn } from "@/lib/utils";

interface GridLinesProps {
  className?: string;
}

const GridLines: React.FC<GridLinesProps> = ({ className }) => {
  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      {/* Left vertical line */}
      <div className="absolute left-8 md:left-16 top-0 bottom-0 w-[1.5px] bg-white/10"></div>
      
      {/* Right vertical line */}
      <div className="absolute right-8 md:right-16 top-0 bottom-0 w-[1.5px] bg-white/10"></div>
      
      {/* Top horizontal line */}
      <div className="absolute left-8 md:left-16 right-8 md:right-16 top-0 h-[1.5px] bg-white/10"></div>
      
      {/* Horizontal line below navbar */}
      <div className="absolute left-8 md:left-16 right-8 md:right-16 top-[72px] h-[1.5px] bg-white/10"></div>
      
      {/* Bottom horizontal line */}
      <div className="absolute left-8 md:left-16 right-8 md:right-16 bottom-0 h-[1.5px] bg-white/10"></div>
    </div>
  );
};

export default GridLines;
