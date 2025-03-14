import React from 'react';
import { InfoIcon, Calendar, Ruler, Weight, Gauge, ArrowUpRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Liebherr Luffing HC-L Specifications | Luffing Crane Charts | lilfoot',
  description: 'Specifications and load charts for the Liebherr Luffing HC-L luffing crane.',
};

export default function LiebherrHCLPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-4">Liebherr Luffing HC-L Crane</h1>
        <p className="text-gray-400 mb-6">
          The Liebherr HC-L series are high-performance luffing jib cranes designed for 
          construction projects with limited space and high-rise applications. These cranes 
          provide impressive lifting capacities with a compact footprint and exceptional 
          performance for challenging urban projects.
        </p>
      </div>

      {/* Coming Soon Notice */}
      <div className="p-6 bg-black rounded-lg shadow-lg border border-highlight">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-highlight/20 rounded-full">
            <InfoIcon className="h-8 w-8 text-highlight" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Coming Soon</h2>
            <p className="text-gray-400">
              Detailed specifications, load charts, and operational data for the Liebherr HC-L luffing crane 
              are currently being prepared. Check back soon for comprehensive information on this high-performance 
              tower crane.
            </p>
            <div className="mt-4 flex items-center gap-2 text-gray-500">
              <Calendar className="h-5 w-5" />
              <span>Expected completion: Q3 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* What to Expect Section */}
      <div className="bg-black p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">What to Expect</h2>
        <p className="text-gray-400 mb-6">
          When completed, this page will provide detailed information about the Liebherr HC-L luffing crane series, 
          including:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-highlight">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <Ruler className="h-5 w-5 text-highlight" />
              Technical Specifications
            </h3>
            <p className="text-gray-400">
              Complete technical data including maximum load capacities, working radii, hook heights, 
              and operational parameters.
            </p>
          </div>
          
          <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-highlight">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <Weight className="h-5 w-5 text-highlight" />
              Load Charts
            </h3>
            <p className="text-gray-400">
              Detailed load capacity tables for various configurations, providing clear information 
              about safe working loads at different radii.
            </p>
          </div>
          
          <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-highlight">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <Gauge className="h-5 w-5 text-highlight" />
              Performance Data
            </h3>
            <p className="text-gray-400">
              Specific information about hoisting speeds, slewing rates, and power requirements for 
              optimal operation planning.
            </p>
          </div>
          
          <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-highlight">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <ArrowUpRight className="h-5 w-5 text-highlight" />
              Setup Configurations
            </h3>
            <p className="text-gray-400">
              Guidance on installation requirements, tower heights, and luffing jib configurations for 
              various project needs.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="bg-black p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Key Features</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
            <span className="text-gray-300">
              High-performance luffing jib design for operation in confined spaces and congested urban environments
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
            <span className="text-gray-300">
              Impressive lifting capacities with maximum loads up to 330 tonnes (varies by model)
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
            <span className="text-gray-300">
              Compact slewing radius for optimized performance in tight spaces
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
            <span className="text-gray-300">
              Advanced control systems for precise load handling and positioning
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
            <span className="text-gray-300">
              Versatile configurations for adaptation to various project requirements
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
} 