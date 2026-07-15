import Content from '@/components/content/Content';
import Header from '@/components/header/Header';
import TaskEditorProvider from '@/contexts/taskEditor/TaskEditorProvider';
import TasksProvider from '@/contexts/tasks/TasksProvider';
import ThemeProvider from '@/contexts/theme/ThemeProvider';
import styles from './appLayout.module.css';

const AppLayout = () => {
  return (
    <section className={styles.appLayout}>
      <ThemeProvider>
        <TaskEditorProvider>
          <TasksProvider>
            <Header />
            <Content />
          </TasksProvider>
        </TaskEditorProvider>
      </ThemeProvider>
    </section>
  );
};
export default AppLayout;
