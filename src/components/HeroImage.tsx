'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface ShapeProps {
  scrollRotation: number;
}

function LargeGeometricShape({ scrollRotation }: ShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer, raycaster, camera } = useThree();
  const [isHovered, setIsHovered] = useState(false);
  const morphTargetRef = useRef(0);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Check if cursor is hovering over the shape
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObject(meshRef.current);
    const hovering = intersects.length > 0;
    
    if (hovering !== isHovered) {
      setIsHovered(hovering);
    }
    
    // Morph effect on hover - animate to target (slower)
    const morphTarget = isHovered ? 1 : 0;
    morphTargetRef.current += (morphTarget - morphTargetRef.current) * 0.05;
    
    // Apply morph by modifying geometry scale in different axes (reduced)
    const morphScale = 1 + morphTargetRef.current * 0.1;
    meshRef.current.scale.set(
      1 + Math.sin(state.clock.elapsedTime * 0.8) * morphTargetRef.current * 0.08,
      morphScale,
      1 + Math.cos(state.clock.elapsedTime * 0.8) * morphTargetRef.current * 0.08
    );
    
    // Base rotation
    meshRef.current.rotation.y += 0.0008;
    
    // Scroll-based X-axis rotation (reduced)
    meshRef.current.rotation.x = scrollRotation * 0.0008;
    
    // Subtle cursor-based rotation (lerp for smooth movement, reduced)
    const targetRotationY = pointer.x * 0.15;
    meshRef.current.rotation.y += (targetRotationY - meshRef.current.rotation.y) * 0.03;
    
    // Gentle bobbing with subtle cursor influence
    const baseY = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    const cursorY = pointer.y * 0.5;
    meshRef.current.position.y = baseY + cursorY * 0.3;
  });

  return (
    <mesh ref={meshRef} position={[6, 0, 0]}>
      <icosahedronGeometry args={[10, 1]} />
      <meshStandardMaterial
        color="#fef3c7"
        wireframe={true}
        wireframeLinewidth={2}
        emissive="#fbbf24"
        emissiveIntensity={0.5}
        metalness={0.9}
        roughness={0.1}
        opacity={1}
        transparent={false}
      />
    </mesh>
  );
}

export default function HeroImage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 right-0 w-full h-screen -z-10">
      <Canvas
        camera={{ position: [8, 0, 12], fov: 50 }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.5}
        />
        <pointLight position={[5, 5, 5]} intensity={1} color="#fbbf24" />
        <pointLight position={[-5, -5, 5]} intensity={0.7} color="#fef3c7" />
        <LargeGeometricShape scrollRotation={scrollY} />
      </Canvas>
    </div>
  );
}
