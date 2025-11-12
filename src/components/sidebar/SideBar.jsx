import Statistic from '../statistic/Statistic';
import styles from './sideBar.module.css';

const SideBar = () => {
  return (
    <aside className={styles.sideBar}>
      <img src="/Notebook.svg" alt="side bar img" />
      <p className={styles.sideText}>
        Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику
        и самочувствие.
      </p>

      <Statistic />
    </aside>
  );
};
export default SideBar;
