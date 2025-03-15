'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the chart component to avoid SSR issues with Chart.js
const CraneCapacityChart = dynamic(
  () => import('./CraneCapacityChart'),
  { ssr: false }
);

interface DrivingUnitChartProps {
  unitType: "18kW" | "30kW";
}

const DrivingUnitCharts: React.FC<DrivingUnitChartProps> = ({ unitType }) => {
  // Data for 18kW unit
  const data18kW = {
    title: "Speed vs Load Capacity - 18 kW FU",
    loadPoints: [6.00, 0.38],
    speedPoints: [15, 86],
    color: "#53C03F"
  };

  // Data for 30kW unit
  const data30kW = {
    title: "Speed vs Load Capacity - 30 kW FU",
    loadPoints: [6.00, 0.50],
    speedPoints: [26, 123],
    color: "#3B82F6"
  };

  // Select the appropriate data based on unit type
  const chartData = unitType === "18kW" ? data18kW : data30kW;

  return (
    <div className="w-full h-64 bg-gray-800 rounded-lg p-4">
      <CraneCapacityChart
        unitType={unitType}
      />
    </div>
  );
};

export default DrivingUnitCharts; 