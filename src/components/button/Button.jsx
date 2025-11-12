import styles from './button.module.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
  ...props
}) => {
  // Формируем список классов
  const buttonClasses = [
    styles.button,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;