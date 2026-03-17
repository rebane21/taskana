import { useState } from 'react';
import { TasksContext } from '../context/tasksContext';

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskData) => {
    setTasks([...tasks, { ...taskData, id: Date.now(), completed: false }]);
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
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

