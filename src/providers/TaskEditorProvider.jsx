import { useToggle } from '@/hooks/useToggle';
import { TaskEditorContext } from '@/context/taskEditorContext';

const TaskEditorProvider = ({ children }) => {
  const [isOpen, open, close] = useToggle(false);

  return (
    <TaskEditorContext.Provider value={{ isOpen, open, close }}>
      {children}
    </TaskEditorContext.Provider>
  );
};

export default TaskEditorProvider;

