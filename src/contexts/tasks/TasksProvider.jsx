import { useState } from 'react';
import { TasksContext } from '@/contexts/tasks/tasksContext';
import { DEFAULT_SORT_OPTION_ID } from '@/constants/dropdownOptions';
import { generateId } from '@/utils/generateId';

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [sortOption, setSortOption] = useState(DEFAULT_SORT_OPTION_ID);

  const addTask = (taskData) => {
    const now = new Date().toISOString();
    setTasks([...tasks, { ...taskData, id: generateId(), completed: false, createdAt: now, updatedAt: now }]);
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed, updatedAt: new Date().toISOString() }
          : task
      )
    );
  };

  const updateTask = (taskId, updates) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, ...updates, updatedAt: new Date().toISOString() }
          : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <TasksContext
      value={{ tasks, addTask, toggleTask, updateTask, deleteTask, sortOption, setSortOption }}
    >
      {children}
    </TasksContext>
  );
};

export default TasksProvider;
