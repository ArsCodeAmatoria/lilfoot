import React from 'react';
import CraneTables from '../components/CraneTables';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crane Load Tables | Littlefoot',
  description: 'Comprehensive load tables for different crane configurations and angles.',
};

export default function CraneTablesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-4">Crane Load Capacity Tables</h1>
        <p className="text-gray-400 mb-6">
          These tables provide detailed information about the lifting capacity of the crane
          at different boom lengths and operating radii. Use the tabs to switch between different configurations.
        </p>
      </div>

      {/* Crane Tables Component */}
      <div className="mb-8">
        <CraneTables />
      </div>

      {/* Additional Information */}
      <div className="bg-black p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Understanding Load Tables</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-highlight mb-2">Load-Plus Configuration</h3>
            <p className="text-gray-400">
              The Load-Plus configuration enhances the standard lifting capacity by using additional counterweights
              and specialized boom configurations. This setup is ideal for heavy lifting operations where maximum
              capacity at specific radii is required.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-highlight mb-2">LM1 Configuration</h3>
            <p className="text-gray-400">
              The LM1 configuration represents the standard setup for the crane with normal counterweights.
              This configuration offers a balanced performance for most everyday lifting operations.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-highlight mb-2">30° Jib Angle</h3>
            <p className="text-gray-400">
              When the jib is angled at 30 degrees, the crane achieves better height performance at the cost of some
              lifting capacity. This configuration is particularly useful for reaching over obstacles or working at
              construction sites with height restrictions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-highlight mb-2">How to Read the Tables</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>
                <span className="text-white">Radius (m)</span>: The horizontal distance from the center of rotation to the load
              </li>
              <li>
                <span className="text-white">Column Headers</span>: Represent the boom length in meters
              </li>
              <li>
                <span className="text-white">Table Values</span>: Maximum lifting capacity in kilograms at the intersection of a specific radius and boom length
              </li>
              <li>
                <span className="text-white">Empty Cells (-)</span>: Configurations that are not available or recommended
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-900 rounded-lg">
        <h2 className="text-xl font-bold text-white mb-2">Safety Notice</h2>
        <p className="text-gray-400">
          Always consult the official crane documentation and work with certified operators when planning lifts.
          The values in these tables are for reference only and actual lifting capacities may vary based on
          ground conditions, wind speed, and other environmental factors.
        </p>
      </div>
    </div>
  );
} 