'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '#/components/ui/table';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CraneLoadDiagram210Chart = () => {
  // Distance values (x-axis)
  const distances = [
    "65.6", "82", "98.4", "114.8", "131.2", "147.6", 
    "164.1", "180.5", "196.9", "210", "213.3"
  ];
  
  // Load values for 2-part line (y-axis)
  const twoPartLineData = [
    22046, 22046, 22046, 22046, 21605, 18739, 
    16314, 14551, 13007, 10141, 11685
  ];
  
  // Load values for 4-part line (y-axis)
  const fourPartLineData = [
    44092, 35935, 28660, 23589, 19842, 16976, 
    14771, 12787, 11244, 10141, 11685
  ];

  // Chart data
  const chartData = {
    labels: distances,
    datasets: [
      {
        label: '2-Part Line (lbs)',
        data: twoPartLineData,
        borderColor: '#53C03F', // Changed from red to highlight color
        backgroundColor: 'rgba(83, 192, 63, 0.2)', // Highlight color with alpha
        tension: 0.4, // For curved lines
        borderWidth: 2,
        pointBackgroundColor: '#53C03F', // Highlight color
        pointBorderColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: '4-Part Line (lbs)',
        data: fourPartLineData,
        borderColor: '#3b82f6', // Blue color remains for contrast
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.4, // For curved lines
        borderWidth: 2,
        pointBackgroundColor: '#3b82f6',
        pointBorderColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#ffffff',
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: true,
        text: 'Crane (210-213.3 ft Configuration) Load Capacity Chart',
        color: '#ffffff',
        font: {
          size: 16,
          weight: 'bold' as const,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${context.parsed.y.toLocaleString()} lbs`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Distance (ft)',
          color: '#ffffff',
        },
        ticks: {
          color: '#cccccc',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Load Capacity (lbs)',
          color: '#ffffff',
        },
        ticks: {
          color: '#cccccc',
          callback: function(value: any) {
            return value.toLocaleString();
          }
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="space-y-8">
      {/* Crane specifications and illustrations */}
      <div className="bg-black p-6 rounded-lg border border-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Crane illustration */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] bg-gray-900 rounded-lg flex items-center justify-center p-4">
              <svg 
                viewBox="0 0 400 300" 
                className="w-full h-full"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                {/* Base tower */}
                <rect x="175" y="250" width="50" height="50" className="fill-gray-800 stroke-gray-700" />
                
                {/* Main tower */}
                <rect x="185" y="150" width="30" height="100" className="fill-gray-800 stroke-gray-700" />
                
                {/* Boom - flat/horizontal */}
                <line x1="200" y1="150" x2="350" y2="150" className="stroke-yellow-500 stroke-2" />
                
                {/* Counter weight */}
                <line x1="200" y1="150" x2="50" y2="150" className="stroke-yellow-500 stroke-2" />
                
                {/* Hook and line */}
                <line x1="300" y1="150" x2="300" y2="180" className="stroke-white stroke-1" strokeDasharray="5,5" />
                <circle cx="300" cy="185" r="5" className="fill-white stroke-white" />
                
                {/* Measurements */}
                <text x="220" y="140" fill="#53C03F" fontSize="12">128.6 ft</text>
                <text x="210" y="180" fill="#53C03F" fontSize="12">33.1 ft</text>
                <text x="320" y="140" fill="#53C03F" fontSize="12">210 ft to 213.3 ft</text>
                <text x="290" y="200" fill="#53C03F" fontSize="12">10,141 lbs - 11,685 lbs</text>
              </svg>
            </div>
          </div>
          
          {/* Crane specifications */}
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-xl font-bold text-white">Crane Specifications (210-213.3 ft Configuration)</h3>
            <div className="space-y-2">
              <div className="bg-gray-900 p-3 rounded-md">
                <span className="font-medium text-white">SR WB 66-100/4F</span>
              </div>
              <div className="bg-gray-900 p-3 rounded-md">
                <span className="font-medium text-white">SR WB 102-100/4F</span>
              </div>
              <div className="bg-gray-900 p-3 rounded-md">
                <span className="font-medium text-white">BG (6,834 lbs), 8 Sections</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Boom Length:</span>
                <span className="font-bold text-highlight">128.6 ft</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Height:</span>
                <span className="font-bold text-highlight">33.1 ft</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Jib Endpoint:</span>
                <span className="font-bold text-highlight">210 ft to 213.3 ft</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Load Capacities:</span>
                <span className="font-bold text-highlight">10,141 lbs and 11,685 lbs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chart */}
      <div className="bg-black p-6 rounded-lg border border-gray-800">
        <div className="h-80">
          <Line options={options} data={chartData} />
        </div>
      </div>
      
      {/* Load capacity table */}
      <div className="bg-black p-6 rounded-lg border border-gray-800">
        <h3 className="text-xl font-bold text-white mb-4">Load Capacity Table (210-213.3 ft Configuration)</h3>
        <div className="overflow-x-auto rounded-md">
          <Table className="border-collapse">
            <TableCaption>Load capacity chart showing capacities in pounds at different distances</TableCaption>
            <TableHeader className="bg-gray-900">
              <TableRow>
                <TableHead className="border border-gray-800 sticky left-0 z-10 bg-gray-900">Distance (ft)</TableHead>
                {distances.map((distance, index) => (
                  <TableHead key={index} className="border border-gray-800 text-center">
                    {index === 9 || index === 10 ? 
                      <span className="font-bold text-highlight">{distance}</span> : distance}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="bg-gray-900/30">
                <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">
                  2-Part Line (lbs)
                </TableCell>
                {twoPartLineData.map((value, index) => (
                  <TableCell key={index} className="border border-gray-800 text-center">
                    {index === 9 || index === 10 ? 
                      <span className="font-bold text-highlight">{value.toLocaleString()}</span> : 
                      value.toLocaleString()}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">
                  4-Part Line (lbs)
                </TableCell>
                {fourPartLineData.map((value, index) => (
                  <TableCell key={index} className="border border-gray-800 text-center">
                    {index === 9 || index === 10 ? 
                      <span className="font-bold text-highlight">{value.toLocaleString()}</span> : 
                      value.toLocaleString()}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default CraneLoadDiagram210Chart; 