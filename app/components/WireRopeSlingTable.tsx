'use client';

import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "#/components/ui/table";
import { AlertTriangle } from 'lucide-react';

// Icons for different hitch types
const HitchIcons = () => {
  return (
    <div className="grid grid-cols-7 gap-2 mb-4">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2 p-2 bg-gray-900 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-highlight">
            <rect x="7" y="4" width="10" height="16" rx="2" />
            <line x1="12" y1="2" x2="12" y2="6" />
          </svg>
        </div>
        <span className="text-xs text-center text-gray-400 mt-1">Single Vertical</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2 p-2 bg-gray-900 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-highlight">
            <path d="M7 6 C 7 14 17 14 17 6" />
            <line x1="12" y1="2" x2="12" y2="6" />
          </svg>
        </div>
        <span className="text-xs text-center text-gray-400 mt-1">Single Choker</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2 p-2 bg-gray-900 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-highlight">
            <path d="M12 4 L 5 18 L 19 18 Z" />
            <line x1="12" y1="2" x2="12" y2="4" />
          </svg>
        </div>
        <span className="text-xs text-center text-gray-400 mt-1">Single Basket</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2 p-2 bg-gray-900 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-highlight">
            <path d="M12 5 L 6 18 M 12 5 L 18 18" />
            <line x1="12" y1="2" x2="12" y2="5" />
            <line x1="6" y1="18" x2="18" y2="18" />
          </svg>
        </div>
        <span className="text-xs text-center text-gray-400 mt-1">2-Leg 60°</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2 p-2 bg-gray-900 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-highlight">
            <path d="M12 5 L 5 18 M 12 5 L 19 18" />
            <line x1="12" y1="2" x2="12" y2="5" />
            <line x1="5" y1="18" x2="19" y2="18" />
          </svg>
        </div>
        <span className="text-xs text-center text-gray-400 mt-1">2-Leg 45°</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2 p-2 bg-gray-900 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-highlight">
            <path d="M12 5 L 3 18 M 12 5 L 21 18" />
            <line x1="12" y1="2" x2="12" y2="5" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </div>
        <span className="text-xs text-center text-gray-400 mt-1">2-Leg 30°</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2 p-2 bg-gray-900 rounded-full flex items-center justify-center">
          <span className="text-sm font-bold text-highlight">WLL</span>
        </div>
        <span className="text-xs text-center text-gray-400 mt-1">Working Load Limit</span>
      </div>
    </div>
  );
};

const WireRopeSlingTable = () => {
  // Table data
  const tableData = [
    { diameter: "3/16", vertical: "650", choker: "480", basket: "1,300", bridle60: "1,100", bridle45: "900", bridle30: "650" },
    { diameter: "1/4", vertical: "1,150", choker: "860", basket: "2,300", bridle60: "2,000", bridle45: "1,600", bridle30: "1,150" },
    { diameter: "5/16", vertical: "1,750", choker: "1,300", basket: "3,500", bridle60: "3,000", bridle45: "2,500", bridle30: "1,750" },
    { diameter: "3/8", vertical: "2,550", choker: "1,900", basket: "5,100", bridle60: "4,400", bridle45: "3,600", bridle30: "2,550" },
    { diameter: "7/16", vertical: "3,450", choker: "2,600", basket: "6,900", bridle60: "6,000", bridle45: "4,900", bridle30: "3,450" },
    { diameter: "1/2", vertical: "4,700", choker: "3,500", basket: "9,400", bridle60: "8,150", bridle45: "6,650", bridle30: "4,700" },
    { diameter: "9/16", vertical: "5,700", choker: "4,200", basket: "11,400", bridle60: "9,900", bridle45: "8,050", bridle30: "5,700" },
    { diameter: "5/8", vertical: "7,100", choker: "5,300", basket: "14,200", bridle60: "12,300", bridle45: "10,000", bridle30: "7,100" },
    { diameter: "3/4", vertical: "10,200", choker: "7,650", basket: "20,400", bridle60: "17,700", bridle45: "14,400", bridle30: "10,200" },
    { diameter: "7/8", vertical: "13,750", choker: "10,300", basket: "27,500", bridle60: "23,800", bridle45: "19,400", bridle30: "13,750" },
    { diameter: "1", vertical: "17,950", choker: "13,450", basket: "35,900", bridle60: "31,100", bridle45: "25,400", bridle30: "17,950" },
    { diameter: "1 1/8", vertical: "22,750", choker: "17,000", basket: "45,500", bridle60: "39,400", bridle45: "32,200", bridle30: "22,750" },
    { diameter: "1 1/4", vertical: "28,200", choker: "21,200", basket: "56,400", bridle60: "48,800", bridle45: "39,900", bridle30: "28,200" },
    { diameter: "1 3/8", vertical: "34,800", choker: "26,100", basket: "69,600", bridle60: "60,300", bridle45: "49,200", bridle30: "34,800" },
    { diameter: "1 1/2", vertical: "41,300", choker: "31,000", basket: "82,600", bridle60: "71,500", bridle45: "58,400", bridle30: "41,300" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Wire Rope Slings - Working Load Limit (lbs)</h2>
      
      {/* Hitch icons */}
      <HitchIcons />
      
      {/* Table */}
      <div className="overflow-x-auto rounded-md">
        <Table className="border-collapse">
          <TableHeader className="bg-gray-900">
            <TableRow>
              <TableHead className="border border-gray-800 sticky left-0 z-10 bg-gray-900">Rope Diameter (in)</TableHead>
              <TableHead className="border border-gray-800 text-center">Single Vertical Hitch</TableHead>
              <TableHead className="border border-gray-800 text-center">Single Choker Hitch</TableHead>
              <TableHead className="border border-gray-800 text-center">Single Basket Hitch (Vertical Legs)</TableHead>
              <TableHead className="border border-gray-800 text-center">2-Leg Bridle Hitch (Sling Angle 60°)</TableHead>
              <TableHead className="border border-gray-800 text-center">2-Leg Bridle Hitch (Sling Angle 45°)</TableHead>
              <TableHead className="border border-gray-800 text-center">2-Leg Bridle Hitch (Sling Angle 30°)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-900/30' : ''}>
                <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">
                  {row.diameter}
                </TableCell>
                <TableCell className="border border-gray-800 text-center">{row.vertical}</TableCell>
                <TableCell className="border border-gray-800 text-center">{row.choker}</TableCell>
                <TableCell className="border border-gray-800 text-center font-bold">{row.basket}</TableCell>
                <TableCell className="border border-gray-800 text-center">{row.bridle60}</TableCell>
                <TableCell className="border border-gray-800 text-center">{row.bridle45}</TableCell>
                <TableCell className="border border-gray-800 text-center">{row.bridle30}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Note box */}
      <div className="bg-gray-900 rounded-md p-4 border border-gray-800">
        <div className="flex gap-2 mb-3">
          <AlertTriangle className="text-yellow-500 h-5 w-5 flex-shrink-0 mt-0.5" />
          <h3 className="text-lg font-semibold text-white">Important Multipliers</h3>
        </div>
        <ul className="space-y-2 text-gray-300">
          <li className="flex gap-2 items-start">
            <span className="mr-1 text-highlight">•</span>
            <span>
              <strong>2-leg bridle in a choker hitch configuration</strong> → Multiply values by <strong className="text-highlight">0.75</strong>
            </span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="mr-1 text-highlight">•</span>
            <span>
              <strong>Double basket hitch configuration</strong> → Multiply values by <strong className="text-highlight">2</strong>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WireRopeSlingTable; 