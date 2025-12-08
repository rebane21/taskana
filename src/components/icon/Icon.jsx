import * as Icons from './icons';

const Icon = ({
  name,
  size = 18,
  wrapperSize = 24,
  color = 'currentColor',
  className = '',
  showWrapper = false,
  ...props
}) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const icon = (
    <IconComponent width={size} height={size} className={className} style={{ color }} {...props} />
  );

  if (showWrapper) {
    return (
      <div
        style={{
          width: wrapperSize,
          height: wrapperSize,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </div>
    );
  }

  return icon;
};
export default Icon;
