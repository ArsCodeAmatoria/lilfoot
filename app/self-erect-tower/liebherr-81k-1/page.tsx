import React from 'react';
import { FileText } from 'lucide-react';
import PdfDownload from '../../components/PdfDownload';
import Liebherr81K1Charts from '../../components/Liebherr81K1Charts';

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
