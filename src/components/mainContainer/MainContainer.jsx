import TaskList from '@/components/tasklist/TaskList';
import { clsx } from '@/utils/clsx';
import styles from './mainContainer.module.css';

const MainContainer = () => {
  return (
    <section className={styles.mainContainer}>
      <h1 className={clsx(styles.tasksTitle, 'heading_h1')}>Входящие</h1>
      <TaskList />
    </section>
  );
};
export default MainContainer;
