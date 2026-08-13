import { IncomingTasks } from '@/pages';
import { NavBar, SideBar, TaskEditor } from '@/components';
import { useTaskEditor } from '@/contexts';
import styles from './content.module.css';

export const Content = () => {
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
