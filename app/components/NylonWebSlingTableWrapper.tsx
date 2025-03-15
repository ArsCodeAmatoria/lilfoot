'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the NylonWebSlingTable component to avoid SSR issues
const NylonWebSlingTable = dynamic(
  () => import('./NylonWebSlingTable'),
  { ssr: false }
);

// This is a client component wrapper for the NylonWebSlingTable component
export default function NylonWebSlingTableWrapper() {
  return <NylonWebSlingTable />;
} 