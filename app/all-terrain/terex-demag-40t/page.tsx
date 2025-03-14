import React from 'react';
import { Timer, Construction } from 'lucide-react';

export const metadata = {
  title: '40t Terex Demag Specifications | All Terrain Cranes | lilfoot',
  description:
    'Load charts and specifications for the 40t Terex Demag all terrain crane.',
};

export default function TerexDemag40tPage() {
  return (
    <div className="text-white">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-white">
          40t Terex Demag All Terrain Crane
        </h1>
        <p className="max-w-3xl text-gray-400">
          The 40t Terex Demag is a compact yet powerful all terrain crane
          designed for versatility and excellent maneuverability in both on-road
          transport and off-road lifting operations. This page will provide
          comprehensive specifications, load charts, and operational guidelines
          for crane operators.
        </p>
      </div>

      <div className="mb-8 flex flex-col items-center justify-center rounded-lg bg-gray-900 p-8">
        <div className="mb-6 rounded-full bg-gray-950 p-6">
          <Construction size={80} className="text-highlight" />
        </div>
        <h2 className="mb-4 text-center text-2xl font-bold">Coming Soon</h2>
        <p className="max-w-xl text-center text-gray-400">
          We're currently developing comprehensive content for the 40t Terex
          Demag all terrain crane. Our team is working to provide accurate and
          detailed specifications and load charts.
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
              40-tonne (44 US ton) maximum lifting capacity
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Telescoping boom with multi-section design
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              All-wheel steering for superior maneuverability
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Compact chassis design for urban job sites
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
