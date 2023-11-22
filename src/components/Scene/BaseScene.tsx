'use client';

import { Canvas, extend } from '@react-three/fiber';
import BlobMaterial from '../../lib/material/blobmaterial';
import { Icosahedron } from './Icosahedron';
import { Dolly } from './Dolly';
import { Preload } from '@react-three/drei';
extend({ BlobMaterial });

export default function BaseScene() {
  return (
    <div className='absolute left-0 top-0 z-[-1] h-full w-full'>
      <Canvas
        camera={{
          position: [0, 0, 18],
          fov: 45,
          near: 1,
          far: 1000,
        }}
        gl={{ antialias: true, alpha: true }}
      >
        <Icosahedron
          position={[-8.5, 3.25, 2]}
          size={1.75}
          rotation={[-0.4, 0, 0.5]}
        >
          <blobMaterial
            uSpeed={0.3}
            uHue={0.5}
            uNoiseDensity={1.2}
            uNoiseStrength={0.12}
            uOffset={Math.PI * 2}
            key={BlobMaterial.key}
          />
        </Icosahedron>
        <Icosahedron
          position={[11, -3, -10]}
          size={6}
        >
          <blobMaterial
            uSpeed={0.15}
            uHue={0.4}
            uNoiseDensity={2}
            uNoiseStrength={0.3}
            uOffset={Math.PI * 2}
            key={BlobMaterial.key}
          />
        </Icosahedron>
        <Icosahedron
          position={[-1, -4, 4]}
          size={0.6}
        >
          <blobMaterial
            uSpeed={0.5}
            uHue={0.1}
            uNoiseDensity={2}
            uNoiseStrength={0.05}
            uOffset={Math.PI * 0.5}
            key={BlobMaterial.key}
          />
        </Icosahedron>
        <Dolly />
        <Preload all />
      </Canvas>
    </div>
  );
}
