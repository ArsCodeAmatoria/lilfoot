import React from 'react';
import { Info } from 'lucide-react';
import MaterialWeightsTableWrapper from '#/app/components/MaterialWeightsTableWrapper';
import SteelPipeWeightsTableWrapper from '#/app/components/SteelPipeWeightsTableWrapper';

export const metadata = {
  title: 'Weights of Common Materials | Math | lilfoot',
  description:
    'Reference tables for weights of common construction materials and steel pipe weights',
};

export default function WeightsOfMaterialsPage() {
  return (
    <div className="text-white">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-white">
          Weights of Common Materials
        </h1>
        <p className="max-w-3xl text-gray-400">
          These reference tables provide weights for common construction materials
          and steel pipes to assist with load calculations and material planning.
        </p>
      </div>

      {/* Material Weights Table Section */}
      <div className="mb-10 p-6 bg-gray-950 rounded-lg border border-gray-800">
        <MaterialWeightsTableWrapper />
      </div>

      {/* Steel Pipe Weights Table Section */}
      <div className="mb-10 p-6 bg-gray-950 rounded-lg border border-gray-800">
        <SteelPipeWeightsTableWrapper />
      </div>

      {/* Explanation of Units */}
      <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
        <div className="flex items-start gap-3">
          <Info className="text-highlight mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-white mb-2">Units Abbreviations</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex gap-2 items-center">
                <span className="font-mono bg-gray-800 px-2 py-1 rounded text-highlight">LF</span>
                <span>Linear Foot</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="font-mono bg-gray-800 px-2 py-1 rounded text-highlight">ft²</span>
                <span>Square Foot</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="font-mono bg-gray-800 px-2 py-1 rounded text-highlight">ft³</span>
                <span>Cubic Foot</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="font-mono bg-gray-800 px-2 py-1 rounded text-highlight">yd³</span>
                <span>Cubic Yard</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="font-mono bg-gray-800 px-2 py-1 rounded text-highlight">lb</span>
                <span>Pound</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 