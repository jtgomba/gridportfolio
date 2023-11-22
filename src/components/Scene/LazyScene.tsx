import dynamic from 'next/dynamic';
const Scene = dynamic(() => import('./BaseScene'));

const LazyScene = () => {
  return <Scene />;
};

export default LazyScene;
