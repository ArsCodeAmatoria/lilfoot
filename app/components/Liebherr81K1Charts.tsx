'use client';

import React, { useState, useRef, useEffect } from 'react';

// Liebherr 81K.1 Self-Erect Crane data
const craneData = {
  model: 'Liebherr 81K.1 Self-Erecting Crane',
  specifications: {
    maxCapacity: 6, // tons
    maxRadius: 45, // meters
    maxHookHeight: 40.4, // meters
    jibLength: 45, // meters
    counterweight: 42, // tons
    transportDimensions: {
      length: 15.5, // meters
      width: 2.5, // meters
      height: 4.0, // meters
    },
    setupTime: 20, // minutes (approximate)
    power: '400V, 32A',
  },
  loadCharts: {
    // LM-1 configuration (standard configuration)
    "LM1": [
      { radius: 2.8, capacity: 6000 }, // kg
      { radius: 3.3, capacity: 6000 },
      { radius: 4.0, capacity: 6000 },
      { radius: 5.0, capacity: 6000 },
      { radius: 6.0, capacity: 6000 },
      { radius: 7.0, capacity: 6000 },
      { radius: 8.0, capacity: 6000 },
      { radius: 9.0, capacity: 5900 },
      { radius: 10.0, capacity: 5400 },
      { radius: 12.0, capacity: 4500 },
      { radius: 14.0, capacity: 3800 },
      { radius: 16.0, capacity: 3300 },
      { radius: 18.0, capacity: 2900 },
      { radius: 20.0, capacity: 2600 },
      { radius: 22.0, capacity: 2300 },
      { radius: 24.0, capacity: 2100 },
      { radius: 26.0, capacity: 1900 },
      { radius: 28.0, capacity: 1750 },
      { radius: 30.0, capacity: 1600 },
      { radius: 32.0, capacity: 1450 },
      { radius: 34.0, capacity: 1350 },
      { radius: 36.0, capacity: 1200 },
      { radius: 38.0, capacity: 1100 },
      { radius: 40.0, capacity: 1000 },
      { radius: 42.0, capacity: 900 },
      { radius: 45.0, capacity: 750 },
    ],
    // Load-Plus configuration
    "LoadPlus": [
      { radius: 2.8, capacity: 4500 }, // kg
      { radius: 3.3, capacity: 4500 },
      { radius: 4.0, capacity: 4500 },
      { radius: 5.0, capacity: 4500 },
      { radius: 6.0, capacity: 4500 },
      { radius: 7.0, capacity: 4500 },
      { radius: 8.0, capacity: 4500 },
      { radius: 9.0, capacity: 4200 },
      { radius: 10.0, capacity: 3900 },
      { radius: 12.0, capacity: 3300 },
      { radius: 14.0, capacity: 2800 },
      { radius: 16.0, capacity: 2400 },
      { radius: 18.0, capacity: 2200 },
      { radius: 20.0, capacity: 2000 },
      { radius: 22.0, capacity: 1800 },
      { radius: 24.0, capacity: 1600 },
      { radius: 26.0, capacity: 1400 },
      { radius: 28.0, capacity: 1300 },
      { radius: 30.0, capacity: 1200 },
      { radius: 32.0, capacity: 1100 },
      { radius: 34.0, capacity: 1000 },
      { radius: 36.0, capacity: 900 },
      { radius: 38.0, capacity: 800 },
      { radius: 40.0, capacity: 700 },
      { radius: 42.0, capacity: 650 },
      { radius: 45.0, capacity: 550 },
    ],
  }
};

interface Liebherr81K1ChartsProps {
  highlightColor?: string;
}

const Liebherr81K1Charts: React.FC<Liebherr81K1ChartsProps> = ({
  highlightColor = '#53C03F',
}) => {
  const [activeTab, setActiveTab] = useState<'LM1' | 'LoadPlus'>('LM1');
  const [isClient, setIsClient] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  // Only run visualization code on the client side
  useEffect(() => {
    setIsClient(true);
    
    if (chartRef.current) {
      drawVisualization();
    }
  }, [activeTab]);
  
  // Function to draw the visualization using basic DOM/SVG
  const drawVisualization = () => {
    if (!chartRef.current || typeof window === 'undefined') return;
    
    const chartContainer = chartRef.current;
    chartContainer.innerHTML = '';
    
    const svgns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", "0 0 600 300");
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    
    // Draw the visualization logic here...
    // X and Y axes
    const xAxis = document.createElementNS(svgns, "line");
    xAxis.setAttribute("x1", "50");
    xAxis.setAttribute("y1", "250");
    xAxis.setAttribute("x2", "550");
    xAxis.setAttribute("y2", "250");
    xAxis.setAttribute("stroke", "#555");
    xAxis.setAttribute("stroke-width", "1");
    svg.appendChild(xAxis);
    
    const yAxis = document.createElementNS(svgns, "line");
    yAxis.setAttribute("x1", "50");
    yAxis.setAttribute("y1", "50");
    yAxis.setAttribute("x2", "50");
    yAxis.setAttribute("y2", "250");
    yAxis.setAttribute("stroke", "#555");
    yAxis.setAttribute("stroke-width", "1");
    svg.appendChild(yAxis);
    
    // Data points
    const points = craneData.loadCharts[activeTab];
    const maxRadius = craneData.specifications.maxRadius;
    const maxCapacity = 6000;
    
    let pathData = "";
    
    points.forEach((point, index) => {
      const x = 50 + (point.radius / maxRadius) * 500;
      const y = 250 - (point.capacity / maxCapacity) * 200;
      
      if (index === 0) {
        pathData = `M${x},${y}`;
      } else {
        pathData += ` L${x},${y}`;
      }
      
      const dot = document.createElementNS(svgns, "circle");
      dot.setAttribute("cx", String(x));
      dot.setAttribute("cy", String(y));
      dot.setAttribute("r", "3");
      dot.setAttribute("fill", highlightColor);
      svg.appendChild(dot);
    });
    
    // Data line
    const path = document.createElementNS(svgns, "path");
    path.setAttribute("d", pathData);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", highlightColor);
    path.setAttribute("stroke-width", "2");
    path.setAttribute("opacity", "0.7");
    svg.appendChild(path);
    
    // Labels
    const xLabel = document.createElementNS(svgns, "text");
    xLabel.setAttribute("x", "300");
    xLabel.setAttribute("y", "280");
    xLabel.setAttribute("text-anchor", "middle");
    xLabel.setAttribute("fill", "#999");
    xLabel.textContent = "Radius (m)";
    svg.appendChild(xLabel);
    
    const yLabel = document.createElementNS(svgns, "text");
    yLabel.setAttribute("x", "30");
    yLabel.setAttribute("y", "150");
    yLabel.setAttribute("text-anchor", "middle");
    yLabel.setAttribute("transform", "rotate(-90, 30, 150)");
    yLabel.setAttribute("fill", "#999");
    yLabel.textContent = "Capacity (kg)";
    svg.appendChild(yLabel);
    
    chartContainer.appendChild(svg);
  };

  return (
    <div className="bg-black rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-gray-900 border-b border-gray-800">
        <h2 className="text-2xl font-bold text-white">{craneData.model}</h2>
        <p className="text-gray-400">Self-Erecting Tower Crane</p>
      </div>

      {/* Configuration tabs */}
      <div className="border-b border-gray-800">
        <div className="flex">
          <button
            className={`px-4 py-3 text-sm font-medium ${
              activeTab === 'LM1'
                ? `border-b-2 text-white border-${highlightColor.replace('#', '')}`
                : 'text-gray-400'
            }`}
            style={activeTab === 'LM1' ? { borderColor: highlightColor } : {}}
            onClick={() => setActiveTab('LM1')}
          >
            LM-1 Configuration
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium ${
              activeTab === 'LoadPlus'
                ? `border-b-2 text-white border-${highlightColor.replace('#', '')}`
                : 'text-gray-400'
            }`}
            style={activeTab === 'LoadPlus' ? { borderColor: highlightColor } : {}}
            onClick={() => setActiveTab('LoadPlus')}
          >
            Load-Plus Configuration
          </button>
        </div>
      </div>

      {/* Specifications */}
      <div className="p-4 border-b border-gray-800">
        <h3 className="text-xl font-semibold text-white mb-3">Crane Specifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900 p-3 rounded">
            <p className="text-gray-400">Max Capacity</p>
            <p className="text-white text-lg">{craneData.specifications.maxCapacity} tons</p>
          </div>
          <div className="bg-gray-900 p-3 rounded">
            <p className="text-gray-400">Max Radius</p>
            <p className="text-white text-lg">{craneData.specifications.maxRadius} m</p>
          </div>
          <div className="bg-gray-900 p-3 rounded">
            <p className="text-gray-400">Max Hook Height</p>
            <p className="text-white text-lg">{craneData.specifications.maxHookHeight} m</p>
          </div>
          <div className="bg-gray-900 p-3 rounded">
            <p className="text-gray-400">Jib Length</p>
            <p className="text-white text-lg">{craneData.specifications.jibLength} m</p>
          </div>
          <div className="bg-gray-900 p-3 rounded">
            <p className="text-gray-400">Setup Time</p>
            <p className="text-white text-lg">~{craneData.specifications.setupTime} minutes</p>
          </div>
          <div className="bg-gray-900 p-3 rounded">
            <p className="text-gray-400">Power</p>
            <p className="text-white text-lg">{craneData.specifications.power}</p>
          </div>
        </div>
      </div>

      {/* Capacity visualization */}
      <div className="p-4 border-b border-gray-800">
        <h3 className="text-xl font-semibold text-white mb-3">Load Capacity Chart</h3>
        <div className="bg-gray-900 p-4 rounded">
          <div ref={chartRef} className="h-64 w-full"></div>
        </div>
      </div>

      {/* Load Table */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-3">Load Table</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-900">
                <th className="p-2 text-left text-gray-400">Radius (m)</th>
                <th className="p-2 text-left text-gray-400">Capacity (kg)</th>
              </tr>
            </thead>
            <tbody>
              {craneData.loadCharts[activeTab].map((point, index) => (
                <tr 
                  key={index} 
                  className={index % 2 === 0 ? 'bg-gray-900/30' : ''}
                >
                  <td className="p-2 text-white">{point.radius}</td>
                  <td className="p-2 text-white">{point.capacity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Liebherr81K1Charts; 