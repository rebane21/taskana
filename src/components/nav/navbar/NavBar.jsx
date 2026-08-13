import styles from './navBar.module.css';
import { NavItem } from '@/components/nav/navItem/NavItem';
export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <NavItem href="/inbox" icon="BoxIcon" text="Входящие" />
      </ul>
    </nav>
  );
};
