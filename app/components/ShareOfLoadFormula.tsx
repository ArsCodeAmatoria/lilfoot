'use client';

import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card';
import { motion, Variants } from 'framer-motion';
import React from 'react';

const ShareOfLoadFormula = () => {
  const d1 = 5; // Distance 1 in feet
  const d2 = 15; // Distance 2 in feet
  const totalLoad = 10000; // Total weight in lbs

  // Calculate shares of load
  const point1Share = Math.round((d2 / (d1 + d2)) * totalLoad); // 7,500 lbs
  const point2Share = Math.round((d1 / (d1 + d2)) * totalLoad); // 2,500 lbs

  const arrowAnimation: Variants = {
    initial: { y: -5, opacity: 0.2 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        repeat: Infinity, 
        repeatType: "reverse" as const, 
        duration: 1.5 
      }
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Formula Card */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader className="border-b border-gray-800 pb-4">
          <CardTitle className="text-xl text-white">Share of Load Formula</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Key Principle</h3>
              <p className="text-gray-400">
                The share of load on each lifting point is inversely proportional to its distance from the center of gravity.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-medium text-white">Formulas</h3>
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-md border border-gray-700">
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded-full bg-red-500 mr-2"></div>
                    <span className="text-white font-medium">Point 1's Share</span>
                  </div>
                  <div className="mt-4 font-mono text-white text-center">
                    Point 1 = (D₂ / (D₁ + D₂)) × Total Load
                  </div>
                </div>

                <div className="bg-gray-800 p-4 rounded-md border border-gray-700">
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-white font-medium">Point 2's Share</span>
                  </div>
                  <div className="mt-4 font-mono text-white text-center">
                    Point 2 = (D₁ / (D₁ + D₂)) × Total Load
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-800 rounded-md border border-gray-700">
              <h4 className="text-sm font-medium text-white mb-2">Key</h4>
              <ul className="text-xs text-gray-400 space-y-2">
                <li>
                  <span className="text-highlight font-medium">D₁, D₂</span>: Distances from the center of gravity to each lifting point
                </li>
                <li>
                  <span className="text-highlight font-medium">Total Load</span>: The entire weight of the object being lifted
                </li>
              </ul>
              <p className="mt-3 text-xs text-gray-400">
                This formula calculates how load is shared between multiple lifting points. 
                The farther a point is from the center of gravity, the less load it will bear.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* L-Shaped Load Visualization */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader className="border-b border-gray-800 pb-4">
          <CardTitle className="text-xl text-white">L-Shaped Load Visualization</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="w-full h-[400px] relative bg-gray-800 rounded-lg border border-gray-700 p-4">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg width="300" height="250" viewBox="0 0 300 250" className="overflow-visible">
                {/* Crane Hook at the top */}
                <path d="M150,20 C160,20 160,30 160,40 L160,50 C160,60 150,60 150,60 C150,60 140,60 140,50 L140,40 C140,30 140,20 150,20" 
                      fill="#d1d5db" stroke="#d1d5db" strokeWidth="2" />
                
                {/* Main Lifting Line */}
                <line x1="150" y1="60" x2="150" y2="65" stroke="white" strokeWidth="2" />
                
                {/* Lifting/Spreader Beam */}
                <rect x="60" y="65" width="180" height="10" fill="#888888" stroke="#666666" />
                
                {/* Left Sling - Vertical */}
                <line x1="80" y1="75" x2="80" y2="100" stroke="red" strokeWidth="2" />
                <text x="55" y="90" className="text-xs fill-red-400 font-mono">Sling 1</text>
                
                {/* Right Sling - Vertical */}
                <line x1="220" y1="75" x2="220" y2="140" stroke="blue" strokeWidth="2" />
                <text x="225" y="100" className="text-xs fill-blue-400 font-mono">Sling 2</text>
                
                {/* L-Shaped Object */}
                {/* Horizontal Bar */}
                <rect x="80" y="140" width="140" height="20" fill="#53C03F" />
                
                {/* Vertical Bar of L */}
                <rect x="80" y="100" width="40" height="40" fill="#53C03F" />
                
                {/* Distance Labels */}
                <line x1="80" y1="180" x2="220" y2="180" stroke="white" strokeDasharray="4 4" />
                <text x="100" y="195" className="text-xs fill-gray-400">D₁</text>
                <text x="170" y="195" className="text-xs fill-gray-400">D₂</text>
                
                {/* Center of Gravity */}
                <circle cx="130" cy="150" r="5" fill="white" />
                <text x="120" y="170" className="text-xs fill-white">C.G.</text>
                
                {/* Lifting Points */}
                {/* Point 1 - Red */}
                <circle cx="80" cy="100" r="6" fill="red" />
                <text x="70" y="90" className="text-xs font-bold fill-white">1</text>
                
                {/* Load Forces on Point 1 */}
                <motion.path 
                  d="M 80 110 L 80 125" 
                  stroke="red"
                  strokeWidth="2"
                  variants={arrowAnimation}
                  initial="initial"
                  animate="animate"
                />
                <path d="M 75 120 L 80 125 L 85 120" fill="none" stroke="red" strokeWidth="2" />
                
                {/* Point 2 - Blue */}
                <circle cx="220" cy="140" r="6" fill="blue" />
                <text x="210" y="130" className="text-xs font-bold fill-white">2</text>
                
                {/* Load Forces on Point 2 */}
                <motion.path 
                  d="M 220 150 L 220 165" 
                  stroke="blue"
                  strokeWidth="2"
                  variants={arrowAnimation}
                  initial="initial"
                  animate="animate"
                />
                <path d="M 215 160 L 220 165 L 225 160" fill="none" stroke="blue" strokeWidth="2" />
                
                {/* Point 1 Force Label */}
                <text x="30" y="120" className="text-xs fill-red-400 font-bold">Point 1 Share</text>
                
                {/* Point 2 Force Label */}
                <text x="225" y="155" className="text-xs fill-blue-400 font-bold">Point 2 Share</text>
                
                {/* Total Load Label */}
                <text x="115" y="135" className="text-xs fill-white">Total Load</text>
              </svg>
            </div>
          </div>
          <div className="mt-4 px-2">
            <p className="text-sm text-gray-400">
              This diagram shows an L-shaped object lifted by a spreader beam with two vertical slings of different lengths.
              The share of load at each point is calculated using the distance from the center of gravity.
            </p>
            <div className="mt-2 flex justify-between">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-red-500 mr-1"></div>
                <span className="text-xs text-gray-400">Point 1: Larger share (further from C.G.)</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-blue-500 mr-1"></div>
                <span className="text-xs text-gray-400">Point 2: Smaller share (closer to C.G.)</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lifting Scenario Visualization */}
      <Card className="bg-gray-900 border-gray-800 mt-6 lg:col-span-2">
        <CardHeader className="border-b border-gray-800 pb-4">
          <CardTitle className="text-xl text-white">Lifting Scenario Visualization</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="w-full h-[400px] relative bg-gray-800 rounded-lg border border-gray-700 p-4">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg width="500" height="300" viewBox="0 0 500 300" className="overflow-visible">
                {/* Crane Hook at the top */}
                <path d="M250,20 C260,20 260,30 260,40 L260,50 C260,60 250,60 250,60 C250,60 240,60 240,50 L240,40 C240,30 240,20 250,20" 
                      fill="#d1d5db" stroke="#d1d5db" strokeWidth="2" />
                
                {/* Main Lifting Line */}
                <line x1="250" y1="60" x2="250" y2="80" stroke="white" strokeWidth="2" />
                
                {/* Lifting/Spreader Beam */}
                <rect x="170" y="80" width="160" height="8" fill="#888888" stroke="#666666" />
                
                {/* Left Sling - Angled */}
                <line x1="180" y1="88" x2="100" y2="190" stroke="red" strokeWidth="2" />
                <text x="125" y="130" className="text-xs fill-red-400 font-mono">Sling 1</text>
                
                {/* Right Sling - Angled */}
                <line x1="320" y1="88" x2="400" y2="190" stroke="blue" strokeWidth="2" />
                <text x="340" y="130" className="text-xs fill-blue-400 font-mono">Sling 2</text>
                
                {/* Load Object */}
                <rect x="100" y="190" width="300" height="20" fill="#6B7280" />
                
                {/* Distance Labels */}
                <line x1="100" y1="230" x2="400" y2="230" stroke="white" strokeDasharray="4 4" />
                <text x="160" y="245" className="text-xs fill-gray-400">D₁</text>
                <text x="310" y="245" className="text-xs fill-gray-400">D₂</text>
                
                {/* Center of Gravity */}
                <circle cx="250" cy="200" r="5" fill="white" />
                <text x="240" y="220" className="text-xs fill-white">C.G.</text>
                
                {/* Lifting Points */}
                {/* Point 1 - Red */}
                <circle cx="100" cy="190" r="6" fill="red" />
                <text x="90" y="180" className="text-xs font-bold fill-white">1</text>
                
                {/* Load Forces on Point 1 */}
                <motion.path 
                  d="M 100 200 L 100 215" 
                  stroke="red"
                  strokeWidth="2"
                  variants={arrowAnimation}
                  initial="initial"
                  animate="animate"
                />
                <path d="M 95 210 L 100 215 L 105 210" fill="none" stroke="red" strokeWidth="2" />
                
                {/* Point 2 - Blue */}
                <circle cx="400" cy="190" r="6" fill="blue" />
                <text x="390" y="180" className="text-xs font-bold fill-white">2</text>
                
                {/* Load Forces on Point 2 */}
                <motion.path 
                  d="M 400 200 L 400 215" 
                  stroke="blue"
                  strokeWidth="2"
                  variants={arrowAnimation}
                  initial="initial"
                  animate="animate"
                />
                <path d="M 395 210 L 400 215 L 405 210" fill="none" stroke="blue" strokeWidth="2" />
                
                {/* Angle indicators */}
                <path d="M 180 88 A 15 15 0 0 0 170 100" fill="none" stroke="white" strokeWidth="1" />
                <text x="155" y="105" className="text-xs fill-white">θ₁</text>
                
                <path d="M 320 88 A 15 15 0 0 1 330 100" fill="none" stroke="white" strokeWidth="1" />
                <text x="335" y="105" className="text-xs fill-white">θ₂</text>
                
                {/* Point 1 Force Label */}
                <text x="60" y="215" className="text-xs fill-red-400 font-bold">Point 1 Share</text>
                
                {/* Point 2 Force Label */}
                <text x="410" y="215" className="text-xs fill-blue-400 font-bold">Point 2 Share</text>
                
                {/* Total Load Label */}
                <text x="235" y="180" className="text-xs fill-white">Total Load</text>
              </svg>
            </div>
          </div>
          <div className="mt-4 px-2">
            <p className="text-sm text-gray-400">
              This diagram illustrates a lifting scenario with two angled slings forming an obtuse triangle with the hook.
              The obtuse angle between the slings affects the internal forces in the rigging system.
            </p>
            <div className="mt-2 flex justify-between">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-red-500 mr-1"></div>
                <span className="text-xs text-gray-400">Point 1: Tension determined by position relative to C.G.</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-blue-500 mr-1"></div>
                <span className="text-xs text-gray-400">Point 2: Tension determined by position relative to C.G.</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShareOfLoadFormula; 