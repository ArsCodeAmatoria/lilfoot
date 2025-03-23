import React from 'react';
import { Download, FileText, FileSymlink } from 'lucide-react';
import LoadCharts from './charts';

export const metadata = {
  title: 'Liebherr 100LC Specifications | Tower Cranes | lilfoot',
  description:
    'Load charts and specifications for the Liebherr 100LC tower crane.',
};

export default function Liebherr100LCPage() {
  return (
    <div className="text-white">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-white">
          Liebherr 100LC Tower Crane
        </h1>
        <p className="max-w-3xl text-gray-400">
          The Liebherr 100LC is a versatile tower crane known for its
          reliability and performance in medium to large construction projects.
          This page provides comprehensive specifications, load charts, and
          operational guidelines for crane operators.
        </p>
      </div>

      <div className="mb-8 rounded-lg bg-gray-900 p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="mb-3 text-xl font-bold">Liebherr 100LC Documentation</h2>
            <p className="mb-4 text-gray-400">
              Download the complete specifications and load charts for reference.
            </p>
          </div>
          <a
            href="/pdfs/100LC.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-lg bg-highlight px-4 py-2 text-white hover:bg-green-600 transition-colors"
          >
            <Download size={18} className="mr-2" />
            Download PDF
          </a>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <div className="rounded-lg bg-gray-900 p-6">
          <h3 className="mb-4 text-xl font-bold">Technical Specifications</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Maximum lifting capacity: 8,000 kg
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Maximum jib length: 50 meters
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Maximum lifting height: 100 meters (with standard tower configuration)
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Tip load at maximum radius: 2,100 kg
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-gray-900 p-6">
          <h3 className="mb-4 text-xl font-bold">Key Features</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Optimized for medium to large construction projects
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Well-balanced lift capacity and reach
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Renowned Liebherr reliability
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Advanced safety systems
            </li>
          </ul>
        </div>
      </div>

      <div className="rounded-lg bg-gray-900 p-6 mb-8">
        <h3 className="mb-4 text-xl font-bold">Documentation Contents</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center">
              <FileSymlink size={20} className="mr-2 text-highlight" />
              Detailed technical specifications
            </li>
            <li className="flex items-center">
              <FileSymlink size={20} className="mr-2 text-highlight" />
              Load charts for various configurations
            </li>
            <li className="flex items-center">
              <FileSymlink size={20} className="mr-2 text-highlight" />
              Working radius information
            </li>
          </ul>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center">
              <FileSymlink size={20} className="mr-2 text-highlight" />
              Tower height configurations
            </li>
            <li className="flex items-center">
              <FileSymlink size={20} className="mr-2 text-highlight" />
              Operational safety guidelines
            </li>
            <li className="flex items-center">
              <FileSymlink size={20} className="mr-2 text-highlight" />
              Assembly and disassembly procedures
            </li>
          </ul>
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="/pdfs/100LC.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-lg border border-highlight px-6 py-3 text-white hover:bg-gray-800 transition-colors"
          >
            <FileText size={20} className="mr-2 text-highlight" />
            View Complete Documentation
          </a>
        </div>
      </div>

      <div className="rounded-lg bg-gray-900 p-6">
        <LoadCharts />
      </div>
    </div>
  );
}
