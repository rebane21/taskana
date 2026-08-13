import styles from './footer.module.css';
import { FOCUS_RING } from '@/constants';
import { clsx } from '@/utils';
export const Footer = () => {
  return (
    <footer className={styles.footerContent}>
      <p className={clsx(styles.footerText, 'body__md_regular')}>
        <span>Проект выполнен в рамках стажировки</span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://preax.ru/"
          className={FOCUS_RING}
        >
          PREAX
        </a>
      </p>
    </footer>
  );
};
