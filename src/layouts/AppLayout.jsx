import Content from '../components/content/Content';
import Header from '../components/header/Header';
import ThemeProvider from '../components/theme/themeProvider/themeProvider';
import styles from './appLayout.module.css';

const AppLayout = () => {
  return (
    <section className={styles.appLayout}>
      <ThemeProvider>
        <Header />
        <Content />
      </ThemeProvider>
    </section>
  );
};
export default AppLayout;
