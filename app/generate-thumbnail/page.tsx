'use client';

import React from 'react';
import GenerateThumbnail from '../components/GenerateThumbnail';

export default function GenerateThumbnailPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">PDF Thumbnail Generator</h1>
      <p className="text-gray-400 mb-8">
        This utility helps generate thumbnail images for PDF documents.
        Generate and download the image, then place it in the <code className="bg-gray-800 px-2 py-1 rounded">public/images/pdf-thumbnails/</code> directory.
      </p>
      
      <GenerateThumbnail />
      
      <div className="mt-8 p-4 bg-gray-900 rounded-lg">
        <h2 className="text-xl font-bold text-white mb-4">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-400 space-y-2">
          <li>Generate the thumbnail by clicking the "Download Thumbnail" button below</li>
          <li>Save the downloaded image to <code className="bg-gray-800 px-2 py-1 rounded">public/images/pdf-thumbnails/</code></li>
          <li>Place your actual PDF file in <code className="bg-gray-800 px-2 py-1 rounded">public/pdfs/</code></li>
          <li>Update your page code to use the PdfDownload component</li>
        </ol>
      </div>
    </div>
  );
} 