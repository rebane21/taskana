import { useReducer } from 'react';
import { TasksContext } from './tasksContext';
import { generateId } from '@/utils';

const ADD_TASK = 'addTask';
const TOGGLE_TASK = 'toggleTask';
const UPDATE_TASK = 'updateTask';
const DELETE_TASK = 'deleteTask';

const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const now = new Date().toISOString();
      return [
        ...tasks,
        { ...action.payload, id: generateId(), completed: false, createdAt: now, updatedAt: now },
      ];
    }
    case TOGGLE_TASK:
      return tasks.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed, updatedAt: new Date().toISOString() }
          : task,
      );
    case UPDATE_TASK:
      return tasks.map((task) =>
        task.id === action.payload.taskId
          ? { ...task, ...action.payload.updates, updatedAt: new Date().toISOString() }
          : task,
      );
    case DELETE_TASK:
      return tasks.filter((task) => task.id !== action.payload);
    default:
      return tasks;
  }
};

export const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  const addTask = (taskData) => dispatch({ type: ADD_TASK, payload: taskData });
  const toggleTask = (taskId) => dispatch({ type: TOGGLE_TASK, payload: taskId });
  const updateTask = (taskId, updates) => dispatch({ type: UPDATE_TASK, payload: { taskId, updates } });
  const deleteTask = (taskId) => dispatch({ type: DELETE_TASK, payload: taskId });

  return (
    <TasksContext value={{ tasks, addTask, toggleTask, updateTask, deleteTask }}>
      {children}
    </TasksContext>
  );
};
