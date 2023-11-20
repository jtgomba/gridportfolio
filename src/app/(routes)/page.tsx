'use client';

import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import horizontalLoop from '@/animations/horizontalLoop';

export default function Home() {
  const tl = useRef(
    gsap.timeline({
      defaults: {
        ease: 'power3.inOut',
      },
    })
  );

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current
        .to('body', {
          duration: 2,
          '--horizontal-transform': 'translateX(-34%)',
          stagger: 0.1,
        })
        .to(
          'body',
          {
            duration: 2,
            '--vertical-transform': 'translateY(-30%)',
            stagger: 0.1,
          },
          '<'
        )
        .to(
          '[data-title]',
          {
            duration: 2,
            xPercent: 100,
          },
          '-=1.5'
        )
        .to(
          '[data-menu]',
          {
            duration: 1.5,
            yPercent: 100,
          },
          '-=1.5'
        )
        .fromTo(
          '[data-play]',
          {
            scale: 0,
            rotate: '-62deg',
          },
          {
            duration: 1,
            scale: 1,
            rotate: '0deg',
          },
          '-=1.5'
        )
        .to(
          '[data-op]',
          {
            duration: 1,
            opacity: 1,
            delay: 0.5,
          },
          '<'
        )
        .set('[data-title]', {
          css: { transform: 'translate(0px, 0px)' },
        })
        .set('[data-menu]', {
          css: { transform: 'rotate(180deg) skew(360deg, 0deg)' },
        });
    });

    return () => {
      ctx.revert();
    };
  }, []);

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
    <main className='grid h-screen grid-cols-[8rem_12vh_9rem_1fr_1fr] grid-rows-[4rem_4rem_min-content_min-content_1fr_2.5rem] overflow-hidden text-left text-sm'>
      <a
        className='col-[1_/_2] row-[1_/_span_2] inline-block self-center justify-self-center text-[3rem] font-bold no-underline opacity-0'
        aria-label='Wave logo homepage'
        href='#'
        data-op
      >
        ~
      </a>
      <h2
        data-op
        className='line line--vertical relative col-[4_/_5] row-[1_/_2] text-[1rem] font-semibold'
      ></h2>
      <nav className='line line--horizontal col-[5_/_6] row-[1_/_span_2] grid overflow-hidden'>
        <ul
          data-op
          className='flex w-full flex-row justify-evenly gap-3 self-center justify-self-center text-lg opacity-0'
        >
          <li>About</li>
          <li>Works</li>
          <li>Contact</li>
        </ul>
      </nav>
      <nav
        data-op
        className='line line--vertical col-[5_/_6] row-[2_/_3] opacity-0'
      ></nav>
      <div className='line line--vertical col-[2_/_3] row-[5_/_6]'>
        <div className='font-dystopian block px-[0] text-[1.5rem] font-bold leading-none'>
          <div className='grid overflow-hidden'>
            <div
              data-menu
              className='font-dystopian block translate-y-[-100%] rotate-180 self-center text-[8vh] font-bold leading-none [writing-mode:vertical-lr]'
            >
              Engineer
            </div>
          </div>
        </div>
      </div>
      <div className='line line--horizontal col-[4_/_span_5] row-[3_/_4]'></div>
      <h1 className='font-dystopian col-[4_/_span_5] row-[3_/_4] m-0 grid overflow-hidden text-[8.25vw] font-bold leading-[0.9]'>
        <div
          data-title
          className='translate-x-[-100%]'
        >
          Joel Gomba
        </div>
      </h1>
      <div className='col-[5_/_5] row-[4_/_5] overflow-hidden text-[2vw] font-extralight leading-none [text-indent:-0.2vw]'>
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
      <p className='line line--horizontal text-[clamp(1rem, 2vh, 3rem)] col-[4_/_5] row-[5_/_6] m-0 text-xl'>
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
        className='col-[5_/_6] row-[5_/_6] inline-block scale-0 cursor-default self-center justify-self-center text-[12vw]'
        aria-label='Play'
        data-play
      >
        &#9658;
      </span>
      <span className='line line--vertical col-[3_/_4] row-[6_/_7] font-semibold no-underline'>
        <div className='credits--site-inner oh'></div>
      </span>
      <div className='col-[1_/_2] row-[6_/_7] flex items-center justify-center overflow-hidden'>
        <div
          data-op
          className='opacity-0'
        >
          2023
        </div>
      </div>
      <span className='line line--horizontal col-[4_/_5] row-[6_/_7]'>
        <div
          data-op
          className='inline-block overflow-hidden opacity-0'
        ></div>
      </span>
      <span className='line line--horizontal col-[5_/_6] row-[6_/_7]'>
        <ul
          data-op
          className='flex h-full w-full flex-row items-center justify-evenly gap-3 self-center justify-self-center text-lg opacity-0'
        >
          <li>Github</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
        </ul>
      </span>
    </main>
  );
}
