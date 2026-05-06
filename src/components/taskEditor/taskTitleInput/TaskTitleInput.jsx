import Icon from '@/components/icon/Icon';
import { clsx } from '@/utils/clsx';
import styles from './taskTitleInput.module.css';

const TaskTitleInput = ({ inputId, inputRef, taskTitle, onChange, onClear }) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={inputId} className={clsx('body__lg_bold', styles.requiredLabel)}>
        Название
      </label>
      <input
        ref={inputRef}
        id={inputId}
        type="text"
        className={clsx(styles.input, 'body__lg_regular', taskTitle && styles.hasClearButton)}
        placeholder="Введите название задачи"
        value={taskTitle}
        onChange={(e) => onChange(e.target.value)}
        required
      />
      {taskTitle && (
        <button
          type="button"
          className={styles.clearButton}
          onClick={onClear}
          aria-label="Очистить поле ввода"
        >
          <Icon name="XMark" className={styles.clearIcon} />
        </button>
      )}
    </div>
  );
};

export default TaskTitleInput;
