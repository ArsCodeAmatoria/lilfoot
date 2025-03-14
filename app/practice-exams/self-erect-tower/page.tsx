import React from 'react';
import { Timer, Construction } from 'lucide-react';

export const metadata = {
  title:
    'Self Erect Tower Crane Practice Exam | Crane Operator Certification | lilfoot',
  description:
    'Practice exam for operators specializing in self-erecting tower cranes with detailed questions and answers.',
};

export default function SelfErectTowerExamPage() {
  return (
    <div className="text-white">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-white">
          Self-Erecting Tower Crane Operator Practice Exam
        </h1>
        <p className="max-w-3xl text-gray-400">
          A specialized practice exam designed for operators of self-erecting
          tower cranes. Test your knowledge on setup procedures, operational
          techniques, safety protocols, and technical specifications for these
          increasingly popular crane types used in residential and commercial
          construction.
        </p>
      </div>

      <div className="mb-8 flex flex-col items-center justify-center rounded-lg bg-gray-900 p-8">
        <div className="mb-6 rounded-full bg-gray-950 p-6">
          <Construction size={80} className="text-highlight" />
        </div>
        <h2 className="mb-4 text-center text-2xl font-bold">Coming Soon</h2>
        <p className="max-w-xl text-center text-gray-400">
          We're currently developing this specialized practice exam for
          self-erecting tower crane operators. Our team is working to ensure
          accurate, relevant, and challenging questions that reflect real-world
          scenarios.
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
              Multiple-choice questions on self-erection mechanics and setup
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Load calculation scenarios specific to self-erecting tower cranes
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Site preparation and foundation requirements
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
              Coverage of major manufacturers including Liebherr, Potain, and
              Terex
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Questions on remote operation and control systems
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Weather considerations and operational limitations
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Transport, setup, and dismantling procedures
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
