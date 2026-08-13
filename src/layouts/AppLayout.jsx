import { Content, Header } from '@/components';
import { TaskEditorProvider, TasksProvider, TaskSortProvider } from '@/contexts';
import styles from './appLayout.module.css';

export const AppLayout = () => {
  return (
    <section className={styles.appLayout}>
      <TaskEditorProvider>
        <TasksProvider>
          <TaskSortProvider>
            <Header />
            <Content />
          </TaskSortProvider>
        </TasksProvider>
      </TaskEditorProvider>
    </section>
  );
};
