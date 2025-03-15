'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the WireRopeSlingTable component to avoid SSR issues
const WireRopeSlingTable = dynamic(
  () => import('./WireRopeSlingTable'),
  { ssr: false }
);

// This is a client component wrapper for the WireRopeSlingTable component
export default function WireRopeSlingTableWrapper() {
  return <WireRopeSlingTable />;
} 