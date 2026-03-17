import CreatedTask from '../ceatedTask/CreatedTask';
import Illustration from '../illustration';
import { useTasks } from '../../hooks/useTasks';
import styles from './taskList.module.css';

const TaskList = () => {
  const { tasks } = useTasks();

  if (tasks && tasks.length > 0) {
    return (
      <section className={styles.taskList}>
        <CreatedTask />
      </section>
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
