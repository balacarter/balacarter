'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function LargeGeometricShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Even slower rotation
    meshRef.current.rotation.x += 0.0005;
    meshRef.current.rotation.y += 0.0008;
    
    // Subtle scale pulse
    const scale = 1 + Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
    meshRef.current.scale.set(scale, scale, scale);
    
    // Gentle bobbing
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={[6, 0, 0]}>
      <octahedronGeometry args={[8, 0]} />
      <meshStandardMaterial
        color="#fef3c7"
        wireframe={true}
        wireframeLinewidth={2}
        emissive="#fbbf24"
        emissiveIntensity={0.4}
        metalness={0.8}
        roughness={0.2}
        opacity={1}
        transparent={false}
      />
    </mesh>
  );
}

export default function HeroImage() {
  return (
    <div className="fixed top-0 right-0 w-full h-screen pointer-events-none -z-10">
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
        <LargeGeometricShape />
      </Canvas>
    </div>
  );
}
