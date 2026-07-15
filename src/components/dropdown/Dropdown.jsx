import Button from '@/components/button/Button';
import Icon from '@/components/icon/Icon';
import { useCallback, useId, useRef, useState } from 'react';
import { DEFAULT_SORT_OPTION_ID, DROPDOWN_OPTIONS } from '@/constants/dropdownOptions';
import { FOCUS_RING } from '@/constants/focusRing';
import { useTasks } from '@/contexts/tasks/tasksContext';
import { useDismiss } from '@/hooks/useDismiss';
import { useToggle } from '@/hooks/useToggle';
import { clsx } from '@/utils/clsx';
import styles from './dropdown.module.css';

const formatButtonLabel = (label) => label.charAt(0).toLowerCase() + label.slice(1);

const Dropdown = () => {
  const { sortOption, setSortOption } = useTasks();
  const [isOpen, , closeDropdown, toggleDropdown] = useToggle(false);
  const [hasUserSelected, setHasUserSelected] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const listboxId = useId();
  const selectedOption = DROPDOWN_OPTIONS.find(({ id }) => id === sortOption);
  const isCustomSort = hasUserSelected || sortOption !== DEFAULT_SORT_OPTION_ID;

  const closeDropdownMenu = useCallback(() => {
    if (dropdownRef.current?.contains(document.activeElement)) {
      buttonRef.current?.focus();
    }
    closeDropdown();
  }, [closeDropdown]);

  useDismiss({
    ref: dropdownRef,
    isActive: isOpen,
    onDismiss: closeDropdownMenu,
  });

  const handleToggleDropdown = () => {
    if (isOpen) {
      closeDropdownMenu();
      return;
    }
    toggleDropdown();
  };

  const handleOptionSelect = (id) => {
    setSortOption(id);
    setHasUserSelected(true);
    closeDropdownMenu();
  };

  const handleOptionKeyDown = (event, id) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleOptionSelect(id);
    }
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <Button
        ref={buttonRef}
        variant="dropdown"
        className={clsx(styles.dropdownButton, FOCUS_RING, isCustomSort ? styles.selected : styles.unSelected)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        onClick={handleToggleDropdown}
      >
        <div className="iconWrapper">
          <Icon name={selectedOption?.iconName || 'OneThreeOne'} secondaryColor="currentColor" />
        </div>
        <Button.Text className={styles.buttonText}>
          По {formatButtonLabel(selectedOption?.label || 'дате создания')}
        </Button.Text>
        <div className="iconWrapper">
          <Icon name="ChevronBottom"
          />
        </div>
      </Button>
      <div
        className={clsx(styles.dropdownMenu, isOpen && styles.dropdownMenuOpen)}
        aria-hidden={!isOpen}
      >
        <div className={clsx(styles.optionsListTitle, 'body__md_bold')}>
          <span className="iconWrapper" aria-hidden="true">
            <Icon name="Filter" />
          </span>
          <span>Сортировка по:</span>
        </div>
        <ul id={listboxId} className={styles.optionsList} role="listbox" aria-label="Сортировка задач">
          {DROPDOWN_OPTIONS.map(({ id, label, iconName }) => {
            const isSelected = sortOption === id;

            return (
              <li
                key={id}
                className={clsx(styles.optionItem, FOCUS_RING, isSelected && styles.optionItemSelected)}
                role="option"
                aria-selected={isSelected}
                tabIndex={isOpen ? 0 : -1}
                onClick={() => handleOptionSelect(id)}
                onKeyDown={(event) => handleOptionKeyDown(event, id)}
              >
                <span className="iconWrapper" aria-hidden="true">
                  <Icon name={iconName} className={styles.icon} color="var(--neutral-600)" />
                </span>
                <span className={styles.optionText}>{label}</span>
                <span className="iconWrapper" aria-hidden="true">
                  {isSelected && <Icon name="Check" className={styles.icon} />}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
