import type { Metadata } from 'next';
import '@/styles/globals.css';
import GridLayout from '@/components/GridLayout';
import Scene from '@/components/Scene';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Joel Gomba',
  description: 'A full stack web developer.',
};

const termina = localFont({
  src: [
    {
      path: '../styles/fonts/termina/termina-200.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../styles/fonts/termina/termina-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../styles/fonts/termina/termina-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../styles/fonts/termina/termina-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-termina',
  fallback: ['sans-serif'],
});

const dystopian = localFont({
  src: '../styles/fonts/dystopian/dystopian-700.woff2',
  display: 'swap',
  variable: '--font-dystopian',
  fallback: ['sans-serif'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${termina.variable} ${dystopian.variable}`}
    >
      <body className='font-termina'>
        <GridLayout>{children}</GridLayout>
        <Scene />
      </body>
    </html>
  );
}
