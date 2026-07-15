import { createContext, useContext } from 'react';

export const TasksContext = createContext(undefined);

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error('useTasks можно вызывать только внутри TasksProvider.');
  }
  return context;
};
