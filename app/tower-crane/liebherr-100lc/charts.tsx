import React from 'react';

export default function LoadCharts() {
  return (
    <div className="space-y-8 mt-8">
      <h2 className="text-2xl font-bold">Load Chart Tables</h2>
      <p className="text-gray-400 mb-6">
        The following tables provide detailed load capacity information for the Liebherr 100LC tower crane
        in various configurations. Values are in kilograms.
      </p>

      <div className="overflow-x-auto">
        <div>
          <h3 className="text-xl font-bold mb-4">Load Chart – Single Hook (3000 kg Max)</h3>
          <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-3 py-2 text-left font-bold">m (Reach)</th>
                <th className="px-3 py-2 text-left font-bold">r (Radius)</th>
                <th className="px-3 py-2 text-left font-bold">m/kg</th>
                <th className="px-3 py-2 text-left font-bold">26.8</th>
                <th className="px-3 py-2 text-left font-bold">30.0</th>
                <th className="px-3 py-2 text-left font-bold">32.6</th>
                <th className="px-3 py-2 text-left font-bold">36.0</th>
                <th className="px-3 py-2 text-left font-bold">38.4</th>
                <th className="px-3 py-2 text-left font-bold">42.0</th>
                <th className="px-3 py-2 text-left font-bold">44.2</th>
                <th className="px-3 py-2 text-left font-bold">48.0</th>
                <th className="px-3 py-2 text-left font-bold">50.0</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr className="text-gray-300 hover:bg-gray-800">
                <td className="px-3 py-2">50.0</td>
                <td className="px-3 py-2">r=51.6</td>
                <td className="px-3 py-2">3000</td>
                <td className="px-3 py-2">3000</td>
                <td className="px-3 py-2">2920</td>
                <td className="px-3 py-2">2660</td>
                <td className="px-3 py-2">2370</td>
                <td className="px-3 py-2">2200</td>
                <td className="px-3 py-2">1970</td>
                <td className="px-3 py-2">1860</td>
                <td className="px-3 py-2">1680</td>
                <td className="px-3 py-2 font-bold text-highlight">1600</td>
              </tr>
              <tr className="text-gray-300 hover:bg-gray-800">
                <td className="px-3 py-2">44.2</td>
                <td className="px-3 py-2">r=45.8</td>
                <td className="px-3 py-2">3000</td>
                <td className="px-3 py-2">3000</td>
                <td className="px-3 py-2">3000</td>
                <td className="px-3 py-2">2780</td>
                <td className="px-3 py-2">2480</td>
                <td className="px-3 py-2">2300</td>
                <td className="px-3 py-2">2070</td>
                <td className="px-3 py-2 font-bold text-highlight">1950</td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
              </tr>
              <tr className="text-gray-300 hover:bg-gray-800">
                <td className="px-3 py-2">38.4</td>
                <td className="px-3 py-2">r=40.0</td>
                <td className="px-3 py-2">3000</td>
                <td className="px-3 py-2">3000</td>
                <td className="px-3 py-2">2840</td>
                <td className="px-3 py-2">2530</td>
                <td className="px-3 py-2 font-bold text-highlight">2350</td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
              </tr>
              <tr className="text-gray-300 hover:bg-gray-800">
                <td className="px-3 py-2">32.6</td>
                <td className="px-3 py-2">r=34.2</td>
                <td className="px-3 py-2">3000</td>
                <td className="px-3 py-2">3000</td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2 font-bold text-highlight">2900</td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
              </tr>
              <tr className="text-gray-300 hover:bg-gray-800">
                <td className="px-3 py-2">26.8</td>
                <td className="px-3 py-2">r=28.4</td>
                <td className="px-3 py-2">3000</td>
                <td className="px-3 py-2 font-bold text-highlight">3000</td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="overflow-x-auto mt-10">
        <div>
          <h3 className="text-xl font-bold mb-4">Load Chart – Dual Hook, 2-Part Line (6000 kg Max)</h3>
          <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-3 py-2 text-left font-bold">m (Reach)</th>
                <th className="px-3 py-2 text-left font-bold">r (Radius)</th>
                <th className="px-3 py-2 text-left font-bold">m/kg</th>
                <th className="px-3 py-2 text-left font-bold">16.0</th>
                <th className="px-3 py-2 text-left font-bold">18.0</th>
                <th className="px-3 py-2 text-left font-bold">20.0</th>
                <th className="px-3 py-2 text-left font-bold">22.0</th>
                <th className="px-3 py-2 text-left font-bold">24.0</th>
                <th className="px-3 py-2 text-left font-bold">26.8</th>
                <th className="px-3 py-2 text-left font-bold">30.0</th>
                <th className="px-3 py-2 text-left font-bold">32.6</th>
                <th className="px-3 py-2 text-left font-bold">36.0</th>
                <th className="px-3 py-2 text-left font-bold">38.4</th>
                <th className="px-3 py-2 text-left font-bold">42.0</th>
                <th className="px-3 py-2 text-left font-bold">44.2</th>
                <th className="px-3 py-2 text-left font-bold">48.0</th>
                <th className="px-3 py-2 text-left font-bold">50.0</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr className="text-gray-300 hover:bg-gray-800">
                <td className="px-3 py-2">50.0</td>
                <td className="px-3 py-2">r=51.6</td>
                <td className="px-3 py-2">6000</td>
                <td className="px-3 py-2">5700</td>
                <td className="px-3 py-2">4970</td>
                <td className="px-3 py-2">4400</td>
                <td className="px-3 py-2">3930</td>
                <td className="px-3 py-2">3550</td>
                <td className="px-3 py-2">3110</td>
                <td className="px-3 py-2">2710</td>
                <td className="px-3 py-2">2450</td>
                <td className="px-3 py-2">2160</td>
                <td className="px-3 py-2">1990</td>
                <td className="px-3 py-2">1770</td>
                <td className="px-3 py-2">1660</td>
                <td className="px-3 py-2">1480</td>
                <td className="px-3 py-2 font-bold text-highlight">1400</td>
              </tr>
              <tr className="text-gray-300 hover:bg-gray-800">
                <td className="px-3 py-2">44.2</td>
                <td className="px-3 py-2">r=45.8</td>
                <td className="px-3 py-2">6000</td>
                <td className="px-3 py-2">5970</td>
                <td className="px-3 py-2">5210</td>
                <td className="px-3 py-2">4610</td>
                <td className="px-3 py-2">4130</td>
                <td className="px-3 py-2">3730</td>
                <td className="px-3 py-2">3270</td>
                <td className="px-3 py-2">2850</td>
                <td className="px-3 py-2">2580</td>
                <td className="px-3 py-2">2280</td>
                <td className="px-3 py-2">2100</td>
                <td className="px-3 py-2">1870</td>
                <td className="px-3 py-2 font-bold text-highlight">1750</td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
              </tr>
              <tr className="text-gray-300 hover:bg-gray-800">
                <td className="px-3 py-2">38.4</td>
                <td className="px-3 py-2">r=40.0</td>
                <td className="px-3 py-2">6000</td>
                <td className="px-3 py-2">6000</td>
                <td className="px-3 py-2">5320</td>
                <td className="px-3 py-2">4710</td>
                <td className="px-3 py-2">4220</td>
                <td className="px-3 py-2">3810</td>
                <td className="px-3 py-2">3340</td>
                <td className="px-3 py-2">2920</td>
                <td className="px-3 py-2">2640</td>
                <td className="px-3 py-2">2330</td>
                <td className="px-3 py-2 font-bold text-highlight">2150</td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
              </tr>
              <tr className="text-gray-300 hover:bg-gray-800">
                <td className="px-3 py-2">32.6</td>
                <td className="px-3 py-2">r=34.2</td>
                <td className="px-3 py-2">6000</td>
                <td className="px-3 py-2">6000</td>
                <td className="px-3 py-2">5440</td>
                <td className="px-3 py-2">4820</td>
                <td className="px-3 py-2">4310</td>
                <td className="px-3 py-2">3890</td>
                <td className="px-3 py-2">3420</td>
                <td className="px-3 py-2">2990</td>
                <td className="px-3 py-2 font-bold text-highlight">2700</td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
              </tr>
              <tr className="text-gray-300 hover:bg-gray-800">
                <td className="px-3 py-2">26.8</td>
                <td className="px-3 py-2">r=28.4</td>
                <td className="px-3 py-2">6000</td>
                <td className="px-3 py-2 font-bold text-highlight">6000</td>
                <td className="px-3 py-2">5640</td>
                <td className="px-3 py-2">4990</td>
                <td className="px-3 py-2">4470</td>
                <td className="px-3 py-2">4040</td>
                <td className="px-3 py-2 font-bold text-highlight">3550</td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="overflow-x-auto mt-10">
        <div>
          <h3 className="text-xl font-bold mb-4">Load Chart – Dual Hook, 4-Part Line (6000 kg Max)</h3>
          <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-3 py-2 text-left font-bold">m (Reach)</th>
                <th className="px-3 py-2 text-left font-bold">r (Radius)</th>
                <th className="px-3 py-2 text-left font-bold">m/kg</th>
                <th className="px-3 py-2 text-left font-bold">16.0</th>
                <th className="px-3 py-2 text-left font-bold">18.0</th>
                <th className="px-3 py-2 text-left font-bold">20.0</th>
                <th className="px-3 py-2 text-left font-bold">22.0</th>
                <th className="px-3 py-2 text-left font-bold">24.0</th>
                <th className="px-3 py-2 text-left font-bold">26.8</th>
                <th className="px-3 py-2 text-left font-bold">30.0</th>
                <th className="px-3 py-2 text-left font-bold">32.6</th>
                <th className="px-3 py-2 text-left font-bold">36.0</th>
                <th className="px-3 py-2 text-left font-bold">38.4</th>
                <th className="px-3 py-2 text-left font-bold">42.0</th>
                <th className="px-3 py-2 text-left font-bold">44.2</th>
                <th className="px-3 py-2 text-left font-bold">48.0</th>
                <th className="px-3 py-2 text-left font-bold">50.0</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr className="text-gray-300 hover:bg-gray-800">
                <td className="px-3 py-2">50.0</td>
                <td className="px-3 py-2">r=51.6</td>
                <td className="px-3 py-2">6000</td>
                <td className="px-3 py-2">5700</td>
                <td className="px-3 py-2">4970</td>
                <td className="px-3 py-2">4400</td>
                <td className="px-3 py-2">3930</td>
                <td className="px-3 py-2">3550</td>
                <td className="px-3 py-2">3110</td>
                <td className="px-3 py-2">2710</td>
                <td className="px-3 py-2">2450</td>
                <td className="px-3 py-2">2160</td>
                <td className="px-3 py-2">1990</td>
                <td className="px-3 py-2">1770</td>
                <td className="px-3 py-2">1660</td>
                <td className="px-3 py-2">1480</td>
                <td className="px-3 py-2 font-bold text-highlight">1400</td>
              </tr>
              <tr className="text-gray-300 hover:bg-gray-800">
                <td className="px-3 py-2">44.2</td>
                <td className="px-3 py-2">r=45.8</td>
                <td className="px-3 py-2">6000</td>
                <td className="px-3 py-2">5970</td>
                <td className="px-3 py-2">5210</td>
                <td className="px-3 py-2">4610</td>
                <td className="px-3 py-2">4130</td>
                <td className="px-3 py-2">3730</td>
                <td className="px-3 py-2">3270</td>
                <td className="px-3 py-2">2850</td>
                <td className="px-3 py-2">2580</td>
                <td className="px-3 py-2">2280</td>
                <td className="px-3 py-2">2100</td>
                <td className="px-3 py-2">1870</td>
                <td className="px-3 py-2 font-bold text-highlight">1750</td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
              </tr>
              <tr className="text-gray-300 hover:bg-gray-800">
                <td className="px-3 py-2">38.4</td>
                <td className="px-3 py-2">r=40.0</td>
                <td className="px-3 py-2">6000</td>
                <td className="px-3 py-2">6000</td>
                <td className="px-3 py-2">5320</td>
                <td className="px-3 py-2">4710</td>
                <td className="px-3 py-2">4220</td>
                <td className="px-3 py-2">3810</td>
                <td className="px-3 py-2">3340</td>
                <td className="px-3 py-2">2920</td>
                <td className="px-3 py-2">2640</td>
                <td className="px-3 py-2">2330</td>
                <td className="px-3 py-2 font-bold text-highlight">2150</td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
              </tr>
              <tr className="text-gray-300 hover:bg-gray-800">
                <td className="px-3 py-2">32.6</td>
                <td className="px-3 py-2">r=34.2</td>
                <td className="px-3 py-2">6000</td>
                <td className="px-3 py-2">6000</td>
                <td className="px-3 py-2">5440</td>
                <td className="px-3 py-2">4820</td>
                <td className="px-3 py-2">4310</td>
                <td className="px-3 py-2">3890</td>
                <td className="px-3 py-2">3420</td>
                <td className="px-3 py-2">2990</td>
                <td className="px-3 py-2 font-bold text-highlight">2700</td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
              </tr>
              <tr className="text-gray-300 hover:bg-gray-800">
                <td className="px-3 py-2">26.8</td>
                <td className="px-3 py-2">r=28.4</td>
                <td className="px-3 py-2">6000</td>
                <td className="px-3 py-2 font-bold text-highlight">6000</td>
                <td className="px-3 py-2">5640</td>
                <td className="px-3 py-2">4990</td>
                <td className="px-3 py-2">4470</td>
                <td className="px-3 py-2">4040</td>
                <td className="px-3 py-2 font-bold text-highlight">3550</td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 text-gray-400">
        <p className="mb-2">Notes:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Values in <span className="font-bold text-highlight">bold highlight</span> indicate highest load capacity at that radius/reach.</li>
          <li>All values are in kilograms (kg).</li>
          <li>Empty cells indicate configurations that are not available for that specific reach/radius.</li>
          <li>Always refer to the complete documentation for detailed safety instructions and configuration requirements.</li>
        </ul>
      </div>

      {/* Crane Mechanism Performance Tables */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold">Crane Mechanism Performance</h2>
        <p className="text-gray-400 mb-6">
          Detailed specifications of the crane's motions, power ratings, and hoisting capabilities in various configurations.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Crane Motions & Power */}
          <div>
            <h3 className="text-xl font-bold mb-4">Crane Motions & Power</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Motion</th>
                    <th className="px-4 py-3 text-left font-bold">Speed</th>
                    <th className="px-4 py-3 text-left font-bold">Power</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr className="text-gray-300 hover:bg-gray-800">
                    <td className="px-4 py-3">Slewing</td>
                    <td className="px-4 py-3">0 – 0.8 U/min</td>
                    <td className="px-4 py-3">1 × 7.5 kW FR.tronic-FU</td>
                  </tr>
                  <tr className="text-gray-300 hover:bg-gray-800">
                    <td className="px-4 py-3">Trolley Travel</td>
                    <td className="px-4 py-3">9.0 / 30.0 / 60.0 m/min</td>
                    <td className="px-4 py-3">0.65 / 2.0 / 3.0 kW</td>
                  </tr>
                  <tr className="text-gray-300 hover:bg-gray-800">
                    <td className="px-4 py-3">Travel</td>
                    <td className="px-4 py-3">18.0 / 25.0 m/min</td>
                    <td className="px-4 py-3">2 × 2.6 kW (100 LC), 2 × 4.0 kW (120 HC)</td>
                  </tr>
                  <tr className="text-gray-300 hover:bg-gray-800">
                    <td className="px-4 py-3">Power Supply</td>
                    <td className="px-4 py-3">–</td>
                    <td className="px-4 py-3">22.0 kW / 22.0 kW FU</td>
                  </tr>
                  <tr className="text-gray-300 hover:bg-gray-800">
                    <td className="px-4 py-3">kVA</td>
                    <td className="px-4 py-3">–</td>
                    <td className="px-4 py-3">39.0 / 30.0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Right Panel - Hoisting Data */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hoisting Data</h3>
            
            {/* WIW 230 MZ 402 - 85.0m Drum */}
            <div className="mb-6">
              <h4 className="font-bold mb-2 text-gray-300">Hoist: WIW 230 MZ 402 – 3.8 / 18.5 / 22.0 kW</h4>
              <p className="text-gray-400 mb-3">85.0 m LS-Trommel, 3 Layers</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 2-part line */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 text-center leading-6 border border-gray-600 rounded">2</div>
                    <span className="text-gray-300">2-part line</span>
                  </div>
                  <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
                    <thead className="bg-gray-800">
                      <tr>
                        <th className="px-3 py-2 text-left font-bold">Step</th>
                        <th className="px-3 py-2 text-left font-bold">Capacity (kg)</th>
                        <th className="px-3 py-2 text-left font-bold">Speed (m/min)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr className="text-gray-300 hover:bg-gray-800">
                        <td className="px-3 py-2">1</td>
                        <td className="px-3 py-2">3000</td>
                        <td className="px-3 py-2">6.0</td>
                      </tr>
                      <tr className="text-gray-300 hover:bg-gray-800">
                        <td className="px-3 py-2">2</td>
                        <td className="px-3 py-2">3000</td>
                        <td className="px-3 py-2">27.0</td>
                      </tr>
                      <tr className="text-gray-300 hover:bg-gray-800">
                        <td className="px-3 py-2">3</td>
                        <td className="px-3 py-2">1800</td>
                        <td className="px-3 py-2">56.0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                {/* 4-part line */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 text-center leading-6 border border-gray-600 rounded">4</div>
                    <span className="text-gray-300">4-part line</span>
                  </div>
                  <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
                    <thead className="bg-gray-800">
                      <tr>
                        <th className="px-3 py-2 text-left font-bold">Step</th>
                        <th className="px-3 py-2 text-left font-bold">Capacity (kg)</th>
                        <th className="px-3 py-2 text-left font-bold">Speed (m/min)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr className="text-gray-300 hover:bg-gray-800">
                        <td className="px-3 py-2">1</td>
                        <td className="px-3 py-2">6000</td>
                        <td className="px-3 py-2">3.0</td>
                      </tr>
                      <tr className="text-gray-300 hover:bg-gray-800">
                        <td className="px-3 py-2">2</td>
                        <td className="px-3 py-2">6000</td>
                        <td className="px-3 py-2">13.5</td>
                      </tr>
                      <tr className="text-gray-300 hover:bg-gray-800">
                        <td className="px-3 py-2">3</td>
                        <td className="px-3 py-2">3700</td>
                        <td className="px-3 py-2">28.0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            {/* WIW 230 MZ 402 - 149.0m Drum */}
            <div className="mb-6">
              <h4 className="font-bold mb-2 text-gray-300">Hoist: WIW 230 MZ 402 – 3.8 / 18.5 / 22.0 kW</h4>
              <p className="text-gray-400 mb-3">149.0 m LS-Trommel, 5 Layers</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 2-part line */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 text-center leading-6 border border-gray-600 rounded">2</div>
                    <span className="text-gray-300">2-part line</span>
                  </div>
                  <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
                    <thead className="bg-gray-800">
                      <tr>
                        <th className="px-3 py-2 text-left font-bold">Step</th>
                        <th className="px-3 py-2 text-left font-bold">Capacity (kg)</th>
                        <th className="px-3 py-2 text-left font-bold">Speed (m/min)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr className="text-gray-300 hover:bg-gray-800">
                        <td className="px-3 py-2">1</td>
                        <td className="px-3 py-2">3000</td>
                        <td className="px-3 py-2">6.2</td>
                      </tr>
                      <tr className="text-gray-300 hover:bg-gray-800">
                        <td className="px-3 py-2">2</td>
                        <td className="px-3 py-2">3000</td>
                        <td className="px-3 py-2">28.0</td>
                      </tr>
                      <tr className="text-gray-300 hover:bg-gray-800">
                        <td className="px-3 py-2">3</td>
                        <td className="px-3 py-2">1700</td>
                        <td className="px-3 py-2">58.0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                {/* 4-part line */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 text-center leading-6 border border-gray-600 rounded">4</div>
                    <span className="text-gray-300">4-part line</span>
                  </div>
                  <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
                    <thead className="bg-gray-800">
                      <tr>
                        <th className="px-3 py-2 text-left font-bold">Step</th>
                        <th className="px-3 py-2 text-left font-bold">Capacity (kg)</th>
                        <th className="px-3 py-2 text-left font-bold">Speed (m/min)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr className="text-gray-300 hover:bg-gray-800">
                        <td className="px-3 py-2">1</td>
                        <td className="px-3 py-2">6000</td>
                        <td className="px-3 py-2">3.1</td>
                      </tr>
                      <tr className="text-gray-300 hover:bg-gray-800">
                        <td className="px-3 py-2">2</td>
                        <td className="px-3 py-2">6000</td>
                        <td className="px-3 py-2">14.0</td>
                      </tr>
                      <tr className="text-gray-300 hover:bg-gray-800">
                        <td className="px-3 py-2">3</td>
                        <td className="px-3 py-2">3500</td>
                        <td className="px-3 py-2">29.0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            {/* WIW 230 MZ 404 - 149.0m Drum */}
            <div>
              <h4 className="font-bold mb-2 text-gray-300">Hoist: WIW 230 MZ 404 – 22.0 kW FU</h4>
              <p className="text-gray-400 mb-3">149.0 m LS-Trommel, 5 Layers</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 2-part line */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 text-center leading-6 border border-gray-600 rounded">2</div>
                    <span className="text-gray-300">2-part line</span>
                  </div>
                  <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
                    <thead className="bg-gray-800">
                      <tr>
                        <th className="px-3 py-2 text-left font-bold">Step</th>
                        <th className="px-3 py-2 text-left font-bold">Capacity (kg)</th>
                        <th className="px-3 py-2 text-left font-bold">Speed (m/min)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr className="text-gray-300 hover:bg-gray-800">
                        <td className="px-3 py-2">1</td>
                        <td className="px-3 py-2">3000</td>
                        <td className="px-3 py-2">3.1</td>
                      </tr>
                      <tr className="text-gray-300 hover:bg-gray-800">
                        <td className="px-3 py-2">2</td>
                        <td className="px-3 py-2">3000</td>
                        <td className="px-3 py-2">31.0</td>
                      </tr>
                      <tr className="text-gray-300 hover:bg-gray-800">
                        <td className="px-3 py-2">3</td>
                        <td className="px-3 py-2">2400</td>
                        <td className="px-3 py-2">43.0</td>
                      </tr>
                      <tr className="text-gray-300 hover:bg-gray-800">
                        <td className="px-3 py-2">4</td>
                        <td className="px-3 py-2">1500</td>
                        <td className="px-3 py-2">70.0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                {/* 4-part line */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 text-center leading-6 border border-gray-600 rounded">4</div>
                    <span className="text-gray-300">4-part line</span>
                  </div>
                  <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
                    <thead className="bg-gray-800">
                      <tr>
                        <th className="px-3 py-2 text-left font-bold">Step</th>
                        <th className="px-3 py-2 text-left font-bold">Capacity (kg)</th>
                        <th className="px-3 py-2 text-left font-bold">Speed (m/min)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr className="text-gray-300 hover:bg-gray-800">
                        <td className="px-3 py-2">1</td>
                        <td className="px-3 py-2">6000</td>
                        <td className="px-3 py-2">1.5</td>
                      </tr>
                      <tr className="text-gray-300 hover:bg-gray-800">
                        <td className="px-3 py-2">2</td>
                        <td className="px-3 py-2">6000</td>
                        <td className="px-3 py-2">15.0</td>
                      </tr>
                      <tr className="text-gray-300 hover:bg-gray-800">
                        <td className="px-3 py-2">3</td>
                        <td className="px-3 py-2">4800</td>
                        <td className="px-3 py-2">22.0</td>
                      </tr>
                      <tr className="text-gray-300 hover:bg-gray-800">
                        <td className="px-3 py-2">4</td>
                        <td className="px-3 py-2">3000</td>
                        <td className="px-3 py-2">35.0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-gray-400">
          <p className="mb-2">Notes:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>The number in the box (2 or 4) indicates the line configuration.</li>
            <li>"LS-Trommel" indicates rope drum length in meters.</li>
            <li>Capacities shown are maximum values for each speed step.</li>
            <li>All steps represent different gear ratios or motor speeds.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}