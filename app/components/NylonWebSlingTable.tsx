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
} from "../../components/ui/table";
import { AlertTriangle } from 'lucide-react';

const NylonWebSlingTable = () => {
  // Table data for Nylon Web Slings
  const tableData = [
    { width: "1", vertical: "1,100", choker: "825", basket: "2,200", bridle60: "1,905", bridle45: "1,555", bridle30: "1,100" },
    { width: "2", vertical: "2,200", choker: "1,650", basket: "4,400", bridle60: "3,810", bridle45: "3,110", bridle30: "2,200" },
    { width: "3", vertical: "3,300", choker: "2,475", basket: "6,600", bridle60: "5,715", bridle45: "4,665", bridle30: "3,300" },
    { width: "4", vertical: "4,400", choker: "3,300", basket: "8,800", bridle60: "7,620", bridle45: "6,220", bridle30: "4,400" },
    { width: "5", vertical: "5,500", choker: "4,125", basket: "11,000", bridle60: "9,525", bridle45: "7,775", bridle30: "5,500" },
    { width: "6", vertical: "6,600", choker: "4,950", basket: "13,200", bridle60: "11,430", bridle45: "9,330", bridle30: "6,600" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Nylon Web Slings - Working Load Limit (lbs)</h2>
      
      {/* Table */}
      <div className="overflow-x-auto rounded-md">
        <Table className="border-collapse">
          <TableHeader className="bg-gray-900">
            <TableRow>
              <TableHead className="border border-gray-800 sticky left-0 z-10 bg-gray-900">Web Width (in)</TableHead>
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
                  {row.width}
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
          <li className="flex gap-2 items-start">
            <span className="mr-1 text-highlight">•</span>
            <span>
              Web slings should be inspected before each use for cuts, tears, or abrasions
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NylonWebSlingTable; 