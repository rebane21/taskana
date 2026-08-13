import { Button, Icon } from '@/components';
import styles from './modalFooter.module.css';
import { FOCUS_RING } from '@/constants';

export const ModalFooter = ({ type = 'create', isSubmitDisabled, onClose, onDelete }) => {
  const isEdit = type === 'edit';
  const submitLabel = isEdit ? 'Сохранить' : 'Создать';

  return (
    <footer className={styles.modalFooter}>
      <div className={styles.modalActions}>
        <Button
          variant="primary"
          type="submit"
          form="task-form"
          className={FOCUS_RING}
          disabled={isSubmitDisabled}
        >
          <Button.Text className="body__lg_semibold">{submitLabel}</Button.Text>
        </Button>
        <Button variant="secondary" type="button" className={FOCUS_RING} onClick={onClose}>
          <Button.Text className="body__lg_semibold">Отмена</Button.Text>
        </Button>
      </div>
      {isEdit && (
        <Button
          variant="iconNegative"
          type="button"
          className={FOCUS_RING}
          aria-label="Удалить задачу"
          onClick={onDelete}
        >
          <Icon name="Trash" />
        </Button>
      )}
    </footer>
  );
};
