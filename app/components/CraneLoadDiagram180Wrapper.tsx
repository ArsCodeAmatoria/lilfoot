'use client';

import dynamic from 'next/dynamic';

// Dynamically import the chart component to avoid SSR issues with Chart.js
const CraneLoadDiagram180Chart = dynamic(
  () => import('./CraneLoadDiagram180Chart'),
  { ssr: false }
);

export default function CraneLoadDiagram180Wrapper() {
  return <CraneLoadDiagram180Chart />;
} 