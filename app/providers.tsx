'use client';

import React from 'react';
import { ExamProvider } from './contexts/ExamContext';
import FloatingQuestion from './components/FloatingQuestion';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ExamProvider>
      {children}
      <FloatingQuestion />
    </ExamProvider>
  );
} 