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

const translations = {
  title: [
    'Courbes de charges',
    'Lastkurven',
    'Load diagrams',
    'Curvas de cargas',
    'Curve di carico',
    'Curva de cargas'
  ]
};

export default function PotainHD40ALoadDiagram() {
  return (
    <div className="space-y-8">
      {/* Multilingual Title */}
      <div className="flex flex-col space-y-2 border-l-4 border-highlight pl-4">
        {translations.title.map((text, index) => (
          <h3
            key={index}
            className="text-lg font-bold text-white"
            style={{ fontFamily: 'system-ui' }}
          >
            {text}
          </h3>
        ))}
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

      {/* Load Table */}
      <div className="overflow-x-auto rounded-lg bg-gray-900">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-white">Distance (m)</TableHead>
              <TableHead className="text-white">35m Config (kg)</TableHead>
              <TableHead className="text-white">31m Config (kg)</TableHead>
              <TableHead className="text-white">Adjustable (kg)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loadData[35].distances.map((distance, index) => (
              <TableRow key={distance}>
                <TableCell className="font-medium text-white">
                  {distance}
                </TableCell>
                <TableCell
                  className="bg-[#F7E4AF] bg-opacity-10 text-white"
                >
                  {loadData[35].loads[index] || '-'}
                </TableCell>
                <TableCell
                  className="bg-[#F7E4AF] bg-opacity-10 text-white"
                >
                  {loadData[31].loads[index] || '-'}
                </TableCell>
                <TableCell
                  className="bg-[#F7E4AF] bg-opacity-10 text-white"
                >
                  {loadData.adjustable.loads[index] || '-'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
} 