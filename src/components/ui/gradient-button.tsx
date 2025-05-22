
"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const gradientButtonVariants = cva(
  [
    "gradient-button",
    "inline-flex items-center justify-center",
    "rounded-full",
    "text-base leading-[19px] font-[500] text-white",
    "font-sans font-bold",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
    "disabled:pointer-events-none disabled:opacity-50",
    "relative overflow-hidden",
    // Improved gradient background with sliding animation
    "before:absolute before:inset-0 before:z-0",
    "before:bg-gradient-to-tr before:from-[#FFC94D] before:via-[#F7B733] before:to-[#F59E0B]",
    "before:bg-[length:200%_200%]",
    "before:animate-gradient-slide",
    // Enhanced hover effect
    "hover:before:brightness-110",
    "hover:shadow-lg transition-all duration-300"
  ],
  {
    variants: {
      variant: {
        default: "min-w-[132px] px-9 py-4",
        compact: "min-w-0 py-2" // Removed horizontal padding to let container control it
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  asChild?: boolean;
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(gradientButtonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 mx-[9px] px-[22px] text-center flex items-center whitespace-nowrap gap-2">
          {children}
        </span>
      </Comp>
    );
  }
);

GradientButton.displayName = "GradientButton";

export { GradientButton, gradientButtonVariants };
