
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionVariant = 
  | "default"       // white background
  | "graphite"      // light gray background
  | "charcoal"      // dark gray background
  | "dot-grid"      // with dot grid pattern
  | "gold";         // gold accent

interface SectionLayoutProps {
  variant?: SectionVariant;
  children?: ReactNode;
  className?: string;
  id?: string;
}

function SectionLayout({
  variant = "default",
  children,
  className,
  id
}: SectionLayoutProps) {
  return (
    <section 
      id={id}
      className={cn(
        "w-full border-b border-white/20",
        variant === "graphite" && "bg-[#f3f3f3] text-[#222]",
        variant === "charcoal" && "bg-[#333] text-white",
        variant === "dot-grid" && "bg-white bg-opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[length:20px_20px]",
        variant === "gold" && "bg-gradient-to-r from-[#b8860b] to-[#ffd700]",
        className
      )}
    >
      <div className="container mx-auto">
        <div className="flex min-h-[300px] py-16 items-center justify-center flex-col border-l border-r border-white/10">
          {children}
        </div>
      </div>
    </section>
  );
}

export { SectionLayout };
