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

// Define the Load-Plus load capacity data
const loadPlusData = [
  { radius: 12.0, capacityKg: 6000 },
  { radius: 15.0, capacityKg: 5360 },
  { radius: 18.0, capacityKg: 4500 },
  { radius: 21.0, capacityKg: 3870 },
  { radius: 23.0, capacityKg: 3530 },
  { radius: 25.0, capacityKg: 3240 },
  { radius: 27.0, capacityKg: 2970 },
  { radius: 29.0, capacityKg: 2720 },
  { radius: 31.0, capacityKg: 2580 },
  { radius: 33.0, capacityKg: 2410 },
  { radius: 35.0, capacityKg: 2260 },
  { radius: 37.0, capacityKg: 2130 },
  { radius: 40.0, capacityKg: 1950 },
  { radius: 42.0, capacityKg: 1840 },
  { radius: 45.0, capacityKg: 1700 },
  { radius: 48.0, capacityKg: 1350 }
];

// Define the LM1 load capacity data
const lm1Data = [
  { radius: 12.0, capacityKg: 6000 },
  { radius: 15.0, capacityKg: 5220 },
  { radius: 18.0, capacityKg: 4230 },
  { radius: 21.0, capacityKg: 3540 },
  { radius: 23.0, capacityKg: 3180 },
  { radius: 25.0, capacityKg: 2890 },
  { radius: 27.0, capacityKg: 2640 },
  { radius: 29.0, capacityKg: 2420 },
  { radius: 31.0, capacityKg: 2230 },
  { radius: 33.0, capacityKg: 2070 },
  { radius: 35.0, capacityKg: 1920 },
  { radius: 37.0, capacityKg: 1800 },
  { radius: 40.0, capacityKg: 1630 },
  { radius: 42.0, capacityKg: 1530 },
  { radius: 45.0, capacityKg: 1400 },
  { radius: 48.0, capacityKg: 1100 }
];

// Define the 30° Jib Angle load capacity data
const jibAngleData = [
  { radius: 12.0, capacityKg: 3000 },
  { radius: 14.0, capacityKg: 3000 },
  { radius: 16.0, capacityKg: 3000 },
  { radius: 18.0, capacityKg: 2960 },
  { radius: 20.0, capacityKg: 2740 },
  { radius: 22.0, capacityKg: 2540 },
  { radius: 25.0, capacityKg: 2290 },
  { radius: 26.5, capacityKg: 2180 },
  { radius: 28.0, capacityKg: 2080 },
  { radius: 30.0, capacityKg: 1960 },
  { radius: 31.7, capacityKg: 1860 },
  { radius: 33.0, capacityKg: 1790 },
  { radius: 35.0, capacityKg: 1700 },
  { radius: 36.0, capacityKg: 1670 },
  { radius: 37.0, capacityKg: 1650 },
  { radius: 38.6, capacityKg: 1400 }
];

interface Liebherr81kCapacityChartProps {
  configuration: 'loadPlus' | 'lm1' | 'jibAngle';
}

const Liebherr81kCapacityChart: React.FC<Liebherr81kCapacityChartProps> = ({ configuration }) => {
  // Select the appropriate data based on the configuration
  const getChartData = () => {
    switch (configuration) {
      case 'loadPlus':
        return loadPlusData;
      case 'lm1':
        return lm1Data;
      case 'jibAngle':
        return jibAngleData;
      default:
        return lm1Data;
    }
  };
  
  const loadCapacityData = getChartData();
  
  // Get the appropriate chart title
  const getChartTitle = () => {
    switch (configuration) {
      case 'loadPlus':
        return 'Load-Plus Configuration';
      case 'lm1':
        return 'LM1 Configuration';
      case 'jibAngle':
        return '30° Jib Angle Configuration';
      default:
        return 'LM1 Configuration';
    }
  };
  
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
        text: `Liebherr 81k - ${getChartTitle()} Load Capacity Chart`,
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
            const radius = loadCapacityData[index].radius;
            const capacityKg = loadCapacityData[index].capacityKg;
            const capacityLbs = Math.round(capacityKg * 2.205);
            
            return [
              `Radius: ${radius.toFixed(1)} m`,
              `Capacity: ${capacityKg.toLocaleString()} kg (${capacityLbs.toLocaleString()} lbs)`
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
            return `${loadCapacityData[index].radius.toFixed(1)} m`;
          }
        },
        title: {
          display: true,
          text: 'Jib Radius (m)',
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
        max: configuration === 'jibAngle' ? 3500 : 7000,
        ticks: {
          color: '#FFFFFF',
          callback: function(value) {
            const kg = Number(value);
            const lbs = Math.round(kg * 2.205);
            return `${kg.toLocaleString()} kg (${lbs.toLocaleString()} lbs)`;
          }
        },
        title: {
          display: true,
          text: 'Capacity (kg/lbs)',
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
    labels: loadCapacityData.map(item => item.radius.toString()),
    datasets: [
      {
        label: 'Load Capacity',
        data: loadCapacityData.map(item => item.capacityKg),
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

export default Liebherr81kCapacityChart; 