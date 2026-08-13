import { Illustration } from '@/components';
import styles from './statistic.module.css';

export const Statistic = () => {
  return (
    <section className={styles.statistic}>
      <Illustration name="Notebook" alt="side bar img" width="233" height="168" />
      <p className="body__md_regular">
        Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику <br />и
        самочувствие.
      </p>
    </section>
  );
};
