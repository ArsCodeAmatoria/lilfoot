import React from 'react';
import { InfoIcon, Calendar, BookOpen, GraduationCap, ClipboardCheck, Award } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NCCCO Tower Crane Operator Certification | NCCCO Exams | lilfoot',
  description: 'Preparation resources for the NCCCO Tower Crane Operator certification exam.',
};

export default function CCOTowerCraneOperatorPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-4">NCCCO Tower Crane Operator Certification</h1>
        <p className="text-gray-400 mb-6">
          The NCCCO Tower Crane Operator certification is a nationally recognized credential that 
          verifies crane operators have the knowledge and skills necessary to safely operate tower cranes. 
          This certification meets OSHA requirements and industry standards for tower crane operation.
        </p>
      </div>

      {/* Coming Soon Notice */}
      <div className="p-6 bg-black rounded-lg shadow-lg border border-highlight">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-highlight/20 rounded-full">
            <InfoIcon className="h-8 w-8 text-highlight" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Coming Soon</h2>
            <p className="text-gray-400">
              Comprehensive study materials, practice exams, and preparation resources for the NCCCO Tower Crane 
              Operator certification are currently being developed. These resources will help you successfully 
              prepare for both the written and practical examinations.
            </p>
            <div className="mt-4 flex items-center gap-2 text-gray-500">
              <Calendar className="h-5 w-5" />
              <span>Expected completion: Q2 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Exam Overview Section */}
      <div className="bg-black p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Exam Overview</h2>
        <p className="text-gray-400 mb-6">
          The NCCCO Tower Crane Operator certification consists of both written and practical examinations 
          that assess your knowledge of safe crane operations, technical understanding, and hands-on skills.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-highlight">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-highlight" />
              Written Examination
            </h3>
            <p className="text-gray-400">
              Tests your knowledge of tower crane operations, safety protocols, load charts, technical specifications, 
              and regulatory requirements through multiple-choice questions.
            </p>
          </div>
          
          <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-highlight">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <ClipboardCheck className="h-5 w-5 text-highlight" />
              Practical Examination
            </h3>
            <p className="text-gray-400">
              Evaluates your ability to safely operate a tower crane through a series of standardized tasks 
              that demonstrate operational proficiency and skills.
            </p>
          </div>
          
          <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-highlight">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-highlight" />
              Recertification
            </h3>
            <p className="text-gray-400">
              Information on maintaining your certification, including recertification requirements every 
              five years through written examinations.
            </p>
          </div>
          
          <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-highlight">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <Award className="h-5 w-5 text-highlight" />
              Industry Recognition
            </h3>
            <p className="text-gray-400">
              Details on how NCCCO certification meets OSHA requirements and enhances employability 
              and career advancement opportunities in the crane industry.
            </p>
          </div>
        </div>
      </div>

      {/* What to Expect from Our Resources */}
      <div className="bg-black p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">What to Expect from Our Resources</h2>
        <p className="text-gray-400 mb-6">
          Our upcoming NCCCO Tower Crane Operator preparation materials will include:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
            <span className="text-gray-300">
              Comprehensive study guides covering all written exam domains
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
            <span className="text-gray-300">
              Practice questions with detailed explanations for each answer
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
            <span className="text-gray-300">
              Full-length practice exams that simulate the actual testing experience
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
            <span className="text-gray-300">
              Interactive load chart exercises to build proficiency in load calculation
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
            <span className="text-gray-300">
              Tips and strategies for successfully completing the practical examination
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-highlight"></span>
            <span className="text-gray-300">
              Reference materials for technical specifications and safety regulations
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
} 