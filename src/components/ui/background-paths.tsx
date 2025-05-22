
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function FloatingPaths({ position, side }: { position: number; side: 'left' | 'right' }) {
    // Create paths for the edges with improved visibility
    const paths = Array.from({ length: 15 }, (_, i) => {
        // Generate paths that flow along the edges
        let pathData;
        if (side === 'left') {
            pathData = {
                d: `M-${150 + i * 8} ${80 + i * 12}C-${80 + i * 6} ${130 + i * 8} -${30 + i * 4} ${180 + i * 10} ${20 + i * 8} ${260 - i * 8}`,
                width: 0.8 + i * 0.15,
                opacity: 0.15 + i * 0.03
            };
        } else {
            pathData = {
                d: `M${400 - i * 8} ${80 + i * 12}C${320 - i * 6} ${130 + i * 8} ${270 - i * 4} ${180 + i * 10} ${200 - i * 8} ${260 - i * 8}`,
                width: 0.8 + i * 0.15,
                opacity: 0.15 + i * 0.03
            };
        }
        
        return {
            id: i,
            ...pathData
        };
    });

    return (
        <div className={`absolute top-0 bottom-0 ${side === 'left' ? 'left-0' : 'right-0'} pointer-events-none overflow-hidden`} style={{width: '100px'}}>
            <svg
                className="w-full h-full text-white/30"
                viewBox={`0 0 200 600`}
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
                        initial={{ pathLength: 0.3, opacity: 0.4 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1],
                        }}
                        transition={{
                            duration: 12 + Math.random() * 8,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                            delay: path.id * 0.4
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
