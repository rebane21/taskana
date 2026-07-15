import Button from '@/components/button/Button';
import Icon from '@/components/icon/Icon';
import Logo from '@/components/logo/Logo';
import { ThemeSwitcher } from '@/components/themeSwither/ThemeSwitcher';
import { useTaskEditor } from '@/contexts/taskEditor/taskEditorContext';
import styles from './header.module.css';

const Header = () => {
  const { openCreateTaskEditor } = useTaskEditor();

  return (
    <header className={styles.header}>
      <a href="#" aria-label="Переход на главную страницу">
        <Logo />
      </a>
      <div className={styles.headerActions}>
        <Button onClick={openCreateTaskEditor}>
          <div className="iconWrapper">
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
