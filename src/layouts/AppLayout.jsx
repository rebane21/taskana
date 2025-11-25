import Content from '../components/content/Content';
import Header from '../components/header/Header';
import styles from './appLayout.module.css';

const AppLayout = () => {
  return (
    <section className={styles.appLayout}>
      <Header />
      <Content />
    </section>
  );
};
export default AppLayout;
