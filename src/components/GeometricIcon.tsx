'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function RotatingShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Slow rotation and gentle morphing
    meshRef.current.rotation.x += 0.003;
    meshRef.current.rotation.y += 0.005;
    
    // Subtle scale pulse
    const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#fbbf24"
        wireframe={true}
        emissive="#fbbf24"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

export default function GeometricIcon() {
  return (
    <div className="w-10 h-10 cursor-pointer">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <RotatingShape />
      </Canvas>
    </div>
  );
}
