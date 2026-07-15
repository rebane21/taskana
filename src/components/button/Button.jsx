import { forwardRef } from 'react';
import styles from './button.module.css';
import { clsx } from '@/utils/clsx.js';
import Icon from '@/components/icon/Icon';

const Button = forwardRef(({
  children,
  type = 'button',
  variant = 'accent',
  size = 'medium',
  disabled = false,
  loading = false,
  className = '',
  onMouseDown,
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      className={clsx(
        styles.button,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        loading && styles.loading,
        className,
      )}
      disabled={disabled || loading}
      onMouseDown={(e) => {
        onMouseDown?.(e);
        e.preventDefault();
      }}
      {...props}
    >
      {loading ? <Icon name="Loading" className={styles.spinIcon} /> : children}
    </button>
  );
});

Button.displayName = 'Button';

Button.Text = ({ children, className = '', ...props }) => (
  <span className={clsx('body__md_semibold', className)} {...props}>
    {children}
  </span>
);

export default Button;
