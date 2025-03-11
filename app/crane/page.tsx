import React from 'react';
import CraneChart from '../components/CraneChart';
import CraneSpecsTable from '../components/CraneSpecsTable';
import CraneLoadVisualizer from '../components/CraneLoadVisualizer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crane Specifications | Littlefoot',
  description:
    'Interactive chart displaying crane specifications and lifting capacity data.',
};

export default function CranePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-3xl font-bold text-white">
          Crane Specifications
        </h1>
        <p className="mb-6 text-gray-400">
          This interactive dashboard displays the specifications and performance
          data of the Liebherr LTM 1090-4.2 mobile crane. Explore different
          visualizations to understand how lifting capacity changes with radius.
        </p>
      </div>

      {/* Interactive Crane Visualizer */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-white">
          Interactive Visualizer
        </h2>
        <CraneLoadVisualizer highlightColor="#53C03F" />
      </div>

      {/* Charts Section */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-white">Capacity Charts</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <CraneChart
            chartType="line"
            title="Lifting Capacity vs. Radius (Line)"
            highlightColor="#53C03F"
            showFullData={false}
          />
          <CraneChart
            chartType="bar"
            title="Lifting Capacity vs. Radius (Bar)"
            highlightColor="#53C03F"
            showFullData={false}
          />
        </div>
      </div>

      {/* Additional Charts */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-white">
          Alternative Visualizations
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <CraneChart
            chartType="polar"
            title="Capacity Distribution (Polar Area)"
            highlightColor="#53C03F"
            showFullData={false}
          />
          <CraneChart
            chartType="radar"
            title="Capacity Profile (Radar)"
            highlightColor="#53C03F"
            showFullData={false}
          />
        </div>
      </div>

      {/* Detailed Specifications */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-white">
          Detailed Specifications
        </h2>
        <CraneSpecsTable highlightColor="#53C03F" />
      </div>

      <div className="mt-8 rounded-lg bg-gray-900 p-4">
        <h2 className="mb-2 text-xl font-bold text-white">About This Data</h2>
        <p className="text-gray-400">
          The data displayed in these visualizations represents the
          specifications and performance of a mobile crane at different
          operating radii. As the radius increases (the distance from the center
          of rotation to the load), the lifting capacity decreases. This
          relationship is critical for crane operators to understand when
          planning lifts.
        </p>
        <p className="mt-4 text-gray-400">
          For more detailed specifications and information about this crane
          model, visit{' '}
          <a
            href="https://cranemarket.com/specification-11879"
            target="_blank"
            rel="noopener noreferrer"
            className="text-highlight hover:underline"
          >
            cranemarket.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
