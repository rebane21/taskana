import { useMemo } from 'react';
import { useTasks, useTaskEditor, useTaskSort } from '@/contexts';
import { sortTasks, clsx } from '@/utils';
import { FOCUS_RING } from '@/constants';
import { Button, Icon } from '@/components';
import styles from './taskItems.module.css';

export const TaskItems = () => {
  const { tasks, toggleTask } = useTasks();
  const { sortOption } = useTaskSort();
  const { openEditTaskEditor } = useTaskEditor();

  const sortedTasks = useMemo(() => sortTasks(tasks, sortOption), [tasks, sortOption]);

  return (
    <ul className={styles.list}>
      {sortedTasks.map((task) => (
        <li key={task.id} className={clsx(styles.itemWrapper, FOCUS_RING)}>
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
            className={clsx(styles.editButton, FOCUS_RING)}
            onClick={() => openEditTaskEditor(task)}
          >
            <Icon name="Edit" width={24} height={24} />
          </Button>
        </li>
      ))}
    </ul>
  );
};
