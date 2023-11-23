'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

import { useStore, StoreState } from '@/hooks/Store';

const GridLayout = ({ children }: { children: React.ReactNode }) => {
  const { setStart } = useStore((state: StoreState) => state);

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
          onComplete: () => {
            setStart();
          },
        });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main className='main-layout'>
      <Link
        className='inline-block self-center justify-self-center text-[3rem] font-bold no-underline opacity-0 [grid-area:logo]'
        aria-label='Wave logo homepage'
        href='/'
        data-op
      >
        ~
      </Link>
      <h2
        data-op
        className='line line--vertical pointer-events-none relative text-[1rem] font-semibold [grid-area:headtitle]'
      ></h2>
      <nav className='line line--horizontal grid overflow-hidden [grid-area:links]'>
        <ul
          data-op
          className='flex w-full flex-row justify-evenly gap-3 self-center justify-self-center text-lg opacity-0'
        >
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/works'>Works</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <nav
        data-op
        className='line line--vertical pointer-events-none col-[5_/_6] row-[2_/_3] opacity-0'
      ></nav>
      <div
        id='header-underline'
        className='line line--horizontal pointer-events-none col-[4_/_span_5] row-[3_/_4]'
      ></div>
      {children}
      <span className='line line--vertical font-semibold no-underline [grid-area:block]'>
        <div className='credits--site-inner oh'></div>
      </span>
      <div className='flex items-center justify-center overflow-hidden [grid-area:year]'>
        <div
          data-op
          className='opacity-0'
        >
          2023
        </div>
      </div>
      <span className='line line--horizontal [grid-area:undercontent]'>
        <div
          data-op
          className='inline-block overflow-hidden opacity-0'
        ></div>
      </span>
      <span className='line line--horizontal [grid-area:socialmedia]'>
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
};

export default GridLayout;
