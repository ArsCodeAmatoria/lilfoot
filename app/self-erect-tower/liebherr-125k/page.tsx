import Image from 'next/image';
import { Metadata } from 'next';
import { Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Liebherr 125k Self-Erect Tower Crane | Coming Soon',
  description:
    'Specifications and load charts for the Liebherr 125k self-erect tower crane - coming soon.',
};

export default function Liebherr125kPage() {
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
            Liebherr 125k Self-Erect Tower Crane
          </h1>

          <div className="mx-auto mb-8 max-w-3xl rounded-lg bg-black bg-opacity-50 p-6">
            <div className="mb-4 inline-block rounded-md bg-highlight px-4 py-2 font-bold text-black">
              COMING SOON
            </div>

            <p className="mb-6 text-xl text-gray-200">
              We're currently building comprehensive specifications, load
              charts, and interactive tools for the Liebherr 125k self-erect
              tower crane.
            </p>

            <div className="flex flex-col items-center justify-center gap-6 text-gray-300 md:flex-row">
              <div className="flex items-center">
                <Calendar className="mr-2 text-highlight" size={20} />
                <span>Expected launch: Q1 2024</span>
              </div>

              <div className="flex items-center">
                <Clock className="mr-2 text-highlight" size={20} />
                <span>In planning phase</span>
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
                  <span>Comprehensive technical specifications</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-highlight">•</span>
                  <span>Load charts for standard and LM configurations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-highlight">•</span>
                  <span>
                    Detailed capacity visualization at various radiuses
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-highlight">•</span>
                  <span>Base and foundation load calculations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-highlight">•</span>
                  <span>Assembly and setup information</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-gray-900 p-5">
              <h3 className="mb-3 text-xl font-medium text-highlight">
                About the Liebherr 125k
              </h3>
              <p className="text-gray-300">
                The Liebherr 125k is a high-capacity self-erecting tower crane
                designed for larger construction projects. With its impressive
                lifting capacity and reach, the 125k delivers exceptional
                performance for commercial and large residential developments.
                The crane features advanced safety systems and flexible
                configuration options to meet diverse project requirements.
                Check back soon for detailed specifications and interactive
                tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
