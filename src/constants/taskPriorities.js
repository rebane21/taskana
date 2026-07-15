export const PRIORITY_KEY = Object.freeze({
  MINUS: 'Minus',
  CHEVRON_TOP: 'ChevronTop',
  ARROW_TWO: 'ArrowTwo',
});

export const DEFAULT_PRIORITY_KEY = PRIORITY_KEY.MINUS;

export const PRIORITY_TO_NUMERIC = Object.freeze({
  [PRIORITY_KEY.MINUS]: 1,
  [PRIORITY_KEY.CHEVRON_TOP]: 2,
  [PRIORITY_KEY.ARROW_TWO]: 3,
});

export const NUMERIC_TO_PRIORITY_KEY = Object.freeze(
  Object.fromEntries(
    Object.entries(PRIORITY_TO_NUMERIC).map(([key, value]) => [value, key]),
  ),
);

export const PRIORITY_OPTIONS = Object.freeze([
  { key: PRIORITY_KEY.MINUS, icon: 'Minus', ariaLabel: 'Низкий приоритет' },
  { key: PRIORITY_KEY.CHEVRON_TOP, icon: 'ChevronTop', ariaLabel: 'Средний приоритет' },
  { key: PRIORITY_KEY.ARROW_TWO, icon: 'ArrowTwo', ariaLabel: 'Высокий приоритет' },
]);
