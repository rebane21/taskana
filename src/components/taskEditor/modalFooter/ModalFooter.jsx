import Button from '@/components/button/Button';
import styles from './modalFooter.module.css';

const ModalFooter = ({ isSubmitDisabled, onClose }) => {
  return (
    <footer className={styles.modalFooter}>
      <div className={styles.modalActions}>
        <Button variant="secondary" type="submit" form="task-form" disabled={isSubmitDisabled}>
          <Button.Text className="body__lg_semibold">Создать</Button.Text>
        </Button>
        <Button variant="tertiary" type="button" size="94px" onClick={onClose}>
          <Button.Text className="body__lg_semibold">Отмена</Button.Text>
        </Button>
      </div>
    </footer>
  );
};

export default ModalFooter;
