import { createContext, useContext } from 'react';

export const TaskSortContext = createContext(undefined);

export const useTaskSort = () => {
  const context = useContext(TaskSortContext);
  if (context === undefined) {
    throw new Error('useTaskSort можно вызывать только внутри TaskSortProvider.');
  }
  return context;
};
