import { useMemo } from 'react';
import { useTasks } from '@/contexts/tasks/tasksContext';
import { useTaskEditor } from '@/contexts/taskEditor/taskEditorContext';
import { sortTasks } from '@/utils/sortTasks';
import { FOCUS_RING } from '@/constants/focusRing';
import { clsx } from '@/utils/clsx';
import Button from '@/components/button/Button';
import Icon from '@/components/icon/Icon';
import styles from './taskItems.module.css';

const TaskItems = () => {
  const { tasks, toggleTask, sortOption } = useTasks();
  const { openEditTaskEditor } = useTaskEditor();

  const sortedTasks = useMemo(() => sortTasks(tasks, sortOption), [tasks, sortOption]);

  return (
    <ul className={styles.list}>
      {sortedTasks.map((task) => (
        <li key={task.id} className={clsx(styles.itemWrapper, FOCUS_RING)} tabIndex={0}>
          <div className={clsx(styles.item, task.completed && styles.completed)}>
            <div className={styles.checkboxArea}>
              <input
                type="checkbox"
                id={`task-${task.id}`}
                className={styles.checkbox}
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                data-priority={task.priority}
              />
            </div>

            <div className={styles.textArea}>
              <label htmlFor={`task-${task.id}`} className={clsx(styles.label, 'body__lg_regular')}>
                {task.title}
              </label>
            </div>
          </div>
          <Button
            variant="iconSecondary"
            type="button"
            aria-label="Редактировать задачу"
            className={FOCUS_RING}
            onClick={() => openEditTaskEditor(task)}
          >
            <Icon name="Edit" width={24} height={24} />
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default TaskItems;
