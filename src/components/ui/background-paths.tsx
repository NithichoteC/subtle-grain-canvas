
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function FloatingPaths({ position, side }: { position: number; side: 'left' | 'right' }) {
    // Create more visible, flowing paths that span from edge to edge
    const paths = Array.from({ length: 12 }, (_, i) => {
        // Generate paths that flow horizontally with better visibility
        let pathData;
        
        if (side === 'left') {
            // Left side paths - flowing from left edge toward right
            pathData = {
                d: `M-20 ${120 + i * 50}C100 ${100 + i * 5} 200 ${150 + i * 15} 300 ${140 - i * 10}`,
                width: 1.8 + (i % 3) * 0.4,
                opacity: 0.15 + (i % 4) * 0.08,
                duration: 18 + (i % 5) * 4
            };
        } else {
            // Right side paths - flowing from right edge toward left
            pathData = {
                d: `M620 ${140 + i * 50}C500 ${160 + i * 5} 400 ${120 + i * 15} 300 ${130 - i * 10}`,
                width: 1.8 + (i % 3) * 0.4,
                opacity: 0.15 + (i % 4) * 0.08,
                duration: 18 + (i % 5) * 4
            };
        }
        
        return {
            id: i,
            ...pathData
        };
    });

    return (
        <div className={`absolute top-0 bottom-0 ${side === 'left' ? 'left-0' : 'right-0'} pointer-events-none overflow-hidden`} 
            style={{width: '50%', height: '100%'}}> {/* Wider container to allow for edge-to-edge flow */}
            <svg
                className="w-full h-full text-white/70" /* Increased contrast with hint of gold/bronze */
                viewBox={`0 0 600 800`} /* Larger viewBox for better horizontal span */
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
                        initial={{ pathLength: 0, opacity: 0.1 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                            duration: path.duration,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            repeatType: "loop",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundEdgePaths() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <FloatingPaths position={1} side="left" />
            <FloatingPaths position={1} side="right" />
        </div>
    );
}
