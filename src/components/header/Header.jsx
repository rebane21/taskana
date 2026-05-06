import Button from '@/components/button/Button';
import Icon from '@/components/icon/Icon';
import Logo from '@/components/logo/Logo';
import { ThemeSwitcher } from '@/components/themeSwither/ThemeSwitcher';
import { useTaskEditor } from '@/hooks/useTaskEditor';
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
          <div className={styles.iconWrapper}>
            <Icon name="PlusIcon" className={styles.icon} />
          </div>
          <Button.Text>Создать</Button.Text>
        </Button>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
export default Header;
