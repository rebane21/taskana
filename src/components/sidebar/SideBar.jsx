import Statistic from '../statistic/Statistic';
import styles from './sideBar.module.css';

const SideBar = () => {
  return (
    <aside className={styles.sideBar}>
      <Statistic />
    </aside>
  );
};
export default SideBar;
