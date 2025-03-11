'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function SimpleThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    try {
      // Setup
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x050505);
      
      const camera = new THREE.PerspectiveCamera(
        75,
        canvasRef.current.clientWidth / canvasRef.current.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 5;
      
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true
      });
      renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
      
      // Add a simple cube
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshNormalMaterial();
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
      
      // Add orbit controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      
      // Handle window resize
      const handleResize = () => {
        if (!canvasRef.current) return;
        
        const width = canvasRef.current.clientWidth;
        const height = canvasRef.current.clientHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Animation loop
      let animationId: number;
      
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        
        controls.update();
        renderer.render(scene, camera);
      };
      
      animate();
      
      // Cleanup
      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
        window.removeEventListener('resize', handleResize);
        
        // Proper disposal of resources
        geometry.dispose();
        material.dispose();
        controls.dispose();
        
        if (cube) scene.remove(cube);
      };
    } catch (err: unknown) {
      console.error('Error in Three.js setup:', err);
      setError(err instanceof Error ? err.message : 'Error initializing Three.js');
    }
  }, []);
  
  if (error) {
    return (
      <div className="bg-red-900 text-white p-4 rounded-lg">
        <h3 className="font-bold">Error</h3>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
} 