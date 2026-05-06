import { useEffect, useState, useCallback, useRef } from 'react';
import { useTasks } from '@/hooks/useTasks';
import { generateId } from '@/utils/generateId';

const PRIORITY_MAP = { Minus: 1, ChevronTop: 2, ArrowTwo: 3 };

export const useTaskForm = ({ isOpen, onClose }) => {
  const { addTask } = useTasks();
  const [taskTitle, setTaskTitle] = useState('');
  const [priority, setPriority] = useState('Minus');
  const inputId = useRef(`task-title-${generateId()}`);
  const inputRef = useRef(null);

  const reset = useCallback(() => {
    setTaskTitle('');
    setPriority('Minus');
  }, []);

  const handleClose = useCallback(() => {
    reset();
    onClose();
  }, [onClose, reset]);

  const handleClear = () => {
    setTaskTitle('');
    inputRef.current?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle.trim()) return;

    const now = new Date().toISOString();
    addTask({
      id: generateId(),
      title: taskTitle.trim(),
      priority: PRIORITY_MAP[priority],
      createdAt: now,
      updatedAt: now,
      completed: false,
    });

    reset();
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return;

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
  }, [isOpen, handleClose]);

  return {
    taskTitle,
    setTaskTitle,
    priority,
    setPriority,
    inputId: inputId.current,
    inputRef,
    handleClose,
    handleClear,
    handleSubmit,
  };
};
