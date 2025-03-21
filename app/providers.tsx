'use client';

import React from 'react';
import { ExamProvider } from './contexts/ExamContext';
import { NotePadProvider } from './contexts/NotePadContext';
import FloatingQuestion from './components/FloatingQuestion';
import Calculator from './components/Calculator';
import NotePad from './components/NotePad';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ExamProvider>
      <NotePadProvider>
        {children}
        <FloatingQuestion />
        <Calculator />
        <NotePad />
      </NotePadProvider>
    </ExamProvider>
  );
} 