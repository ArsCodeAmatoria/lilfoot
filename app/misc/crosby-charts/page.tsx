import Image from 'next/image';
import { Metadata } from 'next';
import { Calendar, Clock, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Crosby Rigging Charts | Coming Soon',
  description:
    'Coming soon: Rigging specifications and capacity charts for Crosby shackles, hooks, and other hardware.',
};

export default function CrosbyChartsPage() {
  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-lg bg-gray-950 shadow-xl">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            {/* Placeholder gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-950"></div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center p-8 text-center md:p-12">
          <h1 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Crosby Rigging Charts
          </h1>

          <div className="mx-auto mb-8 max-w-3xl rounded-lg bg-black bg-opacity-50 p-6">
            <div className="mb-4 inline-block rounded-md bg-highlight px-4 py-2 font-bold text-black">
              COMING SOON
            </div>

            <p className="mb-6 text-xl text-gray-200">
              We're developing comprehensive rigging equipment specifications
              and capacity charts for Crosby rigging hardware, including
              shackles, hooks, wire rope clips, and more.
            </p>

            <div className="flex flex-col items-center justify-center gap-6 text-gray-300 md:flex-row">
              <div className="flex items-center">
                <Calendar className="mr-2 text-highlight" size={20} />
                <span>Expected launch: Q2 2024</span>
              </div>

              <div className="flex items-center">
                <Clock className="mr-2 text-highlight" size={20} />
                <span>In development</span>
              </div>
            </div>
          </div>

          <div className="grid max-w-4xl grid-cols-1 gap-6 text-left md:grid-cols-2">
            <div className="rounded-lg bg-gray-900 p-5">
              <h3 className="mb-3 text-xl font-medium text-highlight">
                Upcoming Features
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-highlight">•</span>
                  <span>
                    Comprehensive shackle load capacities and specifications
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-highlight">•</span>
                  <span>Wire rope sling capacity calculator</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-highlight">•</span>
                  <span>Hook inspection guides and capacity tables</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-highlight">•</span>
                  <span>Sling angle deration calculator</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-highlight">•</span>
                  <span>Hardware inspection checklists</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-gray-900 p-5">
              <h3 className="mb-3 flex items-center text-xl font-medium text-highlight">
                <Shield className="mr-2 text-highlight" size={18} />
                <span>Safety and Reliability</span>
              </h3>
              <p className="mb-4 text-gray-300">
                Crosby is a global leader in manufacturing high-quality rigging
                equipment for lifting and material handling applications. Our
                upcoming charts will provide accurate working load limits and
                specifications to help ensure safe lifting operations.
              </p>

              <p className="text-gray-300">
                All charts will be based on manufacturer specifications and
                relevant industry standards, including ASME B30.26 for rigging
                hardware. Check back soon for this comprehensive resource to aid
                in your rigging planning and equipment selection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
