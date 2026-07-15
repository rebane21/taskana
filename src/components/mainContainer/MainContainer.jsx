import TaskList from '@/components/tasklist/TaskList';
import styles from './mainContainer.module.css';
import Dropdown from '@/components/dropdown/Dropdown';

const MainContainer = () => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.mainScroll}>
        <div className={styles.mainInner}>
          <header className={styles.tasksTitle}>
            <h1 className="visuallyHidden">Taskana — планировщик задач</h1>
            <h2 className="heading_h1">Входящие</h2>
            <Dropdown />
          </header>
          <TaskList />
        </div>
      </div>
    </main>
  );
};
export default MainContainer;
