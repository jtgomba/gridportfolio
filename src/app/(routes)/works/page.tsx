'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

import { useStore, StoreState } from '@/hooks/Store';
import locomotive from '@/assets/project_images/locomotive.png';

const Works = () => {
  const started = useStore((state: StoreState) => state.started);

  const tl = useRef(
    gsap.timeline({
      defaults: {
        ease: 'power3.inOut',
      },
    })
  );

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (started === true) {
        tl.current
          .to(
            '[data-title]',
            {
              duration: 2,
              xPercent: 100,
            },
            '-=0.25'
          )
          .to(
            '[data-menu]',
            {
              duration: 1.5,
              yPercent: 100,
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
          .from(
            '[data-play]',
            {
              duration: 1,
              opacity: 0,
            },
            '<'
          )
          .set('[data-title]', {
            css: { transform: 'translate(0px, 0px)' },
          })
          .set('[data-menu]', {
            css: { transform: 'rotate(180deg) skew(360deg, 0deg)' },
          });
      }
    });

    return () => {
      ctx.revert();
    };
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
              Works
            </div>
          </div>
        </div>
      </div>
      <h1 className='m-0 grid overflow-hidden font-dystopian text-[8.25vw] font-bold leading-[0.9] [grid-area:title]'>
        <div
          data-title
          className='translate-x-[-100%]'
        >
          Demo&apos; & Work&apos;s
        </div>
      </h1>
      <div className='overflow-hidden text-[2vw] font-extralight leading-none [grid-area:subtitle] [text-indent:-0.2vw]'>
        <div className='w-[700px] overflow-hidden'>
          <div
            data-op
            className='slider flex w-[2300px] gap-6 opacity-0'
          >
            <div className='slide'>Things I&apos;ve worked on</div>
          </div>
        </div>
      </div>
      <div className='line line--horizontal text-[clamp(1rem, 2vh, 3rem)] m-0 text-xl [grid-area:content]'>
        <div
          data-op
          className='projects absolute block h-full w-full overflow-y-auto overflow-x-hidden opacity-0'
        >
          {Array(12)
            .fill(null)
            .map((e, i) => {
              return (
                <div
                  key={i}
                  className='line line--horizontal-bottom overflow-hidden py-4'
                >
                  <p className='ml-3'>Project {i + 1}</p>
                </div>
              );
            })}
        </div>
      </div>
      <div
        className='h-full w-full bg-neutral-950 [grid-area:play]'
        data-play
      >
        <div className='relative h-full w-full'>
          <Image
            src={locomotive}
            alt={'Locomotive Project Image'}
            fill={true}
            className='p-8'
            sizes='100%'
          />
        </div>
      </div>
    </>
  );
};

export default Works;
