'use client';

import dynamic from 'next/dynamic';

// Dynamically import the chart component to avoid SSR issues with Chart.js
const CraneLoadDiagram131Chart = dynamic(
  () => import('./CraneLoadDiagram131Chart'),
  { ssr: false }
);

export default function CraneLoadDiagram131Wrapper() {
  return <CraneLoadDiagram131Chart />;
} 