"use client";

import { useState, useCallback } from "react";

export default function SpotlightCard() {
    const [position, setPosition] = useState({ x: 50, y: 50 });

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setPosition({ x, y });
    }, []);

    return (
        <div
            className="pointer-events-auto absolute inset-0 z-0 transition-opacity duration-500"
            onMouseMove={handleMouseMove}
            aria-hidden="true"
            style={{
                background: `radial-gradient(
          800px circle at ${position.x}% ${position.y}%,
          rgba(120, 80, 255, 0.06),
          transparent 50%
        )`,
            }}
        />
    );
}
