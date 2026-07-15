import IncomingTasks from '@/pages/incomingTasks/IncomingTasks';
import NavBar from '@/components/nav/navbar/NavBar';
import SideBar from '@/components/sidebar/SideBar';
import TaskEditor from '@/components/taskEditor/TaskEditor';
import { useTaskEditor } from '@/contexts/taskEditor/taskEditorContext';
import styles from './content.module.css';

const Content = () => {
  const { isTaskEditorOpen, editorType, editingTask, closeTaskEditor } = useTaskEditor();

  return (
    <div className={styles.mainContent}>
      <NavBar />
      <IncomingTasks />
      <TaskEditor
        type={editorType}
        task={editingTask}
        isTaskEditorOpen={isTaskEditorOpen}
        onTaskEditorClose={closeTaskEditor}
      />
      <SideBar />
    </div>
  );
};
export default Content;
