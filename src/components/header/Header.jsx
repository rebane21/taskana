import { Button, Icon, Logo, ThemeSwitcher } from '@/components';
import { useTaskEditor } from '@/contexts';
import styles from './header.module.css';

export const Header = () => {
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
