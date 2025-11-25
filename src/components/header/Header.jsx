import Button from '../button/Button';
import Logo from '../logo/Logo';
import styles from './header.module.css';
const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#">
        <Logo />
      </a>
      <Button>
        <Button.Icon src="./Plus-btn.svg" style={{ margin: '3px' }} />
        <Button.Text>Создать</Button.Text>
      </Button>
    </header>
  );
};
export default Header;
