import { useState } from 'react';
import { TasksContext } from '@/context/tasksContext';
import { generateId } from '@/utils/generateId';

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

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

  return (
    <TasksContext.Provider value={{ tasks, addTask, toggleTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;

