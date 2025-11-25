import styles from './statistic.module.css';

const Statistic = () => {
  return (
    <section className={styles.statistic}>
      <img src="/Notebook.svg" alt="side bar img" />
      <p className='body__md_regular'>
        Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику <br />
        и самочувствие.
      </p>
    </section>
  );
};
export default Statistic;
