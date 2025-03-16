'use client';

import dynamic from 'next/dynamic';

// Dynamically import the chart component to avoid SSR issues with Chart.js
const CraneLoadDiagram164Chart = dynamic(
  () => import('./CraneLoadDiagram164Chart'),
  { ssr: false }
);

export default function CraneLoadDiagram164Wrapper() {
  return <CraneLoadDiagram164Chart />;
} 