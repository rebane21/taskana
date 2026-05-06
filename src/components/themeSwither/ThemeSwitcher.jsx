import Button from '@/components/button/Button';
import { useTheme } from '@/hooks/useTheme';
import Icon from '@/components/icon/Icon';
import { clsx } from '@/utils/clsx';
import styles from './themeSwitcher.module.css';

export const ThemeSwitcher = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button
      variant="dark"
      className={styles.themeSwitcher}
      onClick={toggleTheme}
      aria-label={`Переключить на ${isDark ? 'светлую' : 'тёмную'} тему`}
    >
      <div className={clsx(styles.switcher, isDark && styles.moonActive)}>
        <div className={styles.iconWrapper}>
          <Icon name="SunIcon" className={styles.icon} />
        </div>
        <div className={styles.iconWrapper}>
          <Icon name="MoonIcon" className={styles.icon} />
        </div>
      </div>
    </Button>
  );
};
