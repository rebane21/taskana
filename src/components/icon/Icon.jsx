import * as Icons from './icons';
import { clsx } from '../../utils/clsx.js';

const Icon = ({ 
  name, 
  size = 18,
  wrapperSize = 24,
  color,
  className = '',
  showWrapper = false,
  wrapperClassName = '',
  onClick,
  ...props 
}) => {
  const IconComponent = Icons[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const icon = (
    <IconComponent 
      width={size}
      height={size}
      className={className}
      style={color ? { color } : undefined}
      {...props}
    />
  );

  if (showWrapper) {
    return (
      <div 
        className={clsx(wrapperClassName, 'iconWrapper')}
        style={{ 
          width: wrapperSize, 
          height: wrapperSize,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={onClick}
      >
        {icon}
      </div>
    );
  }

  return icon;
};
export default Icon;
