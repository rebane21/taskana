import * as Illustrations from './illustrations';

export const Illustration = ({ name, className = '', ...props }) => {
  const IllustrationComponent = Illustrations[name];

  if (!IllustrationComponent) {
    console.warn(`Illustration "${name}" not found`);
    return null;
  }

  return <IllustrationComponent className={className} {...props} />;
};
