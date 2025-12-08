import Button from '../button/Button';
import Icon from '../icon/Icon';
import Logo from '../logo/Logo';
import { ThemeSwitcher } from '../theme/themeSwither/ThemeSwitcher';
import styles from './header.module.css';
const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#">
        <Logo />
      </a>
      <div className={styles.headerActions}>
        <Button>
          <Icon name="PlusIcon" showWrapper={true} />
          <Button.Text>Создать</Button.Text>
        </Button>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
export default Header;
