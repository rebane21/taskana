import { useEffect, useState, useCallback, useRef } from 'react';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import { useTasks } from '../../hooks/useTasks';
import styles from './taskEditor.module.css';
import { clsx } from '../../utils/clsx';
import { generateId } from '../../utils/generateId';

const TaskEditor = ({ isOpen, onClose }) => {
  const { addTask } = useTasks();
  const [activeIcon, setActiveIcon] = useState('Minus');
  const [taskTitle, setTaskTitle] = useState('');

  const inputId = useRef(`task-title-${generateId()}`);
  const inputRef = useRef(null);

  const handleClose = useCallback(() => {
    setActiveIcon('Minus');
    setTaskTitle('');
    onClose();
  }, [onClose]);

  const handleClear = () => {
    setTaskTitle('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      const taskId = generateId();
      const now = new Date().toISOString();

      const newTask = {
        id: taskId,
        title: taskTitle.trim(),
        text: taskTitle.trim(),
        priority: activeIcon === 'Minus' ? 1 : activeIcon === 'ChevronTop' ? 2 : 3,
        createdAt: now,
        updatedAt: now,
        completed: false,
      };

      console.log('Создаваемая задача:', newTask);
      console.log('JSON:', JSON.stringify(newTask, null, 2));

      addTask(newTask);

      setTaskTitle('');
      setActiveIcon('Minus');
      onClose();
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleClose]);

  return (
    <div
      className={clsx(styles.taskEditor, isOpen && styles.open)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="task-editor-title"
      aria-hidden={!isOpen}
    >
      <div className={styles.editorContent}>
        <div className={styles.header}>
          <h1 id="task-editor-title" className="heading_h1">
            Создание задачи
          </h1>

          <form id="task-form" className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={clsx('body__lg_bold', styles.requiredLabel)}>Название</label>
              <input
                ref={inputRef}
                id={inputId.current}
                type="text"
                className={clsx(
                  styles.input,
                  'body__lg_regular',
                  taskTitle && styles.hasClearButton,
                )}
                placeholder="Введите название задачи"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                required
                autoFocus={isOpen}
              />

              {taskTitle && (
                <button
                  type="button"
                  className={styles.clearButton}
                  onClick={handleClear}
                  aria-label="Очистить поле ввода"
                >
                  <Icon name="XMark" size={24} />
                </button>
              )}
            </div>
          </form>
        </div>
        <div className={styles.content}>
          <div className={styles.priority}>
            <p className="body__lg_bold">Приоритет</p>
            <div id="priority" className={styles.selectPriority}>
              <Button
                variant="priority"
                type="button"
                className={clsx(
                  styles.priorityIcon,
                  styles.priorityMinus,
                  activeIcon === 'Minus' && styles.active,
                )}
                onClick={() => setActiveIcon('Minus')}
              >
                <Icon name="Minus" size={24} className={styles.icon} />
              </Button>
              <Button
                variant="priority"
                type="button"
                className={clsx(
                  styles.priorityIcon,
                  styles.priorityChevronTop,
                  activeIcon === 'ChevronTop' && styles.active,
                )}
                onClick={() => setActiveIcon('ChevronTop')}
              >
                <Icon
                  name="ChevronTop"
                  color="var(--color-secondary-default)"
                  size={24}
                  className={styles.icon}
                />
              </Button>
              <Button
                variant="priority"
                type="button"
                className={clsx(
                  styles.priorityIcon,
                  styles.priorityArrowTwo,
                  activeIcon === 'ArrowTwo' && styles.active,
                )}
                onClick={() => setActiveIcon('ArrowTwo')}
              >
                <Icon
                  name="ArrowTwo"
                  color="var(--color-primary-default)"
                  size={24}
                  className={styles.icon}
                />
              </Button>
            </div>
          </div>
        </div>

        <footer className={styles.modalFooter}>
          <div className={styles.modalActions}>
            <Button variant="secondary" type="submit" form="task-form" disabled={!taskTitle.trim()}>
              <Button.Text className="body__lg_semibold">Создать</Button.Text>
            </Button>
            <Button variant="tertiary" type="button" size="94px" onClick={handleClose}>
              <Button.Text className="body__lg_semibold">Отмена</Button.Text>
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TaskEditor;
