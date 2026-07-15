import { createContext, useContext } from 'react';

export const TaskEditorContext = createContext(undefined);

export const useTaskEditor = () => {
  const context = useContext(TaskEditorContext);
  if (context === undefined) {
    throw new Error('useTaskEditor можно вызывать только внутри TaskEditorProvider.');
  }
  return context;
};
