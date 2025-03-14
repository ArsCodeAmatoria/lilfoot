'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import type { ChartData, ChartOptions } from 'chart.js';

// Dynamically import Chart.js to avoid SSR issues
const Pie = dynamic(() => import('react-chartjs-2').then((mod) => mod.Pie), { ssr: false });
const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), { ssr: false });
const PolarArea = dynamic(() => import('react-chartjs-2').then((mod) => mod.PolarArea), { ssr: false });

interface GeometryVisualizerProps {
  type: 'square' | 'cube' | 'circle' | 'cylinder' | 'sphere';
  highlightColor?: string;
}

const GeometryVisualizer: React.FC<GeometryVisualizerProps> = ({
  type,
  highlightColor = '#53C03F'
}) => {
  const [mounted, setMounted] = useState(false);

  // Register Chart.js components only on the client side
  useEffect(() => {
    setMounted(true);
    const registerCharts = async () => {
      if (typeof window !== 'undefined') {
        const { 
          Chart, 
          ArcElement, 
          CategoryScale, 
          LinearScale, 
          BarElement, 
          Title, 
          Tooltip, 
          Legend,
          RadialLinearScale
        } = await import('chart.js');
        
        Chart.register(
          ArcElement, 
          CategoryScale, 
          LinearScale, 
          BarElement, 
          Title, 
          Tooltip, 
          Legend,
          RadialLinearScale
        );
      }
    };
    registerCharts();
  }, []);

  if (!mounted) return <div className="h-80 w-full bg-gray-800 animate-pulse" />;

  // Generate chart data based on shape type
  const getChartConfig = () => {
    const baseColor = highlightColor;
    const transparent = `${baseColor}33`; // 20% opacity

    switch (type) {
      case 'square':
        return {
          type: 'bar',
          data: {
            labels: ['Area = s²', 'Perimeter = 4s'],
            datasets: [{
              label: 'Square (s = 5)',
              data: [25, 20],
              backgroundColor: [baseColor, transparent],
              borderColor: baseColor,
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top' as const,
                labels: { color: 'white' }
              },
              title: {
                display: true,
                text: 'Square Dimensions',
                color: 'white'
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: { color: 'white' },
                grid: { color: 'rgba(255,255,255,0.1)' }
              },
              x: {
                ticks: { color: 'white' },
                grid: { color: 'rgba(255,255,255,0.1)' }
              }
            }
          }
        };
      
      case 'cube':
        return {
          type: 'bar',
          data: {
            labels: ['Volume = s³', 'Surface Area = 6s²'],
            datasets: [{
              label: 'Cube (s = 5)',
              data: [125, 150],
              backgroundColor: [baseColor, transparent],
              borderColor: baseColor,
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top' as const,
                labels: { color: 'white' }
              },
              title: {
                display: true,
                text: 'Cube Dimensions',
                color: 'white'
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: { color: 'white' },
                grid: { color: 'rgba(255,255,255,0.1)' }
              },
              x: {
                ticks: { color: 'white' },
                grid: { color: 'rgba(255,255,255,0.1)' }
              }
            }
          }
        };
      
      case 'circle':
        return {
          type: 'pie',
          data: {
            labels: ['Area = πr²', 'Circumference = 2πr'],
            datasets: [{
              label: 'Circle (r = 5)',
              data: [78.5, 31.4],
              backgroundColor: [baseColor, transparent],
              borderColor: 'rgba(255,255,255,0.2)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top' as const,
                labels: { color: 'white' }
              },
              title: {
                display: true,
                text: 'Circle Dimensions',
                color: 'white'
              }
            }
          }
        };
      
      case 'cylinder':
        return {
          type: 'polarArea',
          data: {
            labels: ['Volume = πr²h', 'Lateral Surface Area = 2πrh', 'Total Surface Area = 2πr(r+h)'],
            datasets: [{
              label: 'Cylinder (r = 5, h = 10)',
              data: [785, 314, 471],
              backgroundColor: [
                baseColor,
                `${baseColor}88`,
                `${baseColor}44`
              ],
              borderColor: 'rgba(255,255,255,0.2)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'right' as const,
                labels: { color: 'white' }
              },
              title: {
                display: true,
                text: 'Cylinder Dimensions',
                color: 'white'
              }
            },
            scales: {
              r: {
                ticks: { color: 'white' },
                grid: { color: 'rgba(255,255,255,0.1)' }
              }
            }
          }
        };
      
      case 'sphere':
        return {
          type: 'pie',
          data: {
            labels: ['Volume = (4/3)πr³', 'Surface Area = 4πr²'],
            datasets: [{
              label: 'Sphere (r = 5)',
              data: [523.6, 314.2],
              backgroundColor: [baseColor, transparent],
              borderColor: 'rgba(255,255,255,0.2)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top' as const,
                labels: { color: 'white' }
              },
              title: {
                display: true,
                text: 'Sphere Dimensions',
                color: 'white'
              }
            }
          }
        };
      
      default:
        return {
          type: 'bar',
          data: {
            labels: ['Unknown Shape'],
            datasets: [{
              label: 'Error',
              data: [0],
              backgroundColor: 'red',
              borderWidth: 1
            }]
          },
          options: {}
        };
    }
  };

  const config = getChartConfig();

  return (
    <div className="h-80 w-full">
      {config.type === 'bar' && <Bar data={config.data as ChartData<'bar'>} options={config.options as ChartOptions<'bar'>} />}
      {config.type === 'pie' && <Pie data={config.data as ChartData<'pie'>} options={config.options as ChartOptions<'pie'>} />}
      {config.type === 'polarArea' && <PolarArea data={config.data as ChartData<'polarArea'>} options={config.options as ChartOptions<'polarArea'>} />}
    </div>
  );
};

export default GeometryVisualizer; 