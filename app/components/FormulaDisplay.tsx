'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FormulaDisplayProps {
  title: string;
  formulas: {
    name: string;
    formula: string;
    variables: { [key: string]: string };
  }[];
  children?: React.ReactNode;
}

export default function FormulaDisplay({ title, formulas, children }: FormulaDisplayProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 shadow-lg mb-6">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          {formulas.map((item, idx) => (
            <div key={idx} className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-200 mb-2">{item.name}</h3>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl font-mono text-white">{item.formula}</span>
                <ArrowRight className="text-gray-400" size={20} />
              </div>
              <div className="text-sm text-gray-300">
                <h4 className="text-gray-400 mb-1">Where:</h4>
                <ul className="space-y-1">
                  {Object.entries(item.variables).map(([key, value]) => (
                    <li key={key} className="flex">
                      <span className="font-mono w-10">{key} =</span> {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-black rounded-lg p-4 flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
} 