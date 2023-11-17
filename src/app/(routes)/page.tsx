export default function Home() {
  return (
    <main className='grid h-screen grid-cols-[8rem_12vh_9rem_1fr_1fr] grid-rows-[4rem_4rem_min-content_min-content_1fr_2.5rem] overflow-hidden p-0 text-left text-sm'>
      <a
        className='col-[1_/_2] row-[1_/_span_2] inline-block self-center justify-self-center text-[3rem] font-bold no-underline'
        aria-label='Wave logo homepage'
      >
        ~
      </a>
      <h2 className='line line--vertical relative col-[4_/_5] row-[1_/_2] m-0 px-[0] py-4 text-[1rem] font-semibold'>
        Welcome to. . .
      </h2>
      <nav className='line line--horizontal col-[4_/_5] row-[2_/_3] overflow-hidden pt-4'>
        Demos
      </nav>
      <nav className='line line--horizontal col-[5_/_6] row-[2_/_3] overflow-hidden pt-4'></nav>
      <nav className='line line--vertical col-[5_/_6] row-[2_/_3] pt-4'>
        Links
      </nav>
      <div className='line line--vertical col-[2_/_3] row-[5_/_6]'>
        <div className='font-dystopian block px-[0] text-[1.5rem] font-bold leading-none'>
          <div className='overflow-hidden'>
            <div className='font-dystopian block rotate-180 text-[12vh] font-bold leading-none [writing-mode:vertical-lr]'>
              Menu
            </div>
          </div>
        </div>
      </div>
      <h1 className='font-dystopian line line--horizontal col-[4_/_span_5] row-[3_/_4] m-0 grid overflow-hidden text-[11.25vw] font-bold leading-[0.9] [text-indent:-0.9vw]'>
        <div>Insomnia</div>
      </h1>
      <div className='col-[5_/_5] row-[4_/_5] overflow-hidden text-[4vw] font-extralight leading-none [text-indent:-0.4vw]'>
        <div>records</div>
      </div>
      <p className='line line--horizontal text-[clamp(1rem, 2vh, 3rem)] col-[4_/_5] row-[5_/_6] m-0 text-[1.15rem]'>
        <span className='block'>
          The main reliance, however, in the Emmanuel treatment is on faith,
          reinforced first by hetero-suggestion and then by patient and
          persistent auto-suggestion. The man who would be permanently free from
          insomnia must be an optimist. He must have a philosophy of life
          wholesome enough to keep him buoyant, cheerful, and serene amid all
          the changes and the chances of this mortal life.
        </span>
      </p>
      <span
        className='col-[5_/_6] row-[5_/_6] inline-block cursor-default self-center justify-self-center text-[12vw]'
        aria-label='Play'
      >
        &#9658;
      </span>
      <span className='line line--vertical col-[3_/_4] row-[6_/_7] font-semibold no-underline'>
        <div className='credits--site-inner oh'></div>
      </span>
      <span className='line line--horizontal col-[4_/_5] row-[6_/_7]'>
        <div className='inline-block overflow-hidden'>Joel Gomba</div>
      </span>
      <div className='col-[1_/_2] row-[6_/_7] overflow-hidden'>
        <div>2023</div>
      </div>
    </main>
  );
}
