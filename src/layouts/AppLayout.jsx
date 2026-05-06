import Content from '@/components/content/Content';
import Header from '@/components/header/Header';
import TaskEditorProvider from '@/providers/TaskEditorProvider';
import ThemeProvider from '@/providers/ThemeProvider';
import styles from './appLayout.module.css';

const AppLayout = () => {
  return (
    <section className={styles.appLayout}>
      <ThemeProvider>
        <TaskEditorProvider>
        <Header />
        <Content />
        </TaskEditorProvider>
      </ThemeProvider>
    </section>
  );
};
export default AppLayout;
