import React from 'react';
import { Timer, Construction } from 'lucide-react';

export const metadata = {
  title: 'Advanced Rigging Charts | Rigging Charts | lilfoot',
  description:
    'Advanced rigging charts, calculations, and specifications for complex lifting operations.',
};

export default function AdvancedRiggingChartsPage() {
  return (
    <div className="text-white">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-white">
          Advanced Rigging Charts
        </h1>
        <p className="max-w-3xl text-gray-400">
          This page will provide specialized rigging charts, complex load
          calculations, and detailed guidelines for advanced rigging operations.
          Designed for experienced riggers handling challenging lifting
          scenarios.
        </p>
      </div>

      <div className="mb-8 flex flex-col items-center justify-center rounded-lg bg-gray-900 p-8">
        <div className="mb-6 rounded-full bg-gray-950 p-6">
          <Construction size={80} className="text-highlight" />
        </div>
        <h2 className="mb-4 text-center text-2xl font-bold">Coming Soon</h2>
        <p className="max-w-xl text-center text-gray-400">
          We're currently developing comprehensive content for Advanced Rigging
          Charts. Our team is working to provide accurate and detailed
          information to help you plan and execute complex lifting operations
          safely.
        </p>
        <div className="mt-6 flex items-center text-gray-500">
          <Timer size={20} className="mr-2" />
          <span>Estimated completion: Q3 2025</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-gray-900 p-6">
          <h3 className="mb-4 text-xl font-bold">What to Expect</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Complex multi-point lifting charts
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Advanced load distribution calculations
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Specialized hardware specifications
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Interactive 3D modeling tools
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-gray-900 p-6">
          <h3 className="mb-4 text-xl font-bold">Key Topics</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Tandem lift planning and calculations
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Dynamic load factors and considerations
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Offset center of gravity compensation
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Critical lift planning methodology
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
