import { DEFAULT_SORT_OPTION_ID } from '@/constants';

const byTitle = (a, b) => a.title.localeCompare(b.title, 'ru', { sensitivity: 'base' });
const byPriority = (a, b) => a.priority - b.priority;
const byCreatedAt = (a, b) => new Date(a.createdAt) - new Date(b.createdAt);
const byUpdatedAt = (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt);

const reverse = (comparator) => (a, b) => comparator(b, a);

const COMPARATORS = {
  'priority-asc': reverse(byPriority),
  'priority-desc': byPriority,
  'alphabet-asc': reverse(byTitle),
  'alphabet-desc': byTitle,
  'created-at-asc': byCreatedAt,
  'created-at-desc': reverse(byCreatedAt),
  'updated-at-asc': byUpdatedAt,
  'updated-at-desc': reverse(byUpdatedAt),
};

export const sortTasks = (tasks, sortOptionId = DEFAULT_SORT_OPTION_ID) => {
  const comparator = COMPARATORS[sortOptionId];
  if (!comparator) return tasks.slice();
  return tasks.slice().sort(comparator);
};
