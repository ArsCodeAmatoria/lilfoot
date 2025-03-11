'use client';

import React, { useState } from 'react';

interface CraneLoadVisualizerProps {
  highlightColor?: string;
}

const CraneLoadVisualizer: React.FC<CraneLoadVisualizerProps> = ({
  highlightColor = '#53C03F',
}) => {
  const [selectedRadius, setSelectedRadius] = useState(30);
  const [showLabels, setShowLabels] = useState(true);

  // Calculate data based on selected radius
  const maxBoomLength = 60; // meters
  const maxHeight = 50; // meters
  const boomLengthScale = 0.8; // Scale down for visualization
  const actualBoomLength = maxBoomLength * boomLengthScale;

  // Calculate capacity based on radius (simplified formula)
  const getCapacityForRadius = (radius: number) => {
    // This is a simplified exponential decay model
    const baseCapacity = 90;
    const decayFactor = 0.085;
    const capacity = baseCapacity * Math.exp(-decayFactor * radius);
    return Math.round(capacity * 10) / 10; // Round to 1 decimal place
  };

  const capacity = getCapacityForRadius(selectedRadius);

  // Calculate boom angle based on radius
  const getBoomAngle = (radius: number) => {
    // Simple trigonometry to find angle
    // We use actualBoomLength as the hypotenuse
    // Height is the adjacent and radius is the opposite
    const angleRad = Math.atan2(maxHeight, radius);
    return angleRad * (180 / Math.PI); // Convert to degrees
  };

  const boomAngle = getBoomAngle(selectedRadius);

  // Calculate boom end coordinates
  const getBoomEndPoint = (angle: number, length: number) => {
    const radians = angle * (Math.PI / 180);
    const x = length * Math.sin(Math.PI / 2 - radians);
    const y = length * Math.cos(Math.PI / 2 - radians);
    return { x, y };
  };

  const endPoint = getBoomEndPoint(boomAngle, actualBoomLength);

  return (
    <div className="overflow-hidden rounded-lg bg-black p-4 shadow-lg">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-white">Crane Load Visualizer</h2>
        <p className="mb-4 text-gray-400">
          Adjust the radius to see how the lifting capacity changes with the
          crane's reach.
        </p>

        {/* Controls */}
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-gray-300">
              Operating Radius: {selectedRadius}m
            </label>
            <input
              type="range"
              min="3"
              max="50"
              value={selectedRadius}
              onChange={(e) => setSelectedRadius(parseInt(e.target.value))}
              className="w-full"
              style={{ accentColor: highlightColor }}
            />
          </div>
          <div className="flex items-center">
            <div>
              <div className="mb-2 rounded bg-gray-900 p-3">
                <p className="text-gray-400">Lifting Capacity</p>
                <p className="text-2xl font-bold text-white">{capacity} tons</p>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="showLabels"
                  checked={showLabels}
                  onChange={() => setShowLabels(!showLabels)}
                  className="mr-2"
                  style={{ accentColor: highlightColor }}
                />
                <label htmlFor="showLabels" className="text-sm text-gray-300">
                  Show labels
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Visualization */}
      <div
        className="w-full overflow-hidden rounded-lg bg-gray-900 p-2"
        style={{ height: '400px' }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 600 400"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Ground */}
          <line
            x1="50"
            y1="350"
            x2="550"
            y2="350"
            stroke="#333"
            strokeWidth="2"
          />

          {/* Distance markers */}
          {[0, 10, 20, 30, 40, 50].map((distance) => {
            const x = 100 + distance * 8;
            return (
              <g key={distance}>
                <line
                  x1={x}
                  y1="348"
                  x2={x}
                  y2="352"
                  stroke="#555"
                  strokeWidth="1"
                />
                {showLabels && (
                  <text
                    x={x}
                    y="365"
                    fontSize="10"
                    fill="#999"
                    textAnchor="middle"
                  >
                    {distance}m
                  </text>
                )}
              </g>
            );
          })}

          {/* Crane base */}
          <rect x="85" y="310" width="30" height="40" fill="#222" />
          <rect x="70" y="300" width="60" height="10" fill="#222" />

          {/* Crane cab */}
          <rect x="75" y="270" width="50" height="30" rx="5" fill="#333" />
          <rect x="95" y="260" width="15" height="10" fill="#444" />

          {/* Counterweight */}
          <rect x="55" y="285" width="20" height="15" fill="#444" />

          {/* Boom */}
          <line
            x1="100"
            y1="270"
            x2={100 + endPoint.x}
            y2={270 - endPoint.y}
            stroke="#666"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Boom head */}
          <circle
            cx={100 + endPoint.x}
            cy={270 - endPoint.y}
            r="5"
            fill={highlightColor}
          />

          {/* Load line */}
          <line
            x1={100 + endPoint.x}
            y1={270 - endPoint.y}
            x2={100 + endPoint.x}
            y2="300"
            stroke="#999"
            strokeWidth="1"
            strokeDasharray="4,2"
          />

          {/* Load */}
          <rect
            x={100 + endPoint.x - 10}
            y="300"
            width="20"
            height="20"
            fill={highlightColor}
            opacity="0.8"
          />

          {/* Current radius line */}
          <line
            x1="100"
            y1="350"
            x2={100 + endPoint.x}
            y2="350"
            stroke={highlightColor}
            strokeWidth="2"
            strokeDasharray="5,3"
          />

          {/* Current radius label */}
          {showLabels && (
            <>
              <text
                x={(100 + endPoint.x) / 2}
                y="340"
                fontSize="12"
                fill={highlightColor}
                textAnchor="middle"
              >
                Radius: {selectedRadius}m
              </text>

              <text
                x={100 + endPoint.x}
                y="295"
                fontSize="12"
                fill={highlightColor}
                textAnchor="middle"
                fontWeight="bold"
              >
                {capacity}t
              </text>

              <text
                x="160"
                y="240"
                fontSize="12"
                fill="#999"
                textAnchor="start"
              >
                Boom angle: {Math.round(boomAngle)}°
              </text>
            </>
          )}
        </svg>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <p>
          Note: This is a simplified visualization. Actual crane performance
          depends on configuration, boom length, and other factors.
        </p>
      </div>
    </div>
  );
};

export default CraneLoadVisualizer;
