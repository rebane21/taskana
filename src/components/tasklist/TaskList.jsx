import TaskItems from '@/components/taskItems/TaskItems';
import Illustration from '@/components/illustration';
import { useTasks } from '@/contexts/tasks/tasksContext';
import styles from './taskList.module.css';

const TaskList = () => {
  const { tasks } = useTasks();

  if (tasks && tasks.length > 0) {
    return (
      <article className={styles.taskList}>
        <TaskItems />
      </article>
    );
  } else {
    return (
      <section className={styles.emptyTaskList}>
        <div className={styles.subtitle}>
          <h2 className="heading_h2">Все твои задачи организованы как надо</h2>
          <p className="body__lg_regular">Отличная работа! Ты большой молодец!</p>
        </div>
        <Illustration name="EmptyTask" width="463" height="319" />
      </section>
    );
  }
};
export default TaskList;
