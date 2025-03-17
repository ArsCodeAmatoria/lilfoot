import React from 'react';
import Image from 'next/image';
import PdfDownload from '../../components/PdfDownload';
import PotainHD40ALoadDiagram from '../../components/PotainHD40ALoadDiagram';
import PotainHD40ALuffingDiagram from '../../components/PotainHD40ALuffingDiagram';

export const metadata = {
  title: 'Potain HD40A Specifications | Self-Erect Tower Cranes | lilfoot',
  description:
    'Load charts and specifications for the Potain HD40A self-erecting tower crane.',
};

export default function PotainHD40APage() {
  return (
    <div className="text-white">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-white">
          Potain HD40A Self-Erect Tower Crane
        </h1>
        <p className="max-w-3xl text-gray-400">
          The Potain HD40A is a versatile self-erecting tower crane designed for 
          residential construction, small commercial projects, and renovation work. 
          With its compact footprint and rapid deployment capabilities, it offers 
          an ideal solution for confined urban job sites.
        </p>
      </div>

      <div className="mb-8 overflow-hidden rounded-lg">
        <Image
          src="/images/potain-hd-40-a.png"
          alt="Potain HD40A Self-Erecting Tower Crane"
          width={1200}
          height={800}
          className="w-full object-cover"
          priority
        />
      </div>

      <div className="mb-8">
        <PotainHD40ALoadDiagram />
      </div>

      <div className="mb-8">
        <PotainHD40ALuffingDiagram />
      </div>

      <div className="mb-8 rounded-lg bg-gray-900 p-8">
        <h2 className="mb-6 text-2xl font-bold">Documentation</h2>
        <p className="mb-6 text-gray-400">
          Download the official Potain HD40A specifications and technical data sheet below.
          This document includes essential information for planning, operation, and maintenance.
        </p>
        <PdfDownload 
          title="Potain HD40A Technical Specifications"
          description="Official technical data, dimensions, load charts, and operating parameters for the Potain HD40A self-erecting tower crane."
          pdfPath="/pdfs/potain-hd-40-a.pdf"
          fileSize="3.8 MB"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-gray-900 p-6">
          <h3 className="mb-4 text-xl font-bold">Technical Specifications</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex justify-between">
              <span>Maximum Jib Length</span>
              <span className="font-bold text-highlight">35 meters</span>
            </li>
            <li className="flex justify-between">
              <span>Maximum Capacity</span>
              <span className="font-bold text-highlight">4,000 kg</span>
            </li>
            <li className="flex justify-between">
              <span>Capacity at Max Radius</span>
              <span className="font-bold text-highlight">1,000 kg</span>
            </li>
            <li className="flex justify-between">
              <span>Maximum Hook Height</span>
              <span className="font-bold text-highlight">23 meters</span>
            </li>
            <li className="flex justify-between">
              <span>Power Supply</span>
              <span className="font-bold text-highlight">400V/50Hz</span>
            </li>
            <li className="flex justify-between">
              <span>Transport Length</span>
              <span className="font-bold text-highlight">14.2 meters</span>
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-gray-900 p-6">
          <h3 className="mb-4 text-xl font-bold">Key Features</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Rapid self-erecting system with hydraulic deployment
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Compact transport dimensions for easy site access
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Variable jib length configurations (26m, 30m, 35m)
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Advanced safety features including wind monitoring
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Remote control operation with digital display
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Integrated diagnostic system for maintenance
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-lg bg-gray-900 p-6">
        <h3 className="mb-4 text-xl font-bold">Applications</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-gray-800 p-4">
            <h4 className="mb-2 font-bold text-highlight">Residential Construction</h4>
            <p className="text-sm text-gray-400">
              Perfect for multi-story residential buildings, apartment complexes, and custom homes.
            </p>
          </div>
          <div className="rounded-lg bg-gray-800 p-4">
            <h4 className="mb-2 font-bold text-highlight">Commercial Projects</h4>
            <p className="text-sm text-gray-400">
              Ideal for small to medium commercial buildings, retail spaces, and office developments.
            </p>
          </div>
          <div className="rounded-lg bg-gray-800 p-4">
            <h4 className="mb-2 font-bold text-highlight">Renovation Work</h4>
            <p className="text-sm text-gray-400">
              Excellent for urban renovation projects where space is limited and quick setup is essential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
