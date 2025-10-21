'use client';

import { useEffect, useState } from 'react';

export default function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rafId: number | null = null;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;

      // Throttle updates using requestAnimationFrame
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          setMousePosition({ x: lastX, y: lastY });
          rafId = null;
        });
      }
    };

    // Only add mousemove listener on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (!isTouchDevice) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-[var(--bg-base)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(var(--grid-color) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Cursor glow effect */}
      <div
        className="absolute w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          background: `radial-gradient(circle, var(--glow-color) 0%, transparent 70%)`,
          opacity: 0.4,
        }}
      />

      {/* Illuminated grid overlay - follows cursor */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(var(--grid-color) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
          opacity: 0.8,
        }}
      />
    </div>
  );
}
