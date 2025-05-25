
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
  
  // Create unique CSS variable names for each animation set
  const cssVarPrefix = `--${animationSet}`;
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    container.style.setProperty(`${cssVarPrefix}-gradient-background-start`, gradientBackgroundStart);
    container.style.setProperty(`${cssVarPrefix}-gradient-background-end`, gradientBackgroundEnd);
    container.style.setProperty(`${cssVarPrefix}-first-color`, firstColor);
    container.style.setProperty(`${cssVarPrefix}-second-color`, secondColor);
    container.style.setProperty(`${cssVarPrefix}-third-color`, thirdColor);
    container.style.setProperty(`${cssVarPrefix}-fourth-color`, fourthColor);
    container.style.setProperty(`${cssVarPrefix}-fifth-color`, fifthColor);
    container.style.setProperty(`${cssVarPrefix}-pointer-color`, pointerColor);
    container.style.setProperty(`${cssVarPrefix}-size`, size);
    container.style.setProperty(`${cssVarPrefix}-blending-value`, blendingValue);
  }, [cssVarPrefix, gradientBackgroundStart, gradientBackgroundEnd, firstColor, secondColor, thirdColor, fourthColor, fifthColor, pointerColor, size, blendingValue]);

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

  // Animation classes based on which side - synchronized timing for right side
  const getAnimationClasses = () => {
    if (animationSet === "right") {
      return {
        first: "animate-first-right-sync",
        second: "animate-second-right-sync", 
        third: "animate-third-right-sync",
        fourth: "animate-fourth-right-sync",
        fifth: "animate-fifth-right-sync"
      };
    }
    return {
      first: "animate-first",
      second: "animate-second",
      third: "animate-third", 
      fourth: "animate-fourth",
      fifth: "animate-fifth"
    };
  };

  const animations = getAnimationClasses();

  return (
    <div
      ref={containerRef}
      className={cn(
        "h-full w-full relative overflow-hidden",
        containerClassName
      )}
      style={{
        background: `linear-gradient(40deg, var(${cssVarPrefix}-gradient-background-start), var(${cssVarPrefix}-gradient-background-end))`,
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
        <div
          className={cn(
            `absolute opacity-80`,
            animations.first
          )}
          style={{
            background: `radial-gradient(circle at center, rgba(var(${cssVarPrefix}-first-color), 0.5) 0%, rgba(var(${cssVarPrefix}-first-color), 0) 50%) no-repeat`,
            mixBlendMode: `var(${cssVarPrefix}-blending-value)`,
            width: `var(${cssVarPrefix}-size)`,
            height: `var(${cssVarPrefix}-size)`,
            top: `calc(50% - var(${cssVarPrefix}-size) / 2)`,
            left: `calc(50% - var(${cssVarPrefix}-size) / 2)`,
            transformOrigin: 'center center',
            willChange: 'transform'
          }}
        />
        <div
          className={cn(
            `absolute opacity-80`,
            animations.second
          )}
          style={{
            background: `radial-gradient(circle at center, rgba(var(${cssVarPrefix}-second-color), 0.5) 0%, rgba(var(${cssVarPrefix}-second-color), 0) 50%) no-repeat`,
            mixBlendMode: `var(${cssVarPrefix}-blending-value)`,
            width: `var(${cssVarPrefix}-size)`,
            height: `var(${cssVarPrefix}-size)`,
            top: `calc(50% - var(${cssVarPrefix}-size) / 2)`,
            left: `calc(50% - var(${cssVarPrefix}-size) / 2)`,
            transformOrigin: 'calc(50% - 400px)',
            willChange: 'transform'
          }}
        />
        <div
          className={cn(
            `absolute opacity-80`,
            animations.third
          )}
          style={{
            background: `radial-gradient(circle at center, rgba(var(${cssVarPrefix}-third-color), 0.5) 0%, rgba(var(${cssVarPrefix}-third-color), 0) 50%) no-repeat`,
            mixBlendMode: `var(${cssVarPrefix}-blending-value)`,
            width: `var(${cssVarPrefix}-size)`,
            height: `var(${cssVarPrefix}-size)`,
            top: `calc(50% - var(${cssVarPrefix}-size) / 2)`,
            left: `calc(50% - var(${cssVarPrefix}-size) / 2)`,
            transformOrigin: 'calc(50% + 400px)',
            willChange: 'transform'
          }}
        />
        <div
          className={cn(
            `absolute opacity-60`,
            animations.fourth
          )}
          style={{
            background: `radial-gradient(circle at center, rgba(var(${cssVarPrefix}-fourth-color), 0.5) 0%, rgba(var(${cssVarPrefix}-fourth-color), 0) 50%) no-repeat`,
            mixBlendMode: `var(${cssVarPrefix}-blending-value)`,
            width: `var(${cssVarPrefix}-size)`,
            height: `var(${cssVarPrefix}-size)`,
            top: `calc(50% - var(${cssVarPrefix}-size) / 2)`,
            left: `calc(50% - var(${cssVarPrefix}-size) / 2)`,
            transformOrigin: 'calc(50% - 200px)',
            willChange: 'transform'
          }}
        />
        <div
          className={cn(
            `absolute opacity-80`,
            animations.fifth
          )}
          style={{
            background: `radial-gradient(circle at center, rgba(var(${cssVarPrefix}-fifth-color), 0.5) 0%, rgba(var(${cssVarPrefix}-fifth-color), 0) 50%) no-repeat`,
            mixBlendMode: `var(${cssVarPrefix}-blending-value)`,
            width: `var(${cssVarPrefix}-size)`,
            height: `var(${cssVarPrefix}-size)`,
            top: `calc(50% - var(${cssVarPrefix}-size) / 2)`,
            left: `calc(50% - var(${cssVarPrefix}-size) / 2)`,
            transformOrigin: 'calc(50% - 800px) calc(50% + 800px)',
            willChange: 'transform'
          }}
        />

        {interactive && animationSet === "left" && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className="absolute opacity-50"
            style={{
              background: `radial-gradient(circle at center, rgba(var(${cssVarPrefix}-pointer-color), 0.6) 0%, rgba(var(${cssVarPrefix}-pointer-color), 0) 50%) no-repeat`,
              mixBlendMode: `var(${cssVarPrefix}-blending-value)`,
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
