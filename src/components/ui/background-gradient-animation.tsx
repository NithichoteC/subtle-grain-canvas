
"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
  animationSet = "left",
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
  animationSet?: "left" | "right";
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) {
        return;
      }
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interactiveRef.current.style.transform = `translate3d(${Math.round(curX)}px, ${Math.round(curY)}px, 0)`;
    }
    move();
  }, [tgX, tgY, curX, curY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current && interactive) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  // Create unique IDs for filters to avoid conflicts
  const filterId = `blurMe-${animationSet}-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div
      className={cn("h-full w-full relative overflow-hidden", containerClassName)}
      style={{
        background: `linear-gradient(40deg, ${gradientBackgroundStart}, ${gradientBackgroundEnd})`,
      }}
      onMouseMove={handleMouseMove}
    >
      <svg className="hidden">
        <defs>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className={cn("", className)}>{children}</div>

      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : ""
        )}
        style={{
          filter: isSafari ? undefined : `url(#${filterId}) blur(40px)`,
        }}
      >
        {/* First gradient orb */}
        <div
          className="absolute opacity-100 mix-blend-mode"
          style={{
            background: `radial-gradient(circle at center, rgba(${firstColor}, 0.8) 0%, rgba(${firstColor}, 0.8) 50%, transparent 100%)`,
            mixBlendMode: blendingValue,
            width: size,
            height: size,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: "center center",
            animation: `gradient-flow-1-${animationSet} 30s ease-in-out infinite`,
          }}
        />

        {/* Second gradient orb */}
        <div
          className="absolute opacity-100 mix-blend-mode"
          style={{
            background: `radial-gradient(circle at center, rgba(${secondColor}, 0.8) 0%, rgba(${secondColor}, 0.8) 50%, transparent 100%)`,
            mixBlendMode: blendingValue,
            width: size,
            height: size,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: "center center",
            animation: `gradient-flow-2-${animationSet} 25s ease-in-out infinite`,
            animationDelay: "2s",
          }}
        />

        {/* Third gradient orb */}
        <div
          className="absolute opacity-100 mix-blend-mode"
          style={{
            background: `radial-gradient(circle at center, rgba(${thirdColor}, 0.8) 0%, rgba(${thirdColor}, 0.8) 50%, transparent 100%)`,
            mixBlendMode: blendingValue,
            width: size,
            height: size,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: "center center",
            animation: `gradient-flow-3-${animationSet} 35s ease-in-out infinite`,
            animationDelay: "4s",
          }}
        />

        {/* Fourth gradient orb */}
        <div
          className="absolute opacity-70 mix-blend-mode"
          style={{
            background: `radial-gradient(circle at center, rgba(${fourthColor}, 0.7) 0%, rgba(${fourthColor}, 0.7) 50%, transparent 100%)`,
            mixBlendMode: blendingValue,
            width: size,
            height: size,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: "center center",
            animation: `gradient-flow-4-${animationSet} 20s ease-in-out infinite`,
            animationDelay: "1s",
          }}
        />

        {/* Fifth gradient orb */}
        <div
          className="absolute opacity-100 mix-blend-mode"
          style={{
            background: `radial-gradient(circle at center, rgba(${fifthColor}, 0.7) 0%, rgba(${fifthColor}, 0.7) 50%, transparent 100%)`,
            mixBlendMode: blendingValue,
            width: size,
            height: size,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: "center center",
            animation: `gradient-flow-5-${animationSet} 40s ease-in-out infinite`,
            animationDelay: "3s",
          }}
        />

        {/* Interactive pointer element */}
        {interactive && (
          <div
            ref={interactiveRef}
            className="absolute opacity-70 mix-blend-mode"
            style={{
              background: `radial-gradient(circle at center, rgba(${pointerColor}, 0.5) 0%, transparent 50%)`,
              mixBlendMode: blendingValue,
              width: "100%",
              height: "100%",
              top: "-50%",
              left: "-50%",
            }}
          />
        )}
      </div>
    </div>
  );
};
