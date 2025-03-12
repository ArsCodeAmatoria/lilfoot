'use client';

import React, { useRef, useEffect } from 'react';

// This component creates a canvas with a PDF-like thumbnail resembling the Liebherr document
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
    
    // Background color - white for document
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Yellow header bar (Liebherr brand color)
    ctx.fillStyle = '#FFD700'; // Gold/yellow
    ctx.fillRect(0, 0, canvas.width, 120);
    
    // Liebherr logo placeholder
    ctx.fillStyle = '#000000';
    ctx.fillRect(30, 30, 150, 60);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('LIEBHERR', 45, 70);
    
    // Document Title
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 28px Arial';
    ctx.fillText('Tower Cranes', 30, 180);
    ctx.font = 'bold 22px Arial';
    ctx.fillText('Technical Specifications', 30, 215);
    
    // Crane image placeholder
    ctx.fillStyle = '#F5F5F5';
    ctx.fillRect(30, 250, 535, 300);
    
    // Draw a simple crane silhouette
    ctx.strokeStyle = '#333333';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    // Tower
    ctx.moveTo(297, 550);
    ctx.lineTo(297, 350);
    
    // Jib
    ctx.moveTo(297, 350);
    ctx.lineTo(500, 380);
    
    // Counter jib
    ctx.moveTo(297, 350);
    ctx.lineTo(150, 370);
    
    // Cabin
    ctx.moveTo(280, 380);
    ctx.lineTo(280, 400);
    ctx.lineTo(315, 400);
    ctx.lineTo(315, 380);
    ctx.lineTo(280, 380);
    
    ctx.stroke();
    
    // Draw text for crane model
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('81k Self-Erecting Crane', 225, 580);
    
    // Model information
    ctx.font = '16px Arial';
    const specs = [
      'Maximum Capacity: 6,000 kg',
      'Maximum Radius: 45 m',
      'Maximum Hook Height: 40.4 m'
    ];
    
    specs.forEach((spec, index) => {
      ctx.fillText(spec, 50, 630 + (index * 25));
    });
    
    // Yellow footer
    ctx.fillStyle = '#FFD700'; // Gold/yellow
    ctx.fillRect(0, canvas.height - 80, canvas.width, 80);
    
    // Footer text
    ctx.fillStyle = '#000000';
    ctx.font = '14px Arial';
    ctx.fillText('Liebherr-Werk Biberach GmbH', 30, canvas.height - 45);
    ctx.font = '12px Arial';
    ctx.fillText('www.liebherr.com', 30, canvas.height - 25);
    
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      style={{ width: '100%', height: 'auto', maxWidth: '300px', display: 'none' }}
    />
  );
};

export default DummyPdfThumbnail; 