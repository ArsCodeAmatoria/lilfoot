'use client';

import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Circle, Diamond, Weight } from 'lucide-react';

const TerexTowerConfigs = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-black">TOWER</h2>
        <p className="text-red-600 font-semibold">
          Turn · Tour · Torre · Torre
        </p>
      </div>

      {/* Standard Configurations Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-red-600">
            Standard Configurations | Configurations standard | Configuraciones estándar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Basement A */}
            <div className="space-y-4 p-4 bg-gray-900 rounded-lg">
              <h3 className="text-lg font-semibold text-center">Basement: A</h3>
              <div className="space-y-4">
                {/* R1 Values */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center mb-2">
                    <Circle className="h-5 w-5" />
                    <Diamond className="h-5 w-5" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-2 bg-gray-800 rounded">-2655 kN</div>
                    <div className="p-2 bg-gray-800 rounded">-2755 kN</div>
                  </div>
                </div>
                {/* R2 Values */}
                <div className="space-y-2">
                  <div className="flex justify-center mb-2">
                    <Weight className="h-5 w-5" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-2 bg-gray-800 rounded">1992 kN</div>
                    <div className="p-2 bg-gray-800 rounded">2186 kN</div>
                  </div>
                </div>
                {/* Weight Value */}
                <div className="text-center p-2 bg-gray-800 rounded mt-4">
                  890 kN
                </div>
              </div>
            </div>

            {/* Basement E */}
            <div className="space-y-4 p-4 bg-gray-900 rounded-lg">
              <h3 className="text-lg font-semibold text-center">Basement: E</h3>
              <div className="space-y-4">
                {/* R1 Values */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center mb-2">
                    <Circle className="h-5 w-5" />
                    <Diamond className="h-5 w-5" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-2 bg-gray-800 rounded">-1121 kN</div>
                    <div className="p-2 bg-gray-800 rounded">-1099 kN</div>
                  </div>
                </div>
                {/* R2 Values */}
                <div className="space-y-2">
                  <div className="flex justify-center mb-2">
                    <Weight className="h-5 w-5" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-2 bg-gray-800 rounded">0 kN</div>
                    <div className="p-2 bg-gray-800 rounded">-51 kN</div>
                  </div>
                </div>
                {/* Weight Value */}
                <div className="text-center p-2 bg-gray-800 rounded mt-4">
                  978 kN
                </div>
              </div>
            </div>

            {/* Basement F */}
            <div className="space-y-4 p-4 bg-gray-900 rounded-lg">
              <h3 className="text-lg font-semibold text-center">Basement: F</h3>
              <div className="space-y-4">
                {/* R1 Values */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center mb-2">
                    <Circle className="h-5 w-5" />
                    <Diamond className="h-5 w-5" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-2 bg-gray-800 rounded">1099 kN</div>
                    <div className="p-2 bg-gray-800 rounded">-1113 kN</div>
                  </div>
                </div>
                {/* R2 Values */}
                <div className="space-y-2">
                  <div className="flex justify-center mb-2">
                    <Weight className="h-5 w-5" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-2 bg-gray-800 rounded">0 kN</div>
                    <div className="p-2 bg-gray-800 rounded">-18 kN</div>
                  </div>
                </div>
                {/* Weight Value */}
                <div className="text-center p-2 bg-gray-800 rounded mt-4">
                  978 kN
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