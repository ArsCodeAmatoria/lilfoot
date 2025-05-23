import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';

const loadData = {
  18: {
    distances: [4, 8, 12, 16, 20, 24, 28],
    loads: [1000, 1000, 1000, 900, 800, 700, 600]
  },
  11: {
    distances: [4, 8, 12, 16, 20, 24, 28, 31],
    loads: [2000, 1800, 1600, 1400, 1200, 1100, 1000, 1000]
  }
};

export default function PotainHD40ALuffingDiagram() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="border-l-4 border-highlight pl-4">
        <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'system-ui' }}>
          Luffing jib
        </h3>
      </div>

      {/* Luffing Jib Diagrams */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* 18° Diagram */}
        <div className="rounded-lg bg-gray-900 p-6">
          <h4 className="mb-4 text-xl font-bold text-white">18° Configuration</h4>
          <div className="relative h-64 w-full">
            <svg
              viewBox="0 0 400 300"
              className="h-full w-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Base */}
              <line
                x1="50"
                y1="250"
                x2="350"
                y2="250"
                stroke="#4B5563"
                strokeWidth="2"
              />
              {/* Tower */}
              <line
                x1="200"
                y1="250"
                x2="200"
                y2="50"
                stroke="#4B5563"
                strokeWidth="2"
              />
              {/* Luffing Jib */}
              <line
                x1="200"
                y1="50"
                x2="350"
                y2="100"
                stroke="#4B5563"
                strokeWidth="2"
              />
              {/* Load Line */}
              <line
                x1="350"
                y1="100"
                x2="350"
                y2="180"
                stroke="#EF4444"
                strokeWidth="2"
                strokeDasharray="4"
              />
              {/* Angle Indicator */}
              <path
                d="M 200,50 L 220,50 A 20 20 0 0 1 217,60"
                fill="none"
                stroke="#4B5563"
                strokeWidth="1"
              />
              <text
                x="225"
                y="60"
                fill="#4B5563"
                fontSize="12"
                textAnchor="start"
              >
                18°
              </text>
              {/* Load Text */}
              <text
                x="360"
                y="150"
                fill="#EF4444"
                fontSize="14"
                textAnchor="start"
              >
                1000 kg
              </text>
            </svg>
          </div>
        </div>

        {/* 11° Diagram */}
        <div className="rounded-lg bg-gray-900 p-6">
          <h4 className="mb-4 text-xl font-bold text-white">11° Configuration</h4>
          <div className="relative h-64 w-full">
            <svg
              viewBox="0 0 400 300"
              className="h-full w-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Base */}
              <line
                x1="50"
                y1="250"
                x2="350"
                y2="250"
                stroke="#4B5563"
                strokeWidth="2"
              />
              {/* Tower */}
              <line
                x1="200"
                y1="250"
                x2="200"
                y2="50"
                stroke="#4B5563"
                strokeWidth="2"
              />
              {/* Luffing Jib */}
              <line
                x1="200"
                y1="50"
                x2="350"
                y2="80"
                stroke="#4B5563"
                strokeWidth="2"
              />
              {/* Load Line */}
              <line
                x1="350"
                y1="80"
                x2="350"
                y2="160"
                stroke="#EF4444"
                strokeWidth="2"
                strokeDasharray="4"
              />
              {/* Angle Indicator */}
              <path
                d="M 200,50 L 220,50 A 20 20 0 0 1 218,55"
                fill="none"
                stroke="#4B5563"
                strokeWidth="1"
              />
              <text
                x="225"
                y="60"
                fill="#4B5563"
                fontSize="12"
                textAnchor="start"
              >
                11°
              </text>
              {/* Load Text */}
              <text
                x="360"
                y="130"
                fill="#EF4444"
                fontSize="14"
                textAnchor="start"
              >
                2000 kg
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Load Table - Horizontal Layout */}
      <div className="overflow-x-auto rounded-lg bg-gray-900">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-white">Configuration</TableHead>
              {/* Use the 11° configuration distances array as it has more entries */}
              {loadData[11].distances.map((distance) => (
                <TableHead key={distance} className="text-white text-center">
                  {distance}m
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-white">
                18° Config (kg)
              </TableCell>
              {loadData[11].distances.map((_, index) => (
                <TableCell 
                  key={index} 
                  className="bg-[#F7E4AF] bg-opacity-10 text-white text-center"
                >
                  {index < loadData[18].loads.length ? loadData[18].loads[index] : '-'}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-white">
                11° Config (kg)
              </TableCell>
              {loadData[11].loads.map((load, index) => (
                <TableCell 
                  key={index} 
                  className="bg-[#F7E4AF] bg-opacity-10 text-white text-center"
                >
                  {load}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
} 