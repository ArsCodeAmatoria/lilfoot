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

interface CraneCapacityChartProps {
  unitType: "18kW" | "30kW";
}

const CraneCapacityChart: React.FC<CraneCapacityChartProps> = ({ unitType }) => {
  // Data for different unit types
  const chartConfig = {
    "18kW": {
      title: "Speed vs Load Capacity - 18 kW FU",
      loadPoints: [6.00, 0.38],
      speedPoints: [15, 86],
      color: "#53C03F"
    },
    "30kW": {
      title: "Speed vs Load Capacity - 30 kW FU",
      loadPoints: [6.00, 0.50],
      speedPoints: [26, 123],
      color: "#3B82F6"
    }
  };

  const selectedConfig = chartConfig[unitType];

  // Generate curve points
  const generateCurvePoints = () => {
    const { loadPoints, speedPoints } = selectedConfig;
    
    const numPoints = 10;
    const loadValues = [];
    const speedValues = [];

    for (let i = 0; i < numPoints; i++) {
      const t = i / (numPoints - 1);
      // Create an exponential curve for a more natural relationship
      const loadValue = loadPoints[0] * Math.pow(loadPoints[1] / loadPoints[0], t);
      const speedValue = speedPoints[0] * Math.pow(speedPoints[1] / speedPoints[0], t);
      
      loadValues.push(loadValue);
      speedValues.push(speedValue);
    }

    return { loadValues, speedValues };
  };

  const { loadValues, speedValues } = generateCurvePoints();

  const chartData = {
    labels: speedValues,
    datasets: [
      {
        label: 'Load Capacity (t)',
        data: loadValues,
        borderColor: selectedConfig.color,
        backgroundColor: `${selectedConfig.color}33`,
        tension: 0.4,
        fill: true,
        pointBackgroundColor: selectedConfig.color,
        pointBorderColor: '#fff',
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

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
        text: selectedConfig.title,
        color: '#ffffff',
        font: {
          size: 16,
          weight: 'bold' as const,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `Load: ${context.parsed.y.toFixed(2)}t at ${context.parsed.x.toFixed(1)} m/min`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Speed (m/min)',
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
          text: 'Load Capacity (t)',
          color: '#ffffff',
        },
        ticks: {
          color: '#cccccc',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Line options={options} data={chartData} />
    </div>
  );
};

export default CraneCapacityChart; 