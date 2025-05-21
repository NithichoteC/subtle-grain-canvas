
import React from "react";
import { GridLines } from "./grid-lines";
import { cn } from "@/lib/utils";

interface SectionLayoutProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "graphite" | "charcoal" | "dotGrid" | "gold";
  gridVariant?: "default" | "connected";
  id?: string;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ 
  children, 
  className,
  variant = "default",
  gridVariant = "default",
  id
}) => {
  const bgClasses = {
    default: "bg-transparent",
    graphite: "bg-gray-800",
    charcoal: "bg-gray-900",
    dotGrid: "bg-gray-800 bg-opacity-90 relative",
    gold: "bg-gradient-to-r from-amber-600 to-amber-500"
  };
  
  return (
    <section 
      id={id}
      className={cn(
        "relative w-full overflow-hidden border-t border-white/10",
        bgClasses[variant],
        className
      )}
    >
      {variant === "dotGrid" && (
        <div className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        />
      )}
      <GridLines variant={gridVariant} />
      <div className="container mx-auto relative z-20">
        {children}
      </div>
    </section>
  );
};

export { SectionLayout };
