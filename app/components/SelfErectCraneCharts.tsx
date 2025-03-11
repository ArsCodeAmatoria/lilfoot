'use client';

import React, { useState, useRef, useEffect } from 'react';

// Liebherr 81k Self-Erect Crane data
const craneData = {
  model: 'Liebherr 81k Self-Erecting Crane',
  specifications: {
    maxCapacity: 6, // tons
    maxRadius: 45, // meters
    maxHookHeight: 40.4, // meters
    jibLength: 45, // meters
    counterweight: 40, // tons
    transportDimensions: {
      length: 15.3, // meters
      width: 2.5, // meters
      height: 3.9, // meters
    },
    setupTime: 20, // minutes (approximate)
    power: '400V, 32A',
  },
  loadCharts: {
    // Load-Plus LM 1 configuration (standard jib)
    loadPlusLM1: [
      { radius: 2.8, capacity: 6000 }, // kg
      { radius: 3.3, capacity: 6000 },
      { radius: 4.0, capacity: 6000 },
      { radius: 5.0, capacity: 6000 },
      { radius: 6.0, capacity: 6000 },
      { radius: 7.0, capacity: 6000 },
      { radius: 8.0, capacity: 6000 },
      { radius: 9.0, capacity: 5800 },
      { radius: 10.0, capacity: 5300 },
      { radius: 12.0, capacity: 4400 },
      { radius: 14.0, capacity: 3700 },
      { radius: 16.0, capacity: 3200 },
      { radius: 18.0, capacity: 2800 },
      { radius: 20.0, capacity: 2500 },
      { radius: 22.0, capacity: 2200 },
      { radius: 24.0, capacity: 2000 },
      { radius: 26.0, capacity: 1800 },
      { radius: 28.0, capacity: 1650 },
      { radius: 30.0, capacity: 1500 },
      { radius: 32.0, capacity: 1350 },
      { radius: 34.0, capacity: 1250 },
      { radius: 36.0, capacity: 1100 },
      { radius: 38.0, capacity: 1000 },
      { radius: 40.0, capacity: 900 },
      { radius: 42.0, capacity: 800 },
      { radius: 45.0, capacity: 650 },
    ],
    // 30 degree jib configuration
    "30Degree": [
      { radius: 2.8, capacity: 4200 }, // kg
      { radius: 3.3, capacity: 4200 },
      { radius: 4.0, capacity: 4200 },
      { radius: 5.0, capacity: 4200 },
      { radius: 6.0, capacity: 4200 },
      { radius: 7.0, capacity: 4200 },
      { radius: 8.0, capacity: 4200 },
      { radius: 9.0, capacity: 4000 },
      { radius: 10.0, capacity: 3700 },
      { radius: 12.0, capacity: 3100 },
      { radius: 14.0, capacity: 2600 },
      { radius: 16.0, capacity: 2200 },
      { radius: 18.0, capacity: 2000 },
      { radius: 20.0, capacity: 1800 },
      { radius: 22.0, capacity: 1600 },
      { radius: 24.0, capacity: 1400 },
      { radius: 26.0, capacity: 1300 },
      { radius: 28.0, capacity: 1200 },
      { radius: 30.0, capacity: 1100 },
      { radius: 32.0, capacity: 1000 },
      { radius: 34.0, capacity: 900 },
      { radius: 36.0, capacity: 800 },
      { radius: 38.0, capacity: 700 },
      { radius: 40.0, capacity: 650 },
      { radius: 42.0, capacity: 600 },
      { radius: 45.0, capacity: 500 },
    ],
  }
};

interface SelfErectCraneChartsProps {
  highlightColor?: string;
}

const SelfErectCraneCharts: React.FC<SelfErectCraneChartsProps> = ({
  highlightColor = '#53C03F',
}) => {
  const [activeTab, setActiveTab] = useState<'loadPlusLM1' | '30Degree'>('loadPlusLM1');
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
    // (This is simplified since the full SVG implementation is complex)
    
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
              activeTab === 'loadPlusLM1'
                ? `border-b-2 text-white border-${highlightColor.replace('#', '')}`
                : 'text-gray-400'
            }`}
            style={activeTab === 'loadPlusLM1' ? { borderColor: highlightColor } : {}}
            onClick={() => setActiveTab('loadPlusLM1')}
          >
            Load-Plus LM 1 Configuration
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium ${
              activeTab === '30Degree'
                ? `border-b-2 text-white border-${highlightColor.replace('#', '')}`
                : 'text-gray-400'
            }`}
            style={activeTab === '30Degree' ? { borderColor: highlightColor } : {}}
            onClick={() => setActiveTab('30Degree')}
          >
            30° Jib Configuration
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
            <p className="text-gray-400">Counterweight</p>
            <p className="text-white text-lg">{craneData.specifications.counterweight} tons</p>
          </div>
          <div className="bg-gray-900 p-3 rounded">
            <p className="text-gray-400">Setup Time</p>
            <p className="text-white text-lg">~{craneData.specifications.setupTime} minutes</p>
          </div>
        </div>
      </div>

      {/* Configuration description */}
      <div className="p-4 border-b border-gray-800">
        <h3 className="text-xl font-semibold text-white mb-3">
          {activeTab === 'loadPlusLM1' ? 'Load-Plus LM 1 Configuration' : '30° Jib Configuration'}
        </h3>
        <p className="text-gray-400">
          {activeTab === 'loadPlusLM1'
            ? 'Standard configuration with horizontal jib providing maximum lifting capacity at all radiuses.'
            : '30° angled jib configuration, optimizing hook height at the cost of some lifting capacity.'}
        </p>
      </div>

      {/* Load chart */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-3">Load Chart</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-900">
                <th className="px-4 py-2 text-gray-300 font-semibold">Radius (m)</th>
                <th className="px-4 py-2 text-gray-300 font-semibold">Capacity (kg)</th>
                <th className="px-4 py-2 text-gray-300 font-semibold">Capacity (tons)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {craneData.loadCharts[activeTab].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-900/30" : ""}>
                  <td className="px-4 py-2 text-white">{row.radius}</td>
                  <td className="px-4 py-2 text-white">{row.capacity}</td>
                  <td className="px-4 py-2 text-white">{(row.capacity / 1000).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Visual representation - client-side only */}
      <div className="p-4 border-t border-gray-800">
        <h3 className="text-xl font-semibold text-white mb-3">Visual Representation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column: Radius vs Capacity Chart */}
          <div className="bg-gray-900 p-4 rounded-lg">
            <h4 className="text-white font-medium mb-3">Radius vs Capacity</h4>
            <div className="h-80 relative">
              {isClient ? (
                <div ref={chartRef} className="w-full h-full"></div>
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <p className="text-gray-400">Loading chart...</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Right column: Simplified Crane Diagram - Static version for SSR */}
          <div className="bg-gray-900 p-4 rounded-lg">
            <h4 className="text-white font-medium mb-3">Crane Configuration</h4>
            <div className="h-80 relative flex items-center justify-center">
              {isClient ? (
                <svg width="100%" height="100%" viewBox="0 0 500 300" preserveAspectRatio="xMidYMid meet">
                  {/* Base */}
                  <rect x="230" y="280" width="40" height="20" fill="#444" />
                  <rect x="220" y="270" width="60" height="10" fill="#333" />
                  
                  {/* Tower */}
                  <rect x="240" y="140" width="20" height="130" fill="#666" />
                  
                  {/* Operator cab */}
                  <rect x="237" y="130" width="26" height="15" rx="2" fill="#555" />
                  
                  {/* Counter jib */}
                  <line x1="250" y1="130" x2="180" y2="100" stroke="#777" strokeWidth="5" />
                  <circle cx="180" cy="100" r="8" fill="#888" />
                  
                  {/* Main jib */}
                  {activeTab === 'loadPlusLM1' ? (
                    <line x1="250" y1="130" x2="450" y2="130" stroke="#777" strokeWidth="5" />
                  ) : (
                    <line x1="250" y1="130" x2="430" y2="80" stroke="#777" strokeWidth="5" />
                  )}
                  
                  {/* Hook */}
                  {activeTab === 'loadPlusLM1' ? (
                    <>
                      <line x1="350" y1="130" x2="350" y2="200" stroke="#999" strokeWidth="1" strokeDasharray="4,2" />
                      <rect x="340" y="200" width="20" height="15" fill={highlightColor} opacity="0.8" />
                    </>
                  ) : (
                    <>
                      <line x1="340" y1="105" x2="340" y2="200" stroke="#999" strokeWidth="1" strokeDasharray="4,2" />
                      <rect x="330" y="200" width="20" height="15" fill={highlightColor} opacity="0.8" />
                    </>
                  )}
                  
                  {/* Text labels */}
                  <text x="250" y="100" fontSize="12" fill="#fff" textAnchor="middle">
                    {activeTab === '30Degree' ? '30°' : 'Horizontal'}
                  </text>
                  <text x="250" y="250" fontSize="10" fill="#aaa" textAnchor="middle">
                    Liebherr 81k
                  </text>
                </svg>
              ) : (
                <div className="text-gray-400">Loading crane diagram...</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Source note */}
      <div className="p-4 border-t border-gray-800 text-sm text-gray-500">
        <p>Data source: Specifications based on manufacturer data. Actual performance may vary based on configuration and conditions.</p>
        <p>For more information: <a href="https://www.liebherr.com" className="hover:underline" style={{ color: highlightColor }} target="_blank" rel="noopener noreferrer">liebherr.com</a></p>
      </div>
    </div>
  );
};

export default SelfErectCraneCharts;
