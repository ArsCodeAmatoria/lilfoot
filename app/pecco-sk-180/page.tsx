'use client';

import { useState } from 'react';
import LoadCapacityChart from '../components/LoadCapacityChart';

// Tab Button Component
function TabButton({
  isActive,
  onClick,
  children,
}: {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 text-lg font-medium transition-colors duration-200 ${
        isActive
          ? 'border-b-2 border-highlight bg-gray-800 text-highlight'
          : 'border-b-2 border-gray-800 bg-gray-900 text-gray-400 hover:text-gray-300'
      }`}
    >
      {children}
    </button>
  );
}

export default function PeccoSK180Page() {
  const [activeTab, setActiveTab] = useState<'twoPartLine' | 'fourPartLine'>(
    'twoPartLine',
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-10">
        <h1 className="mb-4 text-3xl font-bold text-white">
          Pecco SK 180 Tower Crane
        </h1>
        <p className="max-w-3xl text-gray-400">
          The Pecco SK 180 is a versatile tower crane used in construction
          projects requiring high lifting capacities and reach. Available in
          various configurations, it offers reliable performance for demanding
          construction applications.
        </p>
      </div>

      <div className="space-y-12">
        {/* Line Configuration Tabs */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-white">
            Line Configurations
          </h2>

          <div className="mb-6">
            <div className="flex border-b border-gray-700">
              <TabButton
                isActive={activeTab === 'twoPartLine'}
                onClick={() => setActiveTab('twoPartLine')}
              >
                2-Part Line
              </TabButton>
              <TabButton
                isActive={activeTab === 'fourPartLine'}
                onClick={() => setActiveTab('fourPartLine')}
              >
                4-Part Line
              </TabButton>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {/* 2-Part Line Content */}
            {activeTab === 'twoPartLine' && (
              <div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-black">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="sticky left-0 z-10 min-w-[160px] bg-black px-4 py-3 text-left text-white">
                          Hook Radius
                        </th>
                        <th className="min-w-[200px] px-4 py-3 text-left text-white">
                          2-Part Line Max Capacity
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          80 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          90 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          95 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          101 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          105 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          110 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          120 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          130 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          135 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          140 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          150 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          160 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          168 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          180 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          185 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          190 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          196 ft
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-800 hover:bg-gray-900">
                        <td className="sticky left-0 z-10 bg-black px-4 py-3 font-medium text-white">
                          196 ft (59.7m)
                        </td>
                        <td className="px-4 py-3 text-gray-300">
                          13,800 lbs - 81 ft (6,250 kg - 24.7m)
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          13,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          12,300 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          11,700 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          10,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          10,320 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          9,700 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          8,700 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          8,000 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          7,700 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          7,300 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          6,700 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          6,200 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          5,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          5,400 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          5,200 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          5,100 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          4,900 lbs
                        </td>
                      </tr>
                      <tr className="border-b border-gray-800 hover:bg-gray-900">
                        <td className="sticky left-0 z-10 bg-black px-4 py-3 font-medium text-white">
                          185 ft (56.4m)
                        </td>
                        <td className="px-4 py-3 text-gray-300">
                          13,800 lbs - 95 ft (6,250 kg - 29.0m)
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          13,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          13,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          13,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          12,900 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          12,420 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          11,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          10,700 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          9,700 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          9,300 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          8,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          8,200 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          7,600 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          7,200 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          6,600 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          6,400 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                      </tr>
                      <tr className="border-b border-gray-800 hover:bg-gray-900">
                        <td className="sticky left-0 z-10 bg-black px-4 py-3 font-medium text-white">
                          168 ft (51.2m)
                        </td>
                        <td className="px-4 py-3 text-gray-300">
                          13,800 lbs - 106 ft (6,250 kg - 32.3m)
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          13,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          13,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          13,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          13,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          13,300 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          12,100 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          11,000 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          10,600 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          10,300 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          9,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          9,200 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          8,600 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          8,200 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                      </tr>
                      <tr className="border-b border-gray-800 hover:bg-gray-900">
                        <td className="sticky left-0 z-10 bg-black px-4 py-3 font-medium text-white">
                          135 ft (41.1m)
                        </td>
                        <td className="px-4 py-3 text-gray-300">
                          13,800 lbs - 110 ft (6,250 kg - 33.5m)
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          13,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          13,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          13,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          13,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          13,200 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          12,600 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          11,500 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          11,000 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                      </tr>
                      <tr className="border-b border-gray-800 hover:bg-gray-900">
                        <td className="sticky left-0 z-10 bg-black px-4 py-3 font-medium text-white">
                          101 ft (30.8m)
                        </td>
                        <td className="px-4 py-3 text-gray-300">
                          13,800 lbs - 101 ft (6,250 kg)
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          13,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          13,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          13,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          13,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-2 text-sm text-gray-400">
                  <span className="font-medium text-highlight">Note:</span>{' '}
                  Empty cells indicate configurations that are not available or
                  not recommended for operation.
                </div>
              </div>
            )}

            {/* 4-Part Line Content */}
            {activeTab === 'fourPartLine' && (
              <div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-black">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="sticky left-0 z-10 min-w-[160px] bg-black px-4 py-3 text-left text-white">
                          Hook Radius
                        </th>
                        <th className="min-w-[200px] px-4 py-3 text-left text-white">
                          4-Part Line Max Capacity
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          60 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          70 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          80 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          90 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          101 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          110 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          120 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          130 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          135 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          140 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          150 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          160 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          168 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          180 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          185 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          190 ft
                        </th>
                        <th className="min-w-[90px] px-4 py-3 text-center text-white">
                          196 ft
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-800 hover:bg-gray-900">
                        <td className="sticky left-0 z-10 bg-black px-4 py-3 font-medium text-white">
                          196 ft (59.7m)
                        </td>
                        <td className="px-4 py-3 text-gray-300">
                          27,600 lbs - 43 ft (12,500 kg - 13.2m)
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          19,060 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          15,700 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          13,400 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          11,700 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          10,200 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          9,100 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          8,100 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          7,300 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          7,000 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          6,700 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          6,100 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          5,600 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          5,200 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          4,700 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          4,500 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          4,300 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          4,200 lbs
                        </td>
                      </tr>
                      <tr className="border-b border-gray-800 hover:bg-gray-900">
                        <td className="sticky left-0 z-10 bg-black px-4 py-3 font-medium text-white">
                          185 ft (56.4m)
                        </td>
                        <td className="px-4 py-3 text-gray-300">
                          27,600 lbs - 51 ft (12,500 kg - 15.5m)
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          22,720 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          18,900 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          16,200 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          14,200 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          12,300 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          11,000 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          9,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          9,000 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          8,600 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          8,200 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          7,500 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          7,000 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          6,600 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          5,900 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          5,700 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                      </tr>
                      <tr className="border-b border-gray-800 hover:bg-gray-900">
                        <td className="sticky left-0 z-10 bg-black px-4 py-3 font-medium text-white">
                          168 ft (51.2m)
                        </td>
                        <td className="px-4 py-3 text-gray-300">
                          27,600 lbs - 57 ft (12,500 kg - 17.2m)
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          25,750 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          21,300 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          18,300 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          16,100 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          14,100 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          12,700 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          11,400 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          10,400 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          9,900 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          9,400 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          8,600 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          7,900 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          7,500 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                      </tr>
                      <tr className="border-b border-gray-800 hover:bg-gray-900">
                        <td className="sticky left-0 z-10 bg-black px-4 py-3 font-medium text-white">
                          135 ft (41.1m)
                        </td>
                        <td className="px-4 py-3 text-gray-300">
                          27,600 lbs - 58.5 ft (12,500 kg - 17.8m)
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          26,750 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          22,300 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          19,300 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          16,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          14,600 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          13,200 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          11,900 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          10,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          10,400 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                      </tr>
                      <tr className="border-b border-gray-800 hover:bg-gray-900">
                        <td className="sticky left-0 z-10 bg-black px-4 py-3 font-medium text-white">
                          101 ft (30.8m)
                        </td>
                        <td className="px-4 py-3 text-gray-300">
                          27,150 lbs - 59 ft (12,500 kg - 18.0m)
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          27,150 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          22,600 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          19,600 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          17,000 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300">
                          14,800 lbs
                        </td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                        <td className="px-4 py-3 text-center text-gray-300"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-2 text-sm text-gray-400">
                  <span className="font-medium text-highlight">Note:</span>{' '}
                  Empty cells indicate configurations that are not available or
                  not recommended for operation.
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Load Capacity Chart */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-white">
            Load Capacity Charts
          </h2>
          <p className="mb-6 text-gray-400">
            These charts visualize the load capacity of the Pecco SK 180 tower
            crane at different jib radii. The diagrams show how the maximum load
            capacity decreases as the jib radius increases, helping operators
            determine safe operating limits for specific configurations.
          </p>

          {/* 2-Part Line Chart */}
          <div className="mb-10">
            <h3 className="mb-4 text-xl font-bold text-highlight">
              2-Part Line Configuration
            </h3>
            <LoadCapacityChart configuration="twoPartLine" />
            <div className="mt-4 text-sm text-gray-400">
              <span className="font-medium text-highlight">Note:</span> This
              chart represents the 196 ft jib length with 2-Part Line
              configuration. It shows the relationship between jib radius (from
              80 ft to 196 ft) and maximum lifting capacity, demonstrating how
              capacity decreases as the hook moves further from the mast. The
              2-Part line configuration offers faster hoisting speeds with less
              capacity.
            </div>
          </div>

          {/* 4-Part Line Chart */}
          <div className="mb-12">
            <h3 className="mb-4 text-xl font-bold text-highlight">
              4-Part Line Configuration
            </h3>
            <LoadCapacityChart configuration="fourPartLine" />
            <div className="mt-4 text-sm text-gray-400">
              <span className="font-medium text-highlight">Note:</span> This
              chart represents the 196 ft jib length with 4-Part Line
              configuration. The 4-Part line configuration provides higher
              lifting capacity (up to 27,600 lbs) at the expense of hoisting
              speed. Notice the capacity reduction as radius increases, starting
              from a higher capacity at shorter radii compared to the 2-Part
              line.
            </div>
          </div>
        </section>

        {/* Crane Information */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-white">Specifications</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-900 p-6">
              <h3 className="mb-4 text-xl font-bold text-highlight">
                Key Features
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Maximum lifting capacity: 27,600 lbs (12,500 kg)</li>
                <li>• Maximum jib length: 196 ft (59.7 m)</li>
                <li>• Available in 2-part and 4-part line configurations</li>
                <li>• Adjustable hook radius for versatile operation</li>
                <li>• Free-standing heights available up to 200 ft</li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-900 p-6">
              <h3 className="mb-4 text-xl font-bold text-highlight">
                Technical Data
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  • Tower section dimensions: 5.9 ft x 5.9 ft (1.8 m x 1.8 m)
                </li>
                <li>• Slewing speed: 0 to 0.8 rpm</li>
                <li>• Maximum trolley speed: 262 ft/min (80 m/min)</li>
                <li>
                  • Hoisting speed (4-part line): 0 to 213 ft/min (65 m/min)
                </li>
                <li>• Power requirements: 480V, 60 Hz, 3-phase</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Operational Notes */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-white">
            Operational Notes
          </h2>
          <div className="rounded-lg bg-gray-900 p-6 text-gray-300">
            <ul className="space-y-4">
              <li>
                <span className="font-semibold text-highlight">
                  Load Capacity:
                </span>{' '}
                The lifting capacity decreases as the hook radius increases, as
                shown in the load charts above.
              </li>
              <li>
                <span className="font-semibold text-highlight">
                  Line Configuration:
                </span>{' '}
                The 4-part line configuration provides higher lifting capacity
                at the expense of hoisting speed, while the 2-part line
                configuration offers faster hoisting speeds with reduced
                capacity.
              </li>
              <li>
                <span className="font-semibold text-highlight">
                  Safety Considerations:
                </span>{' '}
                Always refer to the manufacturer's operation manual for complete
                safety guidelines and operational procedures.
              </li>
              <li>
                <span className="font-semibold text-highlight">
                  Wind Limits:
                </span>{' '}
                The crane should not be operated in wind speeds exceeding 45 mph
                (72 km/h). When wind speeds exceed 63 mph (101 km/h), the crane
                must be in weather vane mode.
              </li>
            </ul>
          </div>
        </section>

        {/* Hoist Speed and Capacity Table */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-white">
            Hoist Speed and Capacity
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-black">
              <thead>
                <tr className="border-b border-gray-700">
                  <th
                    rowSpan={2}
                    className="sticky left-0 z-10 min-w-[80px] bg-black px-4 py-3 text-left align-bottom text-white"
                  >
                    Gear
                  </th>
                  <th
                    colSpan={2}
                    className="border-b border-gray-700 px-4 py-3 text-center font-bold text-highlight"
                  >
                    2-Part Line
                  </th>
                  <th
                    colSpan={2}
                    className="border-b border-gray-700 px-4 py-3 text-center font-bold text-highlight"
                  >
                    4-Part Line
                  </th>
                </tr>
                <tr className="border-b border-gray-700">
                  <th className="min-w-[180px] px-4 py-3 text-left text-white">
                    Capacity
                  </th>
                  <th className="min-w-[180px] px-4 py-3 text-left text-white">
                    Speed
                  </th>
                  <th className="min-w-[180px] px-4 py-3 text-left text-white">
                    Capacity
                  </th>
                  <th className="min-w-[180px] px-4 py-3 text-left text-white">
                    Speed
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800 hover:bg-gray-900">
                  <td className="sticky left-0 z-10 bg-black px-4 py-3 font-medium text-white">
                    1
                  </td>
                  <td className="px-4 py-3 text-gray-300">
                    Up to 13,800 lbs (6,250 kg)
                  </td>
                  <td className="px-4 py-3 text-gray-300">
                    112 fpm (34 m/min)
                  </td>
                  <td className="px-4 py-3 text-gray-300">
                    Up to 27,600 lbs (12,500 kg)
                  </td>
                  <td className="px-4 py-3 text-gray-300">56 fpm (17 m/min)</td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-900">
                  <td className="sticky left-0 z-10 bg-black px-4 py-3 font-medium text-white">
                    2
                  </td>
                  <td className="px-4 py-3 text-gray-300">
                    Up to 13,800 lbs (6,250 kg)
                  </td>
                  <td className="px-4 py-3 text-gray-300">
                    178 fpm (54 m/min)
                  </td>
                  <td className="px-4 py-3 text-gray-300">
                    Up to 27,600 lbs (12,500 kg)
                  </td>
                  <td className="px-4 py-3 text-gray-300">89 fpm (27 m/min)</td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-900">
                  <td className="sticky left-0 z-10 bg-black px-4 py-3 font-medium text-white">
                    3
                  </td>
                  <td className="px-4 py-3 text-gray-300">
                    Up to 9,260 lbs (4,200 kg)
                  </td>
                  <td className="px-4 py-3 text-gray-300">
                    282 fpm (86 m/min)
                  </td>
                  <td className="px-4 py-3 text-gray-300">
                    Up to 18,520 lbs (8,400 kg)
                  </td>
                  <td className="px-4 py-3 text-gray-300">
                    141 fpm (43 m/min)
                  </td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-900">
                  <td className="sticky left-0 z-10 bg-black px-4 py-3 font-medium text-white">
                    4
                  </td>
                  <td className="px-4 py-3 text-gray-300">
                    Up to 5,500 lbs (2,500 kg)
                  </td>
                  <td className="px-4 py-3 text-gray-300">
                    440 fpm (134 m/min)
                  </td>
                  <td className="px-4 py-3 text-gray-300">
                    Up to 11,000 lbs (5,000 kg)
                  </td>
                  <td className="px-4 py-3 text-gray-300">
                    220 fpm (67 m/min)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-2 text-sm text-gray-400">
            <span className="font-medium text-highlight">Note:</span> Line speed
            varies based on the gear selected and decreases as the load
            increases. Always operate within the specified capacity limits.
          </div>
        </section>

        {/* Motor Information Table */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-white">
            Motor Information
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-black">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="sticky left-0 z-10 min-w-[180px] bg-black px-4 py-3 text-left text-white">
                    Drive Unit
                  </th>
                  <th className="min-w-[120px] px-4 py-3 text-left text-white">
                    Horsepower
                  </th>
                  <th className="min-w-[120px] px-4 py-3 text-left text-white">
                    Kilowatts
                  </th>
                  <th className="min-w-[220px] px-4 py-3 text-left text-white">
                    Speed
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800 hover:bg-gray-900">
                  <td className="sticky left-0 z-10 bg-black px-4 py-3 font-medium text-white">
                    Trolley (2-Part Line)
                  </td>
                  <td className="px-4 py-3 text-gray-300">6.4 hp</td>
                  <td className="px-4 py-3 text-gray-300">4.8 kW</td>
                  <td className="px-4 py-3 text-gray-300">
                    13 - 249 fpm (4 - 76 m/min)
                  </td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-900">
                  <td className="sticky left-0 z-10 bg-black px-4 py-3 font-medium text-white">
                    Trolley (4-Part Line)
                  </td>
                  <td className="px-4 py-3 text-gray-300">6.4 hp</td>
                  <td className="px-4 py-3 text-gray-300">4.8 kW</td>
                  <td className="px-4 py-3 text-gray-300">
                    6.6 - 125 fpm (2 - 38 m/min)
                  </td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-900">
                  <td className="sticky left-0 z-10 bg-black px-4 py-3 font-medium text-white">
                    Swing
                  </td>
                  <td className="px-4 py-3 text-gray-300">2 x 6.4 hp</td>
                  <td className="px-4 py-3 text-gray-300">2 x 4.8 kW</td>
                  <td className="px-4 py-3 text-gray-300">1.0 rpm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Power Requirements Table */}
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-white">
            Power Requirements
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-black">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="min-w-[120px] px-4 py-3 text-left text-white">
                    Voltage
                  </th>
                  <th className="min-w-[120px] px-4 py-3 text-left text-white">
                    Phase
                  </th>
                  <th className="min-w-[120px] px-4 py-3 text-left text-white">
                    Frequency
                  </th>
                  <th className="min-w-[150px] px-4 py-3 text-left text-white">
                    Amperage
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800 hover:bg-gray-900">
                  <td className="px-4 py-3 font-medium text-gray-300">480 V</td>
                  <td className="px-4 py-3 text-gray-300">3-Phase</td>
                  <td className="px-4 py-3 text-gray-300">60 Hz</td>
                  <td className="px-4 py-3 text-gray-300">225 - 250 Amps</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-2 text-sm text-gray-400">
            <span className="font-medium text-highlight">Note:</span> Proper
            electrical installation by a certified electrician is required.
            Always verify local electrical codes before installation.
          </div>
        </section>

        {/* Additional Resources */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-white">
            Additional Resources
          </h2>
          <div className="rounded-lg bg-gray-900 p-6 text-gray-300">
            <p className="mb-4">
              For more information about the Pecco SK 180 Tower Crane or to
              request a consultation for your construction project, consult with
              a qualified crane provider or equipment specialist in your area.
            </p>
            <p>
              Proper training and certification are required for safe operation
              of this equipment. Always ensure operators have received
              comprehensive training from accredited programs for tower crane
              operation.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
