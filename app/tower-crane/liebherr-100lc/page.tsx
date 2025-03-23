import { Metadata } from 'next';
import { Download, FileText, FileSymlink } from 'lucide-react';
import LoadCharts from './charts';
import PdfDownload from '../../components/PdfDownload';

export const metadata: Metadata = {
  title: 'Liebherr 100LC Tower Crane | LilFoot',
  description: 'Specifications and load charts for the Liebherr 100LC tower crane.',
};

export default function Liebherr100LC() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Liebherr 100LC Tower Crane</h1>
      
      {/* Overview Section - Single Column */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-300 mb-4">
          The Liebherr 100LC is a versatile top-slewing tower crane with excellent load capacity and reach capabilities. 
          Designed for reliability and efficiency, it's widely used in construction projects requiring medium to heavy lifting.
        </p>
        <p className="text-gray-300 mb-4">
          With its modular design and robust construction, the 100LC offers exceptional performance, safety, and ease of operation
          in various construction environments.
        </p>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Key Features</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Maximum lifting capacity of 6,000 kg</li>
            <li>Jib length up to 50.0 meters</li>
            <li>Variable hoisting speeds for precise control</li>
            <li>Stepless frequency-controlled slewing drive</li>
            <li>Modern LITRONIC electronic control system</li>
            <li>Exceptional safety features with overload protection</li>
          </ul>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Dimensions & Reach</h3>
            <table className="w-full">
              <tbody className="divide-y divide-gray-800">
                <tr className="text-gray-300">
                  <td className="py-2 font-semibold">Max. jib length</td>
                  <td className="py-2 text-right">50.0 m</td>
                </tr>
                <tr className="text-gray-300">
                  <td className="py-2 font-semibold">Max. hook height</td>
                  <td className="py-2 text-right">43.2 m (freestanding)</td>
                </tr>
                <tr className="text-gray-300">
                  <td className="py-2 font-semibold">Tower sections</td>
                  <td className="py-2 text-right">1.2 m × 1.2 m</td>
                </tr>
                <tr className="text-gray-300">
                  <td className="py-2 font-semibold">Slewing radius</td>
                  <td className="py-2 text-right">2.5 m</td>
                </tr>
                <tr className="text-gray-300">
                  <td className="py-2 font-semibold">Base spread</td>
                  <td className="py-2 text-right">4.5 m × 4.5 m</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Lifting Capacity</h3>
            <table className="w-full">
              <tbody className="divide-y divide-gray-800">
                <tr className="text-gray-300">
                  <td className="py-2 font-semibold">Max. capacity</td>
                  <td className="py-2 text-right">6,000 kg</td>
                </tr>
                <tr className="text-gray-300">
                  <td className="py-2 font-semibold">Capacity at max. reach</td>
                  <td className="py-2 text-right">1,600 kg</td>
                </tr>
                <tr className="text-gray-300">
                  <td className="py-2 font-semibold">Line configuration</td>
                  <td className="py-2 text-right">2-part & 4-part</td>
                </tr>
                <tr className="text-gray-300">
                  <td className="py-2 font-semibold">Single hook capacity</td>
                  <td className="py-2 text-right">3,000 kg</td>
                </tr>
                <tr className="text-gray-300">
                  <td className="py-2 font-semibold">Dual hook capacity</td>
                  <td className="py-2 text-right">6,000 kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Power & Electrical</h3>
            <table className="w-full">
              <tbody className="divide-y divide-gray-800">
                <tr className="text-gray-300">
                  <td className="py-2 font-semibold">Total power</td>
                  <td className="py-2 text-right">22.0 kW / 22.0 kW FU</td>
                </tr>
                <tr className="text-gray-300">
                  <td className="py-2 font-semibold">Hoist motor</td>
                  <td className="py-2 text-right">3.8 / 18.5 / 22.0 kW</td>
                </tr>
                <tr className="text-gray-300">
                  <td className="py-2 font-semibold">Slewing motor</td>
                  <td className="py-2 text-right">1 × 7.5 kW</td>
                </tr>
                <tr className="text-gray-300">
                  <td className="py-2 font-semibold">Trolley motor</td>
                  <td className="py-2 text-right">0.65 / 2.0 / 3.0 kW</td>
                </tr>
                <tr className="text-gray-300">
                  <td className="py-2 font-semibold">Power supply</td>
                  <td className="py-2 text-right">400V/50Hz</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Operation & Features</h3>
            <table className="w-full">
              <tbody className="divide-y divide-gray-800">
                <tr className="text-gray-300">
                  <td className="py-2 font-semibold">Control system</td>
                  <td className="py-2 text-right">LITRONIC</td>
                </tr>
                <tr className="text-gray-300">
                  <td className="py-2 font-semibold">Slewing speed</td>
                  <td className="py-2 text-right">0 - 0.8 U/min</td>
                </tr>
                <tr className="text-gray-300">
                  <td className="py-2 font-semibold">Trolley speed</td>
                  <td className="py-2 text-right">9.0 / 25.0 / 45.0 m/min</td>
                </tr>
                <tr className="text-gray-300">
                  <td className="py-2 font-semibold">Travel speed</td>
                  <td className="py-2 text-right">18.0 / 25.0 m/min</td>
                </tr>
                <tr className="text-gray-300">
                  <td className="py-2 font-semibold">Overload protection</td>
                  <td className="py-2 text-right">Standard</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Crane Configuration Options</h2>
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <p className="text-gray-300 mb-4">
            The Liebherr 100LC can be configured in multiple ways to meet the specific requirements of different construction projects:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-2">Foundation Options</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Static base (4.5 m × 4.5 m)</li>
                <li>Cross base with central ballast</li>
                <li>Rail-mounted undercarriage</li>
                <li>Fixed anchoring with anchor cross</li>
                <li>Climbing configuration for high-rise buildings</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Jib Configurations</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Standard jib (26.8 m to 50.0 m)</li>
                <li>Luffing jib option for confined spaces</li>
                <li>Various trolley configurations</li>
                <li>Single or dual trolley operation</li>
                <li>Special adapters for custom applications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Technical Documentation Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FileText className="mr-2 text-highlight" size={24} />
          Technical Documentation
        </h2>
        <p className="mb-4 text-gray-300">
          Download the official Liebherr 100LC specifications and load charts document for detailed
          technical information, setup configurations, and operational parameters:
        </p>
        <div className="mt-4">
          <PdfDownload
            title="Liebherr 100LC Specifications"
            description="Official technical data, dimensions, load charts, and operating parameters for the Liebherr 100LC tower crane."
            pdfPath="/pdfs/100LC.pdf"
            fileSize="766 KB"
          />
        </div>
      </div>
      
      <LoadCharts />
    </div>
  );
}
