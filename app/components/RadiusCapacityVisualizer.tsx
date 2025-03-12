'use client';

import React, { useState, useEffect } from 'react';
import { GiCrane } from 'react-icons/gi';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';

// Define the Load-Plus load capacity data (same as Liebherr81kCapacityChart component)
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

interface RadiusCapacityVisualizerProps {
  configuration: 'loadPlus' | 'lm1' | 'jibAngle';
}

const RadiusCapacityVisualizer: React.FC<RadiusCapacityVisualizerProps> = ({ configuration }) => {
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
  
  // Get min/max radius for the configuration
  const minRadius = currentData[0].radius;
  const maxRadius = currentData[currentData.length - 1].radius;
  
  // State for the slider value (radius)
  const [radius, setRadius] = useState(minRadius);
  const [capacityKg, setCapacityKg] = useState(currentData[0].capacityKg);
  
  // Update capacity when radius changes
  useEffect(() => {
    // Find the closest data points to the current radius
    // and interpolate the capacity value between them
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
  
  // Calculate percentage of max capacity (for visualization)
  const maxCapacity = currentData[0].capacityKg;
  const capacityPercentage = (capacityKg / maxCapacity) * 100;
  
  // Calculate scaled (normalized) radius percentage for visual representation
  const radiusPercentage = ((radius - minRadius) / (maxRadius - minRadius)) * 100;
  
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-white mb-4">
        Interactive Radius-Capacity Visualizer ({getConfigTitle()})
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Visual representation */}
        <div className="col-span-2 bg-black rounded-lg p-4 flex flex-col items-center justify-center relative h-80">
          {/* Center point (crane) */}
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
            <div className="flex flex-col items-center">
              <GiCrane className="text-yellow-500 text-5xl" />
              <div className="text-gray-400 text-xs mt-1">Crane Mast</div>
            </div>
          </div>
          
          {/* Radius line */}
          <div 
            className="absolute top-1/2 left-10 h-2 bg-highlight origin-left transform -translate-y-1/2"
            style={{ 
              width: `${radiusPercentage * 0.75}%`, 
              maxWidth: '85%',
              transition: 'width 0.3s ease-in-out' 
            }}
          />
          
          {/* Load/Hook icon at end of radius line */}
          <div 
            className="absolute top-1/2 transform -translate-y-1/2"
            style={{ 
              left: `calc(10px + ${radiusPercentage * 0.75}%)`,
              maxWidth: '85%',
              transition: 'left 0.3s ease-in-out'
            }}
          >
            <div className="flex flex-col items-center">
              <div className="bg-white p-2 rounded-full">
                <MdOutlineAirlineSeatReclineExtra 
                  className={`${capacityPercentage > 50 ? 'text-green-500' : capacityPercentage > 25 ? 'text-yellow-500' : 'text-red-500'} text-3xl`}
                />
              </div>
              <div className="text-white text-xs mt-1 bg-gray-800 px-2 py-1 rounded-md">
                {capacityKg.toLocaleString()} kg
              </div>
            </div>
          </div>
          
          {/* Radius indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-highlight text-2xl font-bold">{radius.toFixed(1)} m</div>
            <div className="text-gray-400 text-sm">Radius</div>
          </div>
        </div>
        
        {/* Data display */}
        <div className="bg-black rounded-lg p-4 flex flex-col justify-between">
          <div>
            <h4 className="text-highlight font-semibold mb-4">Lifting Parameters</h4>
            
            <div className="space-y-4">
              <div>
                <div className="text-gray-400 text-sm">Jib Radius</div>
                <div className="text-white text-xl font-medium">
                  {radius.toFixed(1)} m <span className="text-gray-500 text-sm">({(radius * 3.281).toFixed(1)} ft)</span>
                </div>
              </div>
              
              <div>
                <div className="text-gray-400 text-sm">Lifting Capacity</div>
                <div className="text-white text-xl font-medium">
                  {capacityKg.toLocaleString()} kg
                  <span className="text-gray-500 text-sm"> ({capacityLbs.toLocaleString()} lbs)</span>
                </div>
              </div>
              
              <div>
                <div className="text-gray-400 text-sm">Maximum Capacity</div>
                <div className="text-white text-xl font-medium">
                  {maxCapacity.toLocaleString()} kg
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                  <div 
                    className={`h-2.5 rounded-full ${capacityPercentage > 66 ? 'bg-green-500' : capacityPercentage > 33 ? 'bg-yellow-500' : 'bg-red-500'}`}
                    style={{ width: `${capacityPercentage}%` }}
                  />
                </div>
                <div className="text-gray-400 text-xs mt-1">{capacityPercentage.toFixed(0)}% of maximum</div>
              </div>
            </div>
          </div>
          
          <div className="text-gray-400 text-xs italic mt-4">
            All values are interpolated from the Liebherr 81k load charts.
            Always refer to official documentation for planning.
          </div>
        </div>
      </div>
      
      {/* Slider control */}
      <div className="mt-6">
        <label htmlFor="radius-slider" className="block text-white mb-2">Adjust Radius: {radius.toFixed(1)} m</label>
        <input
          id="radius-slider"
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

export default RadiusCapacityVisualizer; 