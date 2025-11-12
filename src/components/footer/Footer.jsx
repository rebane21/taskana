import styles from './footer.module.css';
const Footer = () => {
  return(
    <footer className={styles.footerContent}>
      <p className={styles.footerText}>
        Проект выполнен в рамках стажировки PREAX
      </p>
    </footer>
  )
}
export default Footer