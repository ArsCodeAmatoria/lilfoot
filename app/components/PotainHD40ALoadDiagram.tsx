import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';

const loadData = {
  35: {
    distances: [4, 8, 12, 16, 20, 24, 28, 32, 35],
    loads: [4000, 3800, 3500, 3000, 2500, 2000, 1500, 1200, 1000]
  },
  31: {
    distances: [4, 8, 12, 16, 20, 24, 28, 31],
    loads: [4000, 3800, 3500, 3000, 2500, 2000, 1600, 1300]
  },
  adjustable: {
    distances: [4, 8, 12, 16, 20, 24, 28, 31, 35],
    loads: [4000, 3800, 3500, 3000, 2500, 2000, 1700, 1500, 1400]
  }
};

export default function PotainHD40ALoadDiagram() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="border-l-4 border-highlight pl-4">
        <h3
          className="text-lg font-bold text-white"
          style={{ fontFamily: 'system-ui' }}
        >
          Load diagrams
        </h3>
      </div>

      {/* Load Diagrams */}
      <div className="grid gap-8 md:grid-cols-3">
        {/* 35m Diagram */}
        <div className="rounded-lg bg-gray-900 p-6">
          <h4 className="mb-4 text-xl font-bold text-white">35m Configuration</h4>
          <div className="relative h-64 w-full">
            <svg
              viewBox="0 0 400 300"
              className="h-full w-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Crane Base */}
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
              {/* Jib */}
              <line
                x1="200"
                y1="50"
                x2="350"
                y2="50"
                stroke="#4B5563"
                strokeWidth="2"
              />
              {/* Load Line */}
              <line
                x1="350"
                y1="50"
                x2="350"
                y2="150"
                stroke="#EF4444"
                strokeWidth="2"
                strokeDasharray="4"
              />
              {/* Load Text */}
              <text
                x="360"
                y="100"
                fill="#EF4444"
                fontSize="14"
                textAnchor="start"
              >
                1000 kg
              </text>
            </svg>
          </div>
        </div>

        {/* 31m Diagram */}
        <div className="rounded-lg bg-gray-900 p-6">
          <h4 className="mb-4 text-xl font-bold text-white">31m Configuration</h4>
          <div className="relative h-64 w-full">
            <svg
              viewBox="0 0 400 300"
              className="h-full w-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Similar structure as 35m but with adjusted dimensions */}
              <line
                x1="50"
                y1="250"
                x2="350"
                y2="250"
                stroke="#4B5563"
                strokeWidth="2"
              />
              <line
                x1="200"
                y1="250"
                x2="200"
                y2="50"
                stroke="#4B5563"
                strokeWidth="2"
              />
              <line
                x1="200"
                y1="50"
                x2="320"
                y2="50"
                stroke="#4B5563"
                strokeWidth="2"
              />
              <line
                x1="320"
                y1="50"
                x2="320"
                y2="150"
                stroke="#EF4444"
                strokeWidth="2"
                strokeDasharray="4"
              />
              <text
                x="330"
                y="100"
                fill="#EF4444"
                fontSize="14"
                textAnchor="start"
              >
                1300 kg
              </text>
            </svg>
          </div>
        </div>

        {/* Adjustable Diagram */}
        <div className="rounded-lg bg-gray-900 p-6">
          <h4 className="mb-4 text-xl font-bold text-white">
            Adjustable Configuration
          </h4>
          <div className="relative h-64 w-full">
            <svg
              viewBox="0 0 400 300"
              className="h-full w-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Similar structure with both configurations shown */}
              <line
                x1="50"
                y1="250"
                x2="350"
                y2="250"
                stroke="#4B5563"
                strokeWidth="2"
              />
              <line
                x1="200"
                y1="250"
                x2="200"
                y2="50"
                stroke="#4B5563"
                strokeWidth="2"
              />
              {/* 35m line */}
              <line
                x1="200"
                y1="50"
                x2="350"
                y2="50"
                stroke="#4B5563"
                strokeWidth="2"
                strokeDasharray="4"
              />
              {/* 31m line */}
              <line
                x1="200"
                y1="50"
                x2="320"
                y2="50"
                stroke="#4B5563"
                strokeWidth="2"
              />
              <line
                x1="320"
                y1="50"
                x2="320"
                y2="150"
                stroke="#EF4444"
                strokeWidth="2"
                strokeDasharray="4"
              />
              <text
                x="330"
                y="100"
                fill="#EF4444"
                fontSize="14"
                textAnchor="start"
              >
                1400 kg
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
              {loadData[35].distances.map((distance) => (
                <TableHead key={distance} className="text-white text-center">
                  {distance}m
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-white">
                35m Config (kg)
              </TableCell>
              {loadData[35].loads.map((load, index) => (
                <TableCell 
                  key={index} 
                  className="bg-[#F7E4AF] bg-opacity-10 text-white text-center"
                >
                  {load}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-white">
                31m Config (kg)
              </TableCell>
              {loadData[35].distances.map((_, index) => (
                <TableCell 
                  key={index} 
                  className="bg-[#F7E4AF] bg-opacity-10 text-white text-center"
                >
                  {index < loadData[31].loads.length ? loadData[31].loads[index] : '-'}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-white">
                Adjustable (kg)
              </TableCell>
              {loadData[35].distances.map((_, index) => (
                <TableCell 
                  key={index} 
                  className="bg-[#F7E4AF] bg-opacity-10 text-white text-center"
                >
                  {index < loadData.adjustable.loads.length ? loadData.adjustable.loads[index] : '-'}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
} 