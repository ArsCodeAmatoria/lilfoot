'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { Question } from '../red-seal-exam/exam-data';

interface ExamContextType {
  isExamActive: boolean;
  currentQuestion: Question | null;
  minimized: boolean;
  examPath: string;
  questionIndex: number;
  startExam: (questions: Question[], currentIndex: number) => void;
  endExam: () => void;
  toggleMinimize: () => void;
  returnToExam: () => void;
}

// Default context values
const defaultContextValue: ExamContextType = {
  isExamActive: false,
  currentQuestion: null,
  minimized: false,
  examPath: '/red-seal-exam',
  questionIndex: 0,
  startExam: () => {},
  endExam: () => {},
  toggleMinimize: () => {},
  returnToExam: () => {},
};

const ExamContext = createContext<ExamContextType>(defaultContextValue);

export function ExamProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isExamActive, setIsExamActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [minimized, setMinimized] = useState(false);
  const [examPath, setExamPath] = useState('/red-seal-exam');
  const [questionIndex, setQuestionIndex] = useState(0);
  
  // Use useEffect to ensure this only runs in the browser
  useEffect(() => {
    // Initialize from localStorage if available
    const savedExamState = localStorage.getItem('examState');
    if (savedExamState) {
      try {
        const parsedState = JSON.parse(savedExamState);
        setIsExamActive(parsedState.isExamActive || false);
        setCurrentQuestion(parsedState.currentQuestion || null);
        setMinimized(parsedState.minimized || false);
        setExamPath(parsedState.examPath || '/red-seal-exam');
        setQuestionIndex(parsedState.questionIndex || 0);
      } catch (e) {
        // If parsing fails, reset state
        localStorage.removeItem('examState');
      }
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('examState', JSON.stringify({
        isExamActive,
        currentQuestion,
        minimized,
        examPath,
        questionIndex
      }));
    }
  }, [isExamActive, currentQuestion, minimized, examPath, questionIndex]);

  // Function to start the exam and set the current question
  const startExam = (questions: Question[], currentIndex: number) => {
    if (questions.length > 0 && questions[currentIndex]) {
      setCurrentQuestion(questions[currentIndex]);
      setIsExamActive(true);
      setMinimized(false);
      setQuestionIndex(currentIndex);
      // Store the path of the exam page for returning to it
      setExamPath('/red-seal-exam');
    }
  };

  // Function to end the exam
  const endExam = () => {
    setIsExamActive(false);
    setCurrentQuestion(null);
    setMinimized(false);
    
    // Clear the localStorage when ending the exam
    if (typeof window !== 'undefined') {
      localStorage.removeItem('examState');
    }
  };

  // Function to toggle the minimized state of the floating question
  const toggleMinimize = () => {
    setMinimized(!minimized);
  };

  // Function to navigate back to the exam page
  const returnToExam = () => {
    if (isExamActive) {
      // Use router.push for client-side navigation instead of window.location
      if (typeof window !== 'undefined') {
        // Store the current question index in session storage for retrieval by the exam interface
        sessionStorage.setItem('currentQuestionIndex', questionIndex.toString());
        router.push(examPath);
      }
    }
  };

  return (
    <ExamContext.Provider
      value={{
        isExamActive,
        currentQuestion,
        minimized,
        examPath,
        questionIndex,
        startExam,
        endExam,
        toggleMinimize,
        returnToExam,
      }}
    >
      {children}
    </ExamContext.Provider>
  );
}

export function useExam() {
  const context = useContext(ExamContext);
  return context;
} 