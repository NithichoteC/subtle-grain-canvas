
import React from "react";
import { cn } from "@/lib/utils";

interface GridLinesProps {
  className?: string;
}

const GridLines: React.FC<GridLinesProps> = ({ className }) => {
  return (
    <div className={cn("absolute inset-0 pointer-events-none z-10", className)}>
      {/* Vertical lines */}
      <div className="absolute left-0 top-0 w-px h-full bg-white/10" />
      <div className="absolute left-1/4 top-0 w-px h-full bg-white/10" />
      <div className="absolute left-2/4 top-0 w-px h-full bg-white/10" />
      <div className="absolute left-3/4 top-0 w-px h-full bg-white/10" />
      <div className="absolute right-0 top-0 w-px h-full bg-white/10" />
      
      {/* Horizontal lines */}
      <div className="absolute left-0 top-0 w-full h-px bg-white/10" />
      <div className="absolute left-0 bottom-0 w-full h-px bg-white/10" />
    </div>
  );
};

export { GridLines };
