import { clsx } from '@/utils';
import { ModalFooter } from './modalFooter/ModalFooter';
import { PrioritySelector } from './prioritySelector/PrioritySelector';
import { TaskTitleInput } from './taskTitleInput/TaskTitleInput';
import { useTaskForm } from '@/hooks';
import styles from './taskEditor.module.css';

export const TaskEditor = ({
  type = 'create',
  task = null,
  isTaskEditorOpen,
  onTaskEditorClose,
}) => {
  const {
    taskTitle,
    setTaskTitle,
    priority,
    setPriority,
    inputId,
    inputRef,
    isSubmitDisabled,
    handleClose,
    handleClear,
    handleSubmit,
    handleDelete,
  } = useTaskForm({ type, task, isTaskEditorOpen, onTaskEditorClose });

  const editorTitle = type === 'edit' ? 'Редактирование' : 'Создание задачи';

  return (
    <div
      className={clsx(styles.taskEditor, isTaskEditorOpen && styles.open)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="task-editor-title"
      aria-hidden={!isTaskEditorOpen}
    >
      <div className={styles.editorContent}>
        <div className={styles.scrollContainer}>
          <div className={styles.editorHeader}>
            <h1 id="task-editor-title" className="heading_h1">
              {editorTitle}
            </h1>
            <form id="task-form" className={styles.form} onSubmit={handleSubmit}>
              <TaskTitleInput
                key={String(isTaskEditorOpen)}
                inputId={inputId}
                inputRef={inputRef}
                taskTitle={taskTitle}
                onChange={setTaskTitle}
                onClear={handleClear}
                autoFocus={isTaskEditorOpen}
              />
            </form>
          </div>

          <div className={styles.content}>
            <PrioritySelector priority={priority} onSelect={setPriority} />
          </div>
        </div>

        <ModalFooter
          type={type}
          isSubmitDisabled={isSubmitDisabled}
          onClose={handleClose}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};
