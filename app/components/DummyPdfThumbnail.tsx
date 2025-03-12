'use client';

import React, { useRef, useEffect } from 'react';

// This component creates a canvas with a PDF-like thumbnail
// It's used for demonstration purposes only
const DummyPdfThumbnail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions (A4 ratio)
    canvas.width = 595;
    canvas.height = 842;
    
    // Background color
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Header bar
    ctx.fillStyle = '#FFD700'; // Gold color
    ctx.fillRect(0, 0, canvas.width, 60);
    
    // Logo placeholder
    ctx.fillStyle = '#000000';
    ctx.fillRect(30, 15, 100, 30);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('LIEBHERR', 45, 35);
    
    // Title
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('Liebherr 81k', 30, 100);
    ctx.font = 'bold 18px Arial';
    ctx.fillText('Self-Erecting Tower Crane', 30, 130);
    
    // Content lines
    ctx.fillStyle = '#666666';
    ctx.fillRect(30, 160, 535, 1);
    
    // Specifications heading
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Technical Specifications', 30, 190);
    
    // Specifications content
    ctx.font = '14px Arial';
    const specs = [
      'Max. Lifting Capacity: 6,000 kg',
      'Max. Jib Length: 45 meters',
      'Max. Hook Height: 40.4 meters',
      'Tower Height: 21.3 - 26.0 meters'
    ];
    
    specs.forEach((spec, index) => {
      ctx.fillText(spec, 50, 220 + (index * 25));
    });
    
    // Image placeholder
    ctx.fillStyle = '#EEEEEE';
    ctx.fillRect(30, 350, 535, 250);
    ctx.fillStyle = '#AAAAAA';
    ctx.font = 'italic 16px Arial';
    ctx.fillText('Crane Image', 250, 475);
    
    // Footer
    ctx.fillStyle = '#FFD700'; // Gold color
    ctx.fillRect(0, canvas.height - 40, canvas.width, 40);
    ctx.fillStyle = '#000000';
    ctx.font = '12px Arial';
    ctx.fillText('Copyright © 2023 Liebherr Group. All rights reserved.', 160, canvas.height - 18);
    
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      style={{ width: '100%', height: 'auto', maxWidth: '300px', display: 'none' }}
    />
  );
};

export default DummyPdfThumbnail; 