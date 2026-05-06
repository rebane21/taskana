import * as Icons from './icons';

const Icon = ({ name, className = '', ...props }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent className={className} {...props} />;
};

export default Icon;
