import Image from 'next/image';
import { Metadata } from 'next';
import { Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Liebherr LTM 1200 Mobile Crane | Coming Soon',
  description:
    'Specifications and load charts for the Liebherr LTM 1200 mobile crane - coming soon.',
};

export default function LiebherrLtm1200Page() {
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
            Liebherr LTM 1200 Mobile Crane
          </h1>

          <div className="mx-auto mb-8 max-w-3xl rounded-lg bg-black bg-opacity-50 p-6">
            <div className="mb-4 inline-block rounded-md bg-highlight px-4 py-2 font-bold text-black">
              COMING SOON
            </div>

            <p className="mb-6 text-xl text-gray-200">
              We're currently preparing comprehensive specifications, load
              charts, and interactive tools for the Liebherr LTM 1200 mobile
              crane.
            </p>

            <div className="flex flex-col items-center justify-center gap-6 text-gray-300 md:flex-row">
              <div className="flex items-center">
                <Calendar className="mr-2 text-highlight" size={20} />
                <span>Expected launch: Q3 2023</span>
              </div>

              <div className="flex items-center">
                <Clock className="mr-2 text-highlight" size={20} />
                <span>Development in progress</span>
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
                  <span>Detailed technical specifications</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-highlight">•</span>
                  <span>Interactive load charts and diagrams</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-highlight">•</span>
                  <span>Operational range visualization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-highlight">•</span>
                  <span>Ground bearing pressure calculator</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-gray-900 p-5">
              <h3 className="mb-3 text-xl font-medium text-highlight">
                About the LTM 1200
              </h3>
              <p className="text-gray-300">
                The Liebherr LTM 1200 is a versatile all-terrain mobile crane
                with a 200-tonne lifting capacity. Known for its excellent
                mobility and lifting capabilities, this crane provides
                exceptional performance on construction sites. Check back soon
                for full specifications and interactive tools to assist with
                planning and operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
