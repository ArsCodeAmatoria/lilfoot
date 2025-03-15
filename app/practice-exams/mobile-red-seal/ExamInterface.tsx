'use client';

import React, { useState, useEffect } from 'react';
import { Question, examQuestions, categories } from './exam-data';

export default function ExamInterface() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(
    Array(examQuestions.length).fill(-1),
  );
  const [examMode, setExamMode] = useState<
    'intro' | 'exam' | 'results' | 'review'
  >('intro');
  const [timeRemaining, setTimeRemaining] = useState(30 * 60); // 30 minutes in seconds
  const [categoryStats, setCategoryStats] = useState<{
    [key: string]: { correct: number; total: number };
  }>({});

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

  // Calculate the total number of questions answered
  const answeredQuestions = selectedAnswers.filter(
    (answer) => answer !== -1,
  ).length;

  // Calculate progress percentage
  const progressPercentage = Math.round(
    (answeredQuestions / examQuestions.length) * 100,
  );

  // Handle answer selection
  const handleAnswerSelect = (answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  // Navigate to next question
  const goToNextQuestion = () => {
    if (currentQuestionIndex < examQuestions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Navigate to previous question
  const goToPrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Jump to a specific question
  const jumpToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  // Start the exam
  const startExam = () => {
    setExamMode('exam');
    setTimeRemaining(30 * 60); // 30 minutes
    setSelectedAnswers(Array(examQuestions.length).fill(-1));
    setCurrentQuestionIndex(0);
  };

  // End the exam and show results
  const endExam = () => {
    setExamMode('results');
    calculateScore();
  };

  // Review completed exam
  const reviewExam = () => {
    setExamMode('review');
    setCurrentQuestionIndex(0);
  };

  // Calculate scores by category
  const calculateScore = () => {
    const stats: { [key: string]: { correct: number; total: number } } = {};

    // Initialize categories
    categories.forEach((category) => {
      stats[category] = { correct: 0, total: 0 };
    });

    // Count correct answers by category
    examQuestions.forEach((question, index) => {
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
    return stats;
  };

  // Helper function to check if an answer is correct (supporting multiple correct answers)
  const isCorrectAnswer = (selectedAnswer: number, correctAnswer: number | number[]) => {
    if (Array.isArray(correctAnswer)) {
      // For multiple-choice questions with multiple correct answers
      return correctAnswer.includes(selectedAnswer);
    }
    // For single select questions
    return selectedAnswer === correctAnswer;
  };

  // Reset the exam to start over
  const resetExam = () => {
    setExamMode('intro');
    setSelectedAnswers(Array(examQuestions.length).fill(-1));
    setCurrentQuestionIndex(0);
    setTimeRemaining(30 * 60);
  };

  // Render appropriate content based on exam mode
  const renderContent = () => {
    const currentQuestion = examQuestions[currentQuestionIndex];

    switch (examMode) {
      case 'intro':
        return (
          <div className="mb-6 rounded-lg bg-gray-900 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Red Seal Mobile Crane Operator Practice Exam
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                This practice exam consists of 10 multiple-choice questions
                designed to help you prepare for the Red Seal Mobile Crane
                Operator certification.
              </p>
              <p>
                You'll have 30 minutes to complete the exam. The passing score
                is 70% (7 out of 10 questions correct).
              </p>
              <p>
                Once you start the exam, you can navigate between questions
                using the previous and next buttons. You can also review your
                answers before submitting.
              </p>
            </div>
            <div className="mt-6">
              <button
                onClick={startExam}
                className="rounded bg-highlight px-6 py-2 font-semibold text-black transition hover:bg-highlight/80"
              >
                Start Exam
              </button>
            </div>
          </div>
        );

      case 'exam':
      case 'review':
        return (
          <div className="space-y-6">
            {/* Progress and Timer */}
            <div className="mb-6 flex items-center justify-between rounded-lg bg-gray-900 p-4">
              <div className="flex items-center space-x-4">
                <div className="text-gray-300">
                  Question {currentQuestionIndex + 1} of {examQuestions.length}
                </div>
                <div className="h-2.5 w-36 rounded-full bg-gray-700">
                  <div
                    className="h-2.5 rounded-full bg-highlight"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <div className="text-gray-300">
                  {answeredQuestions}/{examQuestions.length} answered
                </div>
              </div>

              {examMode === 'exam' && (
                <div className="flex items-center space-x-2">
                  <span className="text-gray-300">Time Remaining:</span>
                  <span
                    className={`font-mono font-bold ${timeRemaining < 300 ? 'text-red-500' : 'text-white'}`}
                  >
                    {formatTime(timeRemaining)}
                  </span>
                </div>
              )}

              {examMode === 'review' && (
                <div className="italic text-gray-300">Review Mode</div>
              )}
            </div>

            {/* Question */}
            <div className="mb-6 rounded-lg bg-gray-900 p-6 shadow-lg">
              <div className="mb-3 flex justify-between">
                <span className="text-sm font-medium text-highlight">
                  {currentQuestion.category}
                </span>
                <span className="text-sm text-gray-400">
                  Question {currentQuestionIndex + 1}
                </span>
              </div>
              <h3 className="mb-6 text-xl font-medium text-white">
                {currentQuestion.question}
              </h3>

              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() =>
                      examMode === 'exam' ? handleAnswerSelect(index) : null
                    }
                    className={`cursor-pointer rounded-lg p-4 transition-all ${
                      examMode === 'review'
                        ? isCorrectAnswer(index, currentQuestion.correctAnswer)
                          ? 'border-2 border-green-500 bg-green-900/30'
                          : selectedAnswers[currentQuestionIndex] === index
                            ? 'border-2 border-red-500 bg-red-900/30'
                            : 'border-2 border-gray-800 bg-gray-800'
                        : selectedAnswers[currentQuestionIndex] === index
                          ? 'border-2 border-highlight bg-highlight/20'
                          : 'border-2 border-gray-800 bg-gray-800 hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-start">
                      <div
                        className={`mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${
                          selectedAnswers[currentQuestionIndex] === index
                            ? 'bg-highlight text-black'
                            : 'bg-gray-700 text-gray-300'
                        }`}
                      >
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-gray-200">{option}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Explanation (only in review mode) */}
              {examMode === 'review' && (
                <div className="mt-6 rounded-lg bg-gray-800 p-4">
                  <h4 className="mb-2 font-medium text-white">Explanation:</h4>
                  <p className="text-gray-300">{currentQuestion.explanation}</p>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <button
                onClick={goToPrevQuestion}
                disabled={currentQuestionIndex === 0}
                className="rounded bg-gray-700 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                Previous
              </button>

              {examMode === 'exam' &&
              currentQuestionIndex === examQuestions.length - 1 ? (
                <button
                  onClick={endExam}
                  className="rounded bg-highlight px-6 py-2 font-semibold text-black transition hover:bg-highlight/80"
                >
                  Finish Exam
                </button>
              ) : (
                <button
                  onClick={goToNextQuestion}
                  disabled={currentQuestionIndex === examQuestions.length - 1}
                  className="rounded bg-gray-700 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next
                </button>
              )}
            </div>

            {/* Question Navigation */}
            <div className="mt-4 rounded-lg bg-gray-900 p-4">
              <div className="mb-3 text-sm text-gray-400">
                Question Navigation:
              </div>
              <div className="flex flex-wrap gap-2">
                {examQuestions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => jumpToQuestion(index)}
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                      currentQuestionIndex === index
                        ? 'bg-highlight text-black'
                        : selectedAnswers[index] !== -1
                          ? 'bg-gray-600 text-white'
                          : 'bg-gray-800 text-gray-400'
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
        const totalCorrect = selectedAnswers.filter(
          (answer, index) => isCorrectAnswer(answer, examQuestions[index].correctAnswer),
        ).length;

        const percentageCorrect = Math.round(
          (totalCorrect / examQuestions.length) * 100,
        );
        const passed = percentageCorrect >= 70; // 70% is passing

        return (
          <div className="mb-6 rounded-lg bg-gray-900 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-white">Exam Results</h2>

            <div className="mb-8 flex flex-col items-center">
              <div
                className={`mb-2 text-5xl font-bold ${passed ? 'text-green-500' : 'text-red-500'}`}
              >
                {percentageCorrect}%
              </div>
              <div className="text-lg font-medium text-gray-300">
                {totalCorrect} out of {examQuestions.length} questions correct
              </div>
              <div
                className={`mt-4 rounded-md px-4 py-2 ${passed ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}
              >
                {passed ? 'PASSED' : 'FAILED'}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="mb-4 text-lg font-medium text-white">
                Performance by Category
              </h3>
              <div className="space-y-4">
                {Object.entries(categoryStats)
                  .filter(([_, stats]) => stats.total > 0)
                  .map(([category, stats]) => {
                    const categoryPercentage = Math.round(
                      (stats.correct / stats.total) * 100,
                    );
                    return (
                      <div key={category}>
                        <div className="mb-1 flex justify-between text-sm">
                          <span className="text-gray-300">{category}</span>
                          <span className="text-gray-300">
                            {stats.correct}/{stats.total} ({categoryPercentage}
                            %)
                          </span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-700">
                          <div
                            className={`h-2 rounded-full ${categoryPercentage >= 70 ? 'bg-green-500' : 'bg-red-500'}`}
                            style={{ width: `${categoryPercentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={reviewExam}
                className="rounded bg-gray-700 px-6 py-2 font-semibold text-white transition hover:bg-gray-600"
              >
                Review Answers
              </button>
              <button
                onClick={resetExam}
                className="rounded bg-highlight px-6 py-2 font-semibold text-black transition hover:bg-highlight/80"
              >
                Try Again
              </button>
            </div>
          </div>
        );
    }
  };

  return <div className="mx-auto max-w-3xl">{renderContent()}</div>;
}
