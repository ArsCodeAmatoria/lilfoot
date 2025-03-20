import React from 'react';
import { Calculator, Ruler, BarChart, Construction, ChevronsRight } from 'lucide-react';
import ShareOfLoadFormula from '../../components/ShareOfLoadFormula';
import LevelPickPointsFormula from '../../components/LevelPickPointsFormula';
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card';

export const metadata = {
  title: 'Advanced Rigging Charts | Rigging Charts | lilfoot',
  description:
    'Advanced rigging charts, calculations, and specifications for complex lifting operations.',
};

export default function AdvancedRiggingChartsPage() {
  return (
    <div className="text-white space-y-8">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-white">
          Advanced Rigging Charts
        </h1>
        <p className="max-w-3xl text-gray-400">
          This page provides specialized rigging charts, complex load
          calculations, and detailed guidelines for advanced rigging operations.
          Designed for experienced riggers handling challenging lifting
          scenarios.
        </p>
      </div>

      {/* Share of Load Formula Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Share of Load Formula</h2>
        <p className="max-w-3xl text-gray-400 mb-6">
          When lifting an object with multiple lifting points, it's critical to understand how the load is distributed.
          The Share of Load Formula helps riggers calculate precisely how much weight each lifting point will bear.
        </p>
        <ShareOfLoadFormula />
      </div>

      {/* Level Pick Points Formula Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Level Pick Points & Different Sling Angles</h2>
        <p className="max-w-3xl text-gray-400 mb-6">
          When rigging a load with level pick points but using different sling angles, the tension in each sling will vary.
          This formula helps riggers calculate the exact tension in each sling based on geometry and load weight.
        </p>
        <LevelPickPointsFormula />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="border-b border-gray-800 pb-4">
            <CardTitle className="text-lg text-white flex items-center">
              <Calculator className="mr-2 text-highlight" />
              Advanced Calculation Methods
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-3 text-gray-400">
              <li className="flex">
                <span className="mr-2 font-bold text-highlight">•</span>
                Complex multi-point lifting calculations
              </li>
              <li className="flex">
                <span className="mr-2 font-bold text-highlight">•</span>
                Center of gravity determination for irregularly shaped loads
              </li>
              <li className="flex">
                <span className="mr-2 font-bold text-highlight">•</span>
                Tensions in slings at various angles
              </li>
              <li className="flex">
                <span className="mr-2 font-bold text-highlight">•</span>
                Stress and strain analysis for critical lifts
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="border-b border-gray-800 pb-4">
            <CardTitle className="text-lg text-white flex items-center">
              <Ruler className="mr-2 text-highlight" />
              Technical Standards Reference
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-3 text-gray-400">
              <li className="flex">
                <span className="mr-2 font-bold text-highlight">•</span>
                ASME B30.5: Mobile and Locomotive Cranes
              </li>
              <li className="flex">
                <span className="mr-2 font-bold text-highlight">•</span>
                ASME B30.10: Hooks - Design criteria and testing standards
              </li>
              <li className="flex">
                <span className="mr-2 font-bold text-highlight">•</span>
                ISO 4309: Wire rope inspection and discard criteria
              </li>
              <li className="flex">
                <span className="mr-2 font-bold text-highlight">•</span>
                API RP 2D: Operation and Maintenance of Offshore Cranes
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="border-b border-gray-800 pb-4">
            <CardTitle className="text-lg text-white flex items-center">
              <BarChart className="mr-2 text-highlight" />
              Load Distribution Visualizations
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-3 text-gray-400">
              <li className="flex">
                <span className="mr-2 font-bold text-highlight">•</span>
                Multiple-point lifting arrangements
              </li>
              <li className="flex">
                <span className="mr-2 font-bold text-highlight">•</span>
                Vector force diagrams for complex rigging setups
              </li>
              <li className="flex">
                <span className="mr-2 font-bold text-highlight">•</span>
                Stress concentration models for load-bearing components
              </li>
              <li className="flex">
                <span className="mr-2 font-bold text-highlight">•</span>
                Dynamic load analysis for motion-sensitive lifts
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="border-b border-gray-800 pb-4">
            <CardTitle className="text-lg text-white flex items-center">
              <Construction className="mr-2 text-highlight" />
              Specialized Equipment Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-3 text-gray-400">
              <li className="flex">
                <span className="mr-2 font-bold text-highlight">•</span>
                Tandem lifting operations with multiple cranes
              </li>
              <li className="flex">
                <span className="mr-2 font-bold text-highlight">•</span>
                Spreader beam design and selection criteria
              </li>
              <li className="flex">
                <span className="mr-2 font-bold text-highlight">•</span>
                Specialized sling configurations for uneven loads
              </li>
              <li className="flex">
                <span className="mr-2 font-bold text-highlight">•</span>
                Jackup systems and hydraulic gantries for precision positioning
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
        <h3 className="text-xl font-bold text-white mb-3">Coming Next</h3>
        <p className="text-gray-400 mb-4">
          We're continuing to expand our advanced rigging resources. Check back soon for more detailed content on:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <ChevronsRight className="text-highlight mr-2" size={16} />
              <h4 className="text-white font-medium">Static vs. Dynamic Loads</h4>
            </div>
            <p className="text-sm text-gray-400">Detailed calculations and coefficients for dynamic load factors in various lifting scenarios</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <ChevronsRight className="text-highlight mr-2" size={16} />
              <h4 className="text-white font-medium">Multi-Crane Operations</h4>
            </div>
            <p className="text-sm text-gray-400">Coordination protocols and load distribution calculations for tandem and multi-crane lifts</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <ChevronsRight className="text-highlight mr-2" size={16} />
              <h4 className="text-white font-medium">Complex Equalizer Systems</h4>
            </div>
            <p className="text-sm text-gray-400">Advanced equalizer beam configurations for distributing loads across multiple attachment points</p>
          </div>
        </div>
      </div>
    </div>
  );
}
