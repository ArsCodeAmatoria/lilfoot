'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the DrivingUnitSection component with SSR disabled
const LiebherrDrivingUnitSection = dynamic(
  () => import('./LiebherrDrivingUnitSection'),
  { ssr: false }
);

const LiebherrDrivingUnitsSectionWrapper: React.FC = () => {
  return <LiebherrDrivingUnitSection />;
};

export default LiebherrDrivingUnitsSectionWrapper; 