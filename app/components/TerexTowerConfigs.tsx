'use client';

import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Circle, Diamond, Weight } from 'lucide-react';

const TerexTowerConfigs = () => {
  return (
    <div className="space-y-6">
      {/* TOWER section is now moved to the main page */}

      {/* Standard Configurations Section */}
      <Card className="border border-gray-800 bg-black">
        <CardHeader>
          <CardTitle className="text-highlight font-bold">
            Standard Configurations | Configurations standard | Configuraciones estándar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Basement A */}
            <div className="space-y-4 p-4 bg-gray-900 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold text-center text-white">Basement: A</h3>
              <div className="space-y-4">
                {/* R1 Values */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center mb-2">
                    <Circle className="h-5 w-5 text-highlight" />
                    <Diamond className="h-5 w-5 text-highlight" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-2 bg-gray-800 rounded border border-gray-700">-2655 kN</div>
                    <div className="p-2 bg-gray-800 rounded border border-gray-700">-2755 kN</div>
                  </div>
                </div>
                {/* R2 Values */}
                <div className="space-y-2">
                  <div className="flex justify-center mb-2">
                    <Weight className="h-5 w-5 text-highlight" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-2 bg-gray-800 rounded border border-gray-700">1992 kN</div>
                    <div className="p-2 bg-gray-800 rounded border border-gray-700">2186 kN</div>
                  </div>
                </div>
                {/* Weight Value */}
                <div className="mt-4 p-2 bg-gray-800 rounded text-center border border-gray-700">
                  26.81 t
                </div>
              </div>
            </div>

            {/* Basement B */}
            <div className="space-y-4 p-4 bg-gray-900 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold text-center text-white">Basement: B</h3>
              <div className="space-y-4">
                {/* R1 Values */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center mb-2">
                    <Circle className="h-5 w-5 text-highlight" />
                    <Diamond className="h-5 w-5 text-highlight" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-2 bg-gray-800 rounded border border-gray-700">-3120 kN</div>
                    <div className="p-2 bg-gray-800 rounded border border-gray-700">-3240 kN</div>
                  </div>
                </div>
                {/* R2 Values */}
                <div className="space-y-2">
                  <div className="flex justify-center mb-2">
                    <Weight className="h-5 w-5 text-highlight" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-2 bg-gray-800 rounded border border-gray-700">2457 kN</div>
                    <div className="p-2 bg-gray-800 rounded border border-gray-700">2671 kN</div>
                  </div>
                </div>
                {/* Weight Value */}
                <div className="mt-4 p-2 bg-gray-800 rounded text-center border border-gray-700">
                  31.41 t
                </div>
              </div>
            </div>

            {/* Basement C */}
            <div className="space-y-4 p-4 bg-gray-900 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold text-center text-white">Basement: C</h3>
              <div className="space-y-4">
                {/* R1 Values */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center mb-2">
                    <Circle className="h-5 w-5 text-highlight" />
                    <Diamond className="h-5 w-5 text-highlight" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-2 bg-gray-800 rounded border border-gray-700">-3605 kN</div>
                    <div className="p-2 bg-gray-800 rounded border border-gray-700">-3744 kN</div>
                  </div>
                </div>
                {/* R2 Values */}
                <div className="space-y-2">
                  <div className="flex justify-center mb-2">
                    <Weight className="h-5 w-5 text-highlight" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-2 bg-gray-800 rounded border border-gray-700">2942 kN</div>
                    <div className="p-2 bg-gray-800 rounded border border-gray-700">3175 kN</div>
                  </div>
                </div>
                {/* Weight Value */}
                <div className="mt-4 p-2 bg-gray-800 rounded text-center border border-gray-700">
                  36.01 t
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TerexTowerConfigs; 