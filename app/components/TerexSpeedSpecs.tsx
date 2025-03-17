'use client';

import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TerexSpeedSpecs = () => {
  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Speed (ft/min)',
          color: '#9CA3AF',
        },
        grid: {
          color: '#374151',
        },
        ticks: {
          color: '#9CA3AF',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Load (lbs)',
          color: '#9CA3AF',
        },
        grid: {
          color: '#374151',
        },
        ticks: {
          color: '#9CA3AF',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#9CA3AF',
        },
      },
    },
  };

  // Data for SR WB 66-100/4F
  const data66 = {
    labels: [0, 65.6, 131.2, 196.9, 262.5, 328.1, 393.7, 459.3, 525, 590.6],
    datasets: [
      {
        label: 'Load Capacity',
        data: [22046, 17637, 13228, 8818, 4409],
        borderColor: '#EF4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4,
      },
    ],
  };

  // Data for SR WB 102-100/4F
  const data102 = {
    labels: [0, 65.6, 131.2, 196.9, 262.5, 328.1, 393.7, 459.3, 525, 590.6],
    datasets: [
      {
        label: 'Load Capacity',
        data: [22046, 17637, 13228, 8818, 4409],
        borderColor: '#EF4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="space-y-8">
      {/* Hoisting Speed Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-red-600 font-bold">
            Hoisting Speed | Vitesse de levage | Hubgeschwindigkeit
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* SR WB 66-100/4F Chart */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SR WB 66-100/4F</h3>
            <div className="h-[300px]">
              <Line options={options} data={data66} />
            </div>
          </div>

          {/* SR WB 102-100/4F Chart */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SR WB 102-100/4F</h3>
            <div className="h-[300px]">
              <Line options={options} data={data102} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Specifications Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-red-600 font-bold">
            Additional Specifications | Spécifications supplémentaires | Zusätzliche Spezifikationen
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* FU 9-200/4 */}
            <div className="space-y-4 p-4 bg-gray-900 rounded-lg">
              <h3 className="text-lg font-semibold">FU 9-200/4</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Speed:</span>
                  <span>0 ➝ 252.6 ft/min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Power:</span>
                  <span>1 x 14.2 HP</span>
                </div>
              </div>
            </div>

            {/* K WB 120/4 */}
            <div className="space-y-4 p-4 bg-gray-900 rounded-lg">
              <h3 className="text-lg font-semibold">K WB 120/4</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Speed:</span>
                  <span>0 ➝ 0.9 rpm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Power:</span>
                  <span>2 x 11 HP</span>
                </div>
                <p className="text-sm text-gray-400">(114.8 ft - 180.5 ft)</p>
                <div className="flex justify-between">
                  <span className="text-gray-400">Power:</span>
                  <span>3 x 11 HP</span>
                </div>
                <p className="text-sm text-gray-400">(196.9 ft - 246.1 ft)</p>
              </div>
            </div>

            {/* SR 10-190/4 */}
            <div className="space-y-4 p-4 bg-gray-900 rounded-lg">
              <h3 className="text-lg font-semibold">SR 10-190/4</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Speed:</span>
                  <span>0 ➝ 100 ft/min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Power:</span>
                  <span>4 x 11.9 HP</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TerexSpeedSpecs; 