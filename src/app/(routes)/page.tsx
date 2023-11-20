'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import horizontalLoop from '@/animations/horizontalLoop';

export default function Home() {
  const slider = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const slides = gsap.utils.toArray('.slide');
      const loop = horizontalLoop(slides, {
        speed: 0.75,
        repeat: -1,
        paddingRight: 24,
      });
    }, slider);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className='line line--vertical [grid-area:menu]'>
        <div className='block px-[0] font-dystopian text-[1.5rem] font-bold leading-none'>
          <div className='grid overflow-hidden'>
            <div
              data-menu
              className='block translate-y-[-100%] rotate-180 self-center font-dystopian text-[8vh] font-bold leading-none [writing-mode:vertical-lr]'
            >
              Home
            </div>
          </div>
        </div>
      </div>
      <h1 className='m-0 grid overflow-hidden font-dystopian text-[8.25vw] font-bold leading-[0.9] [grid-area:title]'>
        <div
          data-title
          className='translate-x-[-100%]'
        >
          Joel Gomba
        </div>
      </h1>
      <div className='overflow-hidden text-[2vw] font-extralight leading-none [grid-area:subtitle] [text-indent:-0.2vw]'>
        <div className='w-[700px] overflow-hidden'>
          <div
            data-op
            className='slider flex w-[2300px] gap-6 opacity-0'
            ref={slider}
          >
            <div className='slide'>Fullstack Developer</div>
            <div className='slide'>Fullstack Developer</div>
            <div className='slide'>Fullstack Developer</div>
            <div className='slide'>Fullstack Developer</div>
          </div>
        </div>
      </div>
      <p className='line line--horizontal text-[clamp(1rem, 2vh, 3rem)] m-0 text-xl [grid-area:content]'>
        <span
          data-op
          className='block opacity-0'
        >
          I&apos;m a skilled software developer with experience in TypeScript
          and JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I&apos;m a quick learner and collaborate closely with
          clients to create efficient, scalable, and user-friendly solutions
          that solve real-world problems. Let&apos;s work together to bring your
          ideas to life!
        </span>
      </p>
      <span
        className='inline-block scale-0 cursor-default self-center justify-self-center text-[12vw] [grid-area:play]'
        aria-label='Play'
        data-play
      >
        &#9658;
      </span>
    </>
  );
}
