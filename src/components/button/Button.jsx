import styles from './button.module.css';
import { clsx } from '../../utils/clsx.js';
import Icon from '../icon/Icon';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  className = '',
  ...props
}) => {
  return (
    <button
      type="button"
      className={clsx(
        styles.button,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        loading && styles.loading,
        className,
      )}
      disabled={disabled || loading}
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

export default Button;
