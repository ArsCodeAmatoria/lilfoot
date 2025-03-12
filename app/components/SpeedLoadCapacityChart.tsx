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

// Define the speed vs load capacity data
const speedLoadData = [
  { load: 6000, speed: 12.7 },
  { load: 400, speed: 76.1 }
];

const SpeedLoadCapacityChart: React.FC = () => {
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
        text: 'Liebherr 81k - Speed vs Load Capacity Chart',
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
            const load = speedLoadData[index].load;
            const speed = speedLoadData[index].speed;
            
            return [
              `Load: ${load.toLocaleString()} kg`,
              `Speed: ${speed.toFixed(1)} m/min`
            ];
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Speed (m/min)',
          color: '#FFFFFF',
          font: {
            size: 14,
            weight: 'bold'
          }
        },
        ticks: {
          color: '#FFFFFF',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Load Capacity (kg)',
          color: '#FFFFFF',
          font: {
            size: 14,
            weight: 'bold'
          }
        },
        ticks: {
          color: '#FFFFFF',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        // Reversed to show higher loads at the top
        reverse: true
      }
    }
  };

  // Chart data
  const data = {
    labels: speedLoadData.map(item => item.speed.toString()),
    datasets: [
      {
        label: 'Load Capacity',
        data: speedLoadData.map(item => item.load),
        borderColor: '#FFD700', // Yellow color as requested
        backgroundColor: 'rgba(255, 215, 0, 0.2)',
        borderWidth: 3,
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#FFD700',
        pointRadius: 5,
        pointHoverRadius: 8,
        tension: 0.4,
        fill: true
      }
    ]
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="h-[400px] w-full">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default SpeedLoadCapacityChart; 