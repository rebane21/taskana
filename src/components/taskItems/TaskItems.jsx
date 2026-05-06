import { useTasks } from '@/hooks/useTasks';
import { clsx } from '@/utils/clsx';
import styles from './taskItems.module.css';

const TaskItems = () => {
  const { tasks, toggleTask } = useTasks();

  const sortedTasks = tasks.slice().reverse();

  return (
    <ul className={styles.list}>
      {sortedTasks.map((task) => (
        <li key={task.id} className={styles.itemWrapper} tabIndex={0}>
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
        </li>
      ))}
    </ul>
  );
};

export default TaskItems;
