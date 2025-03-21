'use client';

import React, { useState, useEffect } from 'react';
import { Question, examQuestions, categories } from './exam-data';
import { useExam } from '../contexts/ExamContext';

export default function ExamInterface() {
  // State to track if component is mounted (client-side)
  const [mounted, setMounted] = useState(false);
  
  // State to hold the 10 questions for the current exam instance
  const [currentExamQuestions, setCurrentExamQuestions] = useState<Question[]>(
    [],
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [examMode, setExamMode] = useState<
    'intro' | 'exam' | 'results' | 'review'
  >('intro');
  const [timeRemaining, setTimeRemaining] = useState(60 * 60); // 1 hour in seconds
  const [categoryStats, setCategoryStats] = useState<{
    [key: string]: { correct: number; total: number };
  }>({});

  // Use the global exam context
  const { startExam: startGlobalExam, endExam: endGlobalExam, isExamActive } = useExam();

  // Mark component as mounted
  useEffect(() => {
    setMounted(true);
    
    // Check if returning from another page with an active exam
    if (typeof window !== 'undefined') {
      const savedIndex = sessionStorage.getItem('currentQuestionIndex');
      if (savedIndex && examMode === 'exam') {
        const index = parseInt(savedIndex, 10);
        // Only set if it's a valid index
        if (!isNaN(index) && index >= 0) {
          setCurrentQuestionIndex(index);
          // Clear the stored index to prevent re-using it
          sessionStorage.removeItem('currentQuestionIndex');
        }
      }
    }
  }, [examMode]);

  // Check for active exam when landing on the page
  useEffect(() => {
    if (!mounted) return;
    
    // If landing on the page with an active exam in global state,
    // but our local state is in intro mode, restore the exam from localStorage
    if (isExamActive && examMode === 'intro') {
      if (typeof window !== 'undefined') {
        const savedExamState = localStorage.getItem('examState');
        if (savedExamState) {
          try {
            const parsedState = JSON.parse(savedExamState);
            if (parsedState.currentQuestion && parsedState.questionIndex !== undefined) {
              // Try to restore the exam state
              // We need the full question set, so we'll need to get it from localStorage
              if (parsedState.questions) {
                setCurrentExamQuestions(parsedState.questions);
                setCurrentQuestionIndex(parsedState.questionIndex);
                setExamMode('exam');
                // If there are saved answers, restore them
                if (parsedState.answers) {
                  setSelectedAnswers(parsedState.answers);
                } else {
                  setSelectedAnswers(Array(10).fill(-1));
                }
                // Restore time if available, otherwise set to default
                if (parsedState.timeRemaining) {
                  setTimeRemaining(parsedState.timeRemaining);
                } else {
                  setTimeRemaining(60 * 60);
                }
              }
            }
          } catch (e) {
            // If parsing fails, just continue with a new exam
            console.error("Error restoring exam state:", e);
          }
        }
      }
    }
  }, [mounted, isExamActive, examMode]);

  // Function to randomly select 10 questions from all available
  const selectRandomQuestions = () => {
    // Create a copy of the full question set
    const allQuestions = [...examQuestions];
    const selectedQuestions: Question[] = [];

    // Select 10 random questions
    while (selectedQuestions.length < 10 && allQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * allQuestions.length);
      selectedQuestions.push(allQuestions.splice(randomIndex, 1)[0]);
    }

    return selectedQuestions;
  };

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle timer during exam
  useEffect(() => {
    if (!mounted) return;
    
    let timer: NodeJS.Timeout;

    if (examMode === 'exam' && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setExamMode('results');
            endGlobalExam(); // End the global exam when time runs out
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [examMode, timeRemaining, endGlobalExam, mounted]);

  // Calculate score and category stats when entering results mode
  useEffect(() => {
    if (!mounted) return;
    
    if (examMode === 'results') {
      endGlobalExam(); // End the global exam when showing results
      const stats: { [key: string]: { correct: number; total: number } } = {};

      // Initialize stats for each category
      categories.forEach((cat) => {
        stats[cat.name] = { correct: 0, total: 0 };
      });

      // Calculate stats
      currentExamQuestions.forEach((question, index) => {
        const category = question.category;
        if (!stats[category]) {
          stats[category] = { correct: 0, total: 0 };
        }

        stats[category].total += 1;
        if (isCorrectAnswer(selectedAnswers[index], question.correctAnswer)) {
          stats[category].correct += 1;
        }
      });

      setCategoryStats(stats);
    }
  }, [examMode, currentExamQuestions, endGlobalExam, mounted]);

  // Update the current question in the global context when it changes
  useEffect(() => {
    if (!mounted) return;
    
    if (examMode === 'exam' && currentExamQuestions.length > 0) {
      startGlobalExam(currentExamQuestions, currentQuestionIndex);
    } else if (examMode !== 'exam' && isExamActive) {
      // If we're not in exam mode anymore but the global state still shows as active
      endGlobalExam();
    }
  }, [examMode, currentQuestionIndex, currentExamQuestions, startGlobalExam, endGlobalExam, mounted, isExamActive]);

  // Helper function to check if an answer is correct (supporting multiple correct answers)
  const isCorrectAnswer = (selectedAnswer: number, correctAnswer: number | number[]) => {
    if (Array.isArray(correctAnswer)) {
      // For multiple-choice questions with multiple correct answers
      return correctAnswer.includes(selectedAnswer);
    }
    // For single select questions
    return selectedAnswer === correctAnswer;
  };

  // Handle selecting an answer
  const handleAnswerSelect = (answerIndex: number) => {
    if (examMode !== 'exam') return; // Only allow selection in exam mode
    
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  // Navigate to next question
  const goToNextQuestion = () => {
    if (currentQuestionIndex < currentExamQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setExamMode('results');
      endGlobalExam(); // End the global exam when finishing
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
    const selectedQuestions = selectRandomQuestions();
    setCurrentExamQuestions(selectedQuestions);
    setExamMode('exam');
    setCurrentQuestionIndex(0);
    setSelectedAnswers(Array(10).fill(-1)); // Initialize with 10 empty answers
    setTimeRemaining(60 * 60); // 1 hour
  };

  // End exam and go to results
  const endExam = () => {
    setExamMode('results');
    endGlobalExam(); // End the global exam
  };

  // Switch to review mode from results
  const reviewExam = () => {
    setExamMode('review');
    setCurrentQuestionIndex(0);
    endGlobalExam(); // End the global exam when reviewing
  };

  // Calculate total score
  const calculateScore = () => {
    let correctCount = 0;
    selectedAnswers.forEach((answer, index) => {
      if (isCorrectAnswer(answer, currentExamQuestions[index].correctAnswer)) {
        correctCount++;
      }
    });
    return {
      correct: correctCount,
      total: currentExamQuestions.length,
      percentage: Math.round(
        (correctCount / currentExamQuestions.length) * 100,
      ),
    };
  };

  // Return to intro
  const resetExam = () => {
    setExamMode('intro');
    setSelectedAnswers([]);
    setCurrentQuestionIndex(0);
    setCurrentExamQuestions([]);
    endGlobalExam(); // End the global exam when resetting
  };

  // Current question - safely handle when no questions are loaded yet
  const currentQuestion = currentExamQuestions[currentQuestionIndex] || null;

  // Add a message about the ability to navigate away
  const renderNavigationMessage = () => {
    if (examMode === 'exam') {
      return (
        <div className="mt-4 rounded-lg bg-gray-900 p-3 text-sm text-gray-400">
          <p>
            <span className="font-medium text-highlight">New:</span> You can now navigate to other pages while keeping the exam open. 
            Your current question will appear in a bubble at the bottom right corner.
            Click on it anytime to return to the exam.
          </p>
        </div>
      );
    }
    return null;
  };

  // Render different screens based on exam mode
  const renderContent = () => {
    switch (examMode) {
      case 'intro':
        return (
          <div className="rounded-lg bg-black p-8">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Red Seal Practice Exam (Tower)
            </h2>
            <p className="mb-6 text-gray-400">
              This practice exam is designed to help you prepare for the Red
              Seal Tower Crane Operator certification exam. It contains 10
              multiple-choice questions randomly selected from our question
              bank.
            </p>

            <div className="mb-6">
              <h3 className="mb-2 text-xl font-bold text-white">
                Exam Structure
              </h3>
              <p className="mb-4 text-gray-400">
                The actual Red Seal exam consists of 120 questions divided into
                these categories:
              </p>

              <div className="mb-6 grid gap-2">
                {categories.map((cat) => (
                  <div key={cat.name} className="rounded-lg bg-gray-900 p-3">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="font-medium text-white">{cat.name}</span>
                      <span className="text-highlight">{cat.percentage}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-800">
                      <div
                        className="h-2 rounded-full bg-highlight"
                        style={{ width: `${cat.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-gray-400">
                This practice exam includes 10 randomly selected questions with
                similar distribution across categories. You will have 1 hour to
                complete the exam, which simulates the time pressure of the
                actual test.
              </p>
            </div>

            <div className="mb-6 rounded-lg bg-gray-900 p-4">
              <h3 className="mb-2 text-lg font-bold text-white">
                Exam Instructions
              </h3>
              <ul className="list-inside list-disc space-y-2 text-gray-400">
                <li>
                  Read each question carefully before selecting your answer
                </li>
                <li>
                  You can navigate between questions using the Previous and Next
                  buttons
                </li>
                <li>
                  The question navigator shows which questions you've answered
                </li>
                <li>You can review your answers before submitting</li>
                <li>
                  Your results will show your score and areas for improvement
                </li>
                <li>
                  Each time you start a new exam, you'll get a different set of
                  10 questions
                </li>
                <li className="text-highlight">
                  <strong>New:</strong> You can now navigate to other pages while keeping your exam open
                </li>
              </ul>
            </div>

            <button
              onClick={startExam}
              className="w-full rounded-lg bg-highlight py-3 font-bold text-white transition-colors hover:bg-green-600"
            >
              Start Practice Exam
            </button>
          </div>
        );

      case 'exam':
        if (!currentQuestion) return <div>Loading...</div>;

        return (
          <div className="overflow-hidden rounded-lg bg-black">
            <div className="bg-gray-900 p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">
                  Practice Exam - Question {currentQuestionIndex + 1}/
                  {currentExamQuestions.length}
                </h2>
                <div className="rounded-md bg-gray-800 px-3 py-1.5 text-white">
                  <span className="font-mono">{formatTime(timeRemaining)}</span>
                </div>
              </div>
              {renderNavigationMessage()}
            </div>

            <div className="p-6">
              <div className="mb-2">
                <span className="mb-2 inline-block rounded bg-gray-800 px-2 py-1 text-xs text-gray-300">
                  {currentQuestion.category}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {currentQuestion.question}
                </h3>
              </div>

              {/* Answer options */}
              <div className="mt-6 space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`cursor-pointer rounded-lg border p-4 transition-colors ${
                      selectedAnswers[currentQuestionIndex] === index
                        ? 'border-highlight bg-highlight/20'
                        : 'border-gray-700 bg-gray-900 hover:border-gray-500'
                    }`}
                  >
                    <div className="flex items-start">
                      <div
                        className={`mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border ${
                          selectedAnswers[currentQuestionIndex] === index
                            ? 'border-highlight bg-highlight/20'
                            : 'border-gray-500'
                        }`}
                      >
                        {['A', 'B', 'C', 'D'][index]}
                      </div>
                      <div className="text-white">{option}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="mt-8 flex justify-between">
                <button
                  onClick={goToPrevQuestion}
                  disabled={currentQuestionIndex === 0}
                  className={`rounded-lg px-6 py-2 font-medium ${
                    currentQuestionIndex === 0
                      ? 'cursor-not-allowed bg-gray-800 text-gray-500'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  Previous
                </button>

                {currentQuestionIndex < currentExamQuestions.length - 1 ? (
                  <button
                    onClick={goToNextQuestion}
                    className="rounded-lg bg-highlight px-6 py-2 font-medium text-white hover:bg-green-600"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={endExam}
                    className="rounded-lg bg-highlight px-6 py-2 font-medium text-white hover:bg-green-600"
                  >
                    Finish Exam
                  </button>
                )}
              </div>
            </div>

            {/* Question navigator */}
            <div className="border-t border-gray-800 bg-gray-900 p-4">
              <div className="mb-2 text-sm text-gray-400">
                Question Navigator:
              </div>
              <div className="grid grid-cols-10 gap-2">
                {currentExamQuestions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => jumpToQuestion(index)}
                    className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium ${
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
          <div className="overflow-hidden rounded-lg bg-black">
            <div
              className={`p-6 ${passed ? 'bg-green-900/30' : 'bg-red-900/30'}`}
            >
              <h2 className="mb-2 text-2xl font-bold text-white">
                Exam Results: {passed ? 'PASSED' : 'NOT PASSED'}
              </h2>
              <p className="text-gray-300">
                You scored {score.correct} out of {score.total} (
                {score.percentage}%)
              </p>
            </div>

            {/* Score breakdown by category */}
            <div className="p-6">
              <h3 className="mb-4 text-xl font-bold text-white">
                Performance by Category
              </h3>

              <div className="space-y-4">
                {Object.entries(categoryStats).map(
                  ([category, { correct, total }]) => {
                    if (total === 0) return null; // Skip categories with no questions
                    const percentage = Math.round((correct / total) * 100);
                    return (
                      <div key={category} className="rounded-lg bg-gray-900 p-4">
                        <div className="mb-1 flex items-center justify-between">
                          <span className="font-medium text-white">
                            {category}
                          </span>
                          <span
                            className={`${
                              percentage >= 70
                                ? 'text-green-400'
                                : 'text-red-400'
                            }`}
                          >
                            {correct}/{total} ({percentage}%)
                          </span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-800">
                          <div
                            className={`h-2 rounded-full ${
                              percentage >= 70
                                ? 'bg-green-500'
                                : 'bg-red-500'
                            }`}
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  },
                )}
              </div>

              <div className="mt-8 space-y-4">
                <button
                  onClick={reviewExam}
                  className="w-full rounded-lg bg-gray-800 py-3 font-medium text-white transition-colors hover:bg-gray-700"
                >
                  Review Answers
                </button>
                <button
                  onClick={resetExam}
                  className="w-full rounded-lg bg-highlight py-3 font-medium text-white transition-colors hover:bg-green-600"
                >
                  Start New Exam
                </button>
              </div>
            </div>
          </div>
        );

      case 'review':
        if (!currentQuestion) return <div>Loading...</div>;

        return (
          <div className="overflow-hidden rounded-lg bg-black">
            <div className="bg-gray-900 p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">
                  Review - Question {currentQuestionIndex + 1}/
                  {currentExamQuestions.length}
                </h2>
                <div className="rounded-md bg-gray-800 px-3 py-1.5 text-sm text-gray-400">
                  Review Mode
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-2">
                <span className="mb-2 inline-block rounded bg-gray-800 px-2 py-1 text-xs text-gray-300">
                  {currentQuestion.category}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {currentQuestion.question}
                </h3>
              </div>

              {/* Answer options with correct/incorrect indicators */}
              <div className="mt-6 space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isCorrect = isCorrectAnswer(
                    index,
                    currentQuestion.correctAnswer,
                  );
                  const wasSelected =
                    selectedAnswers[currentQuestionIndex] === index;

                  return (
                    <div
                      key={index}
                      className={`rounded-lg border p-4 ${
                        isCorrect
                          ? 'border-green-700 bg-green-900/30'
                          : wasSelected
                            ? 'border-red-700 bg-red-900/30'
                            : 'border-gray-700 bg-gray-900'
                      }`}
                    >
                      <div className="flex items-start">
                        <div
                          className={`mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border ${
                            isCorrect
                              ? 'border-green-500 text-green-500'
                              : wasSelected
                                ? 'border-red-500 text-red-500'
                                : 'border-gray-500 text-gray-500'
                          }`}
                        >
                          {['A', 'B', 'C', 'D'][index]}
                        </div>
                        <div className="text-white">{option}</div>
                        {wasSelected && isCorrect && (
                          <span className="ml-auto rounded-full bg-green-700 px-2 py-0.5 text-xs text-white">
                            Your Answer ✓
                          </span>
                        )}
                        {wasSelected && !isCorrect && (
                          <span className="ml-auto rounded-full bg-red-700 px-2 py-0.5 text-xs text-white">
                            Your Answer ✗
                          </span>
                        )}
                        {!wasSelected && isCorrect && (
                          <span className="ml-auto rounded-full bg-green-700 px-2 py-0.5 text-xs text-white">
                            Correct Answer
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Explanation */}
              <div className="mt-6 rounded-lg border border-gray-700 bg-gray-900 p-4">
                <h4 className="mb-2 font-bold text-highlight">Explanation:</h4>
                <p className="text-gray-300">{currentQuestion.explanation}</p>
              </div>

              {/* Navigation buttons */}
              <div className="mt-8 flex justify-between">
                <button
                  onClick={goToPrevQuestion}
                  disabled={currentQuestionIndex === 0}
                  className={`rounded-lg px-6 py-2 font-medium ${
                    currentQuestionIndex === 0
                      ? 'cursor-not-allowed bg-gray-800 text-gray-500'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  Previous
                </button>

                {currentQuestionIndex < currentExamQuestions.length - 1 ? (
                  <button
                    onClick={goToNextQuestion}
                    className="rounded-lg bg-gray-800 px-6 py-2 font-medium text-white hover:bg-gray-700"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={resetExam}
                    className="rounded-lg bg-highlight px-6 py-2 font-medium text-white hover:bg-green-600"
                  >
                    Start New Exam
                  </button>
                )}
              </div>
            </div>

            {/* Question navigator */}
            <div className="border-t border-gray-800 bg-gray-900 p-4">
              <div className="mb-2 text-sm text-gray-400">
                Question Navigator:
              </div>
              <div className="grid grid-cols-10 gap-2">
                {currentExamQuestions.map((_, index) => {
                  const isAnswerCorrect = isCorrectAnswer(
                    selectedAnswers[index],
                    currentExamQuestions[index].correctAnswer
                  );
                  
                  return (
                    <button
                      key={index}
                      onClick={() => jumpToQuestion(index)}
                      className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium ${
                        currentQuestionIndex === index
                          ? 'bg-highlight text-white'
                          : isAnswerCorrect
                            ? 'bg-green-700 text-white'
                            : 'bg-red-700 text-white'
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        );

      default:
        return <div>Loading...</div>;
    }
  };

  // Also update the save state effect to save the full exam state
  useEffect(() => {
    if (!mounted) return;
    
    // Save the full exam state to localStorage when in exam mode
    if (examMode === 'exam' && currentExamQuestions.length > 0) {
      if (typeof window !== 'undefined') {
        const examState = {
          isExamActive: true,
          currentQuestion: currentExamQuestions[currentQuestionIndex],
          questionIndex: currentQuestionIndex,
          minimized: false,
          examPath: '/red-seal-exam',
          questions: currentExamQuestions,
          answers: selectedAnswers,
          timeRemaining
        };
        localStorage.setItem('examState', JSON.stringify(examState));
      }
    }
  }, [mounted, examMode, currentExamQuestions, currentQuestionIndex, selectedAnswers, timeRemaining]);

  // If not mounted yet (server-side), show a simple loading state
  if (!mounted) {
    return <div className="h-40 w-full animate-pulse rounded-lg bg-gray-800"></div>;
  }

  return renderContent();
}
