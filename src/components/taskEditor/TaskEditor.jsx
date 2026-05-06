import { clsx } from '@/utils/clsx';
import ModalFooter from './modalFooter/ModalFooter';
import PrioritySelector from './prioritySelector/PrioritySelector';
import TaskTitleInput from './taskTitleInput/TaskTitleInput';
import { useTaskForm } from '@/hooks/useTaskForm';
import styles from './taskEditor.module.css';

const TaskEditor = ({ isOpen, onClose }) => {
  const {
    taskTitle,
    setTaskTitle,
    priority,
    setPriority,
    inputId,
    inputRef,
    handleClose,
    handleClear,
    handleSubmit,
  } = useTaskForm({ isOpen, onClose });

  return (
    <div
      className={clsx(styles.taskEditor, isOpen && styles.open)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="task-editor-title"
      aria-hidden={!isOpen}
    >
      <div className={styles.editorContent}>
        <div className={styles.scrollContainer}>
          <div className={styles.editorHeader}>
            <h1 id="task-editor-title" className="heading_h1">
              Создание задачи
            </h1>
            <form id="task-form" className={styles.form} onSubmit={handleSubmit}>
              <TaskTitleInput
                inputId={inputId}
                inputRef={inputRef}
                taskTitle={taskTitle}
                onChange={setTaskTitle}
                onClear={handleClear}
              />
            </form>
          </div>

          <div className={styles.content}>
            <PrioritySelector priority={priority} onSelect={setPriority} />
         </div>
        </div>

        <ModalFooter isSubmitDisabled={!taskTitle.trim()} onClose={handleClose} />
      </div>
    </div>
  );
};

export default TaskEditor;
