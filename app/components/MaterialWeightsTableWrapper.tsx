'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the MaterialWeightsTable component to avoid SSR issues
const MaterialWeightsTable = dynamic(
  () => import('./MaterialWeightsTable'),
  { ssr: false }
);

// This is a client component wrapper for the MaterialWeightsTable component
export default function MaterialWeightsTableWrapper() {
  return <MaterialWeightsTable />;
} 