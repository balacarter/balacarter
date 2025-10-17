'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroImage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Calculate tilt based on mouse position with enhanced Y-axis rotation
  const rotateX = mousePosition.y * 3; // Max 3 degrees
  const rotateY = mousePosition.x * -15; // Max 15 degrees - enhanced rotation
  const translateX = mousePosition.x * 10; // Slight horizontal shift to enhance rotation feel

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center perspective-1000">
      {/* Bobbing animation wrapper */}
      <div
        style={{
          animation: 'bob 5s ease-in-out infinite',
        }}
      >
        {/* Tilt container with animated glow shadow */}
        <div
          className="relative transition-transform duration-300 ease-out"
          style={{
            transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px)`,
            transformStyle: 'preserve-3d',
            animation: 'glowShadow 6s ease-in-out infinite',
          }}
        >
          {/* Main Image */}
          <div className="relative w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px]">
            <Image
              src="/low-poly-mtn.png"
              alt="Low Poly Mountain"
              fill
              priority
              className="object-contain"
              style={{
                transform: 'translateZ(50px)',
              }}
            />
          </div>
        </div>
      </div>

      {/* CSS keyframes for animated glow shadow and bobbing */}
      <style jsx>{`
        @keyframes glowShadow {
          0%, 100% {
            filter: drop-shadow(0 0 80px rgba(96, 165, 250, 0.2)) drop-shadow(0 0 140px rgba(168, 85, 247, 0.15));
          }
          50% {
            filter: drop-shadow(0 0 100px rgba(96, 165, 250, 0.3)) drop-shadow(0 0 160px rgba(168, 85, 247, 0.2));
          }
        }
      `}</style>
      
      <style jsx>{`
        @keyframes bob {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </div>
  );
}
