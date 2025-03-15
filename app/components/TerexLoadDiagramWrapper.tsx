'use client';

import dynamic from 'next/dynamic';

// Dynamically import the chart component to avoid SSR issues with Chart.js
const TerexLoadDiagramChart = dynamic(
  () => import('./TerexLoadDiagramChart'),
  { ssr: false }
);

export default function TerexLoadDiagramWrapper() {
  return <TerexLoadDiagramChart />;
} 