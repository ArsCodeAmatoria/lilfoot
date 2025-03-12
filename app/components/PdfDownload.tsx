'use client';

import React from 'react';
import { FaFilePdf, FaDownload } from 'react-icons/fa';
import Image from 'next/image';

interface PdfDownloadProps {
  title: string;
  description: string;
  pdfPath: string;
  thumbnailPath?: string;
  fileSize?: string;
}

const PdfDownload: React.FC<PdfDownloadProps> = ({
  title,
  description,
  pdfPath,
  thumbnailPath,
  fileSize
}) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row">
        {/* PDF Thumbnail */}
        <div className="w-full sm:w-1/3 bg-black p-4 flex items-center justify-center">
          {thumbnailPath ? (
            <div className="relative w-full aspect-[3/4] max-w-[150px]">
              <Image 
                src={thumbnailPath}
                alt={`${title} thumbnail`}
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-md shadow-md"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-md w-full max-w-[150px] aspect-[3/4]">
              <FaFilePdf size={48} className="text-highlight mb-2" />
              <span className="text-sm text-white text-center">PDF Document</span>
            </div>
          )}
        </div>
        
        {/* PDF Information and Download Button */}
        <div className="w-full sm:w-2/3 p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
            <p className="text-gray-400 text-sm mb-3">{description}</p>
            {fileSize && (
              <p className="text-gray-500 text-xs mb-3">File size: {fileSize}</p>
            )}
          </div>
          
          <div className="mt-4">
            <a 
              href={pdfPath} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-highlight text-black font-medium py-2 px-4 rounded-md hover:bg-yellow-400 transition-colors duration-300 flex items-center gap-2"
            >
              <FaDownload size={16} />
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfDownload; 