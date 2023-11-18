'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

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
        .fromTo(
          'body',
          { '--horizontal-transform': 'translateX(-100%)' },
          {
            duration: 2,
            '--horizontal-transform': 'translateX(-34%)',
            stagger: 0.1,
          }
        )
        .fromTo(
          'body',
          { '--vertical-transform': 'translateY(-100%)' },
          {
            duration: 2,
            '--vertical-transform': 'translateY(-30%)',
            stagger: 0.1,
          },
          '<'
        )
        .to(
          '[data-title], [data-subtitle]',
          {
            duration: 2,
            xPercent: 100,
            stagger: 0.1,
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
          },
          '<'
        );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main className='grid h-screen grid-cols-[8rem_12vh_9rem_1fr_1fr] grid-rows-[4rem_4rem_min-content_min-content_1fr_2.5rem] overflow-hidden p-0 text-left text-sm'>
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
        className='line line--vertical relative col-[4_/_5] row-[1_/_2] m-0 px-[0] py-4 text-[1rem] font-semibold'
      >
        {/* Welcome to. . . */}
      </h2>
      {/* <nav
        data-op
        className='line line--horizontal col-[4_/_5] row-[2_/_3] overflow-hidden pt-4'
      >
        Demos
      </nav> */}
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
        className='line line--vertical col-[5_/_6] row-[2_/_3] pt-4 opacity-0'
      ></nav>
      <div className='line line--vertical col-[2_/_3] row-[5_/_6]'>
        <div className='font-dystopian block px-[0] text-[1.5rem] font-bold leading-none'>
          <div className='grid overflow-hidden'>
            <div
              data-menu
              className='font-dystopian block translate-y-[-100%] rotate-180 self-center text-[8vh] font-bold leading-none [writing-mode:vertical-lr]'
            >
              Developer
            </div>
          </div>
        </div>
      </div>
      <div className='line line--horizontal col-[4_/_span_5] row-[3_/_4]'></div>
      <h1 className='font-dystopian col-[4_/_span_5] row-[3_/_4] m-0 grid overflow-hidden text-[11.25vw] font-bold leading-[0.9] [text-indent:-0.9vw]'>
        <div
          data-title
          className='translate-x-[-100%]'
        >
          Insomnia
        </div>
      </h1>
      <div className='col-[5_/_5] row-[4_/_5] overflow-hidden text-[4vw] font-extralight leading-none [text-indent:-0.4vw]'>
        <div
          data-subtitle
          className='translate-x-[-100%]'
        >
          records
        </div>
      </div>
      <p className='line line--horizontal text-[clamp(1rem, 2vh, 3rem)] col-[4_/_5] row-[5_/_6] m-0 text-base'>
        <span
          data-op
          className='block opacity-0'
        >
          The main reliance, however, in the Emmanuel treatment is on faith,
          reinforced first by hetero-suggestion and then by patient and
          persistent auto-suggestion. The man who would be permanently free from
          insomnia must be an optimist. He must have a philosophy of life
          wholesome enough to keep him buoyant, cheerful, and serene amid all
          the changes and the chances of this mortal life.
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
      <span className='line line--horizontal col-[4_/_5] row-[6_/_7]'>
        <div
          data-op
          className='inline-block overflow-hidden opacity-0'
        >
          Joel Gomba
        </div>
      </span>
      <div className='col-[1_/_2] row-[6_/_7] overflow-hidden'>
        <div
          data-op
          className='opacity-0'
        >
          2023
        </div>
      </div>
    </main>
  );
}
