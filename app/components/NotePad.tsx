'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNotePad } from '../contexts/NotePadContext';
import { FaTrash, FaTimes, FaMinus, FaPlus, FaStickyNote } from 'react-icons/fa';

const NotePad: React.FC = () => {
  const { notes, addNote, deleteNote, clearNotes } = useNotePad();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [newNote, setNewNote] = useState('');
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Only render on client side
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (isMinimized && !isOpen) {
      setIsMinimized(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (newNote.trim()) {
      addNote(newNote.trim());
      setNewNote('');
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const handleDeleteNote = (index: number) => {
    deleteNote(index);
  };

  const handleClearNotes = () => {
    if (window.confirm('Are you sure you want to clear all notes?')) {
      clearNotes();
    }
  };

  // Focus input when opening
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  if (!mounted) return null;

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        className="fixed bottom-6 left-24 z-50 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleOpen}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <FaStickyNote size={20} />
      </motion.button>

      {/* NotePad Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed left-44 bottom-6 z-50 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={
              isMinimized
                ? { opacity: 1, scale: 1, width: '12rem', height: '3rem', y: 0 }
                : { opacity: 1, scale: 1, width: '20rem', height: '24rem', y: 0 }
            }
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="bg-indigo-800 text-white p-2 flex justify-between items-center">
              <h3 className="font-medium text-sm">NotePad</h3>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={toggleMinimize} 
                  className="text-white hover:bg-indigo-700 rounded p-1"
                >
                  {isMinimized ? <FaPlus size={12} /> : <FaMinus size={12} />}
                </button>
                <button 
                  onClick={toggleOpen} 
                  className="text-white hover:bg-indigo-700 rounded p-1"
                >
                  <FaTimes size={12} />
                </button>
              </div>
            </div>

            {/* Content - only visible when not minimized */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  className="flex-grow flex flex-col overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Notes List */}
                  <div className="flex-grow overflow-y-auto p-3">
                    {notes.length === 0 ? (
                      <p className="text-gray-300 text-center mt-4">No notes yet</p>
                    ) : (
                      <ul className="space-y-2">
                        {notes.map((note, index) => (
                          <motion.li
                            key={index}
                            className="bg-gray-700 p-2 rounded flex justify-between items-start"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <p className="text-sm break-words max-w-[90%] text-white">{note}</p>
                            <button
                              onClick={() => handleDeleteNote(index)}
                              className="text-red-400 hover:text-red-300 p-1"
                            >
                              <FaTrash size={12} />
                            </button>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Input Form */}
                  <div className="p-3 border-t border-gray-700">
                    <form onSubmit={handleAddNote} className="flex space-x-2">
                      <input
                        ref={inputRef}
                        type="text"
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        placeholder="Add a note..."
                        className="flex-grow bg-gray-700 border border-gray-600 rounded-md px-2 py-1 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      />
                      <button
                        type="submit"
                        disabled={!newNote.trim()}
                        className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm disabled:opacity-50"
                      >
                        Add
                      </button>
                    </form>
                    
                    {notes.length > 0 && (
                      <button
                        onClick={handleClearNotes}
                        className="text-xs text-red-400 hover:text-red-300 mt-2"
                      >
                        Clear all notes
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NotePad; 