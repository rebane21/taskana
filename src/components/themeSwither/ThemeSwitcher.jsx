import Button from '@/components/button/Button';
import { THEME_DARK, useTheme } from '@/contexts/theme/themeContext';
import Icon from '@/components/icon/Icon';
import { clsx } from '@/utils/clsx';
import styles from './themeSwitcher.module.css';

export const ThemeSwitcher = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === THEME_DARK;

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
