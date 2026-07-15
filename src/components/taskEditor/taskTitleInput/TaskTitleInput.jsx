import Icon from '@/components/icon/Icon';
import { FOCUS_RING } from '@/constants/focusRing';
import { clsx } from '@/utils/clsx';
import styles from './taskTitleInput.module.css';

const TaskTitleInput = ({ inputId, inputRef, taskTitle, onChange, onClear, autoFocus }) => {
  return (
    <div className={styles.formGroup}>
      <label
        htmlFor={inputId}
        className={clsx('body__lg_bold', FOCUS_RING, styles.requiredLabel)}
      >
        Название
      </label>
      <div className={styles.inputWrapper}>
        <input
          ref={inputRef}
          id={inputId}
          type="text"
          autoFocus={autoFocus}
          className={clsx(styles.input, 'body__lg_regular', taskTitle && styles.hasClearButton)}
          placeholder="Название задачи"
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
    </div>
  );
};

export default TaskTitleInput;
