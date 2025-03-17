'use client';

import dynamic from 'next/dynamic';

// Dynamically import the chart component to avoid SSR issues with Chart.js
const CraneLoadDiagram114Chart = dynamic(
  () => import('./CraneLoadDiagram114Chart'),
  { ssr: false }
);

export default function CraneLoadDiagram114Wrapper() {
  return <CraneLoadDiagram114Chart />;
} 