import { useState } from 'react';
import { TaskSortContext } from './taskSortContext';
import { DEFAULT_SORT_OPTION_ID } from '@/constants';

export const TaskSortProvider = ({ children }) => {
  const [sortOption, setSortOption] = useState(DEFAULT_SORT_OPTION_ID);
  return <TaskSortContext value={{ sortOption, setSortOption }}>{children}</TaskSortContext>;
};
