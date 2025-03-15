import React from 'react';
import { Info, Phone } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "#/components/ui/table";

export const metadata = {
  title: 'Limits of Approach | Power Lines | lilfoot',
  description:
    'Understanding safe working distances from power lines for crane operators and construction personnel.',
};

export default function LimitsOfApproachPage() {
  // WorkSafeBC's General Limits of Approach data
  const limitsOfApproachData = [
    { voltage: "Over 750 V to 75 kV", meters: "3", feet: "10" },
    { voltage: "Over 75 kV to 250 kV", meters: "4.5", feet: "15" },
    { voltage: "Over 250 kV to 550 kV", meters: "6", feet: "20" },
  ];

  return (
    <div className="text-white">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-white">
          Limits of Approach
        </h1>
        <p className="max-w-3xl text-gray-400">
          Understanding safe working distances from power lines is critical for
          crane operators and construction personnel. This guide provides
          detailed information on regulatory requirements and best practices
          when working near overhead and underground electrical hazards.
        </p>
      </div>

      {/* Main table section */}
      <div className="mb-10 p-6 bg-gray-950 rounded-lg border border-gray-800">
        <h2 className="text-2xl font-bold text-white mb-6">WorkSafeBC's General Limits of Approach</h2>
        
        <div className="overflow-x-auto rounded-md">
          <Table className="border-collapse">
            <TableHeader className="bg-gray-900">
              <TableRow>
                <TableHead className="border border-gray-800 sticky left-0 z-10 bg-gray-900">Voltage Phase to Phase</TableHead>
                <TableHead className="border border-gray-800 text-center">Minimum Distance (Meters)</TableHead>
                <TableHead className="border border-gray-800 text-center">Minimum Distance (Feet)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {limitsOfApproachData.map((row, index) => (
                <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-900/30' : ''}>
                  <TableCell className="border border-gray-800 font-medium sticky left-0 z-10 bg-inherit">
                    <span className="font-semibold">{row.voltage}</span>
                  </TableCell>
                  <TableCell className="border border-gray-800 text-center">
                    {row.meters}
                  </TableCell>
                  <TableCell className="border border-gray-800 text-center">
                    {row.feet}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Working near power lines section */}
      <div className="mb-10 p-6 bg-gray-950 rounded-lg border border-gray-800">
        <div className="flex items-start gap-3">
          <Info className="text-highlight mt-1 flex-shrink-0" />
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-white">If you need to work near the limits of approach</h3>
            
            <p className="text-gray-300">
              If it's not possible to maintain these safe distances, you must contact BC Hydro and get an <strong>Assurance in Writing</strong> before working. This is a legal requirement under WorkSafeBC regulations.
            </p>
            
            <p className="text-gray-300">
              Call BC Hydro at <a href="tel:18009638711" className="text-highlight hover:underline">1-800-963-8711</a> to arrange for:
            </p>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>A safety assessment of your work area</li>
              <li>Power line covers or barriers</li>
              <li>De-energizing and grounding of power lines</li>
              <li>Assurance in Writing documentation</li>
            </ul>
            
            <p className="text-gray-300 font-medium">
              Remember: <strong>No work can begin</strong> until you have received written permission from the utility owner and all required safety measures are in place.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-gray-900 p-6">
          <h3 className="mb-4 text-xl font-bold">Important Considerations</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              These limits apply to all parts of the crane, boom, load line, and load
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Account for boom deflection and load swing in your planning
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Wind conditions can significantly affect safe working distances
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Always assign a dedicated power line spotter when working near electrical hazards
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-gray-900 p-6">
          <h3 className="mb-4 text-xl font-bold">Why This Matters</h3>
          <p className="text-gray-400">
            Power line contacts remain one of the leading causes of serious
            injuries and fatalities in the crane industry. Understanding proper
            limits of approach and implementing appropriate safety measures can
            prevent these incidents and save lives. This resource helps
            crane operators and site planners make informed decisions when
            working near electrical infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
}
