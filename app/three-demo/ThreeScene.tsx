'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface ThreeSceneProps {
  onError?: () => void;
}

export default function ThreeScene({ onError }: ThreeSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  
  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;
    
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let controls: OrbitControls;
    let particleSystem: THREE.Points;
    let geometry: THREE.BufferGeometry;
    let material: THREE.PointsMaterial;
    let animationFrameId: number;
    
    try {
      // Set up scene, camera, and renderer
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x050505);
      
      // Get container dimensions
      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight;
      
      camera = new THREE.PerspectiveCamera(
        27, // FOV
        containerWidth / containerHeight, // Aspect ratio
        1, // Near clipping plane
        3500 // Far clipping plane
      );
      camera.position.z = 2750;
      
      // Use the existing canvas element instead of creating a new one
      renderer = new THREE.WebGLRenderer({ 
        canvas: canvasRef.current,
        antialias: true 
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(containerWidth, containerHeight);
      
      // Add orbit controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      
      // Create a geometry
      geometry = new THREE.BufferGeometry();
      
      // Create vertices and colors for the particles
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
      material = new THREE.PointsMaterial({
        size: 0.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true
      });
      
      // Create particle system
      particleSystem = new THREE.Points(geometry, material);
      scene.add(particleSystem);
      
      // Animation variables
      let currentDrawCount = 0;
      const maxDrawCount = particleCount;
      const particlesPerFrame = 500;
      
      // Window resize handler
      const handleResize = () => {
        if (!containerRef.current || !renderer) return;
        
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Animation function
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        
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
      setIsInitialized(true);
      
      // Return cleanup function
      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        
        if (controls) controls.dispose();
        if (geometry) geometry.dispose();
        if (material) material.dispose();
        
        // Don't dispose of the renderer here since we're using a persistent canvas
        // Just release references
        if (particleSystem && scene) scene.remove(particleSystem);
        
        // Clear references without setting to null (which causes TypeScript errors)
        // We're just making sure these are properly cleaned up for garbage collection
      };
    } catch (error) {
      console.error('Error initializing Three.js scene:', error);
      if (onError) onError();
      
      // Cleanup on error
      return () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        if (controls) controls.dispose();
        if (geometry) geometry.dispose();
        if (material) material.dispose();
        // Don't dispose renderer here
      };
    }
  }, [onError]);
  
  return (
    <div 
      ref={containerRef} 
      className="w-full h-full bg-black rounded-lg"
      style={{ 
        position: 'relative', 
        overflow: 'hidden',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)'
      }}
    >
      <canvas 
        ref={canvasRef}
        className="block w-full h-full"
      />
      
      {!isInitialized && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-highlight mx-auto mb-4"></div>
            <p>Initializing Three.js...</p>
          </div>
        </div>
      )}
    </div>
  );
} 