'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the ChainSlingTable component to avoid SSR issues
const ChainSlingTable = dynamic(
  () => import('./ChainSlingTable'),
  { ssr: false }
);

// This is a client component wrapper for the ChainSlingTable component
export default function ChainSlingTableWrapper() {
  return <ChainSlingTable />;
} 