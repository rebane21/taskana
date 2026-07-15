import styles from './navBar.module.css';
import NavItem from '@/components/nav/navItem/NavItem';
const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <NavItem  href="/inbox" icon="BoxIcon" text="Входящие" />
      </ul>
    </nav>
  );
};
export default NavBar;
