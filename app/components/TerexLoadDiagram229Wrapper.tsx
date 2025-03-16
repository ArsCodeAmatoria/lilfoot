'use client';

import dynamic from 'next/dynamic';

// Dynamically import the chart component to avoid SSR issues with Chart.js
const TerexLoadDiagram229Chart = dynamic(
  () => import('./TerexLoadDiagram229Chart'),
  { ssr: false }
);

export default function TerexLoadDiagram229Wrapper() {
  return <TerexLoadDiagram229Chart />;
} 