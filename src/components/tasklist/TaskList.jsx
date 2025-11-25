import styles from './taskList.module.css';

const TaskList = () => {
  return (
    <section className={styles.taskList}>
      <div className={styles.subtitle}>
        <h2 className='heading_h2'>Все твои задачи организованы как надо</h2>
        <p className='body__lg_regular'>Отличная работа! Ты большой молодец!</p>
      </div>
      <img src="/EmptyTask.svg" alt="empty task" width="463px" height="319px" />
    </section>
  );
};
export default TaskList;
