import React from 'react';
import { FileText } from 'lucide-react';
import PdfDownload from '../../components/PdfDownload';
import Image from 'next/image';

export const metadata = {
  title: 'Liebherr 172 EC-B 8 Specifications | Tower Cranes | lilfoot',
  description:
    'Load charts and specifications for the Liebherr 172 EC-B 8 tower crane.',
};

export default function Liebherr172ECB8Page() {
  return (
    <div className="space-y-8 text-white">
      <div>
        <h1 className="mb-4 text-3xl font-bold text-white">
          Liebherr 172 EC-B 8 Tower Crane
        </h1>
        <div className="mb-6 rounded-lg overflow-hidden">
          <Image
            src="/images/liebherr-172.jpg"
            alt="Liebherr 172 EC-B 8 Tower Crane"
            width={1200}
            height={675}
            className="w-full object-cover"
            priority
          />
        </div>
        <p className="mb-6 text-gray-400">
          The Liebherr 172 EC-B 8 is a high-capacity flat-top tower crane designed for performance on demanding construction sites.
          With a maximum lifting capacity of 8,000 kg and a range of jib configurations up to 60 meters, this crane delivers impressive
          lifting capabilities and precise control for large-scale commercial and infrastructure projects.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-gray-900 p-6">
          <h3 className="mb-4 text-xl font-bold">Technical Specifications</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Maximum lifting capacity: 8,000 kg
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Maximum jib length: 60.0 m
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Capacity at max. jib length: 1,700 kg
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Maximum hook height: Varies with tower configuration
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Frequency-controlled drives for all movements
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              LITRONIC control system for precise operation
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-gray-900 p-6">
          <h3 className="mb-4 text-xl font-bold">Key Features</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Flat-top design for easy assembly and transportation
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Multiple tower system options for different heights
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Eco-mode for reduced energy consumption
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Tower-Crane-Data-Interface for connectivity
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Liebherr ABB anti-collision system compatibility
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Designed for easy maintenance and long service life
            </li>
          </ul>
        </div>
      </div>

      <div className="rounded-lg bg-gray-900 p-6">
        <h3 className="mb-4 text-xl font-bold">Performance & Applications</h3>
        <p className="mb-4 text-gray-400">
          The Liebherr 172 EC-B 8 tower crane provides an ideal combination of lifting capacity and reach, making it suitable for a wide 
          range of construction applications. Its flat-top design simplifies assembly on congested sites and the LITRONIC control system 
          offers outstanding precision during operation.
        </p>
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <div className="rounded bg-gray-800 p-4">
            <h4 className="font-semibold text-white mb-2">High-Rise Construction</h4>
            <p className="text-gray-400 text-sm">
              The crane's high lifting capacity and impressive working radius are ideal for large-scale residential and commercial high-rise projects.
            </p>
          </div>
          <div className="rounded bg-gray-800 p-4">
            <h4 className="font-semibold text-white mb-2">Industrial Construction</h4>
            <p className="text-gray-400 text-sm">
              Optimized for heavy lifting operations required in power plant, factory, and industrial facility construction.
            </p>
          </div>
          <div className="rounded bg-gray-800 p-4">
            <h4 className="font-semibold text-white mb-2">Infrastructure Projects</h4>
            <p className="text-gray-400 text-sm">
              Suitable for bridge construction, transportation hubs, and other large infrastructure developments.
            </p>
          </div>
          <div className="rounded bg-gray-800 p-4">
            <h4 className="font-semibold text-white mb-2">Mixed-Use Developments</h4>
            <p className="text-gray-400 text-sm">
              Versatile performance makes it ideal for complex mixed-use projects with varying load requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Documentation */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <FileText className="mr-2 text-highlight" size={24} />
          Technical Documentation
        </h2>
        <p className="mb-4 text-gray-400">
          Download the official Liebherr 172 EC-B 8 specifications and load charts document for detailed
          technical information, setup configurations, and operational parameters:
        </p>
        <div className="mt-4">
          <PdfDownload
            title="Liebherr 172 EC-B 8 Specifications"
            description="Official technical data, dimensions, load charts, and operating parameters for the Liebherr 172 EC-B 8 tower crane."
            pdfPath="/pdfs/liebherr-172-ec-b.pdf"
            fileSize="1.0 MB"
          />
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-gray-900 p-5 rounded-lg">
        <h2 className="text-xl font-bold text-white mb-3">About This Information</h2>
        <p className="text-gray-400 mb-3">
          The information provided on this page is based on manufacturer specifications and industry 
          knowledge. For the most up-to-date and project-specific information, always consult the 
          official Liebherr documentation and contact an authorized Liebherr dealer.
        </p>
        <p className="text-gray-400">
          For operational guidelines, safety protocols, and detailed assembly instructions, refer to the 
          official operator's manual provided by Liebherr.
        </p>
      </div>
    </div>
  );
}
