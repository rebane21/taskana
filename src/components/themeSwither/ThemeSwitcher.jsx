import Button from '../button/Button';
import { useTheme } from '../../hooks/useTheme';
import Icon from '../icon/Icon';
import styles from './themeSwitcher.module.css';

export const ThemeSwitcher = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button
      variant="dark"
      className={styles.themeSwitcher}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <div className={styles.container}>
        <Icon
          name="SunIcon"
          size={16}
          className={styles.icon}
          showWrapper={true}
          wrapperSize={32}
          wrapperClassName={`${styles.iconWrapper} ${!isDark ? styles.active : ''}`}
        />
        <Icon
          name="MoonIcon"
          size={16}
          className={styles.icon}
          showWrapper={true}
          wrapperSize={32}
          wrapperClassName={`${styles.iconWrapper} ${isDark ? styles.active : ''}`}
        />
      </div>
    </Button>
  );
};
