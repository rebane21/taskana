import styles from './button.module.css';
import { clsx } from '@/utils';
import { Icon } from '@/components';

export const Button = ({
  children,
  type = 'button',
  variant = 'accent',
  disabled = false,
  loading = false,
  className = '',
  onMouseDown,
  ref,
  ...props
}) => {
  return (
    <button
      ref={ref}
      type={type}
      className={clsx(
        styles.button,
        styles[`variant-${variant}`],
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
};

Button.Text = ({ children, className = '', ...props }) => (
  <span className={clsx('body__md_semibold', className)} {...props}>
    {children}
  </span>
);
