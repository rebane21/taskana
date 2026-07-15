import { useState } from 'react';
import { TaskEditorContext } from '@/contexts/taskEditor/taskEditorContext';

const TaskEditorProvider = ({ children }) => {
  const [isTaskEditorOpen, setIsTaskEditorOpen] = useState(false);
  const [editorType, setEditorType] = useState('create');
  const [editingTask, setEditingTask] = useState(null);

  const openCreateTaskEditor = () => {
    setEditorType('create');
    setEditingTask(null);
    setIsTaskEditorOpen(true);
  };

  const openEditTaskEditor = (task) => {
    setEditorType('edit');
    setEditingTask(task);
    setIsTaskEditorOpen(true);
  };

  const closeTaskEditor = () => setIsTaskEditorOpen(false);

  return (
    <TaskEditorContext
      value={{
        isTaskEditorOpen,
        editorType,
        editingTask,
        openCreateTaskEditor,
        openEditTaskEditor,
        closeTaskEditor,
      }}
    >
      {children}
    </TaskEditorContext>
  );
};

export default TaskEditorProvider;
