'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import both Three.js components to avoid SSR issues
const SimpleThreeScene = dynamic(() => import('./SimpleThreeScene'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gray-900 flex items-center justify-center">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-highlight mx-auto mb-4"></div>
        <p>Loading basic Three.js scene...</p>
      </div>
    </div>
  )
});

const FullThreeScene = dynamic(() => import('./ThreeScene'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-gray-900 flex items-center justify-center">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-highlight mx-auto mb-4"></div>
        <p>Loading full Three.js scene...</p>
      </div>
    </div>
  )
});

export default function ThreeDemoPage() {
  const [hasError, setHasError] = useState(false);
  const [demoMode, setDemoMode] = useState<'simple' | 'full'>('simple');
  
  return (
    <div className="space-y-8">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-white">Three.js Buffer Geometry Demo</h1>
        <p className="text-gray-400 mt-2">
          This demo shows interactive 3D graphics using Three.js, featuring dynamic buffer geometry 
          with progressive rendering.
        </p>
        
        <div className="flex space-x-4 mt-4">
          <button 
            onClick={() => setDemoMode('simple')}
            className={`px-4 py-2 rounded ${demoMode === 'simple' 
              ? 'bg-highlight text-white' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            Simple Demo (Cube)
          </button>
          <button 
            onClick={() => setDemoMode('full')}
            className={`px-4 py-2 rounded ${demoMode === 'full' 
              ? 'bg-highlight text-white' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            Full Demo (Particle System)
          </button>
        </div>
      </div>
      
      {/* Three.js scenes */}
      {demoMode === 'simple' ? (
        <div className="w-full rounded-lg overflow-hidden" style={{ height: '400px' }}>
          <SimpleThreeScene />
        </div>
      ) : hasError ? (
        <div className="w-full h-[500px] bg-gray-900 flex items-center justify-center rounded-lg">
          <div className="text-center p-8">
            <h3 className="text-xl font-bold text-red-500 mb-2">Unable to load Three.js scene</h3>
            <p className="text-gray-400 mb-4">There was an error initializing the 3D visualization.</p>
            <button 
              onClick={() => setHasError(false)} 
              className="px-4 py-2 bg-highlight text-white rounded hover:bg-blue-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full" style={{ height: '500px' }}>
          <FullThreeScene onError={() => setHasError(true)} />
        </div>
      )}
      
      <div className="bg-black p-6 rounded-lg shadow-lg mt-8">
        <h2 className="text-xl font-bold text-white mb-4">About This Demo</h2>
        
        {demoMode === 'simple' ? (
          <div>
            <p className="text-gray-400 mb-4">
              This simple demo shows a rotating 3D cube using Three.js. It uses the WebGL
              renderer and OrbitControls to allow you to interact with the scene.
            </p>
            
            <h3 className="text-lg font-semibold text-highlight mb-2">Features</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Basic 3D cube with normal material</li>
              <li>Interactive controls for rotating and zooming</li>
              <li>Automatic animation</li>
              <li>Responsive design that adapts to the container size</li>
            </ul>
          </div>
        ) : (
          <div>
            <p className="text-gray-400 mb-4">
              The full demo creates a 3D particle system with 500,000 particles using THREE.js BufferGeometry.
              The particles are gradually revealed over time using the setDrawRange() method, which controls
              how many vertices are rendered from the geometry.
            </p>
            
            <h3 className="text-lg font-semibold text-highlight mb-2">Key Features</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Buffer geometry with 500,000 particles</li>
              <li>Progressive rendering using drawRange property</li>
              <li>Vertex coloring based on position</li>
              <li>Orbital controls for interactive rotation</li>
              <li>Automatic cleanup of 3D resources</li>
            </ul>
          </div>
        )}
        
        <h3 className="text-lg font-semibold text-highlight mt-4 mb-2">Controls</h3>
        <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
          <li><span className="text-white">Left Mouse Button</span>: Rotate the view</li>
          <li><span className="text-white">Right Mouse Button</span>: Pan the view</li>
          <li><span className="text-white">Mouse Wheel</span>: Zoom in/out</li>
        </ul>
      </div>
    </div>
  );
} 