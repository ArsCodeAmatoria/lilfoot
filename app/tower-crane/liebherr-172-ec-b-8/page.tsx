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

      {/* Load Capacity Chart - LM1 */}
      <div className="rounded-lg bg-black p-6 shadow-lg overflow-auto">
        <h2 className="mb-4 text-2xl font-bold text-white">LM1 Load Capacity Chart</h2>
        <p className="mb-4 text-gray-400">
          The following chart shows the Liebherr 172 EC-B 8 load capacity in tonnes (t) across varying reaches and boom heights.
          Bold values highlight maximum capacities at specific reaches.
        </p>
        <div className="overflow-x-auto relative">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-gray-900 border-b border-gray-800">
                <th className="sticky left-0 z-20 bg-gray-900 px-3 py-3 font-semibold text-gray-300 whitespace-nowrap border-r border-gray-800">m</th>
                <th className="sticky left-[65px] z-20 bg-gray-900 px-3 py-3 font-semibold text-gray-300 whitespace-nowrap border-r border-gray-800">r</th>
                <th className="sticky left-[140px] z-20 bg-gray-900 px-3 py-3 font-semibold text-gray-300 whitespace-nowrap border-r border-gray-800">m</th>
                <th className="sticky left-[230px] z-20 bg-gray-900 px-3 py-3 font-semibold text-gray-300 whitespace-nowrap border-r border-gray-800">t</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">16.0</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">18.0</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">22.0</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">24.4</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">26.9</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">30.0</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">32.5</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">35.0</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">37.5</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">40.0</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">42.5</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">45.0</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">47.5</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">50.0</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">52.5</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">55.0</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">57.5</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">60.0</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">62.5</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">62.5</td>
                <td className="sticky left-[65px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">r=64.0</td>
                <td className="sticky left-[140px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">2.6–18.0</td>
                <td className="sticky left-[230px] z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">8</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">8.00</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">7.53</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.41</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.56</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.89</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.35</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.91</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.53</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.22</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.99</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.78</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.60</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.43</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.28</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.14</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.02</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">1.91</td>
                <td className="px-3 py-3 text-white text-center">1.80</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">60.0</td>
                <td className="sticky left-[65px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">r=61.5</td>
                <td className="sticky left-[140px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">2.6–19.3</td>
                <td className="sticky left-[230px] z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">8</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">8.00</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.94</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.03</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.31</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.73</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.25</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.85</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.51</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.26</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.04</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.84</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.66</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.50</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.36</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.22</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.10</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center">-</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">57.5</td>
                <td className="sticky left-[65px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">r=59.0</td>
                <td className="sticky left-[140px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">2.6–19.2</td>
                <td className="sticky left-[230px] z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">8</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">8.00</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.88</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.98</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.26</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.69</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.21</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.81</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.48</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.23</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.01</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.81</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.64</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.48</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.33</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.20</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center">-</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">55.0</td>
                <td className="sticky left-[65px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">r=56.5</td>
                <td className="sticky left-[140px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">2.6–21.5</td>
                <td className="sticky left-[230px] z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">8</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">8.00</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">7.80</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.78</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.98</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.34</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.81</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.36</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.98</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.70</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.46</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.24</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.04</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.86</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.70</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center">-</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">52.5</td>
                <td className="sticky left-[65px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">r=54.0</td>
                <td className="sticky left-[140px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">2.6–21.4</td>
                <td className="sticky left-[230px] z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">8</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">8.00</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">7.77</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.76</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.96</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.32</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.79</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.34</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.96</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.69</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.44</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.23</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.03</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.85</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center">-</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">50.0</td>
                <td className="sticky left-[65px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">r=51.5</td>
                <td className="sticky left-[140px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">2.6–21.5</td>
                <td className="sticky left-[230px] z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">8</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">8.00</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">7.82</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.98</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.27</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.55</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.07</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.66</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.30</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.99</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.71</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.47</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.25</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center">-</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">45.0</td>
                <td className="sticky left-[65px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">r=46.5</td>
                <td className="sticky left-[140px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">2.6–22.5</td>
                <td className="sticky left-[230px] z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">8</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">8.00</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">7.28</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.49</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.82</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.35</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.70</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.31</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.97</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.68</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.43</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.20</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">3.20</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center">-</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">40.0</td>
                <td className="sticky left-[65px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">r=41.5</td>
                <td className="sticky left-[140px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">2.6–25.5</td>
                <td className="sticky left-[230px] z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">8</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">8.00</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">7.40</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.60</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.94</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.47</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.82</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.42</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.08</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.79</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">3.75</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center">-</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">35.0</td>
                <td className="sticky left-[65px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">r=36.5</td>
                <td className="sticky left-[140px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">2.6–29.0</td>
                <td className="sticky left-[230px] z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">8</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">8.00</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">7.80</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">7.00</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.34</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.87</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.22</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.82</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">4.50</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center">-</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">30.0</td>
                <td className="sticky left-[65px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">r=31.5</td>
                <td className="sticky left-[140px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">2.6–29.0</td>
                <td className="sticky left-[230px] z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">8</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">8.00</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">7.90</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">7.10</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.44</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.97</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">5.75</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center">-</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">26.9</td>
                <td className="sticky left-[65px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">r=28.4</td>
                <td className="sticky left-[140px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">2.6–22.9</td>
                <td className="sticky left-[230px] z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">8</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">8.00</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">7.46</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.70</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center">-</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">24.4</td>
                <td className="sticky left-[65px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">r=25.9</td>
                <td className="sticky left-[140px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">2.6–22.9</td>
                <td className="sticky left-[230px] z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">8</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">8.00</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">7.45</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Load Capacity Chart - LM2 */}
      <div className="rounded-lg bg-black p-6 shadow-lg overflow-auto">
        <h2 className="mb-4 text-2xl font-bold text-white">LM2 Load Capacity Chart</h2>
        <p className="mb-4 text-gray-400">
          The following chart shows the Liebherr 172 EC-B 8 load capacity in tonnes (t) across varying reaches and boom heights.
          Bold values highlight maximum capacities at specific reaches.
        </p>
        <div className="overflow-x-auto relative">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-gray-900 border-b border-gray-800">
                <th className="sticky left-0 z-20 bg-gray-900 px-3 py-3 font-semibold text-gray-300 whitespace-nowrap border-r border-gray-800">m</th>
                <th className="sticky left-[65px] z-20 bg-gray-900 px-3 py-3 font-semibold text-gray-300 whitespace-nowrap border-r border-gray-800">r</th>
                <th className="sticky left-[140px] z-20 bg-gray-900 px-3 py-3 font-semibold text-gray-300 whitespace-nowrap border-r border-gray-800">m</th>
                <th className="sticky left-[230px] z-20 bg-gray-900 px-3 py-3 font-semibold text-gray-300 whitespace-nowrap border-r border-gray-800">t</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">16.0</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">19.0</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">22.0</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">25.0</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">28.0</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">31.0</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">34.0</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">37.0</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">40.0</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">42.5</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">45.0</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">47.5</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">50.0</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">52.5</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">55.0</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">57.5</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center border-r border-gray-800">60.0</th>
                <th className="px-3 py-3 font-semibold text-gray-300 whitespace-nowrap text-center">62.5</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">62.5</td>
                <td className="sticky left-[65px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">r=64.0</td>
                <td className="sticky left-[140px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">2.6–18.0</td>
                <td className="sticky left-[230px] z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">8</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">8.00</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">7.53</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.41</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.56</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.89</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.35</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.91</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.53</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.22</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.99</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.78</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.60</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.43</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.28</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.14</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.02</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">1.91</td>
                <td className="px-3 py-3 text-white text-center">1.80</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">60.0</td>
                <td className="sticky left-[65px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">r=61.5</td>
                <td className="sticky left-[140px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">2.6–19.3</td>
                <td className="sticky left-[230px] z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">8</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">8.00</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.94</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.03</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.31</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.73</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.25</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.85</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.51</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.26</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.04</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.84</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.66</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.50</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.36</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.22</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.10</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center">-</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">57.5</td>
                <td className="sticky left-[65px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">r=59.0</td>
                <td className="sticky left-[140px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">2.6–19.2</td>
                <td className="sticky left-[230px] z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">8</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">8.00</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.88</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.98</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.26</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.69</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.21</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.81</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.48</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.23</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.01</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.81</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.64</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.48</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.33</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.20</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center">-</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">55.0</td>
                <td className="sticky left-[65px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">r=56.5</td>
                <td className="sticky left-[140px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">2.6–21.5</td>
                <td className="sticky left-[230px] z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">8</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">8.00</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">7.80</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.78</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.98</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.34</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.81</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.36</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.98</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.70</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.46</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.24</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.04</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.86</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.70</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center">-</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">52.5</td>
                <td className="sticky left-[65px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">r=54.0</td>
                <td className="sticky left-[140px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">2.6–21.4</td>
                <td className="sticky left-[230px] z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">8</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">8.00</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">7.77</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.76</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.96</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.32</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.79</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.34</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.96</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.69</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.44</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.23</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.03</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">2.85</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center">-</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">50.0</td>
                <td className="sticky left-[65px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">r=51.5</td>
                <td className="sticky left-[140px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">2.6–21.5</td>
                <td className="sticky left-[230px] z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">8</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">8.00</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">7.82</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.98</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.27</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.55</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.07</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.66</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.30</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.99</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.71</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.47</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.25</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center">-</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">45.0</td>
                <td className="sticky left-[65px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">r=46.5</td>
                <td className="sticky left-[140px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">2.6–22.5</td>
                <td className="sticky left-[230px] z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">8</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">8.00</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">7.28</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.49</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.82</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.35</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.70</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.31</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.97</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.68</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.43</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.20</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">3.20</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center">-</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">40.0</td>
                <td className="sticky left-[65px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">r=41.5</td>
                <td className="sticky left-[140px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">2.6–25.5</td>
                <td className="sticky left-[230px] z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">8</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">8.00</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">7.40</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.60</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.94</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.47</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.82</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.42</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.08</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">3.79</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">3.75</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center">-</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">35.0</td>
                <td className="sticky left-[65px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">r=36.5</td>
                <td className="sticky left-[140px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">2.6–29.0</td>
                <td className="sticky left-[230px] z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">8</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">8.00</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">7.80</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">7.00</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.34</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.87</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.22</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">4.82</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">4.50</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center">-</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">30.0</td>
                <td className="sticky left-[65px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">r=31.5</td>
                <td className="sticky left-[140px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">2.6–29.0</td>
                <td className="sticky left-[230px] z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">8</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">8.00</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">7.90</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">7.10</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.44</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">5.97</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">5.75</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center">-</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">26.9</td>
                <td className="sticky left-[65px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">r=28.4</td>
                <td className="sticky left-[140px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">2.6–22.9</td>
                <td className="sticky left-[230px] z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">8</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">8.00</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">7.46</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">6.70</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center">-</td>
              </tr>
              <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                <td className="sticky left-0 z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">24.4</td>
                <td className="sticky left-[65px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">r=25.9</td>
                <td className="sticky left-[140px] z-10 bg-gray-800/50 px-3 py-3 text-white border-r border-gray-800">2.6–22.9</td>
                <td className="sticky left-[230px] z-10 bg-gray-800/50 px-3 py-3 text-white font-medium border-r border-gray-800">8</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800"><span className="font-bold">8.00</span></td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">7.45</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center border-r border-gray-800">-</td>
                <td className="px-3 py-3 text-white text-center">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Drive Units Specification */}
      <div className="rounded-lg bg-gray-900 p-6 shadow-lg mb-8">
        <h2 className="mb-4 text-2xl font-bold text-white">Drive Unit Specifications</h2>
        <p className="mb-6 text-gray-400">
          The Liebherr 172 EC-B 8 is available with two primary hoisting unit options, providing different performance characteristics
          to match specific project requirements.
        </p>

        {/* WIW 230 MZ 427 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-white">WIW 230 MZ 427 (24 kW FU)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="rounded bg-black p-4">
                <table className="min-w-full">
                  <tbody className="divide-y divide-gray-800">
                    <tr>
                      <td className="py-2 text-gray-400">Power</td>
                      <td className="py-2 text-right text-white">24 kW FU</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-400">kVA</td>
                      <td className="py-2 text-right text-white">35.0</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-400">Max. Rope Length</td>
                      <td className="py-2 text-right text-white">328.0 m</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-400">Lifting Height</td>
                      <td className="py-2 text-right text-white">113.0 m</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-400">Layers</td>
                      <td className="py-2 text-right text-white">4</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-400">Control</td>
                      <td className="py-2 text-right text-white">Stepless (stufenlos), continuously variable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 rounded bg-black p-4">
                <h4 className="text-white font-semibold mb-2">Hoisting Speeds</h4>
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="py-2 text-left text-gray-400">Load (tonnes)</th>
                      <th className="py-2 text-right text-gray-400">Speed (m/min)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    <tr>
                      <td className="py-2 text-white">8.00</td>
                      <td className="py-2 text-right text-white">0 ➝ 16</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-white">0.50</td>
                      <td className="py-2 text-right text-white">0 ➝ 86</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="rounded bg-black p-4 flex flex-col justify-center">
              <h4 className="text-white font-semibold mb-4 text-center">Hoisting Speed vs. Load</h4>
              <div className="h-64 relative">
                {/* Y-axis line */}
                <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-gray-700"></div>
                {/* X-axis line */}
                <div className="absolute left-16 right-8 bottom-0 h-0.5 bg-gray-700"></div>
                
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 text-xs text-gray-400">86 m/min</div>
                <div className="absolute left-0 bottom-0 text-xs text-gray-400">0 m/min</div>
                
                {/* X-axis labels */}
                <div className="absolute left-12 bottom-[-20px] text-xs text-gray-400">8.0t</div>
                <div className="absolute right-0 bottom-[-20px] text-xs text-gray-400">0.5t</div>
                
                {/* Speed curve */}
                <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path 
                    d="M 20,90 C 30,70 50,20 90,10" 
                    stroke="#3B82F6" 
                    strokeWidth="2" 
                    fill="none"
                  />
                </svg>
                
                {/* Axis titles */}
                <div className="absolute left-[-30px] top-1/2 transform -rotate-90 text-xs text-gray-400">Speed</div>
                <div className="absolute bottom-[-35px] left-1/2 text-xs text-gray-400">Load</div>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">
                Hoisting speed increases as load decreases from 8t at minimum speed to 0.5t at maximum speed
              </p>
            </div>
          </div>
        </div>

        {/* WIW 260 MZ 423 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-white">WIW 260 MZ 423 (45 kW FU)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="rounded bg-black p-4">
                <table className="min-w-full">
                  <tbody className="divide-y divide-gray-800">
                    <tr>
                      <td className="py-2 text-gray-400">Power</td>
                      <td className="py-2 text-right text-white">45 kW FU</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-400">kVA</td>
                      <td className="py-2 text-right text-white">54.0</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-400">Max. Rope Length</td>
                      <td className="py-2 text-right text-white">328.0 m</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-400">Lifting Height</td>
                      <td className="py-2 text-right text-white">179.0 m</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-400">Layers</td>
                      <td className="py-2 text-right text-white">6</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-400">Control</td>
                      <td className="py-2 text-right text-white">Stepless (stufenlos), continuously variable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 rounded bg-black p-4">
                <h4 className="text-white font-semibold mb-2">Hoisting Speeds</h4>
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="py-2 text-left text-gray-400">Load (tonnes)</th>
                      <th className="py-2 text-right text-gray-400">Speed (m/min)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    <tr>
                      <td className="py-2 text-white">8.00</td>
                      <td className="py-2 text-right text-white">0 ➝ 29</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-white">0.58</td>
                      <td className="py-2 text-right text-white">0 ➝ 174</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="rounded bg-black p-4 flex flex-col justify-center">
              <h4 className="text-white font-semibold mb-4 text-center">Hoisting Speed vs. Load</h4>
              <div className="h-64 relative">
                {/* Y-axis line */}
                <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-gray-700"></div>
                {/* X-axis line */}
                <div className="absolute left-16 right-8 bottom-0 h-0.5 bg-gray-700"></div>
                
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 text-xs text-gray-400">174 m/min</div>
                <div className="absolute left-0 bottom-0 text-xs text-gray-400">0 m/min</div>
                
                {/* X-axis labels */}
                <div className="absolute left-12 bottom-[-20px] text-xs text-gray-400">8.0t</div>
                <div className="absolute right-0 bottom-[-20px] text-xs text-gray-400">0.58t</div>
                
                {/* Speed curve */}
                <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path 
                    d="M 20,90 C 30,70 50,20 90,10" 
                    stroke="#22C55E" 
                    strokeWidth="2" 
                    fill="none"
                  />
                </svg>
                
                {/* Axis titles */}
                <div className="absolute left-[-30px] top-1/2 transform -rotate-90 text-xs text-gray-400">Speed</div>
                <div className="absolute bottom-[-35px] left-1/2 text-xs text-gray-400">Load</div>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">
                Hoisting speed increases as load decreases from 8t at minimum speed to 0.58t at maximum speed
              </p>
            </div>
          </div>
        </div>

        {/* Auxiliary Drives */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Auxiliary Drives</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded bg-black p-4">
              <h4 className="text-white font-semibold mb-3">Slewing</h4>
              <table className="min-w-full">
                <tbody className="divide-y divide-gray-800">
                  <tr>
                    <td className="py-2 text-gray-400">Speed</td>
                    <td className="py-2 text-right text-white">0 ➝ 0.8 U/min</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-400">Power</td>
                    <td className="py-2 text-right text-white">7.5 kW FU</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="rounded bg-black p-4">
              <h4 className="text-white font-semibold mb-3">Trolley Travel</h4>
              <table className="min-w-full">
                <tbody className="divide-y divide-gray-800">
                  <tr>
                    <td className="py-2 text-gray-400">Speed</td>
                    <td className="py-2 text-right text-white">0 ➝ 100.0 m/min</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-400">Power</td>
                    <td className="py-2 text-right text-white">5.5 kW FU</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="rounded bg-black p-4">
              <h4 className="text-white font-semibold mb-3">Luffing Jib</h4>
              <table className="min-w-full">
                <tbody className="divide-y divide-gray-800">
                  <tr>
                    <td className="py-2 text-gray-400">Speed</td>
                    <td className="py-2 text-right text-white">25.0 m/min</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-400 align-top">Power Options</td>
                    <td className="py-2 text-right text-white">
                      <div>2 × 4.0 kW (16 HC 175)</div>
                      <div>2 × 5.5 kW (17 HC 200)</div>
                      <div>2 × 7.5 kW (21 HC 290)</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
