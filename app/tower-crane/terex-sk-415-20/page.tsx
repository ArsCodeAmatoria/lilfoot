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
import TerexLoadDiagramWrapper from '../../components/TerexLoadDiagramWrapper';
import TerexLoadDiagram229Wrapper from '../../components/TerexLoadDiagram229Wrapper';
import CraneLoadDiagram210Wrapper from '../../components/CraneLoadDiagram210Wrapper';
import CraneLoadDiagram196Wrapper from '../../components/CraneLoadDiagram196Wrapper';
import CraneLoadDiagram180Wrapper from '../../components/CraneLoadDiagram180Wrapper';
import CraneLoadDiagram164Wrapper from '../../components/CraneLoadDiagram164Wrapper';
import CraneLoadDiagram147Wrapper from '../../components/CraneLoadDiagram147Wrapper';
import CraneLoadDiagram131Wrapper from '../../components/CraneLoadDiagram131Wrapper';
import CraneLoadDiagram114Wrapper from '../../components/CraneLoadDiagram114Wrapper';
import TerexHoistingSpecs from '../../components/TerexHoistingSpecs';
import TerexSpeedSpecsWrapper from '../../components/TerexSpeedSpecsWrapper';
import TerexTowerConfigs from '../../components/TerexTowerConfigs';
import { Card, CardHeader, CardTitle, CardContent } from '#/components/ui/card';

export const metadata = {
  title: 'Terex SK 415-20 Specifications | Tower Cranes | lilfoot',
  description:
    'Load charts and specifications for the Terex SK 415-20 tower crane.',
};

export default function TerexSK41520Page() {
  return (
    <div className="text-white space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/3">
          <h1 className="mb-4 text-3xl font-bold text-white">
            Terex <span className="text-highlight">SK 415-20</span> Tower Crane
          </h1>
          <p className="text-gray-400 mb-6">
            The Terex SK 415-20 is a heavy-duty tower crane with exceptional
            lifting capacity, designed for major infrastructure and high-rise
            construction projects. With its impressive <span className="text-highlight">20-tonne maximum lifting capacity</span>
            and <span className="text-highlight">415 meter-tonne capacity rating</span>, it's ideal for demanding construction
            applications requiring significant lifting power.
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image 
              src="/images/terex-sk-415-20.jpg" 
              alt="Terex SK 415-20 Tower Crane" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Key Specifications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-black p-5 rounded-lg shadow-lg border border-gray-800">
          <div className="flex items-center mb-3">
            <Maximize className="text-highlight mr-3" size={22} />
            <h3 className="text-lg font-semibold">Maximum Capacity</h3>
          </div>
          <p className="text-2xl font-bold text-white">20,000 kg</p>
          <p className="text-gray-400 text-sm mt-1">At minimum working radius of 18.0m</p>
        </div>
        
        <div className="bg-black p-5 rounded-lg shadow-lg border border-gray-800">
          <div className="flex items-center mb-3">
            <Ruler className="text-highlight mr-3" size={22} />
            <h3 className="text-lg font-semibold">Maximum Jib Length</h3>
          </div>
          <p className="text-2xl font-bold text-white">65.0 meters</p>
          <p className="text-gray-400 text-sm mt-1">With capacity of 3,200 kg at max radius</p>
        </div>
        
        <div className="bg-black p-5 rounded-lg shadow-lg border border-gray-800">
          <div className="flex items-center mb-3">
            <Weight className="text-highlight mr-3" size={22} />
            <h3 className="text-lg font-semibold">Hook Height</h3>
          </div>
          <p className="text-2xl font-bold text-white">Up to 85.0 m</p>
          <p className="text-gray-400 text-sm mt-1">Varies based on tower configuration</p>
        </div>
      </div>

      {/* PDF Download Section */}
      <div className="mb-4 bg-black p-6 rounded-lg shadow-lg border border-gray-800">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center">
          <FileText className="mr-2 text-highlight" size={24} />
          Documentation
        </h2>
        <PdfDownload
          title="Terex SK 415-20 Technical Specifications"
          description="Comprehensive technical specifications, load charts, and operational guidelines for the Terex SK 415-20 tower crane."
          pdfPath="/pdfs/terex-sk-415-20.pdf"
          fileSize="969 KB"
        />
      </div>

      {/* Crane Overview Section */}
      <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-800">
        <h2 className="text-xl font-bold text-white mb-4">Crane Overview</h2>
        <p className="text-gray-400 mb-4">
          The Terex SK 415-20 is a powerful hammerhead tower crane designed for heavy lifting 
          applications on large construction sites. With its robust structure and high load capacity, 
          it's particularly well-suited for infrastructure projects and high-rise construction.
        </p>
        <p className="text-gray-400 mb-4">
          With a maximum lifting capacity of 20,000 kg and a maximum jib length of 65.0 meters, the SK 415-20 
          provides exceptional coverage and lifting power. The crane features Terex's advanced control systems 
          for precise load handling and enhanced safety features for optimal operational reliability.
        </p>
        <p className="text-gray-400">
          The SK 415-20 is designed for ease of assembly and transport, with modular components that 
          facilitate efficient setup and dismantling. Its robust construction ensures stability during 
          operation, even in challenging weather conditions, making it a reliable choice for demanding 
          construction projects.
        </p>
      </div>

      {/* Technical Specifications Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Technical Specifications</h2>
        
        {/* Tower Configurations */}
        <TerexTowerConfigs />

        {/* Hoisting and Power Supply Specifications */}
        <TerexHoistingSpecs />

        {/* Hoisting Speed and Additional Specifications */}
        <TerexSpeedSpecsWrapper />

        {/* Technical Specifications Table */}
        <div className="overflow-x-auto bg-black p-6 rounded-lg shadow-lg border border-gray-800">
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
                <td className="py-3 px-4 text-gray-300">20,000 kg</td>
                <td className="py-3 px-4 text-gray-400">At 18.0m radius</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="py-3 px-4 text-gray-300 font-medium">Max Jib Length</td>
                <td className="py-3 px-4 text-gray-300">65.0 m</td>
                <td className="py-3 px-4 text-gray-400">Configurable in 5.0m sections</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="py-3 px-4 text-gray-300 font-medium">Max Hook Height</td>
                <td className="py-3 px-4 text-gray-300">85.0 m</td>
                <td className="py-3 px-4 text-gray-400">With standard tower system</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="py-3 px-4 text-gray-300 font-medium">Tip Load Capacity</td>
                <td className="py-3 px-4 text-gray-300">3,200 kg</td>
                <td className="py-3 px-4 text-gray-400">At maximum radius</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="py-3 px-4 text-gray-300 font-medium">Tower System</td>
                <td className="py-3 px-4 text-gray-300">SK Tower</td>
                <td className="py-3 px-4 text-gray-400">Standard SK tower system</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="py-3 px-4 text-gray-300 font-medium">Power Supply</td>
                <td className="py-3 px-4 text-gray-300">400V / 50Hz</td>
                <td className="py-3 px-4 text-gray-400">Three-phase current</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="py-3 px-4 text-gray-300 font-medium">Hoisting Speed</td>
                <td className="py-3 px-4 text-gray-300">0 - 90 m/min</td>
                <td className="py-3 px-4 text-gray-400">Dependent on load weight</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="py-3 px-4 text-gray-300 font-medium">Slewing Speed</td>
                <td className="py-3 px-4 text-gray-300">0 - 0.7 rpm</td>
                <td className="py-3 px-4 text-gray-400">Infinitely variable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Features Grid */}
      <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-800">
        <h2 className="text-xl font-bold text-white mb-4">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-highlight">
            <h3 className="text-lg font-semibold text-white mb-2">High Load Capacity</h3>
            <p className="text-gray-400">
              Impressive 20-tonne maximum lifting capacity makes it suitable for the heaviest lifting tasks
              on major construction projects.
            </p>
          </div>
          
          <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-highlight">
            <h3 className="text-lg font-semibold text-white mb-2">Extended Reach</h3>
            <p className="text-gray-400">
              With a maximum jib length of 65 meters, the SK 415-20 provides exceptional coverage
              across large construction sites.
            </p>
          </div>
          
          <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-highlight">
            <h3 className="text-lg font-semibold text-white mb-2">Precision Control</h3>
            <p className="text-gray-400">
              Advanced control systems allow for precise load positioning, with smooth operation
              even when handling heavy loads at maximum radius.
            </p>
          </div>
          
          <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-highlight">
            <h3 className="text-lg font-semibold text-white mb-2">Modular Design</h3>
            <p className="text-gray-400">
              Modular tower and jib components allow for flexible configuration options to
              meet specific site requirements and height restrictions.
            </p>
          </div>
          
          <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-highlight">
            <h3 className="text-lg font-semibold text-white mb-2">Safety Systems</h3>
            <p className="text-gray-400">
              Comprehensive safety features including load moment limiters, anti-collision systems,
              and wind speed monitoring for secure operation.
            </p>
          </div>
          
          <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-highlight">
            <h3 className="text-lg font-semibold text-white mb-2">Operator Comfort</h3>
            <p className="text-gray-400">
              Ergonomically designed cabin with excellent visibility, climate control, and intuitive
              controls for extended operating periods.
            </p>
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-800">
        <h2 className="text-xl font-bold text-white mb-4">Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
            <h3 className="text-lg font-semibold text-highlight mb-2">High-Rise Construction</h3>
            <p className="text-gray-400">
              Ideal for constructing skyscrapers and tall buildings where significant lifting capacity
              and height are required for structural elements and materials.
            </p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
            <h3 className="text-lg font-semibold text-highlight mb-2">Infrastructure Projects</h3>
            <p className="text-gray-400">
              Perfect for bridges, dams, power plants, and other large-scale infrastructure projects
              requiring heavy lifting capabilities and precise placement.
            </p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
            <h3 className="text-lg font-semibold text-highlight mb-2">Industrial Construction</h3>
            <p className="text-gray-400">
              Suitable for manufacturing facilities, refineries, and industrial complexes where
              heavy machinery and equipment need to be installed with precision.
            </p>
          </div>
        </div>
      </div>

      {/* Tower Section */}
      <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-800">
        <Card className="border border-gray-800 bg-black">
          <CardHeader>
            <CardTitle className="text-highlight font-bold">
              TOWER | Tour | Torre | Torre
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                  <h3 className="text-lg font-semibold text-highlight mb-2">Tower Height</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-highlight">•</span>
                      <span>Base Height: 33.1 ft (10.1 m)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-highlight">•</span>
                      <span>Standard Height: 164.1 ft (50 m)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-highlight">•</span>
                      <span>Maximum Free Standing: 213.3 ft (65 m)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-highlight">•</span>
                      <span>Maximum Anchored: 246.1 ft (75 m)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                  <h3 className="text-lg font-semibold text-highlight mb-2">Tower Components</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-highlight">•</span>
                      <span>Standard Mast Section: 9.8 ft (3 m)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-highlight">•</span>
                      <span>Tower Width: 6.6 ft (2 m)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-highlight">•</span>
                      <span>Climbing Cage: Integrated hydraulic system</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-highlight">•</span>
                      <span>Anchoring: Multiple tie-in options</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Standard Configurations Section */}
      <TerexTowerConfigs />

      {/* Turn (Slewing) Section */}
      <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-800">
        <Card className="border border-gray-800 bg-black">
          <CardHeader>
            <CardTitle className="text-highlight font-bold">
              TURN | Tour | Giro | Rotazione
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                  <h3 className="text-lg font-semibold text-highlight mb-2">Slewing System</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-highlight">•</span>
                      <span>Drive Type: Electric slewing gear</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-highlight">•</span>
                      <span>Speed Range: 0 - 0.7 rpm</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-highlight">•</span>
                      <span>Motor Power: 2 × 5.0 kW</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-highlight">•</span>
                      <span>Control: Frequency-controlled</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                  <h3 className="text-lg font-semibold text-highlight mb-2">Slewing Specifications</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-highlight">•</span>
                      <span>Slewing Radius: 360° continuous</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-highlight">•</span>
                      <span>Slewing Bearing: Ball bearing slew ring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-highlight">•</span>
                      <span>Braking System: Automatic/manual</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-highlight">•</span>
                      <span>Wind Operation Limit: 45 mph (72 km/h)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Jib Section */}
      <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-800">
        <Card className="border border-gray-800 bg-black">
          <CardHeader>
            <CardTitle className="text-highlight font-bold">
              JIB | Flèche | Pluma | Braccio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                  <h3 className="text-lg font-semibold text-highlight mb-2">Jib Specifications</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-highlight">•</span>
                      <span>Maximum Length: 213.3 ft (65 m)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-highlight">•</span>
                      <span>Minimum Length: 114.8 ft (35 m)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-highlight">•</span>
                      <span>Standard Jib Segment: 16.4 ft (5 m)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-highlight">•</span>
                      <span>Jib Tip Capacity: 3,200 kg at 65 m</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                  <h3 className="text-lg font-semibold text-highlight mb-2">Trolley System</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-highlight">•</span>
                      <span>Trolley Type: Electric rope-driven</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-highlight">•</span>
                      <span>Trolley Speed: 0 - 60 m/min</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-highlight">•</span>
                      <span>Drive Power: 5.5 kW</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-highlight">•</span>
                      <span>Control: Frequency-controlled</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Data Section */}
      <section id="performance-data" className="py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Performance Data</h2>
          
          <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-800 mb-10">
            <h3 className="text-xl text-white mb-4"><span className="text-highlight">246.1 ft</span> Configuration - Load Diagram Chart</h3>
            <TerexLoadDiagramWrapper />
          </div>
          
          <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-800 mb-10">
            <h3 className="text-xl text-white mb-4"><span className="text-highlight">229.7 ft</span> Configuration - Load Diagram Chart</h3>
            <TerexLoadDiagram229Wrapper />
          </div>
          
          <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-800 mb-10">
            <h3 className="text-xl text-white mb-4"><span className="text-highlight">209.6-212.9 ft</span> Configuration - Load Diagram Chart</h3>
            <CraneLoadDiagram210Wrapper />
          </div>
          
          <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-800 mb-10">
            <h3 className="text-xl text-white mb-4"><span className="text-highlight">193.6-196.9 ft</span> Configuration - Load Diagram Chart</h3>
            <CraneLoadDiagram196Wrapper />
          </div>
          
          <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-800 mb-10">
            <h3 className="text-xl text-white mb-4"><span className="text-highlight">177.2-180.5 ft</span> Configuration - Load Diagram Chart</h3>
            <CraneLoadDiagram180Wrapper />
          </div>

          <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-800 mb-10">
            <h3 className="text-xl text-white mb-4"><span className="text-highlight">160.8-164.1 ft</span> Configuration - Load Diagram Chart</h3>
            <CraneLoadDiagram164Wrapper />
          </div>

          <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-800 mb-10">
            <h3 className="text-xl text-white mb-4"><span className="text-highlight">144.4-147.6 ft</span> Configuration - Load Diagram Chart</h3>
            <CraneLoadDiagram147Wrapper />
          </div>

          <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-800 mb-10">
            <h3 className="text-xl text-white mb-4"><span className="text-highlight">128-131.2 ft</span> Configuration - Load Diagram Chart</h3>
            <CraneLoadDiagram131Wrapper />
          </div>

          <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-800 mb-10">
            <h3 className="text-xl text-white mb-4"><span className="text-highlight">111.6-114.8 ft</span> Configuration - Load Diagram Chart</h3>
            <CraneLoadDiagram114Wrapper />
          </div>
        </div>
      </section>
      
      {/* Additional Information */}
      <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-800">
        <h2 className="text-xl font-bold text-white mb-4">Additional Information</h2>
        <p className="text-gray-400 mb-4">
          The Terex SK 415-20 tower crane requires proper foundation preparation and anchoring according 
          to manufacturer specifications. Regular maintenance and inspections are essential to ensure safe 
          operation and compliance with safety regulations.
        </p>
        <p className="text-gray-400 mb-4">
          For detailed technical specifications, assembly instructions, and complete load charts across 
          all configurations, please refer to the manufacturer's documentation or contact a Terex representative.
        </p>
        <p className="text-gray-400">
          All operators must be properly trained and certified to operate this equipment in accordance 
          with local regulations and industry best practices.
        </p>
      </div>
    </div>
  );
}
