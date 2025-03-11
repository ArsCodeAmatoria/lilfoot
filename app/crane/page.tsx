import React from 'react';
import CraneChart from '../components/CraneChart';
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
          This interactive chart displays the lifting capacity of the Liebherr
          LTM 1090-4.2 mobile crane at different radii. The data is based on
          specifications from cranemarket.com.
        </p>
      </div>

      {/* Line Chart */}
      <div className="mb-8">
        <CraneChart
          chartType="line"
          title="Lifting Capacity vs. Radius (Line Chart)"
          highlightColor="#53C03F"
        />
      </div>

      {/* Bar Chart */}
      <div>
        <CraneChart
          chartType="bar"
          title="Lifting Capacity vs. Radius (Bar Chart)"
          highlightColor="#53C03F"
        />
      </div>

      <div className="mt-8 rounded-lg bg-gray-900 p-4">
        <h2 className="mb-2 text-xl font-bold text-white">About This Data</h2>
        <p className="text-gray-400">
          The data displayed in these charts represents the lifting capacity of
          a mobile crane at different operating radii. As the radius increases
          (the distance from the center of rotation to the load), the lifting
          capacity decreases. This relationship is critical for crane operators
          to understand when planning lifts.
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
