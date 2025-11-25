import styles from './button.module.css';
import { clsx } from '../utils/clsx.js';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
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
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.Icon = ({ src, width = 18, height = 18, ...props }) => (
  <img src={src} width={width} height={height} className={styles.icon} {...props} />
);

Button.Text = ({ children, className = '', ...props }) => (
  <span className={clsx('body__md_semibold', className)} {...props}>
    {children}
  </span>
);

export default Button;
