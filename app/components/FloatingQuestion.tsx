'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useExam } from '../contexts/ExamContext';
import { MinimizeIcon, MaximizeIcon, XIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function FloatingQuestion() {
  const { isExamActive, currentQuestion, minimized, questionIndex, toggleMinimize, returnToExam, endExam } = useExam();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // Only render on client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle exam closing - makes sure we navigate to home if needed
  const handleEndExam = () => {
    endExam();
    // Navigate to home if the current page is the exam page
    if (typeof window !== 'undefined' && window.location.pathname === '/red-seal-exam') {
      router.push('/');
    }
  };

  if (!mounted) return null;
  if (!isExamActive || !currentQuestion) return null;

  // Different UI states based on minimized state
  return (
    <AnimatePresence>
      {minimized ? (
        // Minimized bubble view
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-highlight shadow-lg hover:bg-green-600"
          onClick={toggleMinimize}
        >
          <span className="text-xl font-bold text-white">Q</span>
        </motion.div>
      ) : (
        // Expanded view
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 right-6 z-50 w-80 rounded-lg bg-black shadow-xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-lg bg-gray-900 p-3">
            <div className="text-sm font-medium text-white">Question {questionIndex + 1}</div>
            <div className="flex space-x-2">
              <button 
                onClick={toggleMinimize}
                className="text-gray-400 hover:text-white"
                aria-label="Minimize"
              >
                <MinimizeIcon size={16} />
              </button>
              <button 
                onClick={returnToExam}
                className="text-gray-400 hover:text-white"
                aria-label="Return to exam"
              >
                <MaximizeIcon size={16} />
              </button>
              <button 
                onClick={handleEndExam}
                className="text-gray-400 hover:text-white"
                aria-label="Close exam"
              >
                <XIcon size={16} />
              </button>
            </div>
          </div>
          
          {/* Question content */}
          <div className="p-4">
            <span className="mb-2 inline-block rounded bg-gray-800 px-2 py-1 text-xs text-gray-300">
              {currentQuestion.category}
            </span>
            <h3 className="mb-4 text-sm font-bold text-white">
              {currentQuestion.question}
            </h3>
            
            {/* Return to exam button */}
            <button
              onClick={returnToExam}
              className="w-full rounded-lg bg-highlight py-2 text-sm font-medium text-white transition-colors hover:bg-green-600"
            >
              Return to Exam
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 