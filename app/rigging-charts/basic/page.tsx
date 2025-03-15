import React from 'react';
import { Info } from 'lucide-react';
import WireRopeSlingTableWrapper from '#/app/components/WireRopeSlingTableWrapper';
import NylonWebSlingTableWrapper from '#/app/components/NylonWebSlingTableWrapper';
import ChainSlingTableWrapper from '#/app/components/ChainSlingTableWrapper';
import ReductionFactorTableWrapper from '#/app/components/ReductionFactorTableWrapper';

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
          This page provides essential rigging charts, load calculations,
          and guidelines for fundamental rigging operations. Perfect for
          beginners and as a refresher for experienced professionals.
        </p>
      </div>

      {/* Wire Rope Slings Table Section */}
      <div className="mb-10 p-6 bg-gray-950 rounded-lg border border-gray-800">
        <WireRopeSlingTableWrapper />
      </div>

      {/* Nylon Web Slings Table Section */}
      <div className="mb-10 p-6 bg-gray-950 rounded-lg border border-gray-800">
        <NylonWebSlingTableWrapper />
      </div>

      {/* Chain Slings Table Section */}
      <div className="mb-10 p-6 bg-gray-950 rounded-lg border border-gray-800">
        <ChainSlingTableWrapper />
      </div>

      {/* Reduction Factor & Tension Factor Table Section */}
      <div className="mb-10 p-6 bg-gray-950 rounded-lg border border-gray-800">
        <ReductionFactorTableWrapper />
      </div>

      {/* What to Expect and Key Topics sections */}
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

      {/* Information Notice */}
      <div className="mt-8 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
        <div className="flex items-start gap-3">
          <Info className="text-highlight mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-white mb-2">Safety Notice</h3>
            <p className="text-gray-400 text-sm">
              The working load limits provided on this page are for reference only. Always refer to manufacturer specifications
              and conduct proper inspections before using any rigging equipment. These values assume new, undamaged equipment
              used under normal service conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
