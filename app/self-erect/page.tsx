import React from 'react';
import SelfErectCraneCharts from '../components/SelfErectCraneCharts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Liebherr 81k Self-Erect Crane | lilfoot',
  description:
    'Specifications and load charts for the Liebherr 81k self-erecting tower crane with Load-Plus LM 1 and 30 degree configurations.',
};

export default function SelfErectCranePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-3xl font-bold text-white">
          Liebherr 81k Self-Erect Crane
        </h1>
        <p className="mb-6 text-gray-400">
          The Liebherr 81k self-erecting tower crane offers high lifting
          capacities with a reach of up to 45 meters. Explore the load charts
          for both the Load-Plus LM 1 and 30° jib configurations below.
        </p>
      </div>

      {/* Self-Erect Crane Charts */}
      <div className="mb-8">
        <SelfErectCraneCharts highlightColor="#53C03F" />
      </div>

      {/* Additional Information */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-black p-4 shadow-lg">
          <h2 className="mb-3 text-xl font-bold text-white">Key Features</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
              <span className="text-gray-300">
                Rapid assembly and disassembly in approximately 20 minutes
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
              <span className="text-gray-300">
                Compact transport dimensions for easy site access
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
              <span className="text-gray-300">
                45m jib length with maximum capacity of 6 tons
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
                Low-noise electric operation with 400V power supply
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
              <span className="text-gray-300">
                Optional Load-Plus feature for increased lifting capacities
              </span>
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-black p-4 shadow-lg">
          <h2 className="mb-3 text-xl font-bold text-white">Applications</h2>
          <p className="mb-4 text-gray-400">
            The Liebherr 81k self-erecting crane is ideal for a wide range of
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
                Load-Plus LM 1
              </th>
              <th className="px-4 py-3 font-semibold text-gray-300">
                30° Jib Configuration
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            <tr className="bg-gray-900/30">
              <td className="px-4 py-3 text-white">Maximum Capacity</td>
              <td className="px-4 py-3 text-white">6.0 tons</td>
              <td className="px-4 py-3 text-white">4.2 tons</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white">Maximum Hook Height</td>
              <td className="px-4 py-3 text-white">26.0 m</td>
              <td className="px-4 py-3 text-white">40.4 m</td>
            </tr>
            <tr className="bg-gray-900/30">
              <td className="px-4 py-3 text-white">
                Capacity at Max Radius (45m)
              </td>
              <td className="px-4 py-3 text-white">650 kg</td>
              <td className="px-4 py-3 text-white">500 kg</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-white">Best Use Case</td>
              <td className="px-4 py-3 text-white">
                Higher capacity requirements, wider area coverage
              </td>
              <td className="px-4 py-3 text-white">
                Height-critical applications, working over tall buildings
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 rounded-lg bg-gray-900 p-4">
        <h2 className="mb-2 text-xl font-bold text-white">About This Data</h2>
        <p className="text-gray-400">
          The load charts shown here represent the lifting capacities of the
          Liebherr 81k self-erecting crane in both standard Load-Plus LM 1 and
          30° jib configurations. These values are based on manufacturer
          specifications and may vary depending on specific conditions such as
          wind speed, ground conditions, and precise configuration.
        </p>
        <p className="mt-4 text-gray-400">
          For detailed specifications, operational guidelines, and exact lifting
          capacities for your specific project needs, please consult the
          official{' '}
          <a
            href="https://www.liebherr.com/en/int/products/construction-machines/tower-cranes/fast-erecting-cranes/81-k.1/81k.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-highlight hover:underline"
          >
            Liebherr 81k documentation
          </a>{' '}
          or contact an authorized Liebherr representative.
        </p>
      </div>
    </div>
  );
}
