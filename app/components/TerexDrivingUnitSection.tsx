'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '#/components/ui/table';

// Dynamically import the chart component to avoid SSR issues with Chart.js
const SpeedLoadChart = dynamic(
  () => import('./SpeedLoadChart'),
  { ssr: false }
);

const TerexDrivingUnitSection: React.FC = () => {
  return (
    <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-800">
      <h3 className="text-xl font-semibold text-white mb-4">Driving Units Performance</h3>
      <p className="text-gray-400 mb-6">
        The Terex SK 415-20 is available with different frequency-controlled hoist gear options, 
        providing various speed and lifting capacity combinations to suit different project requirements.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* 45 kW FU Driving Unit */}
        <div className="space-y-4 bg-gray-900/30 p-4 rounded-lg border border-gray-800">
          <h4 className="text-lg font-semibold text-highlight">45 kW FU Driving Unit</h4>
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="bg-gray-900">
                  <TableHead className="text-gray-400 font-medium border border-gray-800">Power</TableHead>
                  <TableHead className="text-gray-400 font-medium border border-gray-800">Max kVA</TableHead>
                  <TableHead className="text-gray-400 font-medium border border-gray-800">Max Layers</TableHead>
                  <TableHead className="text-gray-400 font-medium border border-gray-800">Speed (m/min)</TableHead>
                  <TableHead className="text-gray-400 font-medium border border-gray-800">Load Capacity (t)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b border-gray-800">
                  <TableCell rowSpan={2} className="font-medium border border-gray-800">45 kW FU</TableCell>
                  <TableCell rowSpan={2} className="border border-gray-800">65.0 kVA</TableCell>
                  <TableCell rowSpan={2} className="border border-gray-800">8 Layers</TableCell>
                  <TableCell className="border border-gray-800">0 - 25</TableCell>
                  <TableCell className="border border-gray-800">20.00 t</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800">0 - 90</TableCell>
                  <TableCell className="border border-gray-800">5.50 t</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <SpeedLoadChart unitType="45kW" />
        </div>
        
        {/* 60 kW FU Driving Unit */}
        <div className="space-y-4 bg-gray-900/30 p-4 rounded-lg border border-gray-800">
          <h4 className="text-lg font-semibold text-highlight">60 kW FU Driving Unit</h4>
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="bg-gray-900">
                  <TableHead className="text-gray-400 font-medium border border-gray-800">Power</TableHead>
                  <TableHead className="text-gray-400 font-medium border border-gray-800">Max kVA</TableHead>
                  <TableHead className="text-gray-400 font-medium border border-gray-800">Max Layers</TableHead>
                  <TableHead className="text-gray-400 font-medium border border-gray-800">Speed (m/min)</TableHead>
                  <TableHead className="text-gray-400 font-medium border border-gray-800">Load Capacity (t)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b border-gray-800">
                  <TableCell rowSpan={2} className="font-medium border border-gray-800">60 kW FU</TableCell>
                  <TableCell rowSpan={2} className="border border-gray-800">85.0 kVA</TableCell>
                  <TableCell rowSpan={2} className="border border-gray-800">8 Layers</TableCell>
                  <TableCell className="border border-gray-800">0 - 30</TableCell>
                  <TableCell className="border border-gray-800">20.00 t</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800">0 - 115</TableCell>
                  <TableCell className="border border-gray-800">6.50 t</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <SpeedLoadChart unitType="60kW" />
        </div>
      </div>
      
      {/* Additional Driving Units */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-highlight mb-3">Additional Driving Unit Options</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
            <h5 className="text-base font-medium text-highlight mb-2">30 kW FU Driving Unit</h5>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Max Power: 30 kW</li>
              <li>• Max Speed: 75 m/min</li>
              <li>• Max Capacity: 15.00 t</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
            <h5 className="text-base font-medium text-highlight mb-2">75 kW FU Driving Unit</h5>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Max Power: 75 kW</li>
              <li>• Max Speed: 130 m/min</li>
              <li>• Max Capacity: 20.00 t</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
            <h5 className="text-base font-medium text-highlight mb-2">90 kW FU Driving Unit</h5>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Max Power: 90 kW</li>
              <li>• Max Speed: 150 m/min</li>
              <li>• Max Capacity: 20.00 t</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerexDrivingUnitSection; 