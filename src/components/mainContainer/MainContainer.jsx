import TaskList from '../tasklist/TaskList';
import styles from './mainContainer.module.css';

const MainContainer = () => {
  return (
    <section className={styles.mainContainer}>
      <h1 className={styles.tasksTitle}>Входящие</h1>
      <TaskList />
    </section>
  );
};
export default MainContainer;
