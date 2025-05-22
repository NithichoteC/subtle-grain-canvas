
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HorizontalFlows() {
    // Generate paths for horizontal flow lines
    const flowLines = Array.from({ length: 8 }, (_, i) => {
        // Distribute lines vertically across the screen
        const yPosition = 100 + i * 80;
        
        // Adjust line properties for visual appeal
        return {
            id: i,
            y: yPosition,
            width: 1 + i * 0.1, // Slightly varying line widths
            opacity: 0.1 + i * 0.05, // Varying opacity
            delay: i * 0.2, // Stagger animation starts
            duration: 8 + Math.random() * 4 // Varying animation speeds
        };
    });

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <svg
                className="w-full h-full text-white/40"
                viewBox="0 0 1200 800"
                preserveAspectRatio="none"
                fill="none"
            >
                {flowLines.map((line) => (
                    <motion.path
                        key={line.id}
                        d={`M-100 ${line.y} H1300`} // Simple horizontal line from left to right
                        stroke="currentColor"
                        strokeWidth={line.width}
                        strokeOpacity={line.opacity}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.2, 0.6, 0.2],
                            strokeDashoffset: [0, -1000],
                        }}
                        transition={{
                            duration: line.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: line.delay
                        }}
                        strokeDasharray="10, 20, 30, 20" // Creates a dashed line pattern
                    />
                ))}
            </svg>
        </div>
    );
}
