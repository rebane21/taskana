import Footer from '../../components/footer/Footer';
import TaskList from '../../components/tasklist/TaskList';
import styles from './incomingTasks.module.css';

const IncomingTasks = () => {
  return (
    <section className={styles.mainContainer}>
      <h1 className={styles.tasksTitle}>
        Заголовок
      </h1>
      <TaskList />

      <Footer />
    </section>
  );
};
export default IncomingTasks;
