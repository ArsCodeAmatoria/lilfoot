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

const ChainSlingTable = () => {
  // Table data for Chain Slings
  const tableData = [
    { size: "1/4", vertical: "2,800", choker: "2,100", basket: "5,600", bridle60: "4,850", bridle45: "3,959", bridle30: "2,800" },
    { size: "3/8", vertical: "5,680", choker: "4,260", basket: "11,360", bridle60: "9,838", bridle45: "8,032", bridle30: "5,680" },
    { size: "1/2", vertical: "9,600", choker: "7,200", basket: "19,200", bridle60: "16,627", bridle45: "13,574", bridle30: "9,600" },
    { size: "5/8", vertical: "14,480", choker: "10,860", basket: "28,960", bridle60: "25,079", bridle45: "20,475", bridle30: "14,480" },
    { size: "3/4", vertical: "22,640", choker: "16,980", basket: "45,280", bridle60: "39,212", bridle45: "32,013", bridle30: "22,640" },
    { size: "7/8", vertical: "27,360", choker: "20,520", basket: "54,720", bridle60: "47,388", bridle45: "38,687", bridle30: "27,360" },
    { size: "1", vertical: "38,160", choker: "28,620", basket: "76,320", bridle60: "66,093", bridle45: "53,958", bridle30: "38,160" },
    { size: "1 1/4", vertical: "57,840", choker: "43,380", basket: "115,680", bridle60: "100,179", bridle45: "81,786", bridle30: "57,840" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Chain Slings - Working Load Limit (lbs)</h2>
      
      {/* Table */}
      <div className="overflow-x-auto rounded-md">
        <Table className="border-collapse">
          <TableHeader className="bg-gray-900">
            <TableRow>
              <TableHead className="border border-gray-800 sticky left-0 z-10 bg-gray-900">Chain Size (in)</TableHead>
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
                  {row.size}
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

      {/* Notice box */}
      <div className="bg-gray-900 rounded-md p-4 border border-gray-800">
        <div className="flex gap-2 mb-3">
          <AlertTriangle className="text-yellow-500 h-5 w-5 flex-shrink-0 mt-0.5" />
          <h3 className="text-lg font-semibold text-white">Important Safety Information</h3>
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
          <li className="flex gap-2 items-start">
            <span className="mr-1 text-highlight">•</span>
            <span>
              <strong className="text-red-400">SAFETY NOTICE:</strong> Chain slings must be discarded if wear exceeds 10% of the original diameter
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChainSlingTable; 