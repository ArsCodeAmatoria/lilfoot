'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the ReductionFactorTable component to avoid SSR issues
const ReductionFactorTable = dynamic(
  () => import('./ReductionFactorTable'),
  { ssr: false }
);

// This is a client component wrapper for the ReductionFactorTable component
export default function ReductionFactorTableWrapper() {
  return <ReductionFactorTable />;
} 