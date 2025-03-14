import Image from 'next/image';
import { Metadata } from 'next';
import { Calendar, Clock, CheckSquare, Book } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Basic Rigging Practice Exam | Coming Soon',
  description:
    'Coming soon: Basic rigging practice exam covering fundamental lifting operations and equipment safety.',
};

export default function RiggingBasicPage() {
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
            Basic Rigging Practice Exam
          </h1>

          <div className="mx-auto mb-8 max-w-3xl rounded-lg bg-black bg-opacity-50 p-6">
            <div className="mb-4 inline-block rounded-md bg-highlight px-4 py-2 font-bold text-black">
              COMING SOON
            </div>

            <p className="mb-6 text-xl text-gray-200">
              We're developing a comprehensive basic rigging practice exam to
              help you master fundamental lifting operations and understand
              essential safety procedures.
            </p>

            <div className="flex flex-col items-center justify-center gap-6 text-gray-300 md:flex-row">
              <div className="flex items-center">
                <Calendar className="mr-2 text-highlight" size={20} />
                <span>Expected launch: Q3 2024</span>
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
                What You'll Learn
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <CheckSquare className="mr-2 text-highlight" size={16} />
                  <span>
                    Standard rigging equipment identification and applications
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="mr-2 text-highlight" size={16} />
                  <span>Basic load weight calculations</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="mr-2 text-highlight" size={16} />
                  <span>Safe working load limits and safety factors</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="mr-2 text-highlight" size={16} />
                  <span>Proper hand signals for crane operations</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="mr-2 text-highlight" size={16} />
                  <span>
                    Essential knots and hitches for rigging applications
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-gray-900 p-5">
              <h3 className="mb-3 flex items-center text-xl font-medium text-highlight">
                <Book className="mr-2 text-highlight" size={18} />
                <span>Exam Format</span>
              </h3>
              <p className="mb-4 text-gray-300">
                The Basic Rigging Practice Exam will include multiple-choice
                questions, equipment identification exercises, and interactive
                case study scenarios to prepare you for real-world rigging
                tasks.
              </p>

              <p className="text-gray-300">
                Perfect for entry-level riggers, apprentices, or anyone looking
                to refresh their fundamental rigging knowledge. The exam will
                align with industry standards and best practices for safe
                lifting operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
