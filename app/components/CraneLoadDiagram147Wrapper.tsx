'use client';

import dynamic from 'next/dynamic';

// Dynamically import the chart component to avoid SSR issues with Chart.js
const CraneLoadDiagram147Chart = dynamic(
  () => import('./CraneLoadDiagram147Chart'),
  { ssr: false }
);

export default function CraneLoadDiagram147Wrapper() {
  return <CraneLoadDiagram147Chart />;
} 