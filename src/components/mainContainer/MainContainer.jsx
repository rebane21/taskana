import { TaskList, Dropdown } from '@/components';
import styles from './mainContainer.module.css';

export const MainContainer = () => {
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
