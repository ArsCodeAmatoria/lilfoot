import React from 'react';
import { Timer, Construction } from 'lucide-react';

export const metadata = {
  title: 'Basic Rigging Charts | Rigging Charts | lilfoot',
  description:
    'Basic rigging charts, guidelines, and specifications for common rigging operations.',
};

export default function BasicRiggingChartsPage() {
  return (
    <div className="text-white">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-white">
          Basic Rigging Charts
        </h1>
        <p className="max-w-3xl text-gray-400">
          This page will provide essential rigging charts, load calculations,
          and guidelines for fundamental rigging operations. Perfect for
          beginners and as a refresher for experienced professionals.
        </p>
      </div>

      <div className="mb-8 flex flex-col items-center justify-center rounded-lg bg-gray-900 p-8">
        <div className="mb-6 rounded-full bg-gray-950 p-6">
          <Construction size={80} className="text-highlight" />
        </div>
        <h2 className="mb-4 text-center text-2xl font-bold">Coming Soon</h2>
        <p className="max-w-xl text-center text-gray-400">
          We're currently developing comprehensive content for Basic Rigging
          Charts. Our team is working to provide accurate and detailed
          information to help you conduct safe and efficient lifting operations.
        </p>
        <div className="mt-6 flex items-center text-gray-500">
          <Timer size={20} className="mr-2" />
          <span>Estimated completion: Q2 2025</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-gray-900 p-6">
          <h3 className="mb-4 text-xl font-bold">What to Expect</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Sling angle factor charts
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Basic load calculation guides
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Common hardware specifications
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Interactive calculation tools
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-gray-900 p-6">
          <h3 className="mb-4 text-xl font-bold">Key Topics</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Single and multi-leg sling configurations
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Basic hardware selection guidelines
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Center of gravity calculations
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Standard industry safety factors
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
