import Button from '../button/Button';
import Logo from '../logo/Logo';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo className={styles.headerLogo}>
          <img
          src="/public/Vector.svg"
          alt="logo"
          width="126"
          height="40"
          
        />
        </Logo> 
      <Button className={styles.headerBtn}>
        <img
          src="/public/Plus-btn.svg"
          width="24"
          height="24"
        />
        Создать
      </Button>
    </header>
  );
};
export default Header;
