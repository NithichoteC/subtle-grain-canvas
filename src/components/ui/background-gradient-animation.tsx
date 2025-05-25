
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
  const containerRef = useRef<HTMLDivElement>(null);

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
  }, [tgX, tgY]);

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

  // Generate unique animation keyframes for each side
  const animationDelay = animationSet === "right" ? "2s" : "0s";
  const rotationDirection = animationSet === "right" ? "reverse" : "normal";

  return (
    <div
      ref={containerRef}
      className={cn(
        "h-full w-full relative overflow-hidden",
        containerClassName
      )}
      style={{
        background: `linear-gradient(40deg, ${gradientBackgroundStart}, ${gradientBackgroundEnd})`,
        contain: "layout style paint"
      }}
    >
      <svg className="hidden">
        <defs>
          <filter id={`blurMe-${animationSet}`}>
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
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
      
      <div className={cn("relative z-10", className)}>{children}</div>
      
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg absolute inset-0",
          isSafari ? "blur-2xl" : `[filter:url(#blurMe-${animationSet})_blur(40px)]`
        )}
        style={{ contain: "layout style paint", willChange: "transform" }}
      >
        {/* First gradient orb */}
        <div
          className="absolute opacity-70"
          style={{
            background: `radial-gradient(circle at center, rgba(${firstColor}, 0.4) 0%, rgba(${firstColor}, 0) 70%) no-repeat`,
            mixBlendMode: blendingValue as any,
            width: size,
            height: size,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: 'center center',
            willChange: 'transform',
            animation: `rotate${animationSet}1 20s ease-in-out infinite ${animationDelay}`,
            animationDirection: rotationDirection
          }}
        />
        
        {/* Second gradient orb */}
        <div
          className="absolute opacity-70"
          style={{
            background: `radial-gradient(circle at center, rgba(${secondColor}, 0.4) 0%, rgba(${secondColor}, 0) 70%) no-repeat`,
            mixBlendMode: blendingValue as any,
            width: size,
            height: size,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: 'calc(50% - 400px)',
            willChange: 'transform',
            animation: `rotate${animationSet}2 25s ease-in-out infinite ${animationDelay}`,
            animationDirection: rotationDirection
          }}
        />
        
        {/* Third gradient orb */}
        <div
          className="absolute opacity-70"
          style={{
            background: `radial-gradient(circle at center, rgba(${thirdColor}, 0.4) 0%, rgba(${thirdColor}, 0) 70%) no-repeat`,
            mixBlendMode: blendingValue as any,
            width: size,
            height: size,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: 'calc(50% + 400px)',
            willChange: 'transform',
            animation: `rotate${animationSet}3 30s ease-in-out infinite ${animationDelay}`,
            animationDirection: rotationDirection
          }}
        />
        
        {/* Fourth gradient orb */}
        <div
          className="absolute opacity-50"
          style={{
            background: `radial-gradient(circle at center, rgba(${fourthColor}, 0.4) 0%, rgba(${fourthColor}, 0) 70%) no-repeat`,
            mixBlendMode: blendingValue as any,
            width: size,
            height: size,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: 'calc(50% - 200px)',
            willChange: 'transform',
            animation: `rotate${animationSet}4 35s ease-in-out infinite ${animationDelay}`,
            animationDirection: rotationDirection
          }}
        />
        
        {/* Fifth gradient orb */}
        <div
          className="absolute opacity-60"
          style={{
            background: `radial-gradient(circle at center, rgba(${fifthColor}, 0.4) 0%, rgba(${fifthColor}, 0) 70%) no-repeat`,
            mixBlendMode: blendingValue as any,
            width: size,
            height: size,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: 'calc(50% - 800px) calc(50% + 800px)',
            willChange: 'transform',
            animation: `rotate${animationSet}5 40s ease-in-out infinite ${animationDelay}`,
            animationDirection: rotationDirection
          }}
        />

        {/* Interactive pointer element - only for left side */}
        {interactive && animationSet === "left" && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className="absolute opacity-40"
            style={{
              background: `radial-gradient(circle at center, rgba(${pointerColor}, 0.5) 0%, rgba(${pointerColor}, 0) 50%) no-repeat`,
              mixBlendMode: blendingValue as any,
              width: '100%',
              height: '100%',
              top: '-50%',
              left: '-50%',
              willChange: 'transform'
            }}
          />
        )}
      </div>
    </div>
  );
};
