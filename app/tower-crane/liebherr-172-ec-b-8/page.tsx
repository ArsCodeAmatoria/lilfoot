import React from 'react';
import { Timer, Construction } from 'lucide-react';

export const metadata = {
  title: 'Liebherr 172 EC-B 8 Specifications | Tower Cranes | lilfoot',
  description:
    'Load charts and specifications for the Liebherr 172 EC-B 8 tower crane.',
};

export default function Liebherr172ECB8Page() {
  return (
    <div className="text-white">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-white">
          Liebherr 172 EC-B 8 Tower Crane
        </h1>
        <p className="max-w-3xl text-gray-400">
          The Liebherr 172 EC-B 8 is a high-capacity flat-top tower crane ideal
          for heavy lifting in commercial and industrial construction. This page
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
          We're currently developing comprehensive content for the Liebherr 172
          EC-B 8 tower crane. Our team is working to provide accurate and
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
              8-tonne maximum lifting capacity
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              172 meter-tonne capacity rating
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              LITRONIC control system for precise operation
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Extended jib length options for maximum reach
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
