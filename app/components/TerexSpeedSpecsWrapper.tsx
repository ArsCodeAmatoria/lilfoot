'use client';

import dynamic from 'next/dynamic';

const TerexSpeedSpecs = dynamic(() => import('./TerexSpeedSpecs'), {
  ssr: false,
});

const TerexSpeedSpecsWrapper = () => {
  return <TerexSpeedSpecs />;
};

export default TerexSpeedSpecsWrapper; 