'use client';

import React, { useState, useEffect } from 'react';
import { Question, examQuestions, categories } from './exam-data';

export default function ExamInterface() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(examQuestions.length).fill(-1));
  const [examMode, setExamMode] = useState<'intro' | 'exam' | 'results' | 'review'>('intro');
  const [timeRemaining, setTimeRemaining] = useState(120 * 60); // 2 hours in seconds
  const [categoryStats, setCategoryStats] = useState<{[key: string]: {correct: number, total: number}}>({});

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle timer during exam
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (examMode === 'exam' && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setExamMode('results');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [examMode, timeRemaining]);

  // Calculate score and category stats when entering results mode
  useEffect(() => {
    if (examMode === 'results') {
      const stats: {[key: string]: {correct: number, total: number}} = {};
      
      // Initialize stats for each category
      categories.forEach(cat => {
        stats[cat.name] = { correct: 0, total: 0 };
      });
      
      // Calculate stats
      examQuestions.forEach((question, index) => {
        const category = question.category;
        if (!stats[category]) {
          stats[category] = { correct: 0, total: 0 };
        }
        
        stats[category].total += 1;
        if (selectedAnswers[index] === question.correctAnswer) {
          stats[category].correct += 1;
        }
      });
      
      setCategoryStats(stats);
    }
  }, [examMode]);

  // Handle selecting an answer
  const handleAnswerSelect = (answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  // Navigate to next question
  const goToNextQuestion = () => {
    if (currentQuestionIndex < examQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setExamMode('results');
    }
  };

  // Navigate to previous question
  const goToPrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Jump to a specific question
  const jumpToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  // Start exam from intro screen
  const startExam = () => {
    setExamMode('exam');
    setCurrentQuestionIndex(0);
    setSelectedAnswers(Array(examQuestions.length).fill(-1));
    setTimeRemaining(120 * 60); // 2 hours
  };

  // End exam and go to results
  const endExam = () => {
    setExamMode('results');
  };

  // Switch to review mode from results
  const reviewExam = () => {
    setExamMode('review');
    setCurrentQuestionIndex(0);
  };

  // Calculate total score
  const calculateScore = () => {
    let correctCount = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === examQuestions[index].correctAnswer) {
        correctCount++;
      }
    });
    return {
      correct: correctCount,
      total: examQuestions.length,
      percentage: Math.round((correctCount / examQuestions.length) * 100)
    };
  };

  // Current question
  const currentQuestion = examQuestions[currentQuestionIndex];

  // Return to intro
  const resetExam = () => {
    setExamMode('intro');
    setSelectedAnswers(Array(examQuestions.length).fill(-1));
    setCurrentQuestionIndex(0);
  };

  // Render different screens based on exam mode
  const renderContent = () => {
    switch (examMode) {
      case 'intro':
        return (
          <div className="bg-black p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Red Seal Practice Exam (Tower)</h2>
            <p className="text-gray-400 mb-6">
              This practice exam is designed to help you prepare for the Red Seal Tower Crane Operator certification exam. 
              It contains 20 multiple-choice questions that simulate the actual exam content and format.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Exam Structure</h3>
              <p className="text-gray-400 mb-4">The actual Red Seal exam consists of 120 questions divided into these categories:</p>
              
              <div className="grid gap-2 mb-6">
                {categories.map((cat) => (
                  <div key={cat.name} className="bg-gray-900 p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-white">{cat.name}</span>
                      <span className="text-highlight">{cat.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-highlight h-2 rounded-full" 
                        style={{ width: `${cat.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-400">
                This practice exam includes {examQuestions.length} questions with similar distribution across categories. 
                You will have 2 hours to complete the exam, which simulates the time pressure of the actual test.
              </p>
            </div>
            
            <div className="bg-gray-900 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-white mb-2">Exam Instructions</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Read each question carefully before selecting your answer</li>
                <li>You can navigate between questions using the Previous and Next buttons</li>
                <li>The question navigator shows which questions you've answered</li>
                <li>You can review your answers before submitting</li>
                <li>Your results will show your score and areas for improvement</li>
              </ul>
            </div>
            
            <button
              onClick={startExam}
              className="w-full py-3 bg-highlight text-white font-bold rounded-lg hover:bg-green-600 transition-colors"
            >
              Start Practice Exam
            </button>
          </div>
        );
        
      case 'exam':
      case 'review':
        return (
          <div className="bg-black rounded-lg overflow-hidden">
            {/* Header with timer and question counter */}
            <div className="bg-gray-900 p-4 flex justify-between items-center">
              <div className="text-white">
                Question {currentQuestionIndex + 1} of {examQuestions.length}
              </div>
              {examMode === 'exam' && (
                <div className={`text-white font-mono ${timeRemaining < 300 ? 'text-red-500' : ''}`}>
                  Time Remaining: {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
                </div>
              )}
              {examMode === 'review' && (
                <div className="text-highlight font-semibold">Review Mode</div>
              )}
            </div>
            
            {/* Question content */}
            <div className="p-6">
              <div className="mb-2">
                <span className="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded mb-2">
                  {currentQuestion.category}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {currentQuestion.question}
                </h3>
              </div>
              
              {/* Answer options */}
              <div className="space-y-3 mt-6">
                {currentQuestion.options.map((option, index) => (
                  <div 
                    key={index}
                    onClick={() => examMode === 'exam' && handleAnswerSelect(index)}
                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                      examMode === 'review'
                        ? index === currentQuestion.correctAnswer
                          ? 'bg-green-900/30 border-green-700'
                          : selectedAnswers[currentQuestionIndex] === index
                            ? 'bg-red-900/30 border-red-700'
                            : 'border-gray-700 bg-gray-900'
                        : selectedAnswers[currentQuestionIndex] === index
                          ? 'bg-highlight/20 border-highlight'
                          : 'border-gray-700 bg-gray-900 hover:border-gray-500'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center mr-3 ${
                        selectedAnswers[currentQuestionIndex] === index
                          ? 'border-highlight bg-highlight/20'
                          : 'border-gray-500'
                      }`}>
                        {['A', 'B', 'C', 'D'][index]}
                      </div>
                      <div className="text-white">{option}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Explanation in review mode */}
              {examMode === 'review' && (
                <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-gray-700">
                  <h4 className="font-bold text-highlight mb-2">Explanation:</h4>
                  <p className="text-gray-300">{currentQuestion.explanation}</p>
                </div>
              )}
              
              {/* Navigation buttons */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={goToPrevQuestion}
                  disabled={currentQuestionIndex === 0}
                  className={`px-6 py-2 rounded-lg font-medium ${
                    currentQuestionIndex === 0
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  Previous
                </button>
                
                {currentQuestionIndex < examQuestions.length - 1 ? (
                  <button
                    onClick={goToNextQuestion}
                    className="px-6 py-2 bg-highlight text-white rounded-lg font-medium hover:bg-green-600"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={endExam}
                    className="px-6 py-2 bg-highlight text-white rounded-lg font-medium hover:bg-green-600"
                  >
                    Finish Exam
                  </button>
                )}
              </div>
            </div>
            
            {/* Question navigator */}
            <div className="bg-gray-900 p-4 border-t border-gray-800">
              <div className="text-sm text-gray-400 mb-2">Question Navigator:</div>
              <div className="grid grid-cols-10 gap-2">
                {examQuestions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => jumpToQuestion(index)}
                    className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium ${
                      currentQuestionIndex === index
                        ? 'bg-highlight text-white'
                        : selectedAnswers[index] !== -1
                          ? 'bg-gray-700 text-white'
                          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 'results':
        const score = calculateScore();
        const passed = score.percentage >= 70; // Passing is typically 70%
        
        return (
          <div className="bg-black rounded-lg overflow-hidden">
            <div className={`p-6 ${passed ? 'bg-green-900/30' : 'bg-red-900/30'}`}>
              <h2 className="text-2xl font-bold text-white mb-2">
                Exam Results: {passed ? 'PASSED' : 'NOT PASSED'}
              </h2>
              <p className="text-gray-300">
                You scored {score.correct} out of {score.total} ({score.percentage}%)
              </p>
            </div>
            
            {/* Score breakdown by category */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">Performance by Category</h3>
              
              {Object.entries(categoryStats).map(([category, stats]) => {
                const percentage = Math.round((stats.correct / stats.total) * 100);
                return (
                  <div key={category} className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-medium">{category}</span>
                      <span className={`${
                        percentage >= 70 ? 'text-green-500' : 'text-red-400'
                      }`}>
                        {stats.correct}/{stats.total} ({percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${percentage >= 70 ? 'bg-green-500' : 'bg-red-500'}`} 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-3">Next Steps</h3>
                <p className="text-gray-400 mb-4">
                  {passed ? (
                    <>
                      Congratulations on passing the practice exam! While you've demonstrated good knowledge, 
                      review the questions you missed to further strengthen your understanding.
                    </>
                  ) : (
                    <>
                      Don't be discouraged. Review the areas where you scored below 70% and study those topics more thoroughly.
                      Focus particularly on understanding the explanations for the questions you missed.
                    </>
                  )}
                </p>
                
                <div className="space-y-3 mt-6">
                  <button
                    onClick={reviewExam}
                    className="w-full py-3 bg-highlight text-white font-bold rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Review Answers
                  </button>
                  <button
                    onClick={resetExam}
                    className="w-full py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Return to Start
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {renderContent()}
    </div>
  );
} 