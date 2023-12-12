'use client';

import { useStore, StoreState } from '@/hooks/Store';
import dynamic from 'next/dynamic';
const Scene = dynamic(() => import('./BaseScene'));

const LazyScene = () => {
  const { started } = useStore((state: StoreState) => state);
  return <>{started && <Scene />}</>;
};

export default LazyScene;
