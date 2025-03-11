'use client';

import React from 'react';

// Detailed crane specifications including load chart data
const craneSpecs = {
  model: 'Liebherr LTM 1090-4.2',
  manufacturer: 'Liebherr',
  type: 'All Terrain Mobile Crane',
  year: 2022,
  technical: {
    maxCapacity: 90, // tons
    boomLength: 60, // meters
    maxRadius: 50, // meters
    counterweight: 22.5, // tons
    enginePower: 450, // hp
    maxSpeed: 80, // km/h
    driveConfiguration: '8x6x8', // axles x driven x steered
    dimensions: {
      length: 13.3, // meters
      width: 2.75, // meters
      height: 4, // meters
    },
    weight: 48, // tons
    fuelCapacity: 600, // liters
    hydraulicSystem: 'Load-sensing',
    suspension: 'Hydropneumatic',
  },
  features: [
    'Telematic system for remote monitoring',
    'Automatic counterweight recognition',
    'ECO mode for reduced fuel consumption',
    'Variable outrigger positions',
    'Integrated wind speed indicator',
    'Active rear-axle steering',
  ],
  capacityChart: [
    { radiusM: 3, mainBoomT: 90, jibbedT: 'N/A' },
    { radiusM: 5, mainBoomT: 65, jibbedT: 35 },
    { radiusM: 10, mainBoomT: 32, jibbedT: 20 },
    { radiusM: 15, mainBoomT: 20, jibbedT: 15 },
    { radiusM: 20, mainBoomT: 14, jibbedT: 10 },
    { radiusM: 25, mainBoomT: 10, jibbedT: 7 },
    { radiusM: 30, mainBoomT: 7.5, jibbedT: 5 },
    { radiusM: 35, mainBoomT: 5.5, jibbedT: 3.5 },
    { radiusM: 40, mainBoomT: 4, jibbedT: 2.5 },
    { radiusM: 45, mainBoomT: 3, jibbedT: 1.8 },
    { radiusM: 50, mainBoomT: 2, jibbedT: 1 },
  ],
};

interface CraneSpecsTableProps {
  highlightColor?: string;
}

const CraneSpecsTable: React.FC<CraneSpecsTableProps> = ({
  highlightColor = '#53C03F',
}) => {
  return (
    <div className="overflow-hidden rounded-lg bg-black shadow-lg">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900 p-4">
        <h2 className="text-2xl font-bold text-white">{craneSpecs.model}</h2>
        <p className="text-gray-400">
          {craneSpecs.manufacturer} | {craneSpecs.type}
        </p>
      </div>

      {/* Technical specifications */}
      <div className="p-4">
        <h3 className="mb-3 text-xl font-semibold text-white">
          Technical Specifications
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded bg-gray-900 p-3">
            <p className="text-gray-400">Max Capacity</p>
            <p className="text-lg text-white">
              {craneSpecs.technical.maxCapacity} tons
            </p>
          </div>
          <div className="rounded bg-gray-900 p-3">
            <p className="text-gray-400">Max Boom Length</p>
            <p className="text-lg text-white">
              {craneSpecs.technical.boomLength} m
            </p>
          </div>
          <div className="rounded bg-gray-900 p-3">
            <p className="text-gray-400">Max Operating Radius</p>
            <p className="text-lg text-white">
              {craneSpecs.technical.maxRadius} m
            </p>
          </div>
          <div className="rounded bg-gray-900 p-3">
            <p className="text-gray-400">Engine Power</p>
            <p className="text-lg text-white">
              {craneSpecs.technical.enginePower} hp
            </p>
          </div>
          <div className="rounded bg-gray-900 p-3">
            <p className="text-gray-400">Total Weight</p>
            <p className="text-lg text-white">
              {craneSpecs.technical.weight} tons
            </p>
          </div>
          <div className="rounded bg-gray-900 p-3">
            <p className="text-gray-400">Counterweight</p>
            <p className="text-lg text-white">
              {craneSpecs.technical.counterweight} tons
            </p>
          </div>
          <div className="rounded bg-gray-900 p-3">
            <p className="text-gray-400">Max Speed</p>
            <p className="text-lg text-white">
              {craneSpecs.technical.maxSpeed} km/h
            </p>
          </div>
          <div className="rounded bg-gray-900 p-3">
            <p className="text-gray-400">Drive Configuration</p>
            <p className="text-lg text-white">
              {craneSpecs.technical.driveConfiguration}
            </p>
          </div>
          <div className="rounded bg-gray-900 p-3">
            <p className="text-gray-400">Fuel Capacity</p>
            <p className="text-lg text-white">
              {craneSpecs.technical.fuelCapacity} liters
            </p>
          </div>
        </div>
      </div>

      {/* Dimensions */}
      <div className="border-t border-gray-800 p-4">
        <h3 className="mb-3 text-xl font-semibold text-white">Dimensions</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded bg-gray-900 p-3">
            <p className="text-gray-400">Length</p>
            <p className="text-lg text-white">
              {craneSpecs.technical.dimensions.length} m
            </p>
          </div>
          <div className="rounded bg-gray-900 p-3">
            <p className="text-gray-400">Width</p>
            <p className="text-lg text-white">
              {craneSpecs.technical.dimensions.width} m
            </p>
          </div>
          <div className="rounded bg-gray-900 p-3">
            <p className="text-gray-400">Height</p>
            <p className="text-lg text-white">
              {craneSpecs.technical.dimensions.height} m
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="border-t border-gray-800 p-4">
        <h3 className="mb-3 text-xl font-semibold text-white">Key Features</h3>
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {craneSpecs.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span
                className="mr-2 mt-1 inline-block h-4 w-4 rounded-full"
                style={{ backgroundColor: highlightColor }}
              ></span>
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Load Chart */}
      <div className="border-t border-gray-800 p-4">
        <h3 className="mb-3 text-xl font-semibold text-white">
          Capacity Chart
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-900">
                <th className="px-4 py-2 font-semibold text-gray-300">
                  Radius (m)
                </th>
                <th className="px-4 py-2 font-semibold text-gray-300">
                  Main Boom (tons)
                </th>
                <th className="px-4 py-2 font-semibold text-gray-300">
                  With Jib (tons)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {craneSpecs.capacityChart.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-gray-900/30' : ''}
                >
                  <td className="px-4 py-2 text-white">{row.radiusM}</td>
                  <td className="px-4 py-2 text-white">{row.mainBoomT}</td>
                  <td className="px-4 py-2 text-white">{row.jibbedT}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Source note */}
      <div className="border-t border-gray-800 p-4 text-sm text-gray-500">
        <p>
          Data source: Specifications based on manufacturer data. Actual
          performance may vary based on configuration and conditions.
        </p>
        <p>
          For more information:{' '}
          <a
            href="https://cranemarket.com/specification-11879"
            className="text-highlight hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: highlightColor }}
          >
            cranemarket.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default CraneSpecsTable;
