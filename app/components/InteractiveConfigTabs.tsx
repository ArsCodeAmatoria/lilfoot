'use client';

import React, { useState, useEffect } from 'react';
import InteractiveRadiusVisualizer from './InteractiveRadiusVisualizer';

// Keep the data definitions but we won't display them in a table
const loadPlusData = [
  { radius: 12.0, capacity: 6000 },
  { radius: 15.0, capacity: 5360 },
  { radius: 18.0, capacity: 4500 },
  { radius: 21.0, capacity: 3870 },
  { radius: 23.0, capacity: 3530 },
  { radius: 25.0, capacity: 3240 },
  { radius: 27.0, capacity: 2970 },
  { radius: 29.0, capacity: 2720 },
  { radius: 31.0, capacity: 2580 },
  { radius: 33.0, capacity: 2410 },
  { radius: 35.0, capacity: 2260 },
  { radius: 37.0, capacity: 2130 },
  { radius: 40.0, capacity: 1950 },
  { radius: 42.0, capacity: 1840 },
  { radius: 45.0, capacity: 1700 },
  { radius: 48.0, capacity: 1350 }
];

const lm1Data = [
  { radius: 12.0, capacity: 6000 },
  { radius: 15.0, capacity: 5220 },
  { radius: 18.0, capacity: 4230 },
  { radius: 21.0, capacity: 3540 },
  { radius: 23.0, capacity: 3180 },
  { radius: 25.0, capacity: 2890 },
  { radius: 27.0, capacity: 2640 },
  { radius: 29.0, capacity: 2420 },
  { radius: 31.0, capacity: 2230 },
  { radius: 33.0, capacity: 2070 },
  { radius: 35.0, capacity: 1920 },
  { radius: 37.0, capacity: 1800 },
  { radius: 40.0, capacity: 1630 },
  { radius: 42.0, capacity: 1530 },
  { radius: 45.0, capacity: 1400 },
  { radius: 48.0, capacity: 1100 }
];

const jibAngleData = [
  { radius: 12.0, capacity: 3000 },
  { radius: 14.0, capacity: 3000 },
  { radius: 16.0, capacity: 3000 },
  { radius: 18.0, capacity: 2960 },
  { radius: 20.0, capacity: 2740 },
  { radius: 22.0, capacity: 2540 },
  { radius: 25.0, capacity: 2290 },
  { radius: 28.0, capacity: 2080 },
  { radius: 30.0, capacity: 1960 },
  { radius: 31.7, capacity: 1860 },
  { radius: 33.0, capacity: 1790 },
  { radius: 35.0, capacity: 1700 },
  { radius: 36.0, capacity: 1670 },
  { radius: 37.0, capacity: 1650 },
  { radius: 38.6, capacity: 1400 }
];

type TabType = 'loadPlus' | 'lm1' | 'jibAngle';

const InteractiveConfigTabs: React.FC = () => {
  // Track mounted state to avoid hydration issues
  const [mounted, setMounted] = useState(false);
  // Start with no tab active (will be set after mounting)
  const [activeTab, setActiveTab] = useState<TabType | null>(null);
  
  // Set initial state after component mounts to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    setActiveTab('loadPlus');
  }, []);
  
  // Don't render anything complex during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="bg-black rounded-lg shadow-lg overflow-hidden p-6">
        <p className="text-gray-400">Loading visualizer...</p>
      </div>
    );
  }

  // Render the content for the active tab
  const renderTabContent = () => {
    switch(activeTab) {
      case 'loadPlus':
        return (
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Load-Plus Configuration</h3>
            <p className="text-gray-400 mb-6">
              The Load-Plus configuration provides enhanced lifting capacity with additional counterweights.
              This setup offers up to 20% more capacity compared to the standard LM1 configuration.
            </p>
            <InteractiveRadiusVisualizer configuration="loadPlus" />
          </div>
        );
      
      case 'lm1':
        return (
          <div>
            <h3 className="text-xl font-bold text-white mb-4">LM1 Configuration</h3>
            <p className="text-gray-400 mb-6">
              The LM1 configuration is the standard setup with normal counterweights,
              optimized for everyday lifting tasks with balanced performance.
            </p>
            <InteractiveRadiusVisualizer configuration="lm1" />
          </div>
        );
      
      case 'jibAngle':
        return (
          <div>
            <h3 className="text-xl font-bold text-white mb-4">30° Jib Angle Configuration</h3>
            <p className="text-gray-400 mb-6">
              With the jib angled at 30°, the crane achieves increased hook height up to 40.4 meters,
              ideal for reaching over obstacles or working in height-restricted areas.
            </p>
            <InteractiveRadiusVisualizer configuration="jibAngle" />
          </div>
        );
      
      default:
        return <div className="text-gray-400">Select a configuration</div>;
    }
  };
  
  return (
    <div className="bg-black rounded-lg shadow-lg overflow-hidden">
      {/* Tab buttons */}
      <div className="border-b border-gray-800">
        <nav className="flex flex-wrap" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'loadPlus'}
            aria-controls="loadPlusPanel"
            id="loadPlusTab"
            className={`px-6 py-3 text-white font-medium border-b-2 outline-none ${
              activeTab === 'loadPlus' ? 'border-highlight bg-gray-900' : 'border-transparent'
            }`}
            onClick={() => setActiveTab('loadPlus')}
            type="button"
          >
            Load-Plus Configuration
          </button>
          
          <button
            role="tab"
            aria-selected={activeTab === 'lm1'}
            aria-controls="lm1Panel"
            id="lm1Tab"
            className={`px-6 py-3 text-white font-medium border-b-2 outline-none ${
              activeTab === 'lm1' ? 'border-highlight bg-gray-900' : 'border-transparent'
            }`}
            onClick={() => setActiveTab('lm1')}
            type="button"
          >
            LM1 Configuration
          </button>
          
          <button
            role="tab"
            aria-selected={activeTab === 'jibAngle'}
            aria-controls="jibAnglePanel"
            id="jibAngleTab"
            className={`px-6 py-3 text-white font-medium border-b-2 outline-none ${
              activeTab === 'jibAngle' ? 'border-highlight bg-gray-900' : 'border-transparent'
            }`}
            onClick={() => setActiveTab('jibAngle')}
            type="button"
          >
            30° Jib Angle Configuration
          </button>
        </nav>
      </div>
      
      {/* Tab content */}
      <div className="p-6" role="tabpanel">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default InteractiveConfigTabs; 