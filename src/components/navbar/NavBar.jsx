import Button from '../button/Button';
import styles from './navBar.module.css';
const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}>
          <a href="">
            <Button variant="nav">
              <Button.Icon src="/box.svg" style={{ margin: '3px' }} />
              <Button.Text>Входящие</Button.Text>
            </Button>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
