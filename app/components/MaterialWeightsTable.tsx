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

const MaterialWeightsTable = () => {
  // Material weights data
  const materialWeightsData = [
    { material: "Aluminum", weight: "171 lb/ft³" },
    { material: "Brick (common red)", weight: "120 lb/ft³" },
    { material: "Cast Iron", weight: "450 lb/ft³" },
    { material: "Concrete", weight: "150 lb/ft³" },
    { material: "Glass", weight: "170 lb/ft³" },
    { material: "Gravel (loose/dry)", weight: "95 lb/ft³" },
    { material: "Gypsum Board/Drywall (6X8)", weight: "10.03 lb/LF" },
    { material: "Lumber (Douglas Fir)", weight: "35 lb/ft³" },
    { 
      material: "Lumber (Various Sizes)", 
      weightItems: [
        { size: "2X4", weight: "1.28 lb/LF" },
        { size: "2X6", weight: "2.00 lb/LF" }
      ],
      multiValue: true
    },
    { 
      material: "Plywood", 
      weightItems: [
        { size: "1/2 inch", weight: "1.42 lb/ft²" },
        { size: "5/8 inch", weight: "1.77 lb/ft²" },
        { size: "3/4 inch", weight: "2.13 lb/ft²" }
      ],
      multiValue: true
    },
    { 
      material: "Rebar", 
      weightItems: [
        { size: "#3", weight: "0.376 lb/LF" },
        { size: "#4", weight: "0.668 lb/LF" },
        { size: "#5", weight: "1.043 lb/LF" }
      ],
      multiValue: true
    },
    { material: "Roofing (Asphalt Shingles)", weight: "3.0 lb/ft²" },
    { material: "Aluminum (26 gauge)", weight: "0.3 lb/ft²" },
    { material: "Sand (Bank)", weight: "2,500 lb/yd³" },
    { material: "Sand (Torpedo)", weight: "2,700 lb/yd³" },
    { material: "Steel", weight: "490 lb/ft³" },
    { material: "Water", weight: "63 lb/ft³" },
  ];

  // Helper function to render weight cells with appropriate formatting
  const renderWeightCell = (row: any) => {
    if (row.multiValue && row.weightItems) {
      return (
        <div className="space-y-1.5">
          {row.weightItems.map((item: any, idx: number) => (
            <div key={idx} className="flex items-center">
              <span className="inline-block mr-2 font-medium text-highlight min-w-[70px]">{item.size}</span>
              <span className="text-gray-200">{item.weight}</span>
            </div>
          ))}
        </div>
      );
    }
    
    return row.weight;
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white">Weights of Common Materials</h2>
      
      <div className="overflow-x-auto rounded-md">
        <Table className="border-collapse">
          <TableHeader className="bg-gray-900">
            <TableRow>
              <TableHead className="border border-gray-800 w-1/2 sticky left-0 z-10 bg-gray-900">Material</TableHead>
              <TableHead className="border border-gray-800 w-1/2">Weight</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {materialWeightsData.map((row, index) => (
              <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-900/30' : ''}>
                <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">
                  <span className="font-semibold">{row.material}</span>
                </TableCell>
                <TableCell className="border border-gray-800">
                  {renderWeightCell(row)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MaterialWeightsTable; 