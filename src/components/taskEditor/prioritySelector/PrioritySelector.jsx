import Button from '@/components/button/Button';
import Icon from '@/components/icon/Icon';
import { PRIORITY_KEY, PRIORITY_OPTIONS } from '@/constants/taskPriorities';
import { FOCUS_RING } from '@/constants/focusRing';
import { clsx } from '@/utils/clsx';
import styles from './prioritySelector.module.css';

const PRIORITY_STYLE = {
  [PRIORITY_KEY.MINUS]: styles.priorityMinus,
  [PRIORITY_KEY.CHEVRON_TOP]: styles.priorityChevronTop,
  [PRIORITY_KEY.ARROW_TWO]: styles.priorityArrowTwo,
};

const PrioritySelector = ({ priority, onSelect }) => {
  return (
    <div className={styles.priority}>
      <p className="body__lg_bold">Приоритет</p>
      <div id="priority" className={styles.selectPriority}>
        {PRIORITY_OPTIONS.map(({ key, icon, ariaLabel }) => (
          <Button
            key={key}
            variant="priority"
            type="button"
            aria-label={ariaLabel}
            aria-pressed={priority === key}
            className={clsx(
              styles.priorityIcon,
              FOCUS_RING,
              PRIORITY_STYLE[key],
              priority === key && styles.active,
            )}
            onClick={() => onSelect(key)}
          >
            <Icon name={icon} className={styles.icon} aria-hidden />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PrioritySelector;
