'use client';

import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "#/components/ui/table";

const ReductionFactorTable = () => {
  // Reduction Factor & Tension Factor data
  const factorData = [
    { reductionFactor: "1.000", angle: "90°", tensionFactor: "1.000" },
    { reductionFactor: "0.996", angle: "85°", tensionFactor: "1.004" },
    { reductionFactor: "0.985", angle: "80°", tensionFactor: "1.015" },
    { reductionFactor: "0.966", angle: "75°", tensionFactor: "1.035" },
    { reductionFactor: "0.940", angle: "70°", tensionFactor: "1.064" },
    { reductionFactor: "0.906", angle: "65°", tensionFactor: "1.104" },
    { reductionFactor: "0.866", angle: "60°", tensionFactor: "1.155" },
    { reductionFactor: "0.819", angle: "55°", tensionFactor: "1.221" },
    { reductionFactor: "0.766", angle: "50°", tensionFactor: "1.305" },
    { reductionFactor: "0.707", angle: "45°", tensionFactor: "1.414" },
    { reductionFactor: "0.643", angle: "40°", tensionFactor: "1.555" },
    { reductionFactor: "0.574", angle: "35°", tensionFactor: "1.742" },
    { reductionFactor: "0.500", angle: "30°", tensionFactor: "2.000" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white">Reduction Factor & Tension Factor Chart</h2>
      <p className="text-gray-400 mb-4">
        This chart shows the relationship between sling angle, reduction factor, and tension factor.
        As the angle from horizontal decreases, the reduction factor decreases and the tension factor increases.
      </p>
      
      <div className="overflow-x-auto rounded-md">
        <Table className="border-collapse">
          <TableHeader className="bg-gray-900">
            <TableRow>
              <TableHead className="border border-gray-800 w-1/3">Reduction Factor</TableHead>
              <TableHead className="border border-gray-800 w-1/3 text-center">Angle from Horizontal (°)</TableHead>
              <TableHead className="border border-gray-800 w-1/3">Tension Factor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {factorData.map((row, index) => (
              <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-900/30' : ''}>
                <TableCell className="border border-gray-800 font-medium">
                  {row.reductionFactor}
                </TableCell>
                <TableCell className="border border-gray-800 text-center font-medium">
                  {row.angle}
                </TableCell>
                <TableCell className="border border-gray-800 font-medium">
                  {row.tensionFactor}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="text-sm text-gray-400 mt-2">
        <p>
          <strong>Reduction Factor:</strong> Multiply by the Working Load Limit (WLL) to find the reduced capacity at a given angle.
        </p>
        <p>
          <strong>Tension Factor:</strong> Multiply by the load weight to find the tension in each leg of the sling.
        </p>
      </div>
    </div>
  );
};

export default ReductionFactorTable; 