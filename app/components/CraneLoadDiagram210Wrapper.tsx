'use client';

import dynamic from 'next/dynamic';

// Dynamically import the chart component to avoid SSR issues with Chart.js
const CraneLoadDiagram210Chart = dynamic(
  () => import('./CraneLoadDiagram210Chart'),
  { ssr: false }
);

export default function CraneLoadDiagram210Wrapper() {
  return <CraneLoadDiagram210Chart />;
} 