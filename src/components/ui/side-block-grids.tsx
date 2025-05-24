
"use client";

interface SideBlockGridsProps {
  className?: string;
}

export function SideBlockGrids({ className }: SideBlockGridsProps) {
  return (
    <div className={`absolute inset-0 z-5 pointer-events-none ${className || ''}`}>
      {/* Left Side Block Grid */}
      <div className="absolute left-0 top-0 bottom-0 w-32 border-r border-white/10">
        {/* Left block content area with bottom border */}
        <div className="absolute inset-0 border-b border-white/10"></div>
      </div>
      
      {/* Right Side Block Grid */}
      <div className="absolute right-0 top-0 bottom-0 w-32 border-l border-white/10">
        {/* Right block content area with bottom border */}
        <div className="absolute inset-0 border-b border-white/10"></div>
      </div>
    </div>
  );
}
