import Button from '../button/Button';
import Icon from '../icon/Icon';
import styles from './navBar.module.css';
const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Button variant="nav" onClick={() => (window.location.href = '/inbox')}>
            <Icon name="BoxIcon" showWrapper={true} width="18" height="15" />
            <Button.Text>Входящие</Button.Text>
          </Button>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
