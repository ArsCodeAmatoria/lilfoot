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
  BarElement,
  RadialLinearScale,
  ArcElement,
} from 'chart.js';
import { Line, Bar, PolarArea, Radar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);

// Sample crane data based on specifications
// In a real application, this would come from an API call to cranemarket.com
const craneData = {
  model: 'Liebherr LTM 1090-4.2',
  specifications: {
    liftingCapacity: [
      { radius: 3, capacity: 90 },
      { radius: 5, capacity: 65 },
      { radius: 10, capacity: 32 },
      { radius: 15, capacity: 20 },
      { radius: 20, capacity: 14 },
      { radius: 25, capacity: 10 },
      { radius: 30, capacity: 7.5 },
      { radius: 35, capacity: 5.5 },
      { radius: 40, capacity: 4 },
      { radius: 45, capacity: 3 },
      { radius: 50, capacity: 2 },
    ],
    boomLength: 60, // meters
    maxRadius: 50, // meters
    counterweight: 22.5, // tons
    enginePower: 450, // hp
    dimensions: {
      length: 13.3, // meters
      width: 2.75, // meters
      height: 4, // meters
    },
    weight: 48, // tons
  },
};

interface CraneChartProps {
  chartType?: 'line' | 'bar' | 'polar' | 'radar';
  title?: string;
  highlightColor?: string;
  showFullData?: boolean;
}

const CraneChart: React.FC<CraneChartProps> = ({
  chartType = 'line',
  title = 'Crane Lifting Capacity vs. Radius',
  highlightColor = '#53C03F',
  showFullData = true,
}) => {
  // Use a subset of data for radar/polar to make it more readable
  const dataPoints = showFullData
    ? craneData.specifications.liftingCapacity
    : craneData.specifications.liftingCapacity.filter((_, i) => i % 2 === 0);

  const labels = dataPoints.map((item) => `${item.radius}m`);
  const capacityData = dataPoints.map((item) => item.capacity);

  // Generate an array of colors with transparency for multi-colored charts
  const generateColors = (baseColor: string, count: number) => {
    // If only one color is needed, return it
    if (count === 1) return [baseColor];

    // For multiple colors, create variations
    return Array.from({ length: count }, (_, i) => {
      const hue = (i * 137.508) % 360; // Golden angle approximation for good distribution
      return `hsl(${hue}, 70%, 50%)`;
    });
  };

  const chartColors = generateColors(highlightColor, dataPoints.length);

  const lineBarData = {
    labels,
    datasets: [
      {
        label: 'Lifting Capacity (tons)',
        data: capacityData,
        borderColor: highlightColor,
        backgroundColor: `${highlightColor}80`, // Adding 50% opacity
        borderWidth: 2,
        pointBackgroundColor: highlightColor,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const polarRadarData = {
    labels,
    datasets: [
      {
        label: 'Lifting Capacity (tons)',
        data: capacityData,
        backgroundColor: chartColors.map((color) => `${color}80`), // With opacity
        borderColor: chartColors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
        },
        color: 'white',
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `Capacity: ${context.parsed.y || context.raw} tons at ${context.label} radius`;
          },
        },
      },
    },
    scales:
      chartType === 'line' || chartType === 'bar'
        ? {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Lifting Capacity (tons)',
                color: 'white',
              },
              ticks: {
                color: 'rgba(255, 255, 255, 0.7)',
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)',
              },
            },
            x: {
              title: {
                display: true,
                text: 'Radius (meters)',
                color: 'white',
              },
              ticks: {
                color: 'rgba(255, 255, 255, 0.7)',
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)',
              },
            },
          }
        : {
            r: {
              beginAtZero: true,
              ticks: {
                color: 'rgba(255, 255, 255, 0.7)',
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)',
              },
              pointLabels: {
                color: 'rgba(255, 255, 255, 0.7)',
              },
            },
          },
  };

  return (
    <div className="w-full rounded-lg bg-black p-4 shadow-lg">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-white">{craneData.model}</h2>
        <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded bg-gray-900 p-3">
            <p className="text-gray-400">Max Boom Length</p>
            <p className="text-lg text-white">
              {craneData.specifications.boomLength}m
            </p>
          </div>
          <div className="rounded bg-gray-900 p-3">
            <p className="text-gray-400">Engine Power</p>
            <p className="text-lg text-white">
              {craneData.specifications.enginePower}hp
            </p>
          </div>
          <div className="rounded bg-gray-900 p-3">
            <p className="text-gray-400">Total Weight</p>
            <p className="text-lg text-white">
              {craneData.specifications.weight} tons
            </p>
          </div>
        </div>
      </div>
      <div className="h-80 w-full">
        {chartType === 'line' ? (
          <Line options={options} data={lineBarData} />
        ) : chartType === 'bar' ? (
          <Bar options={options} data={lineBarData} />
        ) : chartType === 'polar' ? (
          <PolarArea options={options} data={polarRadarData} />
        ) : (
          <Radar options={options} data={polarRadarData} />
        )}
      </div>
    </div>
  );
};

export default CraneChart;
