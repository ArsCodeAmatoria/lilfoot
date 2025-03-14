import Image from 'next/image';
import { Metadata } from 'next';
import { Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Liebherr 53k Self-Erect Tower Crane | Coming Soon',
  description:
    'Specifications and load charts for the Liebherr 53k self-erect tower crane - coming soon.',
};

export default function Liebherr53kPage() {
  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-lg bg-gray-950 shadow-xl">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            {/* Placeholder gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center p-8 text-center md:p-12">
          <h1 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Liebherr 53k Self-Erect Tower Crane
          </h1>

          <div className="mx-auto mb-8 max-w-3xl rounded-lg bg-black bg-opacity-50 p-6">
            <div className="mb-4 inline-block rounded-md bg-highlight px-4 py-2 font-bold text-black">
              COMING SOON
            </div>

            <p className="mb-6 text-xl text-gray-200">
              We're currently developing comprehensive specifications, load
              charts, and interactive tools for the Liebherr 53k self-erect
              tower crane.
            </p>

            <div className="flex flex-col items-center justify-center gap-6 text-gray-300 md:flex-row">
              <div className="flex items-center">
                <Calendar className="mr-2 text-highlight" size={20} />
                <span>Expected launch: Q4 2023</span>
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
                  <span>Technical specifications and dimensions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-highlight">•</span>
                  <span>
                    Interactive load charts for different jib configurations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-highlight">•</span>
                  <span>Operational radius visualization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-highlight">•</span>
                  <span>Site planning tools and foundation requirements</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-gray-900 p-5">
              <h3 className="mb-3 text-xl font-medium text-highlight">
                About the Liebherr 53k
              </h3>
              <p className="text-gray-300">
                The Liebherr 53k is a compact self-erecting tower crane designed
                for smaller construction sites and residential projects. With
                its quick setup time and ease of transport, the 53k offers
                reliable performance in tight spaces. Stay tuned for detailed
                specifications, load charts, and interactive tools to help with
                your planning and operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
