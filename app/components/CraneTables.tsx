'use client';

import React, { useState } from 'react';

interface TableRowData {
  radius: string;
  values: (string | number)[];
}

// Data for Load-Plus Table
const loadPlusTableData: TableRowData[] = [
  { radius: "48.0m", values: [6000, 4830, 4030, 3440, 3120, 2860, 2630, 2430, 2260, 2110, 1970, 1850, 1690, 1590, 1460, 1350] },
  { radius: "45.0m", values: [6000, 5360, 4500, 3870, 3530, 3240, 2970, 2720, 2580, 2410, 2260, 2130, 1950, 1840, 1700, ""] },
  { radius: "42.0m", values: [6000, 5640, 4710, 4030, 3670, 3370, 3100, 2870, 2670, 2500, 2340, 2200, 2010, "", 1900, ""] },
  { radius: "37.0m", values: [6000, 6000, 5040, 4310, 3930, 3600, 3320, 3070, 2860, 2670, 2500, "", "", "", 2350, ""] },
  { radius: "31.0m", values: [6000, 6000, 5470, 4720, 4320, 3980, 3690, 3430, 3200, "", "", "", "", "", "", ""] }
];

// Data for LM1 Table
const lm1TableData: TableRowData[] = [
  { radius: "48.0m", values: [6000, 4620, 3730, 3110, 2790, 2530, 2310, 2110, 1940, 1800, 1670, 1550, 1410, 1320, 1200, 1100] },
  { radius: "45.0m", values: [6000, 5220, 4230, 3540, 3180, 2890, 2640, 2420, 2230, 2070, 1920, 1800, 1630, 1530, 1400, ""] },
  { radius: "42.0m", values: [6000, 5570, 4520, 3790, 3410, 3090, 2820, 2590, 2400, 2220, 2070, 1930, 1750, "", 1650, ""] },
  { radius: "37.0m", values: [6000, 6000, 4930, 4150, 3740, 3410, 3110, 2870, 2650, 2460, 2300, "", "", "", 2150, ""] },
  { radius: "31.0m", values: [6000, 6000, 5370, 4520, 4080, 3710, 3400, 3130, 2900, "", "", "", "", "", "", ""] }
];

// Data for 30° Jib Angle Table
const jibAngleTableData: TableRowData[] = [
  { radius: "45.0m", values: [3000, 3000, 2970, 2730, 2520, 2340, 2100, 2000, 1900, 1790, 1700, 1640, 1550, 1500, 1460, 1400] },
  { radius: "42.0m", values: [3000, 3000, 3000, 2960, 2740, 2540, 2290, 2180, 2080, 1960, 1860, 1790, 1700, "", 1650, ""] },
  { radius: "37.0m", values: [3000, 3000, 3000, 3000, 3000, 2910, 2630, 2510, 2400, 2260, "", 2150, "", "", "", ""] },
  { radius: "31.0m", values: [3000, 3000, 3000, 3000, 3000, 3000, 2900, "", "", "", "", "", "", "", "", ""] }
];

// Column headers for all tables
const columnHeaders = [
  "12.0m", "15.0m", "18.0m", "21.0m", "23.0m", "25.0m", "27.0m", "29.0m", 
  "31.0m", "33.0m", "35.0m", "37.0m", "40.0m", "42.0m", "45.0m", "48.0m"
];

// Column headers for 30° Jib Angle Table
const jibAngleColumnHeaders = [
  "12.0m", "14.0m", "16.0m", "18.0m", "20.0m", "22.0m", "25.0m", "26.5m", 
  "28.0m", "30.0m", "31.7m", "33.0m", "35.0m", "36.0m", "37.0m", "38.6m"
];

const CraneTables: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'loadPlus' | 'lm1' | 'jibAngle'>('loadPlus');

  const tableData = {
    loadPlus: loadPlusTableData,
    lm1: lm1TableData,
    jibAngle: jibAngleTableData
  };

  const headers = activeTab === 'jibAngle' ? jibAngleColumnHeaders : columnHeaders;

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex border-b border-gray-800">
        <button
          className={`px-4 py-3 font-medium ${
            activeTab === 'loadPlus'
              ? 'border-b-2 border-highlight text-white'
              : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => setActiveTab('loadPlus')}
        >
          Load-Plus Table
        </button>
        <button
          className={`px-4 py-3 font-medium ${
            activeTab === 'lm1'
              ? 'border-b-2 border-highlight text-white'
              : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => setActiveTab('lm1')}
        >
          LM1 Table
        </button>
        <button
          className={`px-4 py-3 font-medium ${
            activeTab === 'jibAngle'
              ? 'border-b-2 border-highlight text-white'
              : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => setActiveTab('jibAngle')}
        >
          30° Jib Angle Table
        </button>
      </div>

      {/* Table Title */}
      <h2 className="text-xl font-bold text-white">
        {activeTab === 'loadPlus' ? 'Load-Plus Table' : 
         activeTab === 'lm1' ? 'LM1 Table' : 
         '30° Jib Angle Load Capacity Table'}
      </h2>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-3 font-semibold text-gray-300 bg-gray-900 border border-gray-800 sticky left-0 z-10">
                Radius (m)
              </th>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-3 font-semibold text-gray-300 bg-gray-900 border border-gray-800"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {tableData[activeTab].map((row, rowIndex) => (
              <tr 
                key={rowIndex}
                className={rowIndex % 2 === 0 ? 'bg-gray-900/30' : ''}
              >
                <td className="px-4 py-3 text-white border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">
                  {row.radius}
                </td>
                {row.values.map((value, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-4 py-3 text-white border border-gray-800 text-center"
                  >
                    {value || '-'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Description */}
      <div className="text-gray-400 text-sm">
        <p className="mb-2">
          {activeTab === 'loadPlus' 
            ? 'The Load-Plus table shows lifting capacities (in kg) for various boom configurations at different radii.'
            : activeTab === 'lm1'
            ? 'The LM1 table displays standard lifting capacities (in kg) for the crane at different boom lengths and radii.'
            : 'The 30° Jib Angle table shows lifting capacities (in kg) when the jib is angled at 30 degrees, which optimizes height.'
          }
        </p>
        <p>
          <span className="text-highlight font-medium">Note:</span> Empty cells indicate configurations that are not available or not recommended for operation.
        </p>
      </div>
    </div>
  );
};

export default CraneTables; 