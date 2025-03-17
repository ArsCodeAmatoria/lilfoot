import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { FaArrowsAltV, FaArrowsAltH, FaRedo } from 'react-icons/fa';

const mechanismsData = {
  mechanisms: [
    {
      name: '15 LVF 10',
      icon: 'vertical',
      twoPartLine: {
        speeds: [
          { speed: 5, load: 2000 },
          { speed: 27, load: 2000 },
          { speed: 43, load: 1250 },
          { speed: 53, load: 1000 }
        ]
      },
      fourPartLine: {
        speeds: [
          { speed: 2.5, load: 4000 },
          { speed: 13.5, load: 4000 },
          { speed: 21.5, load: 2500 },
          { speed: 26.5, load: 2000 }
        ]
      },
      power: '20 kVA'
    },
    {
      name: '15 RPC 10',
      icon: 'rotation',
      twoPartLine: {
        speeds: [
          { speed: 9, load: 2000 },
          { speed: 27, load: 2000 },
          { speed: 54, load: 1000 }
        ]
      },
      fourPartLine: {
        speeds: [
          { speed: 4.5, load: 4000 },
          { speed: 13.5, load: 4000 },
          { speed: 27, load: 2000 }
        ]
      },
      power: '20 kVA'
    },
    {
      name: '3 D2 V5',
      icon: 'horizontal',
      twoPartLine: null,
      fourPartLine: null,
      power: null
    },
    {
      name: 'RVF 2 30',
      icon: 'horizontal',
      twoPartLine: null,
      fourPartLine: null,
      power: null
    }
  ],
  powerInfo: '400V (+6% -10%) 50 Hz',
  reference: '2000/14'
};

export default function PotainHD40AMechanismsChart() {
  // Helper function to render the movement icon
  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'vertical':
        return <FaArrowsAltV className="text-white" />;
      case 'horizontal':
        return <FaArrowsAltH className="text-white" />;
      case 'rotation':
        return <FaRedo className="text-white" />;
      default:
        return null;
    }
  };

  // Helper function to render speed/load rows
  const renderSpeedLoadRows = (data: { speed: number; load: number }[] | null) => {
    if (!data) return <TableCell className="text-center text-white">-</TableCell>;
    
    return (
      <TableCell className="p-2">
        <div className="flex flex-col space-y-1">
          {data.map((item, index) => (
            <div key={index} className="text-white text-sm">
              {item.speed} {'->'} {item.load} kg
            </div>
          ))}
        </div>
      </TableCell>
    );
  };

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="border-l-4 border-highlight pl-4">
        <h3
          className="text-lg font-bold text-white"
          style={{ fontFamily: 'system-ui' }}
        >
          Mechanisms
        </h3>
      </div>

      {/* Mechanisms Table */}
      <div className="overflow-x-auto rounded-lg bg-black">
        <Table>
          <TableHeader className="bg-black">
            <TableRow>
              <TableHead className="text-white w-1/6">Mechanism</TableHead>
              <TableHead className="text-white w-1/12">Type</TableHead>
              <TableHead className="text-white w-1/3 text-center">2-Part Line</TableHead>
              <TableHead className="text-white w-1/3 text-center">4-Part Line</TableHead>
              <TableHead className="text-white w-1/6">Power</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mechanismsData.mechanisms.map((mechanism, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-black" : "bg-gray-900"}>
                <TableCell className="font-medium text-white">{mechanism.name}</TableCell>
                <TableCell className="text-center">
                  {renderIcon(mechanism.icon)}
                </TableCell>
                {renderSpeedLoadRows(mechanism.twoPartLine?.speeds || null)}
                {renderSpeedLoadRows(mechanism.fourPartLine?.speeds || null)}
                <TableCell className="text-white">
                  {mechanism.power || '-'}
                </TableCell>
              </TableRow>
            ))}
            <TableRow className="bg-gray-900">
              <TableCell colSpan={2} className="text-white font-medium">
                {mechanismsData.powerInfo}
              </TableCell>
              <TableCell colSpan={2} className="text-white">
                Reference: {mechanismsData.reference}
              </TableCell>
              <TableCell className="text-white"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
} 