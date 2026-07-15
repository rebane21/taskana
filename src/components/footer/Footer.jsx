import styles from './footer.module.css';
import { FOCUS_RING } from '@/constants/focusRing';
import { clsx } from '@/utils/clsx.js';
const Footer = () => {
  return (
    <footer className={styles.footerContent}>
      <p className={clsx(styles.footerText, "body__md_regular")}>
        <span>Проект выполнен в рамках стажировки</span>
        <a target="_blank" rel="noopener noreferrer" href="https://preax.ru/" className={FOCUS_RING}>
        PREAX
        </a>
      </p>
    </footer>
  );
};
export default Footer;
