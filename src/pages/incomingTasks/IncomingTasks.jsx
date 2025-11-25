import Footer from '../../components/footer/Footer';
import MainContainer from '../../components/mainContainer/MainContainer';
import styles from './incomingTasks.module.css';

const IncomingTasks = () => {
  return (
    <section className={styles.incomingTasks__container}>
      <MainContainer />
      <Footer />
    </section>
  );
};
export default IncomingTasks;
