import Button from '../button/Button';
import Icon from '../icon/Icon';
import Logo from '../logo/Logo';
import { ThemeSwitcher } from '../themeSwither/ThemeSwitcher';
import { useTaskEditor } from '../../hooks/useTaskEditor';
import styles from './header.module.css';

const Header = () => {
  const { open } = useTaskEditor();

  return (
    <header className={styles.header}>
      <a href="#">
        <Logo />
      </a>
      <div className={styles.headerActions}>
        <Button onClick={open}>
          <Icon name="PlusIcon" showWrapper={true} color="var(--base-white)" />
          <Button.Text>Создать</Button.Text>
        </Button>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
export default Header;
