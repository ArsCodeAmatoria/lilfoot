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

const LiebherrDrivingUnitSection: React.FC = () => {
  return (
    <div className="bg-black p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-white mb-4">Driving Units Performance</h3>
      <p className="text-gray-400 mb-6">
        The Liebherr 125 EC-B 6 is available with different frequency-controlled hoist gear options, 
        providing various speed and lifting capacity combinations to suit different project requirements.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* 18 kW FU Driving Unit */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">18 kW FU Driving Unit</h4>
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="bg-gray-900">
                  <TableHead className="text-gray-400 font-medium">Power</TableHead>
                  <TableHead className="text-gray-400 font-medium">Max kVA</TableHead>
                  <TableHead className="text-gray-400 font-medium">Max Layers</TableHead>
                  <TableHead className="text-gray-400 font-medium">Speed (m/min)</TableHead>
                  <TableHead className="text-gray-400 font-medium">Load Capacity (t)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b border-gray-800">
                  <TableCell rowSpan={2} className="font-medium">18 kW FU</TableCell>
                  <TableCell rowSpan={2}>32.0 kVA</TableCell>
                  <TableCell rowSpan={2}>6 Layers</TableCell>
                  <TableCell>0 - 15</TableCell>
                  <TableCell>6.00 t</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>0 - 86</TableCell>
                  <TableCell>0.38 t</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <SpeedLoadChart unitType="18kW" />
        </div>
        
        {/* 30 kW FU Driving Unit */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">30 kW FU Driving Unit</h4>
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="bg-gray-900">
                  <TableHead className="text-gray-400 font-medium">Power</TableHead>
                  <TableHead className="text-gray-400 font-medium">Max kVA</TableHead>
                  <TableHead className="text-gray-400 font-medium">Max Layers</TableHead>
                  <TableHead className="text-gray-400 font-medium">Speed (m/min)</TableHead>
                  <TableHead className="text-gray-400 font-medium">Load Capacity (t)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b border-gray-800">
                  <TableCell rowSpan={2} className="font-medium">30 kW FU</TableCell>
                  <TableCell rowSpan={2}>41.0 kVA</TableCell>
                  <TableCell rowSpan={2}>6 Layers</TableCell>
                  <TableCell>0 - 26</TableCell>
                  <TableCell>6.00 t</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>0 - 123</TableCell>
                  <TableCell>0.50 t</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <SpeedLoadChart unitType="30kW" />
        </div>
      </div>
      
      {/* Additional Driving Units */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-white mb-3">Additional Driving Unit Options</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-900 p-4 rounded-lg">
            <h5 className="text-base font-medium text-white mb-2">7.5 kW FU Driving Unit</h5>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Max Power: 7.5 kW</li>
              <li>• Max Speed: 60 m/min</li>
              <li>• Max Capacity: 6.00 t</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg">
            <h5 className="text-base font-medium text-white mb-2">5.5 kW FU Driving Unit</h5>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Max Power: 5.5 kW</li>
              <li>• Max Speed: 48 m/min</li>
              <li>• Max Capacity: 6.00 t</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg">
            <h5 className="text-base font-medium text-white mb-2">15 kW FU Driving Unit</h5>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Max Power: 15 kW</li>
              <li>• Max Speed: 75 m/min</li>
              <li>• Max Capacity: 6.00 t</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiebherrDrivingUnitSection; 