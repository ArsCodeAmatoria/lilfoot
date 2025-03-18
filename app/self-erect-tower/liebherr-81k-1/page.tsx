import React from 'react';
import { FileText } from 'lucide-react';
import PdfDownload from '../../components/PdfDownload';
import Liebherr81K1Charts from '../../components/Liebherr81K1Charts';
import Image from 'next/image';

export const metadata = {
  title: 'Liebherr 81K.1 Specifications | Self-Erect Tower Cranes | lilfoot',
  description:
    'Load charts and specifications for the Liebherr 81K.1 self-erecting tower crane.',
};

export default function Liebherr81K1Page() {
  return (
    <div className="space-y-8 text-white">
      <div>
        <h1 className="mb-4 text-3xl font-bold text-white">
          Liebherr 81K.1 Self-Erect Tower Crane
        </h1>
        <div className="mb-6 rounded-lg overflow-hidden">
          <Image
            src="/images/liebherr-81k-1.jpg"
            alt="Liebherr 81K.1 Self-Erecting Tower Crane"
            width={1200}
            height={675}
            className="w-full object-cover"
            priority
          />
        </div>
        <p className="mb-6 text-gray-400">
          The Liebherr 81K.1 is an upgraded version of the popular 81K model,
          offering enhanced features and improved performance. With a reach of up to 45 meters
          and a maximum capacity of 6 tons in the Load-Plus configuration, it provides excellent 
          lifting capabilities for a wide range of construction projects. The crane can operate in 
          three distinct configurations: the standard LM-1 mode, the enhanced Load-Plus mode for higher 
          capacity, or the 30° elevated jib configuration for reaching over obstacles.
        </p>
      </div>

      {/* Crane Charts */}
      <div className="mb-8">
        <Liebherr81K1Charts highlightColor="#53C03F" />
      </div>

      {/* Video Section */}
      <div className="mb-8 rounded-lg bg-black p-4 shadow-lg">
        <h2 className="mb-4 text-xl font-bold text-white">Crane in Action</h2>
        <div className="aspect-video w-full overflow-hidden rounded-lg">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/XWXguLtVj0Y"
            title="Liebherr 81K.1 Self-Erecting Tower Crane"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="mt-3 text-gray-400">Watch the Liebherr 81K.1 self-erecting tower crane in operation, demonstrating its versatility and capabilities on the construction site.</p>
      </div>

      {/* Additional Information */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-black p-4 shadow-lg">
          <h2 className="mb-3 text-xl font-bold text-white">Key Features</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
              <span className="text-gray-300">
                Enhanced lifting capacity compared to the 81K model
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
              <span className="text-gray-300">
                Rapid assembly and disassembly in approximately 20 minutes
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
              <span className="text-gray-300">
                45m jib length with maximum capacity of 6 tons in Load-Plus configuration
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
              <span className="text-gray-300">
                Flexible configuration options with standard LM-1 and Load-Plus modes
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
              <span className="text-gray-300">
                Variable jib configurations including 30° angled mode
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
              <span className="text-gray-300">
                Improved control systems for better precision
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
              <span className="text-gray-300">
                Load-Plus feature for increased lifting capacities
              </span>
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-black p-4 shadow-lg">
          <h2 className="mb-3 text-xl font-bold text-white">Applications</h2>
          <p className="mb-4 text-gray-400">
            The Liebherr 81K.1 self-erecting crane is ideal for a wide range of
            construction projects including:
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded bg-gray-900 p-3">
              <p className="text-gray-400">Residential</p>
              <p className="text-white">
                Single and multi-family homes, townhouses
              </p>
            </div>
            <div className="rounded bg-gray-900 p-3">
              <p className="text-gray-400">Commercial</p>
              <p className="text-white">
                Small to medium office buildings, retail spaces
              </p>
            </div>
            <div className="rounded bg-gray-900 p-3">
              <p className="text-gray-400">Infrastructure</p>
              <p className="text-white">
                Bridge construction, small civil works
              </p>
            </div>
            <div className="rounded bg-gray-900 p-3">
              <p className="text-gray-400">Industrial</p>
              <p className="text-white">
                Small to medium warehouse construction, facilities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Comparison */}
      <div className="mb-8 rounded-lg bg-black p-4 shadow-lg">
        <h2 className="mb-4 text-xl font-bold text-white">
          Configuration Comparison
        </h2>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-900">
              <th className="px-4 py-3 font-semibold text-gray-300">Feature</th>
              <th className="px-4 py-3 font-semibold text-gray-300">
                LM-1
              </th>
              <th className="px-4 py-3 font-semibold text-gray-300">
                Load-Plus
              </th>
              <th className="px-4 py-3 font-semibold text-gray-300">
                30° Jib
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            <tr className="bg-gray-900/30">
              <td className="px-4 py-3 text-white">Maximum Capacity</td>
              <td className="px-4 py-3 text-white">4.5 tons</td>
              <td className="px-4 py-3 text-white">6.0 tons</td>
              <td className="px-4 py-3 text-white">4.0 tons</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white">Maximum Hook Height</td>
              <td className="px-4 py-3 text-white">26.0 m</td>
              <td className="px-4 py-3 text-white">40.4 m</td>
              <td className="px-4 py-3 text-white">38.0 m</td>
            </tr>
            <tr className="bg-gray-900/30">
              <td className="px-4 py-3 text-white">
                Capacity at Max Radius (45m)
              </td>
              <td className="px-4 py-3 text-white">550 kg</td>
              <td className="px-4 py-3 text-white">750 kg</td>
              <td className="px-4 py-3 text-white">500 kg</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white">Best Use Case</td>
              <td className="px-4 py-3 text-white">
                Standard configuration for most construction projects
              </td>
              <td className="px-4 py-3 text-white">
                Projects requiring higher lifting capacity
              </td>
              <td className="px-4 py-3 text-white">
                Height-critical applications and working over obstacles
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Load-Plus Detailed Table */}
      <div className="mb-8 rounded-lg bg-black p-4 shadow-lg overflow-auto">
        <h2 className="mb-4 text-xl font-bold text-white">
          Load-Plus Configuration Detailed Data
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-gray-900">
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap">Height (m)</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap">Load Capacity (m/kg)</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">12.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">15.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">18.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">21.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">23.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">25.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">27.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">29.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">31.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">33.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">35.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">37.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">40.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">42.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">45.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">48.0m</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr className="bg-gray-900/30 hover:bg-gray-900/50">
                <td className="px-2 py-3 text-white font-medium whitespace-nowrap">48.0</td>
                <td className="px-2 py-3 text-white whitespace-nowrap">3.0 – 12.0 <span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">4830</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">4030</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3440</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3120</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2860</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2630</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2430</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2260</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2110</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1970</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1850</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1690</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1590</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1460</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">1350</span></td>
              </tr>
              <tr className="hover:bg-gray-900/50">
                <td className="px-2 py-3 text-white font-medium whitespace-nowrap">45.0</td>
                <td className="px-2 py-3 text-white whitespace-nowrap">3.0 – 13.3 <span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">5360</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">4500</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3870</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3530</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3240</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2990</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2770</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2580</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2410</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2260</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2130</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1950</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1840</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">1700</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"></td>
              </tr>
              <tr className="bg-gray-900/30 hover:bg-gray-900/50">
                <td className="px-2 py-3 text-white font-medium whitespace-nowrap">42.0</td>
                <td className="px-2 py-3 text-white whitespace-nowrap">3.0 – 14.1 <span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">5640</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">4710</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">4030</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3670</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3370</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3100</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2870</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2670</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2500</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2340</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2200</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2010</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">1900</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"></td>
              </tr>
              <tr className="hover:bg-gray-900/50">
                <td className="px-2 py-3 text-white font-medium whitespace-nowrap">37.0</td>
                <td className="px-2 py-3 text-white whitespace-nowrap">3.0 – 15.1 <span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">5040</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">4310</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3930</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3600</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3320</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3070</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2860</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2670</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2500</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">2350</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"></td>
              </tr>
              <tr className="bg-gray-900/30 hover:bg-gray-900/50">
                <td className="px-2 py-3 text-white font-medium whitespace-nowrap">31.0</td>
                <td className="px-2 py-3 text-white whitespace-nowrap">3.0 – 16.3 <span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">5470</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">4720</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">4320</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3980</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3690</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3430</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">3200</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          Values in <span className="font-bold">bold</span> represent maximum capacity at the specified radius.
          All values are shown in kilograms (kg).
        </p>
      </div>

      {/* PDF Download Section */}
      <div className="rounded-lg bg-black p-8">
        <h2 className="mb-6 text-2xl font-bold text-white">Documentation</h2>
        <p className="mb-6 text-gray-400">
          Download the official Liebherr 81K.1 specifications and technical data sheet below.
          This document includes essential information for planning, operation, and maintenance.
        </p>
        <PdfDownload 
          title="Liebherr 81K.1 Technical Specifications"
          description="Official technical data, dimensions, load charts, and operating parameters for the Liebherr 81K.1 self-erecting tower crane."
          pdfPath="/pdfs/liebherr-81k-1.pdf"
          fileSize="5.1 MB"
        />
      </div>

      <div className="mt-8 rounded-lg bg-gray-900 p-4">
        <h2 className="mb-2 text-xl font-bold text-white">About This Data</h2>
        <p className="text-gray-400">
          The load charts shown here represent the lifting capacities of the
          Liebherr 81K.1 self-erecting crane in three configurations: the standard LM-1,
          Load-Plus, and 30° elevated jib. These values are based on manufacturer
          specifications and may vary depending on specific conditions such as
          wind speed, ground conditions, and precise configuration.
        </p>
        <p className="mt-4 text-gray-400">
          For detailed specifications, operational guidelines, and exact lifting
          capacities for your specific project needs, please consult the
          official{' '}
          <a
            href="https://www.liebherr.com/en/int/products/construction-machines/tower-cranes/fast-erecting-cranes/81-k.1/81k1.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-highlight hover:underline"
          >
            Liebherr 81K.1 documentation
          </a>{' '}
          or contact an authorized Liebherr representative.
        </p>
      </div>
    </div>
  );
}
