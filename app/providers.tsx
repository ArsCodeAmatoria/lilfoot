'use client';

import React, { useState, useEffect } from 'react';
import { ExamProvider } from './contexts/ExamContext';
import { NotePadProvider } from './contexts/NotePadContext';
import FloatingQuestion from './components/FloatingQuestion';
import Calculator from './components/Calculator';
import NotePad from './components/NotePad';

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ExamProvider>
      <NotePadProvider>
        {children}
        <FloatingQuestion />
        {mounted && (
          <>
            <Calculator />
            <NotePad />
          </>
        )}
      </NotePadProvider>
    </ExamProvider>
  );
} 