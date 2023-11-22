// @ts-nocheck
'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function Icosahedron(props) {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.material.uniforms.uTime.value += delta;
  });

  return (
    <mesh
      {...props}
      ref={ref}
    >
      <icosahedronGeometry args={[props.size, 64]} />
      {props.children}
    </mesh>
  );
}
