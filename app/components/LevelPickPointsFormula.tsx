'use client';

import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card';
import { motion, Variants } from 'framer-motion';
import React from 'react';

const LevelPickPointsFormula = () => {
  // Sample values for demonstration (keep these for visual diagram)
  const loadWeight = 5000; // lbs
  const d1 = 4; // feet - distance from centerline to pick point 1
  const d2 = 6; // feet - distance from centerline to pick point 2
  const h = 10; // feet - height from load to hook
  const l1 = Math.sqrt(d1 * d1 + h * h); // length of sling 1
  const l2 = Math.sqrt(d2 * d2 + h * h); // length of sling 2
  
  // Tension calculations
  const tension1 = Math.round((loadWeight * d2 * l1) / (h * (d1 + d2)));
  const tension2 = Math.round((loadWeight * d1 * l2) / (h * (d1 + d2)));
  
  // Angle calculations (in degrees)
  const angle1 = Math.round((Math.atan(d1 / h) * 180) / Math.PI);
  const angle2 = Math.round((Math.atan(d2 / h) * 180) / Math.PI);
  
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
          <CardTitle className="text-xl text-white">Level Pick Points & Different Sling Angles Formula</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Key Principle</h3>
              <p className="text-gray-400">
                When pick points are at different distances from the center of gravity, the sling tensions vary
                based on the angle and distance of each sling.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-white">Sling Tension Formulas</h3>
              
              {/* Sling 1 Formula */}
              <div className="bg-gray-800 p-4 rounded-md border border-gray-700">
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-red-500 mr-2"></div>
                  <span className="text-white font-medium">Sling 1 (Red)</span>
                </div>
                <div className="mt-4 font-mono text-white text-center">
                  Tension₁ = (Load Weight × D₂ × L₁) / (H × (D₁ + D₂))
                </div>
              </div>
              
              {/* Sling 2 Formula */}
              <div className="bg-gray-800 p-4 rounded-md border border-gray-700">
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-white font-medium">Sling 2 (Blue)</span>
                </div>
                <div className="mt-4 font-mono text-white text-center">
                  Tension₂ = (Load Weight × D₁ × L₂) / (H × (D₁ + D₂))
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gray-800 rounded-md border border-gray-700">
              <h4 className="text-sm font-medium text-white mb-2">Key</h4>
              <ul className="text-xs text-gray-400 space-y-2">
                <li>
                  <span className="text-highlight font-medium">D₁, D₂</span>: Horizontal distances from center of gravity to pick points
                </li>
                <li>
                  <span className="text-highlight font-medium">H</span>: Vertical distance from pick points to the lifting hook
                </li>
                <li>
                  <span className="text-highlight font-medium">L₁, L₂</span>: Lengths of slings (can be calculated using the Pythagorean theorem)
                </li>
              </ul>
              <p className="mt-3 text-xs text-gray-400">
                The formulas account for both the horizontal distance of the pick points and the length of the slings. 
                The tension in a sling is directly proportional to both the opposing pick point's distance from center 
                and the sling's length.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Diagram Card */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader className="border-b border-gray-800 pb-4">
          <CardTitle className="text-xl text-white">Lifting Scenario Visualization</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="w-full h-[400px] relative bg-gray-800 rounded-lg border border-gray-700 p-4">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg width="340" height="300" viewBox="0 0 340 300" className="overflow-visible">
                {/* Hook at the top */}
                <path d="M170,20 C180,20 180,30 180,40 L180,50 C180,60 170,60 170,60 C170,60 160,60 160,50 L160,40 C160,30 160,20 170,20" 
                      fill="#d1d5db" stroke="#d1d5db" strokeWidth="2" />
                
                {/* Sling 1 - Red */}
                <line x1="170" y1="60" x2="120" y2="160" stroke="red" strokeWidth="2" />
                <text x="130" y="110" className="text-xs fill-red-400 font-mono">L₁</text>
                <text x="100" y="145" className="text-xs fill-red-400 font-mono">Tension₁</text>
                
                {/* Sling 2 - Blue */}
                <line x1="170" y1="60" x2="220" y2="160" stroke="blue" strokeWidth="2" />
                <text x="200" y="110" className="text-xs fill-blue-400 font-mono">L₂</text>
                <text x="220" y="145" className="text-xs fill-blue-400 font-mono">Tension₂</text>
                
                {/* Load */}
                <rect x="70" y="160" width="200" height="20" fill="#53C03F" />
                
                {/* Pick points */}
                <circle cx="120" cy="160" r="6" fill="red" />
                <text x="115" y="150" className="text-xs font-bold fill-white">1</text>
                
                <circle cx="220" cy="160" r="6" fill="blue" />
                <text x="215" y="150" className="text-xs font-bold fill-white">2</text>
                
                {/* Center of Gravity */}
                <circle cx="170" cy="170" r="5" fill="white" />
                <text x="160" y="190" className="text-xs fill-white">C.G.</text>
                
                {/* Height label */}
                <line x1="60" y1="60" x2="60" y2="160" stroke="white" strokeDasharray="4 4" />
                <text x="40" y="110" className="text-xs fill-gray-400">H</text>
                
                {/* D1 and D2 labels */}
                <line x1="120" y1="200" x2="170" y2="200" stroke="red" strokeDasharray="4 4" />
                <text x="140" y="215" className="text-xs fill-red-400">D₁</text>
                
                <line x1="170" y1="200" x2="220" y2="200" stroke="blue" strokeDasharray="4 4" />
                <text x="185" y="215" className="text-xs fill-blue-400">D₂</text>
                
                {/* Load Weight Arrow */}
                <motion.path 
                  d="M 170 190 L 170 230" 
                  stroke="white"
                  strokeWidth="3"
                  variants={arrowAnimation}
                  initial="initial"
                  animate="animate"
                />
                <path d="M 160 220 L 170 230 L 180 220" fill="none" stroke="white" strokeWidth="3" />
                <text x="140" y="245" className="text-sm fill-white font-bold">Load Weight</text>
              </svg>
            </div>
          </div>
          <div className="mt-4 px-2">
            <p className="text-sm text-gray-400">
              This diagram shows a lifting scenario with two slings at different angles lifting a level load.
              The tension in each sling is calculated based on the geometry of the setup and the load weight.
            </p>
            <div className="mt-3 space-y-2">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-red-500 mr-1"></div>
                <span className="text-xs text-gray-400">Sling 1: Tension based on formula</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-blue-500 mr-1"></div>
                <span className="text-xs text-gray-400">Sling 2: Tension based on formula</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LevelPickPointsFormula; 