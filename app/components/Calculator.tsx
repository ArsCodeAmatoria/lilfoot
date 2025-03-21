'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator as CalculatorIcon, X, Minimize2, ArrowRight, Check } from 'lucide-react';
import { useNotePad } from '../contexts/NotePadContext';

export default function Calculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [display, setDisplay] = useState('0');
  const [lastOperation, setLastOperation] = useState('');
  const [memory, setMemory] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [isResultSent, setIsResultSent] = useState(false);
  
  const { addNote } = useNotePad();

  // Only render on client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset "Result sent" confirmation after a short period
  useEffect(() => {
    if (isResultSent) {
      const timer = setTimeout(() => {
        setIsResultSent(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isResultSent]);

  if (!mounted) return null;

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setMinimized(false);
  };

  const handleToggleMinimize = () => {
    setMinimized(!minimized);
  };

  const handleNumberClick = (num: string) => {
    setDisplay((prev) => {
      if (prev === '0' || prev === 'Error' || lastOperation.includes('=')) {
        setLastOperation('');
        return num;
      }
      return prev + num;
    });
  };

  const handleDecimalClick = () => {
    setDisplay((prev) => {
      if (prev.includes('.')) return prev;
      if (prev === 'Error' || lastOperation.includes('=')) {
        setLastOperation('');
        return '0.';
      }
      return prev + '.';
    });
  };

  const handleClear = () => {
    setDisplay('0');
    setLastOperation('');
    setMemory(null);
    setOperator(null);
  };

  const handleBackspace = () => {
    setDisplay((prev) => {
      if (prev === 'Error' || prev === '0' || prev.length === 1 || lastOperation.includes('=')) {
        return '0';
      }
      return prev.slice(0, -1);
    });
  };

  const handleOperation = (op: string) => {
    if (display === 'Error') return;
    
    try {
      const currentValue = parseFloat(display);
      
      if (op === '=') {
        if (memory !== null && operator) {
          let result: number;
          let operationText = '';
          
          switch (operator) {
            case '+':
              result = memory + currentValue;
              operationText = `${memory} + ${currentValue} = ${result}`;
              break;
            case '-':
              result = memory - currentValue;
              operationText = `${memory} - ${currentValue} = ${result}`;
              break;
            case '*':
              result = memory * currentValue;
              operationText = `${memory} × ${currentValue} = ${result}`;
              break;
            case '/':
              if (currentValue === 0) throw new Error('Division by zero');
              result = memory / currentValue;
              operationText = `${memory} ÷ ${currentValue} = ${result}`;
              break;
            default:
              result = currentValue;
              operationText = `${currentValue}`;
          }
          
          setDisplay(result.toString());
          setLastOperation(operationText);
          setMemory(null);
          setOperator(null);
        }
      } else if (op === 'sqrt') {
        if (currentValue < 0) throw new Error('Cannot take square root of negative number');
        const result = Math.sqrt(currentValue);
        setDisplay(result.toString());
        setLastOperation(`sqrt(${currentValue}) = ${result}`);
      } else if (op === 'cube') {
        const result = Math.pow(currentValue, 3);
        setDisplay(result.toString());
        setLastOperation(`${currentValue}³ = ${result}`);
      } else if (op === 'square') {
        const result = Math.pow(currentValue, 2);
        setDisplay(result.toString());
        setLastOperation(`${currentValue}² = ${result}`);
      } else {
        // For basic operations (+, -, *, /)
        if (memory !== null && operator && !lastOperation.includes('=')) {
          // Chain calculations
          let result: number;
          
          switch (operator) {
            case '+':
              result = memory + currentValue;
              break;
            case '-':
              result = memory - currentValue;
              break;
            case '*':
              result = memory * currentValue;
              break;
            case '/':
              if (currentValue === 0) throw new Error('Division by zero');
              result = memory / currentValue;
              break;
            default:
              result = currentValue;
          }
          
          setMemory(result);
          setOperator(op);
          setDisplay('0');
          setLastOperation(`${result} ${op}`);
        } else {
          setMemory(currentValue);
          setOperator(op);
          setDisplay('0');
          setLastOperation(`${currentValue} ${op}`);
        }
      }
    } catch (error) {
      setDisplay('Error');
      setLastOperation('');
      setMemory(null);
      setOperator(null);
    }
  };

  const handleSendToNotepad = () => {
    if (display === 'Error') return;
    
    let noteText = display;
    if (lastOperation.includes('=')) {
      noteText = lastOperation;
    }
    
    addNote(`Calculation: ${noteText}`);
    setIsResultSent(true);
  };

  return (
    <>
      {/* Calculator toggle button */}
      <button
        onClick={handleToggleOpen}
        className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700"
        aria-label="Open Calculator"
      >
        <CalculatorIcon size={24} />
      </button>

      {/* Calculator interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={minimized ? { opacity: 0, scale: 0.8, y: 20 } : { opacity: 0, y: 100 }}
            animate={minimized 
              ? { opacity: 1, scale: 1, y: 0, x: 0, width: 'auto', height: 'auto' } 
              : { opacity: 1, y: 0, x: 0 }
            }
            exit={{ opacity: 0, y: 100 }}
            className={minimized 
              ? "fixed bottom-24 right-24 z-50 flex h-14 w-auto items-center rounded-full bg-blue-600 px-4 shadow-xl" 
              : "fixed bottom-24 right-24 z-50 w-80 rounded-lg bg-gray-900 shadow-xl"
            }
          >
            {minimized ? (
              /* Minimized view */
              <div className="flex items-center justify-between space-x-3 text-white">
                <span className="font-mono text-lg">{display}</span>
                <button
                  onClick={handleToggleMinimize}
                  className="ml-2 rounded-full p-1 text-white/80 hover:bg-blue-700 hover:text-white"
                >
                  <Minimize2 size={18} />
                </button>
              </div>
            ) : (
              /* Full calculator view */
              <div className="flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between rounded-t-lg bg-blue-800 p-3">
                  <div className="text-sm font-medium text-white">Calculator</div>
                  <div className="flex space-x-2">
                    <button
                      onClick={handleToggleMinimize}
                      className="text-white/80 hover:text-white"
                      aria-label="Minimize"
                    >
                      <Minimize2 size={16} />
                    </button>
                    <button
                      onClick={handleToggleOpen}
                      className="text-white/80 hover:text-white"
                      aria-label="Close"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>

                {/* Display */}
                <div className="bg-gray-800 p-3">
                  <div className="flex h-12 items-center justify-between">
                    <div className="overflow-x-auto font-mono text-xl text-white scrollbar-none">
                      {display}
                    </div>
                    <button
                      onClick={handleSendToNotepad}
                      className={`ml-2 rounded p-1 ${isResultSent ? 'bg-green-600 text-white' : 'text-white/70 hover:bg-blue-600 hover:text-white'}`}
                      aria-label="Send to Notepad"
                    >
                      {isResultSent ? <Check size={18} /> : <ArrowRight size={18} />}
                    </button>
                  </div>
                  <div className="mt-1 h-5 overflow-hidden text-right text-xs text-gray-400">
                    {lastOperation}
                  </div>
                </div>

                {/* Keypad */}
                <div className="grid grid-cols-4 gap-1 p-2">
                  {/* Row 1 */}
                  <button 
                    onClick={handleClear}
                    className="rounded bg-red-700 p-3 text-center font-medium text-white hover:bg-red-600"
                  >
                    C
                  </button>
                  <button 
                    onClick={() => handleOperation('square')}
                    className="rounded bg-gray-700 p-3 text-center font-medium text-white hover:bg-gray-600"
                  >
                    x²
                  </button>
                  <button 
                    onClick={() => handleOperation('cube')}
                    className="rounded bg-gray-700 p-3 text-center font-medium text-white hover:bg-gray-600"
                  >
                    x³
                  </button>
                  <button 
                    onClick={handleBackspace}
                    className="rounded bg-gray-700 p-3 text-center font-medium text-white hover:bg-gray-600"
                  >
                    ⌫
                  </button>

                  {/* Row 2 */}
                  <button 
                    onClick={() => handleNumberClick('7')}
                    className="rounded bg-gray-800 p-3 text-center font-medium text-white hover:bg-gray-700"
                  >
                    7
                  </button>
                  <button 
                    onClick={() => handleNumberClick('8')}
                    className="rounded bg-gray-800 p-3 text-center font-medium text-white hover:bg-gray-700"
                  >
                    8
                  </button>
                  <button 
                    onClick={() => handleNumberClick('9')}
                    className="rounded bg-gray-800 p-3 text-center font-medium text-white hover:bg-gray-700"
                  >
                    9
                  </button>
                  <button 
                    onClick={() => handleOperation('/')}
                    className="rounded bg-blue-700 p-3 text-center font-medium text-white hover:bg-blue-600"
                  >
                    ÷
                  </button>

                  {/* Row 3 */}
                  <button 
                    onClick={() => handleNumberClick('4')}
                    className="rounded bg-gray-800 p-3 text-center font-medium text-white hover:bg-gray-700"
                  >
                    4
                  </button>
                  <button 
                    onClick={() => handleNumberClick('5')}
                    className="rounded bg-gray-800 p-3 text-center font-medium text-white hover:bg-gray-700"
                  >
                    5
                  </button>
                  <button 
                    onClick={() => handleNumberClick('6')}
                    className="rounded bg-gray-800 p-3 text-center font-medium text-white hover:bg-gray-700"
                  >
                    6
                  </button>
                  <button 
                    onClick={() => handleOperation('*')}
                    className="rounded bg-blue-700 p-3 text-center font-medium text-white hover:bg-blue-600"
                  >
                    ×
                  </button>

                  {/* Row 4 */}
                  <button 
                    onClick={() => handleNumberClick('1')}
                    className="rounded bg-gray-800 p-3 text-center font-medium text-white hover:bg-gray-700"
                  >
                    1
                  </button>
                  <button 
                    onClick={() => handleNumberClick('2')}
                    className="rounded bg-gray-800 p-3 text-center font-medium text-white hover:bg-gray-700"
                  >
                    2
                  </button>
                  <button 
                    onClick={() => handleNumberClick('3')}
                    className="rounded bg-gray-800 p-3 text-center font-medium text-white hover:bg-gray-700"
                  >
                    3
                  </button>
                  <button 
                    onClick={() => handleOperation('-')}
                    className="rounded bg-blue-700 p-3 text-center font-medium text-white hover:bg-blue-600"
                  >
                    -
                  </button>

                  {/* Row 5 */}
                  <button 
                    onClick={() => handleOperation('sqrt')}
                    className="rounded bg-gray-700 p-3 text-center font-medium text-white hover:bg-gray-600"
                  >
                    √
                  </button>
                  <button 
                    onClick={() => handleNumberClick('0')}
                    className="rounded bg-gray-800 p-3 text-center font-medium text-white hover:bg-gray-700"
                  >
                    0
                  </button>
                  <button 
                    onClick={handleDecimalClick}
                    className="rounded bg-gray-800 p-3 text-center font-medium text-white hover:bg-gray-700"
                  >
                    .
                  </button>
                  <button 
                    onClick={() => handleOperation('+')}
                    className="rounded bg-blue-700 p-3 text-center font-medium text-white hover:bg-blue-600"
                  >
                    +
                  </button>

                  {/* Row 6 - Equals button that spans full width */}
                  <button 
                    onClick={() => handleOperation('=')}
                    className="col-span-4 rounded bg-green-700 p-3 text-center font-medium text-white hover:bg-green-600"
                  >
                    =
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 