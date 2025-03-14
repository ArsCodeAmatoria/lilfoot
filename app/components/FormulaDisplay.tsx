'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FormulaDisplayProps {
  title: string;
  formulas: Array<{
    name: string;
    formula: string;
    variables: Record<string, string>;
  }>;
  children?: React.ReactNode;
}

export default function FormulaDisplay({
  title,
  formulas,
  children,
}: FormulaDisplayProps) {
  return (
    <div className="mb-6 rounded-lg bg-gray-900 p-6 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold text-white">{title}</h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          {formulas.map((item, idx) => (
            <div key={idx} className="rounded-lg bg-gray-800 p-4">
              <h3 className="mb-2 text-lg font-medium text-gray-200">
                {item.name}
              </h3>
              <div className="mb-3 flex items-center gap-3">
                <span className="font-mono text-xl text-white">
                  {item.formula}
                </span>
                <ArrowRight className="text-gray-400" size={20} />
              </div>
              <div className="text-sm text-gray-300">
                <h4 className="mb-1 text-gray-400">Where:</h4>
                <ul className="space-y-1">
                  {Object.entries(item.variables).map(([key, value]) => (
                    <li key={key} className="flex">
                      <span className="w-10 font-mono">{key} =</span> {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center rounded-lg bg-black p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
