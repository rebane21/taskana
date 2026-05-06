import Button from '@/components/button/Button';
import Icon from '@/components/icon/Icon';
import { clsx } from '@/utils/clsx';
import styles from './prioritySelector.module.css';

const PRIORITIES = [
  { id: 'Minus', icon: 'Minus' },
  { id: 'ChevronTop', icon: 'ChevronTop' },
  { id: 'ArrowTwo', icon: 'ArrowTwo' },
];

const PRIORITY_STYLE = {
  Minus: styles.priorityMinus,
  ChevronTop: styles.priorityChevronTop,
  ArrowTwo: styles.priorityArrowTwo,
};

const PrioritySelector = ({ priority, onSelect }) => {
  return (
    <div className={styles.priority}>
      <p className="body__lg_bold">Приоритет</p>
      <div id="priority" className={styles.selectPriority}>
        {PRIORITIES.map(({ id, icon }) => (
          <Button
            key={id}
            variant="priority"
            type="button"
            className={clsx(
              styles.priorityIcon,
              PRIORITY_STYLE[id],
              priority === id && styles.active,
            )}
            onClick={() => onSelect(id)}
          >
            <Icon name={icon} className={styles.icon} />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PrioritySelector;
