import type { Metadata } from 'next';
import '@/styles/globals.css';
import GridLayout from '@/components/GridLayout';
import Scene from '@/components/Scene';

export const metadata: Metadata = {
  title: 'Joel Gomba',
  description: 'A full stack web developer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='font-termina'>
        <GridLayout>{children}</GridLayout>
        <Scene />
      </body>
    </html>
  );
}
