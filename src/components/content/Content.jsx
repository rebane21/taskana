import IncomingTasks from '../../pages/incomingTasks/IncomingTasks';
import NavBar from '../navbar/NavBar';
import SideBar from '../sidebar/SideBar';
import styles from './content.module.css';

const Content = () => {
  return (
    <main className={styles.mainContent}>
      <NavBar />
      <IncomingTasks />
      <SideBar />
    </main>
  );
};
export default Content;
