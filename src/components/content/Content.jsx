import IncomingTasks from '@/pages/incomingTasks/IncomingTasks';
import NavBar from '@/components/nav/navbar/NavBar';
import SideBar from '@/components/sidebar/SideBar';
import TaskEditor from '@/components/taskEditor/TaskEditor';
import TasksProvider from '@/providers/TasksProvider';
import { useTaskEditor } from '@/hooks/useTaskEditor';
import styles from './content.module.css';

const Content = () => {
  const { isOpen, close } = useTaskEditor();

  return (
    <main className={styles.mainContent}>
      <NavBar />
      <TasksProvider>
      <IncomingTasks />
        <TaskEditor isOpen={isOpen} onClose={close} />
      </TasksProvider>
      <SideBar />
    </main>
  );
};
export default Content;
