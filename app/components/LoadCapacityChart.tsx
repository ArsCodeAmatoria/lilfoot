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
  ChartOptions,
  RadialLinearScale,
  ArcElement,
  PolarAreaController
} from 'chart.js';
import { Line, PolarArea } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  ArcElement,
  PolarAreaController
);

// Define the 2-Part line load capacity data for 196 ft jib
const twoPartLineData = [
  { radiusFt: 80, radiusM: 24.4, capacityLbs: 13800, capacityKg: 6250 },
  { radiusFt: 90, radiusM: 27.4, capacityLbs: 12300, capacityKg: 5580 },
  { radiusFt: 101, radiusM: 30.8, capacityLbs: 10800, capacityKg: 4900 },
  { radiusFt: 110, radiusM: 33.5, capacityLbs: 9700, capacityKg: 4400 },
  { radiusFt: 120, radiusM: 36.6, capacityLbs: 8700, capacityKg: 3950 },
  { radiusFt: 135, radiusM: 41.1, capacityLbs: 7700, capacityKg: 3490 },
  { radiusFt: 150, radiusM: 45.7, capacityLbs: 6700, capacityKg: 3040 },
  { radiusFt: 168, radiusM: 51.2, capacityLbs: 5800, capacityKg: 2630 },
  { radiusFt: 180, radiusM: 54.9, capacityLbs: 5400, capacityKg: 2450 },
  { radiusFt: 196, radiusM: 59.7, capacityLbs: 4900, capacityKg: 2220 },
];

// Define the 4-Part line load capacity data for 196 ft jib
// The 4-Part line configuration provides approximately double the capacity of the 2-Part line
// but sacrifices hoisting speed
const fourPartLineData = [
  { radiusFt: 60, radiusM: 18.3, capacityLbs: 27600, capacityKg: 12500 }, // Max capacity at 43 ft
  { radiusFt: 70, radiusM: 21.3, capacityLbs: 23400, capacityKg: 10600 },
  { radiusFt: 80, radiusM: 24.4, capacityLbs: 19060, capacityKg: 8645 },
  { radiusFt: 90, radiusM: 27.4, capacityLbs: 15700, capacityKg: 7120 },
  { radiusFt: 101, radiusM: 30.8, capacityLbs: 13400, capacityKg: 6080 },
  { radiusFt: 110, radiusM: 33.5, capacityLbs: 11700, capacityKg: 5300 },
  { radiusFt: 120, radiusM: 36.6, capacityLbs: 10200, capacityKg: 4625 },
  { radiusFt: 130, radiusM: 39.6, capacityLbs: 9100, capacityKg: 4125 },
  { radiusFt: 140, radiusM: 42.7, capacityLbs: 8100, capacityKg: 3670 },
  { radiusFt: 150, radiusM: 45.7, capacityLbs: 7300, capacityKg: 3310 },
  { radiusFt: 168, radiusM: 51.2, capacityLbs: 6100, capacityKg: 2770 },
  { radiusFt: 180, radiusM: 54.9, capacityLbs: 5200, capacityKg: 2360 },
  { radiusFt: 196, radiusM: 59.7, capacityLbs: 4200, capacityKg: 1905 },
];

interface LoadCapacityChartProps {
  configuration: 'twoPartLine' | 'fourPartLine';
}

const LoadCapacityChart: React.FC<LoadCapacityChartProps> = ({ configuration }) => {
  // Select the appropriate data based on the configuration
  const loadCapacityData = configuration === 'twoPartLine' ? twoPartLineData : fourPartLineData;
  
  // Chart options
  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#FFFFFF',
          font: {
            size: 14
          }
        }
      },
      title: {
        display: true,
        text: `Pecco SK 180 - 196 ft Jib (${configuration === 'twoPartLine' ? '2-Part' : '4-Part'} Line) Load Chart`,
        color: '#FFFFFF',
        font: {
          size: 18,
          weight: 'bold'
        },
        padding: {
          top: 10,
          bottom: 20
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const index = context.dataIndex;
            const radiusFt = loadCapacityData[index].radiusFt;
            const radiusM = loadCapacityData[index].radiusM;
            const capacityLbs = loadCapacityData[index].capacityLbs;
            const capacityKg = loadCapacityData[index].capacityKg;
            
            return [
              `Radius: ${radiusFt} ft (${radiusM} m)`,
              `Capacity: ${capacityLbs.toLocaleString()} lbs (${capacityKg.toLocaleString()} kg)`
            ];
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#FFFFFF',
          callback: function(value, index) {
            const item = loadCapacityData[index];
            return `${item.radiusFt} ft\n(${item.radiusM} m)`;
          }
        },
        title: {
          display: true,
          text: 'Jib Radius (ft/m)',
          color: '#FFFFFF',
          font: {
            size: 14,
            weight: 'bold'
          }
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      },
      y: {
        min: 0,
        max: configuration === 'twoPartLine' ? 15000 : 30000,
        ticks: {
          color: '#FFFFFF',
          callback: function(value) {
            return `${value.toLocaleString()} lbs (${Math.round(Number(value) / 2.205).toLocaleString()} kg)`;
          }
        },
        title: {
          display: true,
          text: 'Capacity (lbs/kg)',
          color: '#FFFFFF',
          font: {
            size: 14,
            weight: 'bold'
          }
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      }
    }
  };

  // Chart data
  const data = {
    labels: loadCapacityData.map(item => item.radiusFt.toString()),
    datasets: [
      {
        label: 'Load Capacity',
        data: loadCapacityData.map(item => item.capacityLbs),
        borderColor: '#53C03F',
        backgroundColor: 'rgba(83, 192, 63, 0.2)',
        borderWidth: 3,
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#53C03F',
        pointRadius: 5,
        pointHoverRadius: 8,
        tension: 0.4,
        fill: true
      }
    ]
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="h-[500px] w-full">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

// Polar Area Chart for Capacity Distribution
const PolarAreaCapacityChart: React.FC<LoadCapacityChartProps> = ({ configuration }) => {
  // Select the appropriate data based on the configuration
  const loadCapacityData = configuration === 'twoPartLine' ? twoPartLineData : fourPartLineData;
  
  // Get a subset of the data points to make the polar chart clearer
  // Sort the data by radius (ascending) so smaller radii are in the inner circles
  const polarData = configuration === 'twoPartLine' 
    ? [
        { radiusFt: 80, radiusM: 24.4, capacityLbs: 13800, capacityKg: 6250 },
        { radiusFt: 101, radiusM: 30.8, capacityLbs: 10800, capacityKg: 4900 },
        { radiusFt: 120, radiusM: 36.6, capacityLbs: 8700, capacityKg: 3950 },
        { radiusFt: 150, radiusM: 45.7, capacityLbs: 6700, capacityKg: 3040 },
        { radiusFt: 180, radiusM: 54.9, capacityLbs: 5400, capacityKg: 2450 },
        { radiusFt: 196, radiusM: 59.7, capacityLbs: 4900, capacityKg: 2220 }
      ]
    : [
        { radiusFt: 60, radiusM: 18.3, capacityLbs: 27600, capacityKg: 12500 },
        { radiusFt: 80, radiusM: 24.4, capacityLbs: 19060, capacityKg: 8645 },
        { radiusFt: 101, radiusM: 30.8, capacityLbs: 13400, capacityKg: 6080 },
        { radiusFt: 120, radiusM: 36.6, capacityLbs: 10200, capacityKg: 4625 },
        { radiusFt: 150, radiusM: 45.7, capacityLbs: 7300, capacityKg: 3310 },
        { radiusFt: 196, radiusM: 59.7, capacityLbs: 4200, capacityKg: 1905 }
      ];

  // Generate contrasting colors with better visibility
  const generateBackgroundColors = (count: number) => {
    // Use a more vibrant, high-contrast color palette
    const colors = [
      'rgba(83, 192, 63, 0.9)',   // Bright green (highlight color)
      'rgba(255, 177, 0, 0.85)',  // Amber
      'rgba(255, 82, 82, 0.85)',  // Red
      'rgba(77, 171, 247, 0.85)', // Blue
      'rgba(156, 39, 176, 0.85)', // Purple
      'rgba(255, 152, 0, 0.85)'   // Orange
    ];
    
    // Return only the colors we need
    return colors.slice(0, count);
  };

  // Chart options
  const options: ChartOptions<'polarArea'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: '#FFFFFF',
          font: {
            size: 12
          },
          // Format the legend labels to include radius and capacity
          generateLabels: function(chart) {
            const datasets = chart.data.datasets;
            return chart.data.labels?.map((label, i) => {
              const meta = chart.getDatasetMeta(0);
              const style = meta.controller.getStyle(i, false);
              const dataPoint = polarData[i];
              return {
                text: `${dataPoint.radiusFt} ft (${dataPoint.radiusM} m) - ${dataPoint.capacityLbs.toLocaleString()} lbs`,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                lineWidth: style.borderWidth,
                hidden: !chart.getDataVisibility(i),
                index: i
              };
            }) || [];
          }
        }
      },
      title: {
        display: true,
        text: `Pecco SK 180 (${configuration === 'twoPartLine' ? '2-Part' : '4-Part'} Line) Capacity at Radius`,
        color: '#FFFFFF',
        font: {
          size: 18,
          weight: 'bold'
        },
        padding: {
          top: 10,
          bottom: 20
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const index = context.dataIndex;
            const dataPoint = polarData[index];
            return [
              `Radius: ${dataPoint.radiusFt} ft (${dataPoint.radiusM} m)`,
              `Capacity: ${dataPoint.capacityLbs.toLocaleString()} lbs (${dataPoint.capacityKg.toLocaleString()} kg)`
            ];
          },
          title: (context) => {
            return `Zone ${context[0].dataIndex + 1}`;
          }
        }
      }
    },
    scales: {
      r: {
        grid: {
          color: 'rgba(255, 255, 255, 0.3)'  // Brighter grid lines
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.9)', // Brighter tick labels
          backdropColor: 'rgba(0, 0, 0, 0.7)', // Dark backdrop for better contrast
          font: {
            size: 11,
            weight: 'bold'
          }
        },
        angleLines: {
          color: 'rgba(255, 255, 255, 0.4)'  // Brighter angle lines
        },
        pointLabels: {
          color: '#FFFFFF',
          font: {
            size: 12,
            weight: 'bold'
          }
        },
        startAngle: -90, // Start at top
      }
    }
  };

  // Chart data
  const data = {
    // Label by radius for each segment
    labels: polarData.map(item => `${item.radiusFt} ft`),
    datasets: [
      {
        label: 'Capacity by Radius',
        // Use actual capacity values
        data: polarData.map(item => item.capacityLbs),
        backgroundColor: generateBackgroundColors(polarData.length),
        borderColor: '#FFFFFF',
        borderWidth: 2
      }
    ]
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="h-[400px] w-full">
        <PolarArea options={options} data={data} />
      </div>
      <div className="mt-4 text-sm text-gray-200">
        <span className="text-highlight font-medium">Chart Guide:</span> Inner rings represent shorter radii with higher capacity, 
        outer rings represent longer radii with lower capacity. Each segment shows lifting capacity at the specified radius.
      </div>
    </div>
  );
};

export { LoadCapacityChart, PolarAreaCapacityChart };
export default LoadCapacityChart; 