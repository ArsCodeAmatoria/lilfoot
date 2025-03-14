import React from 'react';
import { Timer, Construction } from 'lucide-react';

export const metadata = {
  title: '80t and Under Practice Exam | Crane Operator Certification | lilfoot',
  description:
    'Practice exam for crane operators specializing in 80t and under capacity cranes.',
};

export default function EightyTonAndUnderExamPage() {
  return (
    <div className="text-white">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-white">
          80t and Under Crane Operator Practice Exam
        </h1>
        <p className="max-w-3xl text-gray-400">
          A comprehensive practice exam specifically designed for operators of
          medium capacity cranes up to 80 tons. Test your knowledge of operation
          procedures, safety protocols, and technical specifications relevant to
          this category of equipment.
        </p>
      </div>

      <div className="mb-8 flex flex-col items-center justify-center rounded-lg bg-gray-900 p-8">
        <div className="mb-6 rounded-full bg-gray-950 p-6">
          <Construction size={80} className="text-highlight" />
        </div>
        <h2 className="mb-4 text-center text-2xl font-bold">Coming Soon</h2>
        <p className="max-w-xl text-center text-gray-400">
          We're currently developing this specialized practice exam for 80t and
          under crane operators. Our team is working to ensure accurate,
          relevant, and challenging questions that reflect real-world scenarios.
        </p>
        <div className="mt-6 flex items-center text-gray-500">
          <Timer size={20} className="mr-2" />
          <span>Estimated completion: Q2 2025</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-gray-900 p-6">
          <h3 className="mb-4 text-xl font-bold">What to Expect</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Multiple-choice questions covering crane theory and operation
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Load calculation scenarios specific to 80t and under cranes
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Safety procedures and hazard identification
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Detailed explanations for each answer
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-gray-900 p-6">
          <h3 className="mb-4 text-xl font-bold">Key Features</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Focus on medium-sized crane models and their specific requirements
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Industry-specific scenarios for commercial and infrastructure
              projects
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Regulatory compliance questions for medium capacity cranes
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Score tracking and performance analysis
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
