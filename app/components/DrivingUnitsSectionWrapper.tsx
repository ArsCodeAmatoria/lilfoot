'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the DrivingUnitSection component with SSR disabled
const DrivingUnitSection = dynamic(
  () => import('./DrivingUnitSection'),
  { ssr: false }
);

const DrivingUnitsSectionWrapper: React.FC = () => {
  return <DrivingUnitSection />;
};

export default DrivingUnitsSectionWrapper; 