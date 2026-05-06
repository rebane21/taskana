import { useContext } from 'react';
import { TaskEditorContext } from '@/context/taskEditorContext';

export const useTaskEditor = () => {
  const context = useContext(TaskEditorContext);
  if (!context) {
    throw new Error('useTaskEditor можно вызывать только внутри TaskEditorProvider.');
  }
  return context;
};

