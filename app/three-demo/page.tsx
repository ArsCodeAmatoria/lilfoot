'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function ThreeDemoPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Effect to calculate container dimensions
  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: width,
          height: Math.min(600, window.innerHeight * 0.7) // Fixed height or 70% of viewport height
        });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  
  // Effect to set up Three.js scene
  useEffect(() => {
    if (!containerRef.current || dimensions.width === 0 || dimensions.height === 0) return;
    
    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050505);
    
    const camera = new THREE.PerspectiveCamera(
      27, // FOV
      dimensions.width / dimensions.height, // Aspect ratio
      1, // Near clipping plane
      3500 // Far clipping plane
    );
    camera.position.z = 2750;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(dimensions.width, dimensions.height);
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(renderer.domElement);
    
    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    
    // Create a geometry
    const geometry = new THREE.BufferGeometry();
    
    // Create vertices, normals, and colors for the particles
    const particleCount = 500000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    const pSize = 15;
    const colorHSL = new THREE.Color();
    let position = 0;
    let color = 0;
    
    for (let i = 0; i < particleCount; i++) {
      // positions
      const x = Math.random() * 2 - 1;
      const y = Math.random() * 2 - 1;
      const z = Math.random() * 2 - 1;
      
      // Spread particles in a cube
      positions[position++] = x * pSize;
      positions[position++] = y * pSize;
      positions[position++] = z * pSize;
      
      // colors
      // Use HSL color values for gradient effect
      const h = (x + 1) / 2;
      const s = 1.0;
      const l = 0.5;
      
      colorHSL.setHSL(h, s, l);
      colors[color++] = colorHSL.r;
      colors[color++] = colorHSL.g;
      colors[color++] = colorHSL.b;
    }
    
    // Create the buffer attributes
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    // Set initial draw range - we'll update this in the animation
    geometry.setDrawRange(0, 0);
    
    // Create material
    const material = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true
    });
    
    // Create particle system
    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);
    
    // Animation variables
    let currentDrawCount = 0;
    const maxDrawCount = particleCount;
    const particlesPerFrame = 500;
    
    // Window resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const { width } = containerRef.current.getBoundingClientRect();
      const height = Math.min(600, window.innerHeight * 0.7);
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Update controls
      controls.update();
      
      // Rotate the particle system
      particleSystem.rotation.x += 0.0005;
      particleSystem.rotation.y += 0.001;
      
      // Update draw range
      if (currentDrawCount < maxDrawCount) {
        currentDrawCount = Math.min(currentDrawCount + particlesPerFrame, maxDrawCount);
        geometry.setDrawRange(0, currentDrawCount);
      }
      
      // Render the scene
      renderer.render(scene, camera);
    };
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [dimensions.width, dimensions.height]);
  
  return (
    <div className="space-y-8">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-white">Buffer Geometry Draw Range Demo</h1>
        <p className="text-gray-400 mt-2">
          This demo shows a particle system created with Three.js where particles are gradually rendered using the BufferGeometry drawRange property.
          The colors are based on the particle positions, creating a gradient effect. Drag to rotate the view.
        </p>
      </div>
      
      {/* 3D scene container */}
      <div 
        ref={containerRef} 
        className="w-full bg-black"
        style={{ 
          position: 'relative', 
          overflow: 'hidden',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
          height: `${dimensions.height}px`
        }}
      ></div>
      
      <div className="bg-black p-6 rounded-lg shadow-lg mt-8">
        <h2 className="text-xl font-bold text-white mb-4">How It Works</h2>
        <p className="text-gray-400 mb-4">
          This demo creates a 3D particle system with 500,000 particles using THREE.js BufferGeometry.
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