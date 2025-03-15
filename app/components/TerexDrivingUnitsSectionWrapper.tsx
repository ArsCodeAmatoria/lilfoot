'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the DrivingUnitSection component with SSR disabled
const TerexDrivingUnitSection = dynamic(
  () => import('./TerexDrivingUnitSection'),
  { ssr: false }
);

const TerexDrivingUnitsSectionWrapper: React.FC = () => {
  return <TerexDrivingUnitSection />;
};

export default TerexDrivingUnitsSectionWrapper; 