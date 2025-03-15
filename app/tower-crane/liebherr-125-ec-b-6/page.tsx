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
import LiebherrDrivingUnitsSectionWrapper from '../../components/LiebherrDrivingUnitsSectionWrapper';
import { Button } from '#/components/ui/button';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata = {
  title: 'Liebherr 125 EC-B 6 Specifications | Tower Cranes | lilfoot',
  description:
    'Load charts and specifications for the Liebherr 125 EC-B 6 tower crane.',
};

export default function Liebherr125ECB6Page() {
  return (
    <div className="text-white space-y-8">
      {/* Header Section */}
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
        
        {/* Load-Plus Table */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-3">Load-Plus Configuration Capacity Chart</h3>
          <div>
            <Table>
              <TableCaption>Load-Plus capacity chart for Liebherr 125 EC-B 6 showing capacities in tons at different heights and radiuses</TableCaption>
              <TableHeader className="bg-gray-900">
                <TableRow>
                  <TableHead className="border border-gray-800 sticky left-0 z-20 bg-gray-900">Height (m)</TableHead>
                  <TableHead className="border border-gray-800 sticky left-[81px] z-20 bg-gray-900">Radius (r)</TableHead>
                  <TableHead className="border border-gray-800 sticky left-[162px] z-20 bg-gray-900">Parameter (t)</TableHead>
                  <TableHead className="border border-gray-800 text-center">20.0m</TableHead>
                  <TableHead className="border border-gray-800 text-center">22.5m</TableHead>
                  <TableHead className="border border-gray-800 text-center">25.0m</TableHead>
                  <TableHead className="border border-gray-800 text-center">27.5m</TableHead>
                  <TableHead className="border border-gray-800 text-center">30.0m</TableHead>
                  <TableHead className="border border-gray-800 text-center">32.5m</TableHead>
                  <TableHead className="border border-gray-800 text-center">35.0m</TableHead>
                  <TableHead className="border border-gray-800 text-center">37.5m</TableHead>
                  <TableHead className="border border-gray-800 text-center">40.0m</TableHead>
                  <TableHead className="border border-gray-800 text-center">42.5m</TableHead>
                  <TableHead className="border border-gray-800 text-center">45.0m</TableHead>
                  <TableHead className="border border-gray-800 text-center">47.5m</TableHead>
                  <TableHead className="border border-gray-800 text-center">50.0m</TableHead>
                  <TableHead className="border border-gray-800 text-center">52.5m</TableHead>
                  <TableHead className="border border-gray-800 text-center">55.0m</TableHead>
                  <TableHead className="border border-gray-800 text-center">58.0m</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-gray-900/30">
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">58.0</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=59.6</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.47</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.84</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.32</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.90</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.54</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.24</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.97</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.74</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.54</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.37</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.21</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.06</TableCell>
                  <TableCell className="border border-gray-800 text-center">1.93</TableCell>
                  <TableCell className="border border-gray-800 text-center">1.82</TableCell>
                  <TableCell className="border border-gray-800 text-center">1.71</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">1.60</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">55.0</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=56.6</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.63</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.99</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.47</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.04</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.67</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.36</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.09</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.86</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.65</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.47</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.30</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.16</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.03</TableCell>
                  <TableCell className="border border-gray-800 text-center">1.91</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">1.80</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow className="bg-gray-900/30">
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">52.5</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=54.1</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.84</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.18</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.64</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.20</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.82</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.50</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.22</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.98</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.77</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.58</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.41</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.26</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.12</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">2.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">50.0</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=51.6</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">6.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.37</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.81</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.34</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.95</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.62</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.33</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.08</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.86</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.67</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.49</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.34</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">2.20</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow className="bg-gray-900/30">
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">47.5</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=49.1</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">6.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.48</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.91</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.44</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.04</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.70</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.41</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.16</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.93</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.73</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.56</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">2.40</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">45.0</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=46.6</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">6.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.67</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.08</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.59</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.18</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.83</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.53</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.27</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.03</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.83</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">2.65</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">42.5</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=44.1</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">6.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.40</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.84</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.38</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.99</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.65</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.36</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.11</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.89</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">2.70</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">40.0</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=41.6</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">6.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.59</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.01</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.53</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.13</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.78</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.48</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.22</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">3.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">37.5</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=39.1</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">6.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.59</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.02</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.54</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.14</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.80</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.50</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.25</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">35.0</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=36.6</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">6.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.59</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.02</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.54</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.14</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.79</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">3.50</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">32.5</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=34.1</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">6.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.59</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.02</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.54</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.14</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">3.80</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">30.0</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=31.6</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">6.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.59</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.02</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.55</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">4.15</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">27.5</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=29.1</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">6.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.59</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.02</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">4.55</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">25.0</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=26.6</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">6.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.63</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">5.10</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow className="bg-gray-900/30">
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">22.5</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=24.1</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">6.00</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">5.70</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">20.0</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=21.6</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">6.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="text-gray-400 text-sm mt-3">
            <p className="mb-2">
              <span className="text-highlight font-medium">Note:</span> The Load-Plus table shows maximum lifting capacities (in tons) for the Liebherr 125 EC-B 6 at different heights and radiuses.
            </p>
            <p>
              <span className="font-medium">Bold values</span> indicate the maximum lifting capacity at each configuration row. Missing values indicate configurations that are not available or not recommended for operation.
            </p>
          </div>
        </div>

        {/* LM1 Table */}
        <div className="mb-6 mt-8">
          <h3 className="text-xl font-bold text-white mb-3">LM1 Configuration Capacity Chart</h3>
          <div>
            <Table>
              <TableCaption>LM1 capacity chart for Liebherr 125 EC-B 6 showing capacities in tons at different heights and radiuses</TableCaption>
              <TableHeader className="bg-gray-900">
                <TableRow>
                  <TableHead className="border border-gray-800 sticky left-0 z-20 bg-gray-900">Height (m)</TableHead>
                  <TableHead className="border border-gray-800 sticky left-[81px] z-20 bg-gray-900">Radius (r)</TableHead>
                  <TableHead className="border border-gray-800 sticky left-[162px] z-20 bg-gray-900">Parameter (t)</TableHead>
                  <TableHead className="border border-gray-800 text-center">20.0m</TableHead>
                  <TableHead className="border border-gray-800 text-center">22.5m</TableHead>
                  <TableHead className="border border-gray-800 text-center">25.0m</TableHead>
                  <TableHead className="border border-gray-800 text-center">27.5m</TableHead>
                  <TableHead className="border border-gray-800 text-center">30.0m</TableHead>
                  <TableHead className="border border-gray-800 text-center">32.5m</TableHead>
                  <TableHead className="border border-gray-800 text-center">35.0m</TableHead>
                  <TableHead className="border border-gray-800 text-center">37.5m</TableHead>
                  <TableHead className="border border-gray-800 text-center">40.0m</TableHead>
                  <TableHead className="border border-gray-800 text-center">42.5m</TableHead>
                  <TableHead className="border border-gray-800 text-center">45.0m</TableHead>
                  <TableHead className="border border-gray-800 text-center">47.5m</TableHead>
                  <TableHead className="border border-gray-800 text-center">50.0m</TableHead>
                  <TableHead className="border border-gray-800 text-center">52.5m</TableHead>
                  <TableHead className="border border-gray-800 text-center">55.0m</TableHead>
                  <TableHead className="border border-gray-800 text-center">58.0m</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-gray-900/30">
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">58.0</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=59.6</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.99</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.39</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.91</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.52</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.19</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.90</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.66</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.45</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.27</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.10</TableCell>
                  <TableCell className="border border-gray-800 text-center">1.96</TableCell>
                  <TableCell className="border border-gray-800 text-center">1.82</TableCell>
                  <TableCell className="border border-gray-800 text-center">1.71</TableCell>
                  <TableCell className="border border-gray-800 text-center">1.60</TableCell>
                  <TableCell className="border border-gray-800 text-center">1.50</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">1.40</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">55.0</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=56.6</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.16</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.56</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.07</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.67</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.33</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.04</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.79</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.58</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.39</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.22</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.07</TableCell>
                  <TableCell className="border border-gray-800 text-center">1.93</TableCell>
                  <TableCell className="border border-gray-800 text-center">1.81</TableCell>
                  <TableCell className="border border-gray-800 text-center">1.70</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">1.60</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow className="bg-gray-900/30">
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">52.5</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=54.1</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.38</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.76</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.26</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.84</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.49</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.19</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.93</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.71</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.51</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.34</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.18</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.04</TableCell>
                  <TableCell className="border border-gray-800 text-center">1.91</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">1.80</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">50.0</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=51.6</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.60</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.95</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.43</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.63</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.32</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.06</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.82</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.62</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.44</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.27</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.13</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">2.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow className="bg-gray-900/30">
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">47.5</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=49.1</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.72</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.07</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.54</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.10</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.73</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.42</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.14</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.90</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.70</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.51</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.34</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">2.20</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">45.0</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=46.6</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.93</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.26</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.71</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.26</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.88</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.55</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.27</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.02</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.81</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.62</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">2.45</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">42.5</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=44.1</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">6.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.40</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.84</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.38</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.99</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.65</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.36</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.11</TableCell>
                  <TableCell className="border border-gray-800 text-center">2.89</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">2.70</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">40.0</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=41.6</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">6.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.59</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.01</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.53</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.13</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.78</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.48</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.22</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">3.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">37.5</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=39.1</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">6.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.59</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.02</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.54</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.14</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.80</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.50</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.25</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">35.0</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=36.6</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">6.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.59</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.02</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.54</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.14</TableCell>
                  <TableCell className="border border-gray-800 text-center">3.79</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">3.50</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">32.5</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=34.1</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">6.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.59</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.02</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.54</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.14</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">3.80</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">30.0</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=31.6</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">6.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.59</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.02</TableCell>
                  <TableCell className="border border-gray-800 text-center">4.55</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">4.15</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">27.5</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=29.1</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">6.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.59</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.02</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">4.55</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">25.0</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=26.6</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">6.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">5.63</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">5.10</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow className="bg-gray-900/30">
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">22.5</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=24.1</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center">6.00</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">5.70</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">20.0</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[81px] z-10 bg-inherit">r=21.6</TableCell>
                  <TableCell className="border border-gray-800 font-medium sticky left-[162px] z-10 bg-inherit">6</TableCell>
                  <TableCell className="border border-gray-800 text-center font-bold">6.00</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                  <TableCell className="border border-gray-800 text-center">-</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="text-gray-400 text-sm mt-3">
            <p className="mb-2">
              <span className="text-highlight font-medium">Note:</span> The LM1 table shows maximum lifting capacities (in tons) for the Liebherr 125 EC-B 6 at different heights and radiuses.
            </p>
            <p>
              <span className="font-medium">Bold values</span> indicate the maximum lifting capacity at each configuration row. Missing values indicate configurations that are not available or not recommended for operation.
            </p>
          </div>
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
        
        {/* Driving Units Section */}
        <LiebherrDrivingUnitsSectionWrapper />
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
