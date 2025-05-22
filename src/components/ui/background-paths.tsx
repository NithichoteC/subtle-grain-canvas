
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function FloatingPaths({ position, side }: { position: number; side: 'left' | 'right' }) {
    // Create paths for the edges
    const paths = Array.from({ length: 12 }, (_, i) => {
        // Generate paths that flow along the edges
        let pathData;
        if (side === 'left') {
            pathData = {
                d: `M-${180 + i * 10} ${100 + i * 15}C-${100 + i * 8} ${150 + i * 10} -${50 + i * 5} ${200 + i * 15} ${10 + i * 10} ${280 - i * 10}`,
                width: 0.5 + i * 0.1,
                opacity: 0.1 + i * 0.02
            };
        } else {
            pathData = {
                d: `M${400 - i * 10} ${100 + i * 15}C${320 - i * 8} ${150 + i * 10} ${270 - i * 5} ${200 + i * 15} ${210 - i * 10} ${280 - i * 10}`,
                width: 0.5 + i * 0.1,
                opacity: 0.1 + i * 0.02
            };
        }
        
        return {
            id: i,
            ...pathData
        };
    });

    return (
        <div className={`absolute top-0 bottom-0 ${side === 'left' ? 'left-0' : 'right-0'} pointer-events-none overflow-hidden`} style={{width: '80px'}}>
            <svg
                className="w-full h-full text-white/20"
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
                        initial={{ pathLength: 0.3, opacity: 0.3 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.2, 0.4, 0.2],
                            pathOffset: [0, 1],
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                            delay: path.id * 0.5
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
