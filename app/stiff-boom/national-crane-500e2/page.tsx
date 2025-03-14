import React from 'react';
import { Timer, Construction } from 'lucide-react';

export const metadata = {
  title: 'National Crane 500E2 Specifications | Stiff Boom Cranes | lilfoot',
  description:
    'Load charts and specifications for the National Crane 500E2 stiff boom crane.',
};

export default function NationalCrane500E2Page() {
  return (
    <div className="text-white">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-white">
          National Crane 500E2 Stiff Boom Crane
        </h1>
        <p className="max-w-3xl text-gray-400">
          The National Crane 500E2 is a versatile stiff boom crane designed for
          excellent reach and lifting capacity in a compact package. This page
          will provide comprehensive specifications, load charts, and
          operational guidelines for crane operators.
        </p>
      </div>

      <div className="mb-8 flex flex-col items-center justify-center rounded-lg bg-gray-900 p-8">
        <div className="mb-6 rounded-full bg-gray-950 p-6">
          <Construction size={80} className="text-highlight" />
        </div>
        <h2 className="mb-4 text-center text-2xl font-bold">Coming Soon</h2>
        <p className="max-w-xl text-center text-gray-400">
          We're currently developing comprehensive content for the National
          Crane 500E2 stiff boom crane. Our team is working to provide accurate
          and detailed specifications and load charts.
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
              Detailed technical specifications
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Load charts for various configurations
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Working radius information
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Interactive visualization tools
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-gray-900 p-6">
          <h3 className="mb-4 text-xl font-bold">Key Features</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              12-ton (10.9 mt) maximum capacity
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              65 ft (19.8 m) maximum vertical reach
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Four-section boom with power extension
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Smooth, precise proportional control system
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
