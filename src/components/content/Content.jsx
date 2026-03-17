import IncomingTasks from '../../pages/incomingTasks/IncomingTasks';
import NavBar from '../nav/navbar/NavBar';
import SideBar from '../sidebar/SideBar';
import TaskEditor from '../taskEditor/TaskEditor';
import TasksProvider from '../../providers/TasksProvider';
import { useTaskEditor } from '../../hooks/useTaskEditor';
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
