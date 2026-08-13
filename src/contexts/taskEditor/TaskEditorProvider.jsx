import { useReducer } from 'react';
import { TaskEditorContext } from './taskEditorContext';

const OPEN_CREATE = 'openCreate';
const OPEN_EDIT = 'openEdit';
const CLOSE = 'close';

const initialState = { isTaskEditorOpen: false, editorType: 'create', editingTask: null };

const taskEditorReducer = (state, action) => {
  switch (action.type) {
    case OPEN_CREATE:
      return { isTaskEditorOpen: true, editorType: 'create', editingTask: null };
    case OPEN_EDIT:
      return { isTaskEditorOpen: true, editorType: 'edit', editingTask: action.payload };
    case CLOSE:
      return { ...state, isTaskEditorOpen: false };
    default:
      return state;
  }
};

export const TaskEditorProvider = ({ children }) => {
  const [{ isTaskEditorOpen, editorType, editingTask }, dispatch] = useReducer(
    taskEditorReducer,
    initialState,
  );

  const openCreateTaskEditor = () => dispatch({ type: OPEN_CREATE });
  const openEditTaskEditor = (task) => dispatch({ type: OPEN_EDIT, payload: task });
  const closeTaskEditor = () => dispatch({ type: CLOSE });

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
