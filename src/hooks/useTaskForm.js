import { useEffect, useReducer, useCallback, useRef } from 'react';
import { useTasks } from '@/contexts';
import { DEFAULT_PRIORITY_KEY, PRIORITY_TO_NUMERIC, NUMERIC_TO_PRIORITY_KEY } from '@/constants';
import { generateId } from '@/utils';

const SET_TITLE = 'setTitle';
const SET_PRIORITY = 'setPriority';
const RESET = 'reset';
const POPULATE = 'populate';

const initialFormState = { taskTitle: '', priority: DEFAULT_PRIORITY_KEY };

const formReducer = (state, action) => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, taskTitle: action.payload };
    case SET_PRIORITY:
      return { ...state, priority: action.payload };
    case RESET:
      return initialFormState;
    case POPULATE:
      return { taskTitle: action.payload.title, priority: action.payload.priority };
    default:
      return state;
  }
};

export const useTaskForm = ({
  type = 'create',
  task = null,
  isTaskEditorOpen,
  onTaskEditorClose,
}) => {
  const { addTask, updateTask, deleteTask } = useTasks();
  const isEdit = type === 'edit';
  const [{ taskTitle, priority }, dispatch] = useReducer(formReducer, initialFormState);
  const inputId = useRef(`task-title-${generateId()}`);
  const inputRef = useRef(null);

  const setTaskTitle = (value) => dispatch({ type: SET_TITLE, payload: value });
  const setPriority = (value) => dispatch({ type: SET_PRIORITY, payload: value });
  const reset = () => dispatch({ type: RESET });

  useEffect(() => {
    if (!isTaskEditorOpen) return;

    if (isEdit && task) {
      dispatch({
        type: POPULATE,
        payload: {
          title: task.title,
          priority: NUMERIC_TO_PRIORITY_KEY[task.priority] ?? DEFAULT_PRIORITY_KEY,
        },
      });
    } else {
      dispatch({ type: RESET });
    }
  }, [isTaskEditorOpen, isEdit, task]);

  const handleClose = useCallback(() => {
    dispatch({ type: RESET });
    onTaskEditorClose();
  }, [onTaskEditorClose]);

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
