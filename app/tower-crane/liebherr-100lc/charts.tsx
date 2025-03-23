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
    </div>
  );
}