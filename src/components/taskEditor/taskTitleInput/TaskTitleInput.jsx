import { Icon } from '@/components';
import { FOCUS_RING } from '@/constants';
import { clsx } from '@/utils';
import styles from './taskTitleInput.module.css';

export const TaskTitleInput = ({ inputId, inputRef, taskTitle, onChange, onClear, autoFocus }) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={inputId} className={clsx('body__lg_bold', FOCUS_RING, styles.requiredLabel)}>
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
