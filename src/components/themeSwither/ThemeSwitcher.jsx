import { Button, Icon } from '@/components';
import { useTheme } from '@/hooks';
import { clsx } from '@/utils';
import styles from './themeSwitcher.module.css';

export const ThemeSwitcher = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button
      variant="switch"
      className={clsx(styles.themeSwitcher, className)}
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
