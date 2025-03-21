'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface NotePadContextType {
  notes: string[];
  addNote: (note: string) => void;
  deleteNote: (index: number) => void;
  clearNotes: () => void;
}

// Default context values
const defaultContextValue: NotePadContextType = {
  notes: [],
  addNote: () => {},
  deleteNote: () => {},
  clearNotes: () => {},
};

const NotePadContext = createContext<NotePadContextType>(defaultContextValue);

export function NotePadProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  // Initialize from localStorage when component mounts
  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const savedNotes = localStorage.getItem('notepad');
      if (savedNotes) {
        try {
          const parsedNotes = JSON.parse(savedNotes);
          if (Array.isArray(parsedNotes)) {
            setNotes(parsedNotes);
          }
        } catch (e) {
          // If parsing fails, reset notes
          localStorage.removeItem('notepad');
        }
      }
    }
  }, []);

  // Update localStorage when notes change
  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      localStorage.setItem('notepad', JSON.stringify(notes));
    }
  }, [notes, mounted]);

  // Add a new note
  const addNote = (note: string) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  // Delete a note by index
  const deleteNote = (index: number) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
  };

  // Clear all notes
  const clearNotes = () => {
    setNotes([]);
  };

  return (
    <NotePadContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        clearNotes,
      }}
    >
      {children}
    </NotePadContext.Provider>
  );
}

export function useNotePad() {
  const context = useContext(NotePadContext);
  return context;
} 