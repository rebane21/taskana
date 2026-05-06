import Footer from '@/components/footer/Footer';
import MainContainer from '@/components/mainContainer/MainContainer';
import styles from './incomingTasks.module.css';

const IncomingTasks = () => {
  return (
    <div className={styles.incomingTasksWrapper}>
      <div className={styles.incomingTasksContainer}>
        <MainContainer />
        <Footer />
      </div>
    </div>
  );
};
export default IncomingTasks;
