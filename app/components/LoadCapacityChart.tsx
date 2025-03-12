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
  ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Define the load capacity data
const loadCapacityData = [
  { radiusFt: 40, radiusM: 12.2, capacityLbs: 13800, capacityKg: 6250 },
  { radiusFt: 50, radiusM: 15.2, capacityLbs: 12000, capacityKg: 5440 },
  { radiusFt: 60, radiusM: 18.3, capacityLbs: 10000, capacityKg: 4540 },
  { radiusFt: 70, radiusM: 21.3, capacityLbs: 8000, capacityKg: 3630 },
  { radiusFt: 80, radiusM: 24.4, capacityLbs: 6000, capacityKg: 2720 },
  { radiusFt: 90, radiusM: 27.4, capacityLbs: 4000, capacityKg: 1810 },
  { radiusFt: 101, radiusM: 30.8, capacityLbs: 2000, capacityKg: 905 },
  { radiusFt: 110, radiusM: 33.5, capacityLbs: 11000, capacityKg: 5000 },
  { radiusFt: 120, radiusM: 36.6, capacityLbs: 8200, capacityKg: 3700 },
  { radiusFt: 135, radiusM: 41.1, capacityLbs: 6400, capacityKg: 2900 },
  { radiusFt: 150, radiusM: 45.7, capacityLbs: 4900, capacityKg: 2200 },
];

const LoadCapacityChart: React.FC = () => {
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
        text: 'Pecco Tower Crane SK 180 (2-Part Line) Load Chart',
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
        max: 15000,
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

export default LoadCapacityChart; 