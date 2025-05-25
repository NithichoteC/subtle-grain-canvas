
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
  const animationRef = useRef<number>();

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

  // Animation timing offsets for left/right differentiation
  const baseDelay = animationSet === "right" ? 2000 : 0;

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
          <filter id={`blurMe-${animationSet}`}>
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
          isSafari ? "blur-2xl" : "[filter:url(#blurMe-left)_blur(40px)]"
        )}
      >
        {/* First gradient orb */}
        <div
          className={cn("absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0%,_var(--first-color)_50%,_transparent_100%)] [mix-blend-mode:var(--blending-value)] opacity-100")}
          style={{
            "--first-color": `rgba(${firstColor}, 0.8)`,
            "--blending-value": blendingValue,
            width: size,
            height: size,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: "center center",
            animation: `first-${animationSet} 20s ease infinite`,
            animationDelay: `${baseDelay}ms`,
          } as React.CSSProperties}
        />

        {/* Second gradient orb */}
        <div
          className={cn("absolute [background:radial-gradient(circle_at_center,_var(--second-color)_0%,_var(--second-color)_50%,_transparent_100%)] [mix-blend-mode:var(--blending-value)] opacity-100")}
          style={{
            "--second-color": `rgba(${secondColor}, 0.8)`,
            "--blending-value": blendingValue,
            width: size,
            height: size,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: "calc(50% - 400px)",
            animation: `second-${animationSet} 20s ease infinite`,
            animationDelay: `${baseDelay + 1000}ms`,
          } as React.CSSProperties}
        />

        {/* Third gradient orb */}
        <div
          className={cn("absolute [background:radial-gradient(circle_at_center,_var(--third-color)_0%,_var(--third-color)_50%,_transparent_100%)] [mix-blend-mode:var(--blending-value)] opacity-100")}
          style={{
            "--third-color": `rgba(${thirdColor}, 0.8)`,
            "--blending-value": blendingValue,
            width: size,
            height: size,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: "calc(50% + 400px)",
            animation: `third-${animationSet} 20s ease infinite`,
            animationDelay: `${baseDelay + 2000}ms`,
          } as React.CSSProperties}
        />

        {/* Fourth gradient orb */}
        <div
          className={cn("absolute [background:radial-gradient(circle_at_center,_var(--fourth-color)_0%,_var(--fourth-color)_50%,_transparent_100%)] [mix-blend-mode:var(--blending-value)] opacity-70")}
          style={{
            "--fourth-color": `rgba(${fourthColor}, 0.7)`,
            "--blending-value": blendingValue,
            width: size,
            height: size,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: "calc(50% - 200px)",
            animation: `fourth-${animationSet} 20s linear infinite`,
            animationDelay: `${baseDelay + 3000}ms`,
          } as React.CSSProperties}
        />

        {/* Fifth gradient orb */}
        <div
          className={cn("absolute [background:radial-gradient(circle_at_center,_var(--fifth-color)_0%,_var(--fifth-color)_50%,_transparent_100%)] [mix-blend-mode:var(--blending-value)] opacity-100")}
          style={{
            "--fifth-color": `rgba(${fifthColor}, 0.7)`,
            "--blending-value": blendingValue,
            width: size,
            height: size,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: "calc(50% - 800px) calc(50% + 800px)",
            animation: `fifth-${animationSet} 20s ease infinite`,
            animationDelay: `${baseDelay + 4000}ms`,
          } as React.CSSProperties}
        />

        {/* Interactive pointer element */}
        {interactive && (
          <div
            ref={interactiveRef}
            className={cn("absolute [background:radial-gradient(circle_at_center,_var(--pointer-color)_0%,_transparent_50%)] [mix-blend-mode:var(--blending-value)] opacity-70")}
            style={{
              "--pointer-color": `rgba(${pointerColor}, 0.5)`,
              "--blending-value": blendingValue,
              width: "100%",
              height: "100%",
              top: "-50%",
              left: "-50%",
            } as React.CSSProperties}
          />
        )}
      </div>

      <style jsx>{`
        @keyframes first-left {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          33% {
            transform: translate3d(30px, -30px, 0) rotate(120deg);
          }
          66% {
            transform: translate3d(-20px, 20px, 0) rotate(240deg);
          }
        }

        @keyframes second-left {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(-25px, -25px, 0) rotate(180deg);
          }
        }

        @keyframes third-left {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          25% {
            transform: translate3d(25px, 25px, 0) rotate(90deg);
          }
          75% {
            transform: translate3d(-25px, 25px, 0) rotate(270deg);
          }
        }

        @keyframes fourth-left {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          100% {
            transform: translate3d(0, 0, 0) rotate(360deg);
          }
        }

        @keyframes fifth-left {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          40% {
            transform: translate3d(-20px, -20px, 0) rotate(144deg);
          }
          80% {
            transform: translate3d(20px, -20px, 0) rotate(288deg);
          }
        }

        @keyframes first-right {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          33% {
            transform: translate3d(-30px, 30px, 0) rotate(-120deg);
          }
          66% {
            transform: translate3d(20px, -20px, 0) rotate(-240deg);
          }
        }

        @keyframes second-right {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(25px, 25px, 0) rotate(-180deg);
          }
        }

        @keyframes third-right {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          25% {
            transform: translate3d(-25px, -25px, 0) rotate(-90deg);
          }
          75% {
            transform: translate3d(25px, -25px, 0) rotate(-270deg);
          }
        }

        @keyframes fourth-right {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          100% {
            transform: translate3d(0, 0, 0) rotate(-360deg);
          }
        }

        @keyframes fifth-right {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          40% {
            transform: translate3d(20px, 20px, 0) rotate(-144deg);
          }
          80% {
            transform: translate3d(-20px, 20px, 0) rotate(-288deg);
          }
        }
      `}</style>
    </div>
  );
};
