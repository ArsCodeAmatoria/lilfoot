'use client';

import dynamic from 'next/dynamic';

// Dynamically import the chart component to avoid SSR issues with Chart.js
const CraneLoadDiagram196Chart = dynamic(
  () => import('./CraneLoadDiagram196Chart'),
  { ssr: false }
);

export default function CraneLoadDiagram196Wrapper() {
  return <CraneLoadDiagram196Chart />;
} 