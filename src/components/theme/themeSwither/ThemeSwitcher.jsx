import Button from '../../button/Button';
import { useTheme } from '../../hooks/useTheme';
import Icon from '../../icon/Icon';
import styles from './themeSwitcher.module.css';

export const ThemeSwitcher = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button
      variant="secondary"
      className={`${styles.themeSwitcher} ${isDark ? styles.dark : styles.light}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <div className={styles.container}>
        <div className={`${styles.iconWrapper} ${!isDark ? styles.active : ''}`}>
          <Icon
            name="SunIcon"
            width={16}
            height={16}
            className={`${styles.icon} ${!isDark ? styles.activeIcon : ''}`}
          />
        </div>

        <div className={`${styles.iconWrapper} ${isDark ? styles.active : ''}`}>
          <Icon
            name="MoonIcon"
            width={16}
            height={16}
            className={`${styles.icon} ${isDark ? styles.activeIcon : ''}`}
          />
        </div>
      </div>
    </Button>
  );
};
