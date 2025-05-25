
"use client";

interface UnifiedGridSystemProps {
  className?: string;
}

export function UnifiedGridSystem({ className }: UnifiedGridSystemProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ''}`}>
      {/* Full-width viewport grid lines */}
      <div className="absolute inset-0" style={{ width: '100vw', height: '100%', left: '50%', transform: 'translateX(-50%)' }}>
        {/* Left vertical line - spans full viewport height */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />
        
        {/* Right vertical line - spans full viewport height */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-white/10" />
        
        {/* Bottom horizontal line - spans full viewport width */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      </div>
      
      {/* Inner content area markers - subtle guides for the content container */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-full max-w-5xl relative">
          {/* Inner left guide - very subtle */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5" />
          
          {/* Inner right guide - very subtle */}
          <div className="absolute right-0 top-0 bottom-0 w-px bg-white/5" />
        </div>
      </div>
    </div>
  );
}
