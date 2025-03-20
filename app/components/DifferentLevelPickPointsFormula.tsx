'use client';

import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card';
import { motion, Variants } from 'framer-motion';
import React from 'react';

const DifferentLevelPickPointsFormula = () => {
  // Sample values for demonstration
  const loadWeight = 15000; // lbs
  const d1 = 6; // feet - horizontal distance from center to pick point 1
  const d2 = 9; // feet - horizontal distance from center to pick point 2
  const h1 = 10; // feet - vertical distance from pick point 1 to hook
  const h2 = 6; // feet - vertical distance from pick point 2 to hook
  const l1 = Math.sqrt(d1 * d1 + h1 * h1); // length of sling 1
  const l2 = Math.sqrt(d2 * d2 + h2 * h2); // length of sling 2
  
  // Tension calculations
  const denominator = (d2 * h1) + (d1 * h2);
  const tension1 = Math.round((loadWeight * d2 * l1) / denominator);
  const tension2 = Math.round((loadWeight * d1 * l2) / denominator);
  
  // Angle calculations (in degrees)
  const angle1 = Math.round((Math.atan(d1 / h1) * 180) / Math.PI);
  const angle2 = Math.round((Math.atan(d2 / h2) * 180) / Math.PI);
  
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
          <CardTitle className="text-xl text-white">Different Level Pick Points & Different Sling Angles</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Key Principle</h3>
              <p className="text-gray-400">
                When pick points are at different heights and horizontal distances from the center of gravity, 
                the sling tensions are affected by both the horizontal distances and the vertical heights.
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
                <div className="mt-2 font-mono text-white">
                  Tension_1 = (Load Weight × D2 × L1) / ((D2 × H1) + (D1 × H2))
                </div>
                <div className="mt-2 font-mono text-highlight">
                  Tension_1 = ({loadWeight.toLocaleString()} × {d2} × {l1.toFixed(2)}) / (({d2} × {h1}) + ({d1} × {h2}))
                </div>
                <div className="mt-1 font-mono text-highlight">
                  Tension_1 = ({loadWeight.toLocaleString()} × {d2} × {l1.toFixed(2)}) / ({d2 * h1} + {d1 * h2})
                </div>
                <div className="mt-1 font-mono text-highlight">
                  Tension_1 = {(loadWeight * d2 * l1).toLocaleString()} / {denominator}
                </div>
                <div className="mt-1 font-mono text-highlight font-bold">
                  Tension_1 = {tension1.toLocaleString()} lbs
                </div>
                <div className="mt-2 text-sm text-gray-400">
                  Angle from vertical: {angle1}°
                </div>
              </div>
              
              {/* Sling 2 Formula */}
              <div className="bg-gray-800 p-4 rounded-md border border-gray-700">
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-white font-medium">Sling 2 (Blue)</span>
                </div>
                <div className="mt-2 font-mono text-white">
                  Tension_2 = (Load Weight × D1 × L2) / ((D2 × H1) + (D1 × H2))
                </div>
                <div className="mt-2 font-mono text-highlight">
                  Tension_2 = ({loadWeight.toLocaleString()} × {d1} × {l2.toFixed(2)}) / (({d2} × {h1}) + ({d1} × {h2}))
                </div>
                <div className="mt-1 font-mono text-highlight">
                  Tension_2 = ({loadWeight.toLocaleString()} × {d1} × {l2.toFixed(2)}) / ({d2 * h1} + {d1 * h2})
                </div>
                <div className="mt-1 font-mono text-highlight">
                  Tension_2 = {(loadWeight * d1 * l2).toLocaleString()} / {denominator}
                </div>
                <div className="mt-1 font-mono text-highlight font-bold">
                  Tension_2 = {tension2.toLocaleString()} lbs
                </div>
                <div className="mt-2 text-sm text-gray-400">
                  Angle from vertical: {angle2}°
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gray-800 rounded-md border border-gray-700">
              <h4 className="text-sm font-medium text-white mb-2">Note</h4>
              <p className="text-xs text-gray-400">
                These formulas account for both the horizontal distances and the vertical heights of the pick points.
                This is critical for stepped loads where pick points are at different levels. The tension in each 
                sling is influenced by the opposing pick point's horizontal distance and the vertical heights of both points.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Diagram Card */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader className="border-b border-gray-800 pb-4">
          <CardTitle className="text-xl text-white">Stepped Load Visualization</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="w-full h-[400px] relative bg-gray-800 rounded-lg border border-gray-700 p-4">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg width="360" height="300" viewBox="0 0 360 300" className="overflow-visible">
                {/* Hook at the top */}
                <path d="M180,20 C190,20 190,30 190,40 L190,50 C190,60 180,60 180,60 C180,60 170,60 170,50 L170,40 C170,30 170,20 180,20" 
                      fill="#d1d5db" stroke="#d1d5db" strokeWidth="2" />
                
                {/* Sling 1 - Red (Higher pick point) */}
                <line x1="180" y1="60" x2="120" y2="140" stroke="red" strokeWidth="2" />
                <text x="130" y="95" className="text-xs fill-red-400 font-mono">L1 = {l1.toFixed(2)}'</text>
                <text x="100" y="115" className="text-xs fill-red-400 font-mono">{angle1}°</text>
                <text x="90" y="130" className="text-xs fill-red-400 font-mono">{tension1.toLocaleString()} lbs</text>
                
                {/* Sling 2 - Blue (Lower pick point) */}
                <line x1="180" y1="60" x2="270" y2="180" stroke="blue" strokeWidth="2" />
                <text x="220" y="110" className="text-xs fill-blue-400 font-mono">L2 = {l2.toFixed(2)}'</text>
                <text x="250" y="135" className="text-xs fill-blue-400 font-mono">{angle2}°</text>
                <text x="250" y="150" className="text-xs fill-blue-400 font-mono">{tension2.toLocaleString()} lbs</text>
                
                {/* Stepped Load */}
                <rect x="60" y="140" width="120" height="20" fill="#53C03F" /> {/* Upper step */}
                <rect x="180" y="160" width="120" height="20" fill="#53C03F" /> {/* Lower step */}
                <rect x="180" y="140" width="10" height="20" fill="#53C03F" /> {/* Connecting piece */}
                
                {/* Pick points */}
                <circle cx="120" cy="140" r="6" fill="red" />
                <text x="115" y="130" className="text-xs font-bold fill-white">1</text>
                
                <circle cx="270" cy="180" r="6" fill="blue" />
                <text x="265" y="170" className="text-xs font-bold fill-white">2</text>
                
                {/* Center of Gravity */}
                <circle cx="180" cy="155" r="5" fill="white" />
                <text x="170" y="175" className="text-xs fill-white">C.G.</text>
                
                {/* Height and distance labels */}
                {/* H1 label - vertical distance from hook to pick point 1 */}
                <line x1="50" y1="60" x2="50" y2="140" stroke="red" strokeDasharray="4 4" />
                <text x="30" y="100" className="text-xs fill-red-400">H1 = {h1}'</text>
                
                {/* H2 label - vertical distance from hook to pick point 2 */}
                <line x1="310" y1="60" x2="310" y2="180" stroke="blue" strokeDasharray="4 4" />
                <text x="320" y="120" className="text-xs fill-blue-400">H2 = {h2}'</text>
                
                {/* D1 label - horizontal distance from center to pick point 1 */}
                <line x1="120" y1="200" x2="180" y2="200" stroke="red" strokeDasharray="4 4" />
                <text x="140" y="215" className="text-xs fill-red-400">D1 = {d1}'</text>
                
                {/* D2 label - horizontal distance from center to pick point 2 */}
                <line x1="180" y1="200" x2="270" y2="200" stroke="blue" strokeDasharray="4 4" />
                <text x="215" y="215" className="text-xs fill-blue-400">D2 = {d2}'</text>
                
                {/* Tension arrows for sling 1 */}
                <motion.path 
                  d="M 120 150 L 120 170" 
                  stroke="red"
                  strokeWidth="2"
                  variants={arrowAnimation}
                  initial="initial"
                  animate="animate"
                />
                <path d="M 115 165 L 120 170 L 125 165" fill="none" stroke="red" strokeWidth="2" />
                
                {/* Tension arrows for sling 2 */}
                <motion.path 
                  d="M 270 190 L 270 210" 
                  stroke="blue"
                  strokeWidth="2"
                  variants={arrowAnimation}
                  initial="initial"
                  animate="animate"
                />
                <path d="M 265 205 L 270 210 L 275 205" fill="none" stroke="blue" strokeWidth="2" />
                
                {/* Load Weight Arrow */}
                <motion.path 
                  d="M 180 175 L 180 220" 
                  stroke="white"
                  strokeWidth="3"
                  variants={arrowAnimation}
                  initial="initial"
                  animate="animate"
                />
                <path d="M 170 210 L 180 220 L 190 210" fill="none" stroke="white" strokeWidth="3" />
                <text x="145" y="240" className="text-sm fill-white font-bold">{loadWeight.toLocaleString()} lbs</text>
              </svg>
            </div>
          </div>
          <div className="mt-4 px-2">
            <p className="text-sm text-gray-400">
              This diagram shows a stepped load with pick points at different heights. The tension in each sling
              is calculated based on both horizontal distances and vertical heights from the hook to the pick points.
            </p>
            <div className="mt-3 space-y-2">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-red-500 mr-1"></div>
                <span className="text-xs text-gray-400">Sling 1 (higher point): {tension1.toLocaleString()} lbs at {angle1}° from vertical</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-blue-500 mr-1"></div>
                <span className="text-xs text-gray-400">Sling 2 (lower point): {tension2.toLocaleString()} lbs at {angle2}° from vertical</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-white mr-1"></div>
                <span className="text-xs text-gray-400">Total load weight: {loadWeight.toLocaleString()} lbs</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DifferentLevelPickPointsFormula; 