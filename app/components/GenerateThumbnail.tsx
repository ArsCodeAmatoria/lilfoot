'use client';

import React, { useEffect } from 'react';
import DummyPdfThumbnail from './DummyPdfThumbnail';

// This is a utility component that generates the thumbnail and provides a download button
// It's not meant to be used in production, just as a development aid
const GenerateThumbnail: React.FC = () => {
  useEffect(() => {
    // Wait for the canvas to be populated
    setTimeout(() => {
      const canvas = document.querySelector('canvas');
      if (!canvas) return;
      
      // Create download link
      const downloadLink = document.createElement('a');
      downloadLink.href = canvas.toDataURL('image/png');
      downloadLink.download = 'liebherr-81k-thumbnail.png';
      downloadLink.textContent = 'Download Thumbnail';
      downloadLink.className = 'bg-highlight text-black font-medium py-2 px-4 rounded-md hover:bg-yellow-400 transition-colors duration-300 inline-block mt-4';
      
      // Create container and message
      const container = document.createElement('div');
      container.className = 'mt-4 p-4 bg-gray-900 rounded-lg';
      
      const message = document.createElement('p');
      message.textContent = 'This is a development utility to generate a PDF thumbnail. Download this image and place it in public/images/pdf-thumbnails/';
      message.className = 'text-white mb-4';
      
      container.appendChild(message);
      container.appendChild(downloadLink);
      
      // Display canvas and add download button
      if (canvas.parentNode) {
        canvas.style.display = 'block';
        canvas.parentNode.appendChild(container);
      }
    }, 500);
  }, []);
  
  return (
    <div className="p-4 bg-black rounded-lg">
      <h3 className="text-white font-bold mb-4">PDF Thumbnail Generator</h3>
      <DummyPdfThumbnail />
    </div>
  );
};

export default GenerateThumbnail; 