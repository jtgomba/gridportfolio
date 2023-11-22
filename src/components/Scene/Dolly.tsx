// @ts-nocheck
'use client';
import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { gsap } from 'gsap';

export function Dolly() {
  const mouseX = useRef<number>(null);
  const mouseY = useRef<number>(null);
  const mouseTargetX = useRef<number>(null);
  const mouseTargetY = useRef<number>(null);

  function mouseMove(e) {
    mouseX.current = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY.current = -(e.clientY / window.innerHeight) * 2 + 1;
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const { scene } = useThree();

  const tl = useRef(
    gsap.timeline({
      defaults: {
        duration: 2,
        ease: 'power3.inOut',
      },
    })
  );

  useEffect(() => {
    let ctx = gsap.context(() => {
      const uniformAlphas = [
        scene.children[0].material.uniforms.uAlpha,
        scene.children[1].material.uniforms.uAlpha,
        scene.children[2].material.uniforms.uAlpha,
      ];

      tl.current
        .from(scene.children[0].position, { z: -5 })
        .from(scene.children[1].position, { z: -30 }, '-=1.75')
        .from(scene.children[2].position, { z: 12 }, '-=1.75')
        .from(
          uniformAlphas,
          {
            value: 0,
            stagger: 0.2,
            ease: 'power3.inOut',
          },
          0
        );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  useFrame((state, delta) => {
    mouseTargetX.current = gsap.utils.interpolate(
      mouseTargetX.current,
      mouseX.current,
      0.03
    );
    mouseTargetY.current = gsap.utils.interpolate(
      mouseTargetY.current,
      mouseY.current,
      0.03
    );

    state.scene.rotation.set(
      mouseTargetX.current * 0.25,
      mouseTargetY.current * 0.25,
      0
    );
  });
  return <></>;
}
