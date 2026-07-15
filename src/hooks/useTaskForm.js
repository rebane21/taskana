import { useEffect, useState, useCallback, useRef } from 'react';
import { useTasks } from '@/contexts/tasks/tasksContext';
import {
  DEFAULT_PRIORITY_KEY,
  PRIORITY_KEY,
  PRIORITY_TO_NUMERIC,
  NUMERIC_TO_PRIORITY_KEY,
} from '@/constants/taskPriorities';
import { generateId } from '@/utils/generateId';

export const useTaskForm = ({ type = 'create', task = null, isTaskEditorOpen, onTaskEditorClose }) => {
  const { addTask, updateTask, deleteTask } = useTasks();
  const isEdit = type === 'edit';
  const [taskTitle, setTaskTitle] = useState('');
  const [priority, setPriority] = useState(DEFAULT_PRIORITY_KEY);
  const inputId = useRef(`task-title-${generateId()}`);
  const inputRef = useRef(null);

  const reset = useCallback(() => {
    setTaskTitle('');
    setPriority(DEFAULT_PRIORITY_KEY);
  }, []);

  useEffect(() => {
    if (!isTaskEditorOpen) return;

    if (isEdit && task) {
      setTaskTitle(task.title);
      setPriority(NUMERIC_TO_PRIORITY_KEY[task.priority] ?? DEFAULT_PRIORITY_KEY);
    } else {
      setTaskTitle('');
      setPriority(DEFAULT_PRIORITY_KEY);
    }
  }, [isTaskEditorOpen, isEdit, task]);

  const handleClose = useCallback(() => {
    reset();
    onTaskEditorClose();
  }, [onTaskEditorClose, reset]);

  const handleClear = () => {
    setTaskTitle('');
    inputRef.current?.focus();
  };

  const handleDelete = () => {
    if (isEdit && task) {
      deleteTask(task.id);
    }
    reset();
    onTaskEditorClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle.trim()) return;

    if (isEdit && task) {
      updateTask(task.id, {
        title: taskTitle.trim(),
        priority: PRIORITY_TO_NUMERIC[priority],
      });
    } else {
      const now = new Date().toISOString();
      addTask({
        id: generateId(),
        title: taskTitle.trim(),
        priority: PRIORITY_TO_NUMERIC[priority],
        createdAt: now,
        updatedAt: now,
        completed: false,
      });
    }

    reset();
    inputRef.current?.blur();
    onTaskEditorClose();
  };

  const trimmedTitle = taskTitle.trim();

  const isUnchanged =
    isEdit &&
    task &&
    trimmedTitle === task.title &&
    PRIORITY_TO_NUMERIC[priority] === task.priority;

  const isSubmitDisabled = !trimmedTitle || isUnchanged;

  useEffect(() => {
    if (!isTaskEditorOpen) return;

    const dialog = inputRef.current?.closest('[role="dialog"]');
    const handleTransitionEnd = (e) => {
      if (e.propertyName !== 'transform') return;
      inputRef.current?.focus();
    };
    dialog?.addEventListener('transitionend', handleTransitionEnd);

    const handleEscape = (e) => {
      if (e.key === 'Escape') handleClose();
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      dialog?.removeEventListener('transitionend', handleTransitionEnd);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isTaskEditorOpen, handleClose]);

  return {
    taskTitle,
    setTaskTitle,
    priority,
    setPriority,
    inputId: inputId.current,
    inputRef,
    isSubmitDisabled,
    handleClose,
    handleClear,
    handleSubmit,
    handleDelete,
  };
};
