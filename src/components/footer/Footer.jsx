import styles from './footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footerContent}>
      <p className=" body__md_regular">
        Проект выполнен в рамках стажировки&nbsp;
        <a target="_blank" rel="noopener noreferrer" href="https://preax.ru/">
          PREAX
        </a>
      </p>
    </footer>
  );
};
export default Footer;
