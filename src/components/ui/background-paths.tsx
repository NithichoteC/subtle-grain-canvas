
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function FloatingPaths({ position, side }: { position: number; side: 'left' | 'right' }) {
    // Create much more visible and dynamic paths for the edges
    const paths = Array.from({ length: 18 }, (_, i) => {
        // Generate paths that flow along the edges with better visibility
        let pathData;
        
        if (side === 'left') {
            // Left side paths - flowing from left edge towards center
            pathData = {
                d: `M-${150 + i * 6} ${50 + i * 10}C-${80 + i * 4} ${100 + i * 6} -${30 + i * 3} ${180 + i * 8} ${50 + i * 5} ${260 - i * 6}`,
                width: 1.2 + i * 0.2,
                opacity: 0.2 + i * 0.04
            };
        } else {
            // Right side paths - flowing from right edge towards center
            pathData = {
                d: `M${500 - i * 6} ${50 + i * 10}C${420 - i * 4} ${100 + i * 6} ${370 - i * 3} ${180 + i * 8} ${290 - i * 5} ${260 - i * 6}`,
                width: 1.2 + i * 0.2,
                opacity: 0.2 + i * 0.04
            };
        }
        
        return {
            id: i,
            ...pathData
        };
    });

    return (
        <div className={`absolute top-0 bottom-0 ${side === 'left' ? 'left-0' : 'right-0'} pointer-events-none overflow-hidden`} 
            style={{width: '250px'}}> {/* Increased width for better coverage */}
            <svg
                className="w-full h-full text-white/60"
                viewBox={`0 0 400 800`} /* Wider viewBox for better coverage */
                preserveAspectRatio="none"
                fill="none"
            >
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={path.opacity}
                        initial={{ pathLength: 0.4, opacity: 0.5 }}
                        animate={{
                            pathLength: 0.8,
                            opacity: [0.4, 0.7, 0.4],
                            pathOffset: [0, 1],
                        }}
                        transition={{
                            duration: 10 + Math.random() * 6,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                            delay: path.id * 0.3
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundEdgePaths() {
    return (
        <>
            <FloatingPaths position={1} side="left" />
            <FloatingPaths position={1} side="right" />
        </>
    );
}
