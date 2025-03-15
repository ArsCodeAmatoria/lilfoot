'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the SteelPipeWeightsTable component to avoid SSR issues
const SteelPipeWeightsTable = dynamic(
  () => import('./SteelPipeWeightsTable'),
  { ssr: false }
);

// This is a client component wrapper for the SteelPipeWeightsTable component
export default function SteelPipeWeightsTableWrapper() {
  return <SteelPipeWeightsTable />;
} 