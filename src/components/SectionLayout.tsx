
import React from 'react';
import { cn } from "@/lib/utils";

type SectionVariant = 'default' | 'graphite' | 'charcoal' | 'gold' | 'dot-grid';

interface SectionLayoutProps {
  children: React.ReactNode;
  variant?: SectionVariant;
  id?: string;
  className?: string;
}

const SectionLayout = ({ children, variant = 'default', id, className }: SectionLayoutProps) => {
  // Define background styles based on variants
  const bgStyles = {
    default: 'bg-transparent',
    graphite: 'bg-zinc-800/50 backdrop-blur-sm',
    charcoal: 'bg-zinc-900/80 backdrop-blur-sm',
    gold: 'bg-gradient-to-r from-amber-500/80 to-yellow-500/80 backdrop-blur-sm',
    'dot-grid': 'bg-zinc-800/30 backdrop-blur-sm dot-grid-bg'
  };
  
  return (
    <section 
      id={id} 
      className={cn(
        "relative w-full py-16 md:py-24",
        bgStyles[variant],
        className
      )}
    >
      {/* Grid border - white lines creating a grid effect */}
      <div className="absolute inset-0 grid grid-cols-6 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div key={`v-line-${i}`} className="border-l border-white/10 h-full"></div>
        ))}
        {[...Array(4)].map((_, i) => (
          <div key={`h-line-${i}`} className="border-t border-white/10 w-full absolute" style={{ top: `${(i + 1) * 25}%` }}></div>
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
