'use client';

import React, { useState } from 'react';

// Liebherr 81k Self-Erect Crane data
const craneData = {
  model: 'Liebherr 81k Self-Erecting Crane',
  specifications: {
    maxCapacity: 6, // tons
    maxRadius: 45, // meters
    maxHookHeight: 40.4, // meters
    jibLength: 45, // meters
    counterweight: 40, // tons
    transportDimensions: {
      length: 15.3, // meters
      width: 2.5, // meters
      height: 3.9, // meters
    },
    setupTime: 20, // minutes (approximate)
    power: '400V, 32A',
  },
  loadCharts: {
    // Load-Plus LM 1 configuration (standard jib)
    loadPlusLM1: [
      { radius: 2.8, capacity: 6000 }, // kg
      { radius: 3.3, capacity: 6000 },
      { radius: 4.0, capacity: 6000 },
      { radius: 5.0, capacity: 6000 },
      { radius: 6.0, capacity: 6000 },
      { radius: 7.0, capacity: 6000 },
      { radius: 8.0, capacity: 6000 },
      { radius: 9.0, capacity: 5800 },
      { radius: 10.0, capacity: 5300 },
      { radius: 12.0, capacity: 4400 },
      { radius: 14.0, capacity: 3700 },
      { radius: 16.0, capacity: 3200 },
      { radius: 18.0, capacity: 2800 },
      { radius: 20.0, capacity: 2500 },
      { radius: 22.0, capacity: 2200 },
      { radius: 24.0, capacity: 2000 },
      { radius: 26.0, capacity: 1800 },
      { radius: 28.0, capacity: 1650 },
      { radius: 30.0, capacity: 1500 },
      { radius: 32.0, capacity: 1350 },
      { radius: 34.0, capacity: 1250 },
      { radius: 36.0, capacity: 1100 },
      { radius: 38.0, capacity: 1000 },
      { radius: 40.0, capacity: 900 },
      { radius: 42.0, capacity: 800 },
      { radius: 45.0, capacity: 650 },
    ],
    // 30 degree jib configuration
    '30Degree': [
      { radius: 2.8, capacity: 4200 }, // kg
      { radius: 3.3, capacity: 4200 },
      { radius: 4.0, capacity: 4200 },
      { radius: 5.0, capacity: 4200 },
      { radius: 6.0, capacity: 4200 },
      { radius: 7.0, capacity: 4200 },
      { radius: 8.0, capacity: 4200 },
      { radius: 9.0, capacity: 4000 },
      { radius: 10.0, capacity: 3700 },
      { radius: 12.0, capacity: 3100 },
      { radius: 14.0, capacity: 2600 },
      { radius: 16.0, capacity: 2200 },
      { radius: 18.0, capacity: 2000 },
      { radius: 20.0, capacity: 1800 },
      { radius: 22.0, capacity: 1600 },
      { radius: 24.0, capacity: 1400 },
      { radius: 26.0, capacity: 1300 },
      { radius: 28.0, capacity: 1200 },
      { radius: 30.0, capacity: 1100 },
      { radius: 32.0, capacity: 1000 },
      { radius: 34.0, capacity: 900 },
      { radius: 36.0, capacity: 800 },
      { radius: 38.0, capacity: 700 },
      { radius: 40.0, capacity: 650 },
      { radius: 42.0, capacity: 600 },
      { radius: 45.0, capacity: 500 },
    ],
  },
};

interface SelfErectCraneChartsProps {
  highlightColor?: string;
}

const SelfErectCraneCharts: React.FC<SelfErectCraneChartsProps> = ({
  highlightColor = '#53C03F',
}) => {
  const [activeTab, setActiveTab] = useState<'loadPlusLM1' | '30Degree'>(
    'loadPlusLM1',
  );

  return (
    <div className="overflow-hidden rounded-lg bg-black shadow-lg">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900 p-4">
        <h2 className="text-2xl font-bold text-white">{craneData.model}</h2>
        <p className="text-gray-400">Self-Erecting Tower Crane</p>
      </div>

      {/* Configuration tabs */}
      <div className="border-b border-gray-800">
        <div className="flex">
          <button
            className={`px-4 py-3 text-sm font-medium ${
              activeTab === 'loadPlusLM1'
                ? `border-b-2 text-white border-${highlightColor.replace('#', '')}`
                : 'text-gray-400'
            }`}
            style={
              activeTab === 'loadPlusLM1' ? { borderColor: highlightColor } : {}
            }
            onClick={() => setActiveTab('loadPlusLM1')}
          >
            Load-Plus LM 1 Configuration
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium ${
              activeTab === '30Degree'
                ? `border-b-2 text-white border-${highlightColor.replace('#', '')}`
                : 'text-gray-400'
            }`}
            style={
              activeTab === '30Degree' ? { borderColor: highlightColor } : {}
            }
            onClick={() => setActiveTab('30Degree')}
          >
            30° Jib Configuration
          </button>
        </div>
      </div>

      {/* Specifications */}
      <div className="border-b border-gray-800 p-4">
        <h3 className="mb-3 text-xl font-semibold text-white">
          Crane Specifications
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded bg-gray-900 p-3">
            <p className="text-gray-400">Max Capacity</p>
            <p className="text-lg text-white">
              {craneData.specifications.maxCapacity} tons
            </p>
          </div>
          <div className="rounded bg-gray-900 p-3">
            <p className="text-gray-400">Max Radius</p>
            <p className="text-lg text-white">
              {craneData.specifications.maxRadius} m
            </p>
          </div>
          <div className="rounded bg-gray-900 p-3">
            <p className="text-gray-400">Max Hook Height</p>
            <p className="text-lg text-white">
              {craneData.specifications.maxHookHeight} m
            </p>
          </div>
          <div className="rounded bg-gray-900 p-3">
            <p className="text-gray-400">Jib Length</p>
            <p className="text-lg text-white">
              {craneData.specifications.jibLength} m
            </p>
          </div>
          <div className="rounded bg-gray-900 p-3">
            <p className="text-gray-400">Counterweight</p>
            <p className="text-lg text-white">
              {craneData.specifications.counterweight} tons
            </p>
          </div>
          <div className="rounded bg-gray-900 p-3">
            <p className="text-gray-400">Setup Time</p>
            <p className="text-lg text-white">
              ~{craneData.specifications.setupTime} minutes
            </p>
          </div>
        </div>
      </div>

      {/* Configuration description */}
      <div className="border-b border-gray-800 p-4">
        <h3 className="mb-3 text-xl font-semibold text-white">
          {activeTab === 'loadPlusLM1'
            ? 'Load-Plus LM 1 Configuration'
            : '30° Jib Configuration'}
        </h3>
        <p className="text-gray-400">
          {activeTab === 'loadPlusLM1'
            ? 'Standard configuration with horizontal jib providing maximum lifting capacity at all radiuses.'
            : '30° angled jib configuration, optimizing hook height at the cost of some lifting capacity.'}
        </p>
      </div>

      {/* Load chart */}
      <div className="p-4">
        <h3 className="mb-3 text-xl font-semibold text-white">Load Chart</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-900">
                <th className="px-4 py-2 font-semibold text-gray-300">
                  Radius (m)
                </th>
                <th className="px-4 py-2 font-semibold text-gray-300">
                  Capacity (kg)
                </th>
                <th className="px-4 py-2 font-semibold text-gray-300">
                  Capacity (tons)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {craneData.loadCharts[activeTab].map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-gray-900/30' : ''}
                >
                  <td className="px-4 py-2 text-white">{row.radius}</td>
                  <td className="px-4 py-2 text-white">{row.capacity}</td>
                  <td className="px-4 py-2 text-white">
                    {(row.capacity / 1000).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Visual representation */}
      <div className="border-t border-gray-800 p-4">
        <h3 className="mb-3 text-xl font-semibold text-white">
          Visual Representation
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Left column: Radius vs Capacity Chart */}
          <div className="rounded-lg bg-gray-900 p-4">
            <h4 className="mb-3 font-medium text-white">Radius vs Capacity</h4>
            <div className="relative h-80">
              {/* X-axis */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-700"></div>
              {/* Y-axis */}
              <div className="absolute bottom-0 left-0 top-0 w-px bg-gray-700"></div>

              {/* Data points */}
              {craneData.loadCharts[activeTab].map((point, index) => {
                const x =
                  (point.radius / craneData.specifications.maxRadius) * 100;
                const y = 100 - (point.capacity / 6000) * 100;

                return (
                  <div
                    key={index}
                    className="absolute h-2 w-2 rounded-full"
                    style={{
                      left: `calc(${x}% - 3px)`,
                      bottom: `calc(${100 - y}% - 3px)`,
                      backgroundColor: highlightColor,
                    }}
                  ></div>
                );
              })}

              {/* Lines connecting data points */}
              <svg className="absolute inset-0 h-full w-full">
                <polyline
                  points={craneData.loadCharts[activeTab]
                    .map((point) => {
                      const x =
                        (point.radius / craneData.specifications.maxRadius) *
                        100;
                      const y = 100 - (point.capacity / 6000) * 100;
                      return `${x}% ${y}%`;
                    })
                    .join(' ')}
                  fill="none"
                  stroke={highlightColor}
                  strokeWidth="2"
                  strokeOpacity="0.5"
                />
              </svg>

              {/* Axes labels */}
              <div className="absolute -bottom-6 left-0 right-0 text-center text-xs text-gray-500">
                Radius (m)
              </div>
              <div className="absolute -left-6 bottom-0 top-0 flex items-center">
                <div className="-rotate-90 transform whitespace-nowrap text-xs text-gray-500">
                  Capacity (kg)
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Simplified Crane Diagram */}
          <div className="rounded-lg bg-gray-900 p-4">
            <h4 className="mb-3 font-medium text-white">Crane Configuration</h4>
            <div className="relative h-80">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 500 300"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Base */}
                <rect x="230" y="280" width="40" height="20" fill="#444" />
                <rect x="220" y="270" width="60" height="10" fill="#333" />

                {/* Tower */}
                <rect x="240" y="140" width="20" height="130" fill="#666" />

                {/* Operator cab */}
                <rect
                  x="237"
                  y="130"
                  width="26"
                  height="15"
                  rx="2"
                  fill="#555"
                />

                {/* Counter jib */}
                <line
                  x1="250"
                  y1="130"
                  x2="180"
                  y2="100"
                  stroke="#777"
                  strokeWidth="5"
                />
                <circle cx="180" cy="100" r="8" fill="#888" />

                {/* Main jib */}
                {activeTab === 'loadPlusLM1' ? (
                  <line
                    x1="250"
                    y1="130"
                    x2="450"
                    y2="130"
                    stroke="#777"
                    strokeWidth="5"
                  />
                ) : (
                  <line
                    x1="250"
                    y1="130"
                    x2="430"
                    y2="80"
                    stroke="#777"
                    strokeWidth="5"
                    strokeDasharray={activeTab === '30Degree' ? 'none' : '5,5'}
                  />
                )}

                {/* Hook */}
                {activeTab === 'loadPlusLM1' ? (
                  <>
                    <line
                      x1="350"
                      y1="130"
                      x2="350"
                      y2="200"
                      stroke="#999"
                      strokeWidth="1"
                      strokeDasharray="4,2"
                    />
                    <rect
                      x="340"
                      y="200"
                      width="20"
                      height="15"
                      fill={highlightColor}
                      opacity="0.8"
                    />
                  </>
                ) : (
                  <>
                    <line
                      x1="340"
                      y1="105"
                      x2="340"
                      y2="200"
                      stroke="#999"
                      strokeWidth="1"
                      strokeDasharray="4,2"
                    />
                    <rect
                      x="330"
                      y="200"
                      width="20"
                      height="15"
                      fill={highlightColor}
                      opacity="0.8"
                    />
                  </>
                )}

                {/* Text labels */}
                <text
                  x="250"
                  y="100"
                  fontSize="12"
                  fill="#fff"
                  textAnchor="middle"
                >
                  {activeTab === '30Degree' ? '30°' : 'Horizontal'}
                </text>
                <text
                  x="250"
                  y="250"
                  fontSize="10"
                  fill="#aaa"
                  textAnchor="middle"
                >
                  Liebherr 81k
                </text>
              </svg>
            </div>
          </div>
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
            href="https://www.liebherr.com"
            className="hover:underline"
            style={{ color: highlightColor }}
            target="_blank"
            rel="noopener noreferrer"
          >
            liebherr.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default SelfErectCraneCharts;
