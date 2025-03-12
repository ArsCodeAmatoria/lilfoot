'use client';

import React, { useState, useEffect } from 'react';
import { GiCrane } from 'react-icons/gi';

// Define the load capacity data for different configurations
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

interface InteractiveRadiusVisualizerProps {
  configuration: 'loadPlus' | 'lm1' | 'jibAngle';
}

const InteractiveRadiusVisualizer: React.FC<InteractiveRadiusVisualizerProps> = ({ configuration }) => {
  // Get data for current configuration
  const getData = () => {
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

  const currentData = getData();
  
  // Get min/max radius for the configuration
  const minRadius = currentData[0].radius;
  const maxRadius = currentData[currentData.length - 1].radius;
  
  // State for the slider value
  const [radius, setRadius] = useState(minRadius);
  const [capacityKg, setCapacityKg] = useState(currentData[0].capacityKg);
  
  // Update capacity when radius changes
  useEffect(() => {
    // Find the closest data points to the current radius
    let lowerIndex = 0;
    let upperIndex = 0;
    
    for (let i = 0; i < currentData.length; i++) {
      if (currentData[i].radius <= radius) {
        lowerIndex = i;
      }
      if (currentData[i].radius >= radius && upperIndex === 0) {
        upperIndex = i;
      }
    }
    
    if (lowerIndex === upperIndex) {
      // Exact match or at min/max
      setCapacityKg(currentData[lowerIndex].capacityKg);
    } else {
      // Interpolate between points
      const lowerRadius = currentData[lowerIndex].radius;
      const upperRadius = currentData[upperIndex].radius;
      const lowerCapacity = currentData[lowerIndex].capacityKg;
      const upperCapacity = currentData[upperIndex].capacityKg;
      
      const percentage = (radius - lowerRadius) / (upperRadius - lowerRadius);
      const interpolatedCapacity = lowerCapacity + percentage * (upperCapacity - lowerCapacity);
      
      setCapacityKg(Math.round(interpolatedCapacity));
    }
  }, [radius, currentData]);
  
  // Format capacity in pounds
  const capacityLbs = Math.round(capacityKg * 2.205);
  
  // Get configuration title
  const getConfigTitle = () => {
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
  
  return (
    <div className="bg-gray-900 p-6 rounded-lg mb-6">
      <h3 className="text-xl font-bold text-white mb-4">{getConfigTitle()}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        {/* Visual info display */}
        <div className="bg-black p-6 rounded-lg flex flex-col items-center justify-center">
          <div className="flex items-center justify-center space-x-6 mb-4">
            <GiCrane className="text-yellow-500 text-6xl" />
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white">{capacityKg.toLocaleString()} kg</div>
              <div className="text-sm text-gray-400">Maximum Capacity at Current Radius</div>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <div className="text-2xl font-bold text-highlight">{radius.toFixed(1)} m</div>
            <div className="text-gray-400">Current Jib Radius</div>
          </div>
        </div>
        
        {/* Details panel */}
        <div className="bg-black p-6 rounded-lg">
          <div className="space-y-4">
            <div>
              <div className="text-gray-400">Jib Radius:</div>
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">{radius.toFixed(1)} meters</span>
                <span className="text-gray-500 text-sm">({(radius * 3.281).toFixed(1)} ft)</span>
              </div>
            </div>
            
            <div>
              <div className="text-gray-400">Lifting Capacity:</div>
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">{capacityKg.toLocaleString()} kg</span>
                <span className="text-gray-500 text-sm">({capacityLbs.toLocaleString()} lbs)</span>
              </div>
            </div>
            
            <div>
              <div className="text-gray-400">Operation Range:</div>
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">{minRadius.toFixed(1)} - {maxRadius.toFixed(1)} m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Slider control */}
      <div className="mt-6">
        <label htmlFor={`radius-slider-${configuration}`} className="block text-white mb-2">
          Adjust Radius: <span className="text-highlight font-medium">{radius.toFixed(1)} m</span>
        </label>
        <input
          id={`radius-slider-${configuration}`}
          type="range"
          min={minRadius}
          max={maxRadius}
          step="0.1"
          value={radius}
          onChange={(e) => setRadius(parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-highlight"
        />
        <div className="flex justify-between text-gray-500 text-sm mt-1">
          <span>{minRadius.toFixed(1)} m</span>
          <span>{maxRadius.toFixed(1)} m</span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveRadiusVisualizer; 