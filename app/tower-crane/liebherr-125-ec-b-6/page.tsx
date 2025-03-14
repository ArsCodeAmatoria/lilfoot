import React from 'react';
import { FileText, Maximize, Weight, Ruler, Zap, PackageCheck } from 'lucide-react';
import PdfDownload from '../../components/PdfDownload';
import Image from 'next/image';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '#/components/ui/table';

export const metadata = {
  title: 'Liebherr 125 EC-B 6 Specifications | Tower Cranes | lilfoot',
  description:
    'Load charts and specifications for the Liebherr 125 EC-B 6 tower crane.',
};

export default function Liebherr125ECB6Page() {
  return (
    <div className="text-white space-y-8">
      {/* Header Section with NEW Badge */}
      <div className="relative">
        <div className="absolute -top-2 -right-2 z-10">
          <span className="bg-highlight text-black text-xs font-bold px-3 py-1 rounded-full">NEW</span>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-2/3">
            <h1 className="mb-4 text-3xl font-bold text-white">
              Liebherr 125 EC-B 6 Tower Crane
            </h1>
            <p className="text-gray-400 mb-6">
              The Liebherr 125 EC-B 6 is a versatile flat-top tower crane designed for urban
              construction projects where multiple cranes need to operate in close
              proximity. With its compact design and impressive lifting capabilities, 
              it's an ideal solution for residential, commercial, and infrastructure projects.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image 
                src="/images/liebherr-ec-b.jpg" 
                alt="Liebherr 125 EC-B 6 Tower Crane" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Specifications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-black p-5 rounded-lg shadow-lg">
          <div className="flex items-center mb-3">
            <Maximize className="text-highlight mr-3" size={22} />
            <h3 className="text-lg font-semibold">Maximum Capacity</h3>
          </div>
          <p className="text-2xl font-bold text-white">6,000 kg</p>
          <p className="text-gray-400 text-sm mt-1">At minimum working radius of 15.0m</p>
        </div>
        
        <div className="bg-black p-5 rounded-lg shadow-lg">
          <div className="flex items-center mb-3">
            <Ruler className="text-highlight mr-3" size={22} />
            <h3 className="text-lg font-semibold">Maximum Jib Length</h3>
          </div>
          <p className="text-2xl font-bold text-white">58.5 meters</p>
          <p className="text-gray-400 text-sm mt-1">With capacity of 1,350 kg at max radius</p>
        </div>
        
        <div className="bg-black p-5 rounded-lg shadow-lg">
          <div className="flex items-center mb-3">
            <Weight className="text-highlight mr-3" size={22} />
            <h3 className="text-lg font-semibold">Hook Height</h3>
          </div>
          <p className="text-2xl font-bold text-white">Up to 71.5 m</p>
          <p className="text-gray-400 text-sm mt-1">Varies based on tower configuration</p>
        </div>
      </div>

      {/* Crane Overview Section */}
      <div className="bg-black p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Crane Overview</h2>
        <p className="text-gray-400 mb-4">
          The Liebherr 125 EC-B 6 belongs to the EC-B "economic" flat-top crane series, featuring a compact design 
          that eliminates the need for a tower head. This design allows multiple cranes to slew above each other 
          in tight construction sites, making it ideal for urban environments.
        </p>
        <p className="text-gray-400 mb-4">
          With a maximum lifting capacity of 6,000 kg and a maximum jib length of 58.5 meters, the 125 EC-B 6 
          provides excellent coverage and lifting power for mid-sized construction projects. The jib can be 
          configured in 2.5m sections, allowing for flexible adaptation to site requirements.
        </p>
        <p className="text-gray-400">
          The micromove fine positioning mode and intelligent assistance systems help operators perform precise 
          lifts, while the modern cabin design ensures comfort during extended operations. The crane features 
          Liebherr's proven drive technology with frequency converters for smooth handling and reduced power 
          consumption.
        </p>
      </div>

      {/* Technical Specifications Table */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4 flex items-center">
          <PackageCheck className="mr-2 text-highlight" size={24} />
          Technical Specifications
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-900 border-b border-gray-800">
                <th className="py-3 px-4 text-left text-white">Specification</th>
                <th className="py-3 px-4 text-left text-white">Value</th>
                <th className="py-3 px-4 text-left text-white">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="py-3 px-4 text-gray-300 font-medium">Max Lifting Capacity</td>
                <td className="py-3 px-4 text-gray-300">6,000 kg</td>
                <td className="py-3 px-4 text-gray-400">At 15.0m radius</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="py-3 px-4 text-gray-300 font-medium">Max Jib Length</td>
                <td className="py-3 px-4 text-gray-300">58.5 m</td>
                <td className="py-3 px-4 text-gray-400">Configurable in 2.5m sections</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="py-3 px-4 text-gray-300 font-medium">Max Hook Height</td>
                <td className="py-3 px-4 text-gray-300">71.5 m</td>
                <td className="py-3 px-4 text-gray-400">With standard tower system</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="py-3 px-4 text-gray-300 font-medium">Tip Load Capacity</td>
                <td className="py-3 px-4 text-gray-300">1,350 kg</td>
                <td className="py-3 px-4 text-gray-400">At maximum radius</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="py-3 px-4 text-gray-300 font-medium">Tower System</td>
                <td className="py-3 px-4 text-gray-300">120 HC</td>
                <td className="py-3 px-4 text-gray-400">Compatible with 120 HC tower system</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="py-3 px-4 text-gray-300 font-medium">Power Supply</td>
                <td className="py-3 px-4 text-gray-300">400V / 50Hz</td>
                <td className="py-3 px-4 text-gray-400">Three-phase current</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="py-3 px-4 text-gray-300 font-medium">Hoisting Speed</td>
                <td className="py-3 px-4 text-gray-300">0 - 100 m/min</td>
                <td className="py-3 px-4 text-gray-400">Dependent on load weight</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="py-3 px-4 text-gray-300 font-medium">Slewing Speed</td>
                <td className="py-3 px-4 text-gray-300">0 - 0.8 rpm</td>
                <td className="py-3 px-4 text-gray-400">Infinitely variable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Features Grid */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-highlight">
            <h3 className="text-lg font-semibold text-white mb-2">Flat-Top Design</h3>
            <p className="text-gray-400">
              Compact design without tower head allows multiple cranes to operate safely in close proximity,
              ideal for cramped urban construction sites.
            </p>
          </div>
          
          <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-highlight">
            <h3 className="text-lg font-semibold text-white mb-2">Fast Assembly</h3>
            <p className="text-gray-400">
              Optimized connection technology and Connect-and-Work quick connections enable rapid assembly
              and disassembly, reducing setup time.
            </p>
          </div>
          
          <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-highlight">
            <h3 className="text-lg font-semibold text-white mb-2">Micromove Function</h3>
            <p className="text-gray-400">
              Fine positioning mode allows for high-precision placement of loads with millimeter accuracy
              for delicate installation tasks.
            </p>
          </div>
          
          <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-highlight">
            <h3 className="text-lg font-semibold text-white mb-2">Tower System Flexibility</h3>
            <p className="text-gray-400">
              Compatible with the 120 HC tower system, providing various height configurations to adapt to
              different project requirements.
            </p>
          </div>
          
          <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-highlight">
            <h3 className="text-lg font-semibold text-white mb-2">Economic Design</h3>
            <p className="text-gray-400">
              Part of Liebherr's EC-B series focused on economic efficiency with optimized transport dimensions
              and reduced power consumption.
            </p>
          </div>
          
          <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-highlight">
            <h3 className="text-lg font-semibold text-white mb-2">Advanced Control System</h3>
            <p className="text-gray-400">
              Intelligent assist systems including load moment limiter, anti-collision systems, and
              wind monitoring for enhanced operational safety.
            </p>
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="bg-black p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-highlight mb-2">Residential Construction</h3>
            <p className="text-gray-400">
              Ideal for multi-story apartment buildings, condominium developments, and housing complexes
              where space might be limited and lifting requirements are moderate.
            </p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-highlight mb-2">Commercial Projects</h3>
            <p className="text-gray-400">
              Perfect for office buildings, shopping centers, and mixed-use developments requiring
              precise placement of structural elements and materials.
            </p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-highlight mb-2">Urban Infrastructure</h3>
            <p className="text-gray-400">
              Suitable for bridges, transportation hubs, and public facilities in dense urban areas
              where multiple cranes may need to operate in close proximity.
            </p>
          </div>
        </div>
      </div>

      {/* Performance Data Section */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4 flex items-center">
          <Zap className="mr-2 text-highlight" size={24} />
          Performance Data
        </h2>
        <p className="text-gray-400 mb-6">
          The Liebherr 125 EC-B 6 offers exceptional performance with its variable frequency drive system.
          The hoisting gear provides smooth acceleration and precise control, while the jib design ensures
          stability even at maximum reach.
        </p>
        
        {/* LM1 Load Chart Table */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">LM1 Load Chart (Standard Configuration)</h3>
          <Table>
            <TableCaption>Maximum load capacities in kg for Liebherr 125 EC-B 6 with standard configuration</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="bg-gray-800 text-center">Radius (m)</TableHead>
                <TableHead className="bg-gray-800 text-center">Capacity (kg)</TableHead>
                <TableHead className="bg-gray-800 text-center">Jib Config</TableHead>
                <TableHead className="bg-gray-800 text-center">Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-center">15.0</TableCell>
                <TableCell className="text-center font-bold">6,000</TableCell>
                <TableCell className="text-center">Standard</TableCell>
                <TableCell className="text-center">Maximum capacity</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center">17.5</TableCell>
                <TableCell className="text-center font-bold">5,300</TableCell>
                <TableCell className="text-center">Standard</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center">20.0</TableCell>
                <TableCell className="text-center font-bold">4,500</TableCell>
                <TableCell className="text-center">Standard</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center">22.5</TableCell>
                <TableCell className="text-center font-bold">3,950</TableCell>
                <TableCell className="text-center">Standard</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center">25.0</TableCell>
                <TableCell className="text-center font-bold">3,450</TableCell>
                <TableCell className="text-center">Standard</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center">30.0</TableCell>
                <TableCell className="text-center font-bold">2,800</TableCell>
                <TableCell className="text-center">Standard</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center">35.0</TableCell>
                <TableCell className="text-center font-bold">2,350</TableCell>
                <TableCell className="text-center">Standard</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center">40.0</TableCell>
                <TableCell className="text-center font-bold">2,050</TableCell>
                <TableCell className="text-center">Standard</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center">45.0</TableCell>
                <TableCell className="text-center font-bold">1,800</TableCell>
                <TableCell className="text-center">Standard</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center">50.0</TableCell>
                <TableCell className="text-center font-bold">1,600</TableCell>
                <TableCell className="text-center">Standard</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center">55.0</TableCell>
                <TableCell className="text-center font-bold">1,450</TableCell>
                <TableCell className="text-center">Standard</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center">58.5</TableCell>
                <TableCell className="text-center font-bold">1,350</TableCell>
                <TableCell className="text-center">Max radius</TableCell>
                <TableCell className="text-center">Maximum jib length</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">Load Capacity at Various Radii</h3>
          <ul className="space-y-2">
            <li className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-400">15.0m radius:</span>
              <span className="text-white font-medium">6,000 kg</span>
            </li>
            <li className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-400">20.0m radius:</span>
              <span className="text-white font-medium">4,500 kg</span>
            </li>
            <li className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-400">30.0m radius:</span>
              <span className="text-white font-medium">2,800 kg</span>
            </li>
            <li className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-400">40.0m radius:</span>
              <span className="text-white font-medium">2,050 kg</span>
            </li>
            <li className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-400">50.0m radius:</span>
              <span className="text-white font-medium">1,600 kg</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-400">58.5m radius (max):</span>
              <span className="text-white font-medium">1,350 kg</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Technical Documentation Section */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
          <FileText className="mr-2 text-highlight" size={24} />
          Technical Documentation
        </h2>
        <p className="mb-4 text-gray-400">
          Download the official Liebherr 125 EC-B 6 specifications and load charts document for detailed
          technical information, setup configurations, and operational parameters:
        </p>
        <div className="mt-4">
          <PdfDownload
            title="Liebherr 125 EC-B 6 Specifications"
            description="Official technical data, dimensions, load charts, and operating parameters for the Liebherr 125 EC-B 6 tower crane."
            pdfPath="/pdfs/125-EC-B-6.pdf"
            fileSize="2.1 MB"
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
