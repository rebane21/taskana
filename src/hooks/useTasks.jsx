import { useContext } from 'react';
import { TasksContext } from '../context/tasksContext';

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('useTasks можно вызывать только внутри TasksProvider.');
  }
  return context;
};

