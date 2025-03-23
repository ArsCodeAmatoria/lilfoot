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

      {/* Transport & Setup Information */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-black p-4 shadow-lg">
          <h2 className="mb-3 text-xl font-bold text-white">Transport & Mobility</h2>
          <p className="mb-4 text-gray-400">
            The Liebherr 81K.1 is designed for exceptional mobility and rapid deployment across job sites:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
              <span className="text-gray-300">
                Compact transport dimensions of 14.3m (L) × 2.55m (W) × 4.0m (H)
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
              <span className="text-gray-300">
                Single-vehicle transport configuration with integrated axle system
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
              <span className="text-gray-300">
                Road-legal transport without special permits (in most regions)
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
              <span className="text-gray-300">
                Integrated ballast system with automatic deployment sequence
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
              <span className="text-gray-300">
                Air and hydraulic braking systems for secure transportation
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
              <span className="text-gray-300">
                Multiple support base options: 4.5m × 4.5m to 6.0m × 6.0m
              </span>
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-black p-4 shadow-lg">
          <h2 className="mb-3 text-xl font-bold text-white">Setup & Operation</h2>
          <p className="mb-4 text-gray-400">
            The 81K.1 features Liebherr's advanced self-erection system for minimal crew requirements:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
              <span className="text-gray-300">
                Fully automated erection sequence controlled via remote
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
              <span className="text-gray-300">
                20-minute setup time from transport to operational configuration
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
              <span className="text-gray-300">
                Single-phase erection with integrated hydraulic systems
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
              <span className="text-gray-300">
                MICROMOVE precision positioning system with millimeter accuracy
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
              <span className="text-gray-300">
                Adaptive load detection with automatic adjustment of operational parameters
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
              <span className="text-gray-300">
                Electronic wind monitoring system with automatic safety protocols
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Safety & Technology Features */}
      <div className="mb-8 rounded-lg bg-black p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold text-white">Safety & Technology Features</h2>
        <p className="mb-6 text-gray-400">
          The Liebherr 81K.1 incorporates advanced safety systems and innovative technologies to enhance operational efficiency and protect personnel.
        </p>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-lg bg-gray-900 p-4">
              <h3 className="mb-3 flex items-center text-lg font-semibold text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-highlight" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Safety Systems
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-gray-300">•</span>
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">ABB Anti-Collision System:</span> Prevents crane-to-crane and crane-to-obstacle collisions with automated avoidance protocols
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-gray-300">•</span>
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Load Moment Limitation:</span> Real-time monitoring with automatic shutdown if maximum capacity is approached
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-gray-300">•</span>
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Electronic Wind Monitoring:</span> Continuous measurement with automated safety protocols for high-wind conditions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-gray-300">•</span>
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Emergency Lowering System:</span> Battery-backed hydraulic system for load lowering during power outages
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="rounded-lg bg-gray-900 p-4">
              <h3 className="mb-3 flex items-center text-lg font-semibold text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-highlight" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                Power Management
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-gray-300">•</span>
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">ECOmode:</span> Intelligent power management system that reduces energy consumption by up to 30%
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-gray-300">•</span>
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Frequency-Controlled Drives:</span> All motions use FU drives for precise control and reduced power consumption
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-gray-300">•</span>
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Regenerative Braking:</span> Energy recovery during braking operations for improved efficiency
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="rounded-lg bg-gray-900 p-4">
              <h3 className="mb-3 flex items-center text-lg font-semibold text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-highlight" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.168 1.168a4 4 0 01-8.274 0l1.17-1.169A3 3 0 0010 8.172z" clipRule="evenodd" />
                </svg>
                Smart Control Systems
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-gray-300">•</span>
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">LiDAT Telematics:</span> Remote monitoring of operational data, maintenance status, and location information
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-gray-300">•</span>
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">MICROMOVE:</span> Ultra-precise positioning system allowing millimeter-level load placement
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-gray-300">•</span>
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Smart Load Control:</span> Automatic load sway dampening for improved handling in challenging conditions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-gray-300">•</span>
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Remote Diagnostic:</span> Cloud-based troubleshooting and performance optimization
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="rounded-lg bg-gray-900 p-4">
              <h3 className="mb-3 flex items-center text-lg font-semibold text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-highlight" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                Operator Comfort & Control
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-gray-300">•</span>
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Ergonomic Remote Control:</span> Lightweight, intuitive interface with haptic feedback
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-gray-300">•</span>
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Customizable Control Profiles:</span> Operator-specific settings with automatic recognition
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-gray-300">•</span>
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">RC Vision System:</span> Optional camera integration for improved visual feedback in challenging environments
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-6 rounded-lg bg-gray-900/50 p-4">
          <p className="text-gray-400 italic">
            Liebherr's commitment to safety and innovation is reflected in every aspect of the 81K.1 design, providing operators
            with advanced tools to maximize productivity while maintaining the highest safety standards in the industry.
          </p>
        </div>
      </div>

      {/* Tower Height Options */}
      <div className="mb-8 rounded-lg bg-black p-4 shadow-lg">
        <h2 className="mb-4 text-xl font-bold text-white">Tower Height Options</h2>
        <p className="mb-4 text-gray-400">
          The Liebherr 81K.1 offers multiple tower configurations to suit diverse project requirements:
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded bg-gray-900 p-3">
            <h3 className="mb-2 font-semibold text-white">Standard Configuration</h3>
            <ul className="ml-4 list-disc text-gray-300 space-y-1">
              <li>Hook height: 26.0m</li>
              <li>Tower sections: 1</li>
              <li>Setup time: 20 minutes</li>
              <li>Base spread: 4.5m × 4.5m</li>
            </ul>
          </div>
          <div className="rounded bg-gray-900 p-3">
            <h3 className="mb-2 font-semibold text-white">Extended Tower</h3>
            <ul className="ml-4 list-disc text-gray-300 space-y-1">
              <li>Hook height: 40.4m</li>
              <li>Tower sections: 2</li>
              <li>Setup time: 35 minutes</li>
              <li>Base spread: 4.5m × 4.5m</li>
            </ul>
          </div>
          <div className="rounded bg-gray-900 p-3">
            <h3 className="mb-2 font-semibold text-white">Climbing Configuration</h3>
            <ul className="ml-4 list-disc text-gray-300 space-y-1">
              <li>Hook height: Up to 55.0m</li>
              <li>Tower sections: Multiple</li>
              <li>Setup time: 60+ minutes</li>
              <li>Base spread: 6.0m × 6.0m</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-3 rounded bg-gray-900/50">
          <h3 className="mb-2 font-semibold text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-highlight" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Technical Note
          </h3>
          <p className="text-gray-400">
            All tower configurations include Liebherr's LITRONIC electronic monitoring system, which provides real-time load moment calculations,
            anti-collision protection, and integrated wind speed monitoring. The system automatically adjusts operational parameters 
            based on the specific configuration, ensuring optimal performance and safety regardless of setup.
          </p>
        </div>
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

      {/* LM1 Detailed Table */}
      <div className="mb-8 rounded-lg bg-black p-4 shadow-lg overflow-auto">
        <h2 className="mb-4 text-xl font-bold text-white">
          LM-1 Configuration Detailed Data
        </h2>
        <div className="overflow-x-auto relative">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-gray-900">
                <th className="sticky left-0 z-10 bg-gray-900 px-2 py-3 font-semibold text-gray-300 whitespace-nowrap">Reach (m)</th>
                <th className="sticky left-[80px] z-10 bg-gray-900 px-2 py-3 font-semibold text-gray-300 whitespace-nowrap">Load Capacity (m/kg)</th>
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
                <td className="sticky left-0 z-10 bg-gray-900/30 px-2 py-3 text-white font-medium whitespace-nowrap">48.0</td>
                <td className="sticky left-[80px] z-10 bg-gray-900/30 px-2 py-3 text-white whitespace-nowrap">3.0 – 12.0 <span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">4620</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3730</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3110</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2790</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2530</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2300</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2110</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1940</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1800</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1670</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1550</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1410</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1320</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">1100</span></td>
              </tr>
              <tr className="hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/20 px-2 py-3 text-white font-medium whitespace-nowrap">45.0</td>
                <td className="sticky left-[80px] z-10 bg-gray-800/20 px-2 py-3 text-white whitespace-nowrap">3.0 – 13.3 <span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">5220</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">4230</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3540</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3180</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2890</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2640</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2420</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2230</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2070</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1920</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1800</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1630</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1530</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">1400</span></td>
              </tr>
              <tr className="bg-gray-900/30 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-900/30 px-2 py-3 text-white font-medium whitespace-nowrap">42.0</td>
                <td className="sticky left-[80px] z-10 bg-gray-900/30 px-2 py-3 text-white whitespace-nowrap">3.0 – 14.1 <span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">5570</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">4520</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3790</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3410</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3090</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2820</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2590</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2400</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2220</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2070</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1930</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1750</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">1650</span></td>
              </tr>
              <tr className="hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/20 px-2 py-3 text-white font-medium whitespace-nowrap">37.0</td>
                <td className="sticky left-[80px] z-10 bg-gray-800/20 px-2 py-3 text-white whitespace-nowrap">3.0 – 15.1 <span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">4930</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">4150</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3740</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3400</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3110</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2870</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2650</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2460</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2300</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">2150</span></td>
              </tr>
              <tr className="bg-gray-900/30 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-900/30 px-2 py-3 text-white font-medium whitespace-nowrap">31.0</td>
                <td className="sticky left-[80px] z-10 bg-gray-900/30 px-2 py-3 text-white whitespace-nowrap">3.0 – 16.3 <span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">5370</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">4520</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">4080</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3710</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3400</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3130</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">2900</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          Values in <span className="font-bold">bold</span> represent maximum capacity at the specified radius.
          All values are shown in kilograms (kg).
        </p>
      </div>

      {/* Load-Plus Detailed Table */}
      <div className="mb-8 rounded-lg bg-black p-4 shadow-lg overflow-auto">
        <h2 className="mb-4 text-xl font-bold text-white">
          Load-Plus Configuration Detailed Data
        </h2>
        <div className="overflow-x-auto relative">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-gray-900">
                <th className="sticky left-0 z-10 bg-gray-900 px-2 py-3 font-semibold text-gray-300 whitespace-nowrap">Reach (m)</th>
                <th className="sticky left-[80px] z-10 bg-gray-900 px-2 py-3 font-semibold text-gray-300 whitespace-nowrap">Load Capacity (m/kg)</th>
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
                <td className="sticky left-0 z-10 bg-gray-900/30 px-2 py-3 text-white font-medium whitespace-nowrap">48.0</td>
                <td className="sticky left-[80px] z-10 bg-gray-900/30 px-2 py-3 text-white whitespace-nowrap">3.0 – 12.0 <span className="font-bold">6000</span></td>
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
                <td className="sticky left-0 z-10 bg-gray-800/20 px-2 py-3 text-white font-medium whitespace-nowrap">45.0</td>
                <td className="sticky left-[80px] z-10 bg-gray-800/20 px-2 py-3 text-white whitespace-nowrap">3.0 – 13.3 <span className="font-bold">6000</span></td>
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
              </tr>
              <tr className="bg-gray-900/30 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-900/30 px-2 py-3 text-white font-medium whitespace-nowrap">42.0</td>
                <td className="sticky left-[80px] z-10 bg-gray-900/30 px-2 py-3 text-white whitespace-nowrap">3.0 – 14.1 <span className="font-bold">6000</span></td>
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
              </tr>
              <tr className="hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/20 px-2 py-3 text-white font-medium whitespace-nowrap">37.0</td>
                <td className="sticky left-[80px] z-10 bg-gray-800/20 px-2 py-3 text-white whitespace-nowrap">3.0 – 15.1 <span className="font-bold">6000</span></td>
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
              </tr>
              <tr className="bg-gray-900/30 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-900/30 px-2 py-3 text-white font-medium whitespace-nowrap">31.0</td>
                <td className="sticky left-[80px] z-10 bg-gray-900/30 px-2 py-3 text-white whitespace-nowrap">3.0 – 16.3 <span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">6000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">5470</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">4720</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">4320</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3980</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3690</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">3430</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">3200</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          Values in <span className="font-bold">bold</span> represent maximum capacity at the specified radius.
          All values are shown in kilograms (kg).
        </p>
      </div>

      {/* 30° Elevated Jib Detailed Table */}
      <div className="mb-8 rounded-lg bg-black p-4 shadow-lg overflow-auto">
        <h2 className="mb-4 text-xl font-bold text-white">
          30° Elevated Jib Configuration Detailed Data
        </h2>
        <div className="overflow-x-auto relative">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-gray-900">
                <th className="sticky left-0 z-10 bg-gray-900 px-2 py-3 font-semibold text-gray-300 whitespace-nowrap">Reach (m)</th>
                <th className="sticky left-[80px] z-10 bg-gray-900 px-2 py-3 font-semibold text-gray-300 whitespace-nowrap">Load Capacity (m/kg)</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">12.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">14.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">16.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">18.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">20.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">22.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">25.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">26.5m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">28.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">30.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">31.7m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">33.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">35.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">36.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">37.0m</th>
                <th className="px-2 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">38.6m</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr className="bg-gray-900/30 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-900/30 px-2 py-3 text-white font-medium whitespace-nowrap">45.0</td>
                <td className="sticky left-[80px] z-10 bg-gray-900/30 px-2 py-3 text-white whitespace-nowrap">3.0 – 15.8 <span className="font-bold">3000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">3000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">3000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2970</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2730</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2520</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2340</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2100</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2000</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1900</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1790</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1700</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1640</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1550</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1500</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1460</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">1400</span></td>
              </tr>
              <tr className="hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/20 px-2 py-3 text-white font-medium whitespace-nowrap">42.0</td>
                <td className="sticky left-[80px] z-10 bg-gray-800/20 px-2 py-3 text-white whitespace-nowrap">3.0 – 17.7 <span className="font-bold">3000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">3000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">3000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">3000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2960</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2740</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2540</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2290</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2180</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2080</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1960</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1860</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1790</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">1700</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">1650</span></td>
              </tr>
              <tr className="bg-gray-900/30 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-900/30 px-2 py-3 text-white font-medium whitespace-nowrap">37.0</td>
                <td className="sticky left-[80px] z-10 bg-gray-900/30 px-2 py-3 text-white whitespace-nowrap">3.0 – 21.2 <span className="font-bold">3000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">3000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">3000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">3000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">3000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">3000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2910</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2630</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2510</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2400</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap">2260</td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">2150</span></td>
              </tr>
              <tr className="hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/20 px-2 py-3 text-white font-medium whitespace-nowrap">31.0</td>
                <td className="sticky left-[80px] z-10 bg-gray-800/20 px-2 py-3 text-white whitespace-nowrap">3.0 – 25.3 <span className="font-bold">3000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">3000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">3000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">3000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">3000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">3000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">3000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">3000</span></td>
                <td className="px-2 py-3 text-white text-center whitespace-nowrap"><span className="font-bold">2900</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          Values in <span className="font-bold">bold</span> represent maximum capacity at the specified radius.
          All values are shown in kilograms (kg).
        </p>
      </div>

      {/* Driving Units Section */}
      <div className="mb-8 rounded-lg bg-black p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold text-white">Crane Driving Units</h2>
        <p className="mb-6 text-gray-400">
          The Liebherr 81K.1 features state-of-the-art driving units with frequency-controlled motors for smooth operation and precise control.
        </p>
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left Panel - Motion & Power */}
          <div className="rounded-lg bg-gray-900 p-4">
            <h3 className="mb-3 text-lg font-semibold text-white">Motion & Power</h3>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-2 font-semibold text-gray-300">Motion Type</th>
                  <th className="py-2 font-semibold text-gray-300">Speed / Range</th>
                  <th className="py-2 font-semibold text-gray-300">Power</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="py-3 text-white">
                    <div className="flex items-center">
                      <span className="mr-2 rounded-full bg-blue-500 p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                      Slewing
                    </div>
                  </td>
                  <td className="py-3 text-white">0 → 0.8 U/min</td>
                  <td className="py-3 text-white">5.0 kW FU</td>
                </tr>
                <tr>
                  <td className="py-3 text-white">
                    <div className="flex items-center">
                      <span className="mr-2 rounded-full bg-green-500 p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1.01 1.01 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      Trolley Travel
                    </div>
                  </td>
                  <td className="py-3 text-white">0 → 60.0 m/min</td>
                  <td className="py-3 text-white">3.0 kW FU</td>
                </tr>
                <tr>
                  <td className="py-3 text-white">
                    <div className="flex items-center">
                      <span className="mr-2 rounded-full bg-yellow-500 p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      Crane Travel
                    </div>
                  </td>
                  <td className="py-3 text-white">0 → 25.0 m/min</td>
                  <td className="py-3 text-white">2 × 2.2 kW FU</td>
                </tr>
                <tr>
                  <td className="py-3 text-white">
                    <div className="flex items-center">
                      <span className="mr-2 rounded-full bg-red-500 p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                      Jib Angle Adjustment (0°–45°)
                    </div>
                  </td>
                  <td className="py-3 text-white">110 sec</td>
                  <td className="py-3 text-white">3.0 kW FU</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right Panel - Hoist Performance */}
          <div className="rounded-lg bg-gray-900 p-4">
            <h3 className="mb-3 text-lg font-semibold text-white">Hoist Motor & Speed Performance</h3>
            <p className="mb-4 text-gray-300">Motor Type: 15.0 kW FU</p>
            
            <table className="mb-4 w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-2 font-semibold text-gray-300">Step</th>
                  <th className="py-2 font-semibold text-gray-300">Capacity</th>
                  <th className="py-2 font-semibold text-gray-300">Speed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="py-3 text-white">Step 1</td>
                  <td className="py-3 text-white">6000 kg</td>
                  <td className="py-3 text-white">0 → 12.7 m/min</td>
                </tr>
                <tr>
                  <td className="py-3 text-white">Step 2</td>
                  <td className="py-3 text-white">400 kg</td>
                  <td className="py-3 text-white">0 → 76.1 m/min</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-6 rounded bg-gray-800 p-4">
              <h4 className="mb-3 text-sm font-semibold text-gray-300">Performance Curve</h4>
              <div className="relative h-[200px] w-full">
                {/* Y-axis */}
                <div className="absolute bottom-0 left-0 top-0 flex flex-col justify-between border-r border-gray-600 pr-2 text-xs text-gray-400">
                  <span>6000 kg</span>
                  <span>4500 kg</span>
                  <span>3000 kg</span>
                  <span>1500 kg</span>
                  <span>0 kg</span>
                </div>
                
                {/* Graph area */}
                <div className="absolute bottom-0 left-8 right-0 top-0">
                  {/* X-axis labels */}
                  <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-gray-400">
                    <span>0</span>
                    <span>20</span>
                    <span>40</span>
                    <span>60</span>
                    <span>80 m/min</span>
                  </div>
                  
                  {/* X-axis line */}
                  <div className="absolute bottom-0 left-0 right-0 border-t border-gray-600"></div>
                  
                  {/* Performance curve */}
                  <svg className="absolute bottom-0 left-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                      d="M0,0 C5,40 20,75 40,90 C60,97 80,99 100,100"
                      fill="none"
                      stroke="#53C03F"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Panel - Additional Information */}
        <div className="mt-6 rounded-lg bg-gray-900 p-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-sm font-semibold text-gray-300">BGL</h3>
              <p className="text-white">C.0.03.0080</p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold text-gray-300">Power Supply</h3>
              <ul className="list-inside list-disc text-white">
                <li>Voltage: 380 V – 480 V</li>
                <li>Frequency: 50 Hz / 60 Hz</li>
                <li>Power: 22.0 kVA (FU)</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-700 pt-4">
            <p className="text-sm italic text-gray-400">
              Load-Plus = <span className="text-gray-500">Abweichende Geschwindigkeiten und Betriebsbedingungen.</span>
              <br />Different speeds and service conditions.
            </p>
          </div>
        </div>
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
