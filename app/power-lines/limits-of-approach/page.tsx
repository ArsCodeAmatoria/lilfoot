import React from 'react';
import { Timer, Zap } from 'lucide-react';

export const metadata = {
  title: 'Limits of Approach | Power Lines | lilfoot',
  description:
    'Understanding safe working distances from power lines for crane operators and construction personnel.',
};

export default function LimitsOfApproachPage() {
  return (
    <div className="text-white">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-white">
          Limits of Approach
        </h1>
        <p className="max-w-3xl text-gray-400">
          Understanding safe working distances from power lines is critical for
          crane operators and construction personnel. This guide will provide
          detailed information on regulatory requirements and best practices
          when working near overhead and underground electrical hazards.
        </p>
      </div>

      <div className="mb-8 flex flex-col items-center justify-center rounded-lg bg-gray-900 p-8">
        <div className="mb-6 rounded-full bg-gray-950 p-6">
          <Zap size={80} className="text-yellow-500" />
        </div>
        <h2 className="mb-4 text-center text-2xl font-bold">Coming Soon</h2>
        <p className="max-w-xl text-center text-gray-400">
          We're currently developing comprehensive content for this section. Our
          team is working with industry experts to ensure we provide accurate
          and practical information on power line safety.
        </p>
        <div className="mt-6 flex items-center text-gray-500">
          <Timer size={20} className="mr-2" />
          <span>Estimated completion: Q3 2025</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-gray-900 p-6">
          <h3 className="mb-4 text-xl font-bold">What to Expect</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Comprehensive charts for minimum approach distances
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Province-specific regulatory requirements
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Interactive visualization tools
            </li>
            <li className="flex">
              <span className="mr-2 font-bold text-highlight">•</span>
              Emergency procedures for power line contacts
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-gray-900 p-6">
          <h3 className="mb-4 text-xl font-bold">Why This Matters</h3>
          <p className="text-gray-400">
            Power line contacts remain one of the leading causes of serious
            injuries and fatalities in the crane industry. Understanding proper
            limits of approach and implementing appropriate safety measures can
            prevent these incidents and save lives. This resource will help
            crane operators and site planners make informed decisions when
            working near electrical infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
}
