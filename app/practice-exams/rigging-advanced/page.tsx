import Image from 'next/image';
import { Metadata } from 'next';
import { Calendar, Clock, CheckSquare, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Advanced Rigging Practice Exam | Coming Soon',
  description:
    'Coming soon: Advanced rigging practice exam for complex lifts, load calculations, and critical safety procedures.',
};

export default function RiggingAdvancedPage() {
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
            Advanced Rigging Practice Exam
          </h1>

          <div className="mx-auto mb-8 max-w-3xl rounded-lg bg-black bg-opacity-50 p-6">
            <div className="mb-4 inline-block rounded-md bg-highlight px-4 py-2 font-bold text-black">
              COMING SOON
            </div>

            <p className="mb-6 text-xl text-gray-200">
              We're developing a challenging advanced rigging practice exam for
              experienced professionals seeking to master complex lifting
              operations and specialized rigging techniques.
            </p>

            <div className="flex flex-col items-center justify-center gap-6 text-gray-300 md:flex-row">
              <div className="flex items-center">
                <Calendar className="mr-2 text-highlight" size={20} />
                <span>Expected launch: Q4 2024</span>
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
                Advanced Topics Covered
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <CheckSquare className="mr-2 text-highlight" size={16} />
                  <span>
                    Complex multi-crane lift planning and coordination
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="mr-2 text-highlight" size={16} />
                  <span>Advanced center of gravity calculations</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="mr-2 text-highlight" size={16} />
                  <span>Critical lift management and documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="mr-2 text-highlight" size={16} />
                  <span>Specialized rigging hardware applications</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="mr-2 text-highlight" size={16} />
                  <span>Engineered lift solutions for non-standard loads</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-gray-900 p-5">
              <h3 className="mb-3 flex items-center text-xl font-medium text-highlight">
                <Award className="mr-2 text-highlight" size={18} />
                <span>Professional Development</span>
              </h3>
              <p className="mb-4 text-gray-300">
                This advanced exam is designed for experienced riggers, lift
                directors, and rigging supervisors looking to validate their
                expertise and knowledge of complex rigging operations.
              </p>

              <p className="text-gray-300">
                The exam features in-depth case studies, complex load
                calculation problems, and critical thinking scenarios that
                reflect real-world challenges faced in specialized lifting
                environments. Upon completion, you'll receive a detailed
                analysis of your performance and areas for professional growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
