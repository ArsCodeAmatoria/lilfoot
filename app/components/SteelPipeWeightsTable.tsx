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

// Define a type for the weights object to include index signature
type PipeWeights = {
  [key: string]: string;
};

// Define a type for the pipe data
type PipeData = {
  diameter: string;
  weights: PipeWeights;
};

const SteelPipeWeightsTable = () => {
  // Column headers for wall thickness
  const wallThicknessHeaders = [
    "0.05", "0.095", "0.15", "0.2", "0.25", "0.3", "0.36", 
    "0.4", "0.46", "0.5", "0.625", "0.75", "0.875", "1"
  ];

  // Steel pipe data by diameter and wall thickness
  const pipeWeightsData: PipeData[] = [
    { 
      diameter: "½", 
      weights: {
        "0.05": "0.240", "0.095": "0.411", "0.15": "0.561", 
        "0.2": "", "0.25": "", "0.3": "", "0.36": "", 
        "0.4": "", "0.46": "", "0.5": "", "0.625": "", 
        "0.75": "", "0.875": "", "1": ""
      }
    },
    { 
      diameter: "¾", 
      weights: {
        "0.05": "0.374", "0.095": "0.665", "0.15": "0.961", 
        "0.2": "1.175", "0.25": "1.335", "0.3": "", "0.36": "", 
        "0.4": "", "0.46": "", "0.5": "", "0.625": "", 
        "0.75": "", "0.875": "", "1": ""
      }
    },
    { 
      diameter: "1", 
      weights: {
        "0.05": "0.507", "0.095": "0.887", "0.15": "1.362", 
        "0.2": "1.709", "0.25": "2.003", "0.3": "2.243", "0.36": "2.461", 
        "0.4": "", "0.46": "", "0.5": "", "0.625": "", 
        "0.75": "", "0.875": "", "1": ""
      }
    },
    { 
      diameter: "1 ¼", 
      weights: {
        "0.05": "0.641", "0.095": "1.172", "0.15": "1.762", 
        "0.2": "2.298", "0.25": "2.670", "0.3": "3.044", "0.36": "3.422", 
        "0.4": "3.631", "0.46": "", "0.5": "", "0.625": "", 
        "0.75": "", "0.875": "", "1": ""
      }
    },
    { 
      diameter: "1 ½", 
      weights: {
        "0.05": "0.774", "0.095": "1.426", "0.15": "2.163", 
        "0.2": "2.777", "0.25": "3.338", "0.3": "3.845", "0.36": "4.383", 
        "0.4": "4.699", "0.46": "5.109", "0.5": "5.34", "0.625": "", 
        "0.75": "", "0.875": "", "1": ""
      }
    },
    { 
      diameter: "2", 
      weights: {
        "0.05": "1.041", "0.095": "1.933", "0.15": "2.964", 
        "0.2": "3.845", "0.25": "4.673", "0.3": "5.447", "0.36": "6.305", 
        "0.4": "6.835", "0.46": "7.566", "0.5": "8.01", "0.625": "9.178", 
        "0.75": "10.01", "0.875": "", "1": ""
      }
    },
    { 
      diameter: "2 ½", 
      weights: {
        "0.05": "1.304", "0.095": "2.465", "0.15": "3.913", 
        "0.2": "5.088", "0.25": "6.238", "0.3": "7.098", "0.36": "8.228", 
        "0.4": "8.971", "0.46": "10.02", "0.5": "10.68", "0.625": "12.52", 
        "0.75": "14.02", "0.875": "15.19", "1": ""
      }
    },
    { 
      diameter: "3", 
      weights: {
        "0.05": "1.575", "0.095": "2.947", "0.15": "4.566", 
        "0.2": "5.981", "0.25": "7.343", "0.3": "8.651", "0.36": "10.15", 
        "0.4": "11.11", "0.46": "12.48", "0.5": "13.55", "0.625": "15.85", 
        "0.75": "18.02", "0.875": "19.86", "1": "21.36"
      }
    },
    { 
      diameter: "3 ½", 
      weights: {
        "0.05": "2.109", "0.095": "3.962", "0.15": "6.168", 
        "0.2": "8.171", "0.25": "10.01", "0.3": "11.85", "0.36": "14.00", 
        "0.4": "15.38", "0.46": "17.39", "0.5": "18.69", "0.625": "22.53", 
        "0.75": "26.03", "0.875": "29.20", "1": "32.04"
      }
    },
    { 
      diameter: "4", 
      weights: {
        "0.05": "2.643", "0.095": "4.977", "0.15": "7.770", 
        "0.2": "10.36", "0.25": "12.68", "0.3": "15.06", "0.36": "17.84", 
        "0.4": "19.65", "0.46": "22.30", "0.5": "24.03", "0.625": "29.20", 
        "0.75": "34.04", "0.875": "38.55", "1": "42.72"
      }
    },
    { 
      diameter: "6", 
      weights: {
        "0.05": "5.591", "0.095": "9.372", "0.15": "12.92", 
        "0.2": "16.56", "0.25": "20.69", "0.3": "24.67", "0.36": "29.37", 
        "0.4": "32.47", "0.46": "37.04", "0.5": "40.05", "0.625": "49.23", 
        "0.75": "58.07", "0.875": "66.58", "1": "74.76"
      }
    },
    { 
      diameter: "8", 
      weights: {
        "0.05": "", "0.095": "", "0.15": "", 
        "0.2": "", "0.25": "", "0.3": "", "0.36": "", 
        "0.4": "", "0.46": "", "0.5": "", "0.625": "", 
        "0.75": "", "0.875": "", "1": ""
      }
    },
    { 
      diameter: "10", 
      weights: {
        "0.05": "", "0.095": "", "0.15": "", 
        "0.2": "", "0.25": "26.03", "0.3": "31.08", "0.36": "37.06", 
        "0.4": "41.01", "0.46": "46.87", "0.5": "50.73", "0.625": "62.58", 
        "0.75": "74.09", "0.875": "85.27", "1": "96.12"
      }
    },
  ];

  return (
    <div className="space-y-4 mt-8">
      <h2 className="text-2xl font-bold text-white">Weight of Steel Pipe per Linear Foot</h2>
      
      <div className="overflow-x-auto rounded-md max-h-96">
        <Table className="border-collapse">
          <TableHeader className="bg-gray-900">
            <TableRow>
              <TableHead className="border border-gray-800 sticky left-0 top-0 z-20 bg-gray-900">
                Diameter (in)
              </TableHead>
              {wallThicknessHeaders.map((thickness, index) => (
                <TableHead key={index} className="border border-gray-800 text-center sticky top-0 z-10 bg-gray-900">
                  {thickness}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {pipeWeightsData.map((row, index) => (
              <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-900/30' : ''}>
                <TableCell className="border border-gray-800 font-semibold sticky left-0 z-10 bg-inherit">
                  <span className="font-semibold">{row.diameter}</span>
                </TableCell>
                {wallThicknessHeaders.map((thickness, idx) => (
                  <TableCell key={idx} className="border border-gray-800 text-center">
                    {row.weights[thickness] || "-"}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="text-sm text-gray-400 mt-2">
        <p>Table shows weight in pounds per linear foot (lb/LF)</p>
      </div>
    </div>
  );
};

export default SteelPipeWeightsTable; 