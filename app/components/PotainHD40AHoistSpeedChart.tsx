import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';

const hoistData = {
  standardHoist: {
    name: "Standard Hoist",
    twoPart: [
      { gear: "1st Gear", speed: "10.7 m/min", weight: "2,000 kg" },
      { gear: "2nd Gear", speed: "32.3 m/min", weight: "2,000 kg" },
      { gear: "3rd Gear", speed: "65.0 m/min", weight: "1,000 kg" },
      { gear: "4th Gear", speed: "-", weight: "-" }
    ],
    fourPart: [
      { gear: "1st Gear", speed: "5.5 m/min", weight: "4,000 kg" },
      { gear: "2nd Gear", speed: "16.2 m/min", weight: "4,000 kg" },
      { gear: "3rd Gear", speed: "32.3 m/min", weight: "2,000 kg" },
      { gear: "4th Gear", speed: "-", weight: "-" }
    ],
    motorPower: { hp: "15", kw: "11" }
  },
  optionalHoist: {
    name: "15 LVF 10 (Optional Hoist)",
    twoPart: [
      { gear: "1st Gear", speed: "9.1 m/min", weight: "2,000 kg" },
      { gear: "2nd Gear", speed: "30.5 m/min", weight: "2,000 kg" },
      { gear: "3rd Gear", speed: "61.0 m/min", weight: "1,000 kg" },
      { gear: "4th Gear", speed: "-", weight: "-" }
    ],
    fourPart: [
      { gear: "1st Gear", speed: "4.6 m/min", weight: "4,000 kg" },
      { gear: "2nd Gear", speed: "15.2 m/min", weight: "4,000 kg" },
      { gear: "3rd Gear", speed: "30.5 m/min", weight: "2,000 kg" },
      { gear: "4th Gear", speed: "-", weight: "-" }
    ],
    motorPower: { hp: "15", kw: "11" }
  },
  trolley: {
    name: "Trolley",
    speed: "21 to 42 m/min",
    motorPower: { hp: "2", kw: "1.5" }
  },
  swing: {
    name: "Swing",
    speed: "0.8 rpm",
    motorPower: { hp: "3", kw: "2.2" }
  }
};

export default function PotainHD40AHoistSpeedChart() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="border-l-4 border-highlight pl-4">
        <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'system-ui' }}>
          Hoist Speed vs Weight Chart (Metric)
        </h3>
      </div>

      {/* Speed vs Weight Table */}
      <div className="overflow-x-auto rounded-lg bg-black">
        <Table>
          <TableHeader className="bg-black">
            <TableRow>
              <TableHead rowSpan={2} className="text-white border-r border-gray-700 w-1/6">Function</TableHead>
              <TableHead colSpan={4} className="text-white text-center border-r border-gray-700">2-Part Line</TableHead>
              <TableHead colSpan={4} className="text-white text-center border-r border-gray-700">4-Part Line</TableHead>
              <TableHead rowSpan={2} colSpan={2} className="text-white text-center">Motor Power</TableHead>
            </TableRow>
            <TableRow className="bg-gray-900">
              <TableHead className="text-white text-center">1st Gear</TableHead>
              <TableHead className="text-white text-center">2nd Gear</TableHead>
              <TableHead className="text-white text-center">3rd Gear</TableHead>
              <TableHead className="text-white text-center border-r border-gray-700">4th Gear</TableHead>
              <TableHead className="text-white text-center">1st Gear</TableHead>
              <TableHead className="text-white text-center">2nd Gear</TableHead>
              <TableHead className="text-white text-center">3rd Gear</TableHead>
              <TableHead className="text-white text-center border-r border-gray-700">4th Gear</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Standard Hoist */}
            <TableRow className="bg-black">
              <TableCell rowSpan={2} className="font-medium text-white border-r border-gray-700 align-middle">
                {hoistData.standardHoist.name}
              </TableCell>
              
              {/* 2-Part Line */}
              {hoistData.standardHoist.twoPart.map((gear, index) => (
                <TableCell key={`std-2p-${index}`} className="text-white text-center">
                  <div>{gear.speed}</div>
                  <div className="text-sm text-gray-400">{gear.weight}</div>
                </TableCell>
              ))}

              {/* 4-Part Line */}
              {hoistData.standardHoist.fourPart.map((gear, index) => (
                <TableCell key={`std-4p-${index}`} className={`text-white text-center ${index === 3 ? 'border-r border-gray-700' : ''}`}>
                  <div>{gear.speed}</div>
                  <div className="text-sm text-gray-400">{gear.weight}</div>
                </TableCell>
              ))}

              {/* Motor Power */}
              <TableCell rowSpan={2} className="text-white text-center">
                {hoistData.standardHoist.motorPower.hp} HP
              </TableCell>
              <TableCell rowSpan={2} className="text-white text-center">
                {hoistData.standardHoist.motorPower.kw} kW
              </TableCell>
            </TableRow>

            {/* Optional Hoist */}
            <TableRow className="bg-gray-900">
              <TableCell rowSpan={2} className="font-medium text-white border-r border-gray-700 align-middle">
                {hoistData.optionalHoist.name}
              </TableCell>
              
              {/* 2-Part Line */}
              {hoistData.optionalHoist.twoPart.map((gear, index) => (
                <TableCell key={`opt-2p-${index}`} className="text-white text-center">
                  <div>{gear.speed}</div>
                  <div className="text-sm text-gray-400">{gear.weight}</div>
                </TableCell>
              ))}

              {/* 4-Part Line */}
              {hoistData.optionalHoist.fourPart.map((gear, index) => (
                <TableCell key={`opt-4p-${index}`} className={`text-white text-center ${index === 3 ? 'border-r border-gray-700' : ''}`}>
                  <div>{gear.speed}</div>
                  <div className="text-sm text-gray-400">{gear.weight}</div>
                </TableCell>
              ))}

              {/* Motor Power */}
              <TableCell rowSpan={2} className="text-white text-center">
                {hoistData.optionalHoist.motorPower.hp} HP
              </TableCell>
              <TableCell rowSpan={2} className="text-white text-center">
                {hoistData.optionalHoist.motorPower.kw} kW
              </TableCell>
            </TableRow>

            {/* Trolley */}
            <TableRow className="bg-black">
              <TableCell className="font-medium text-white border-r border-gray-700">
                {hoistData.trolley.name}
              </TableCell>
              <TableCell colSpan={4} className="text-white text-center border-r border-gray-700">
                {hoistData.trolley.speed}
              </TableCell>
              <TableCell colSpan={4} className="text-white text-center border-r border-gray-700">
                -
              </TableCell>
              <TableCell className="text-white text-center">
                {hoistData.trolley.motorPower.hp} HP
              </TableCell>
              <TableCell className="text-white text-center">
                {hoistData.trolley.motorPower.kw} kW
              </TableCell>
            </TableRow>

            {/* Swing */}
            <TableRow className="bg-gray-900">
              <TableCell className="font-medium text-white border-r border-gray-700">
                {hoistData.swing.name}
              </TableCell>
              <TableCell colSpan={4} className="text-white text-center border-r border-gray-700">
                {hoistData.swing.speed}
              </TableCell>
              <TableCell colSpan={4} className="text-white text-center border-r border-gray-700">
                -
              </TableCell>
              <TableCell className="text-white text-center">
                {hoistData.swing.motorPower.hp} HP
              </TableCell>
              <TableCell className="text-white text-center">
                {hoistData.swing.motorPower.kw} kW
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Power Requirements Footnote */}
      <div className="text-sm text-gray-400 bg-gray-900 p-4 rounded-lg">
        <p className="mb-2"><span className="font-semibold">Power Requirements:</span> 400V (+6% or -10%) 50Hz, 3-phase service with ground.</p>
        <p className="mb-1"><span className="font-semibold">Amperage for 15 LVF 10:</span> 29 Amp.</p>
        <p className="mb-1"><span className="font-semibold">Amperage for 15 RPC 10:</span> 29 Amp.</p>
      </div>
    </div>
  );
} 