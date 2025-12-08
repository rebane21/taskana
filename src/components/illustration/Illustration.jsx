import * as Illustrations from './illustrations';

const Illustration = ({ name, className = '', ...props }) => {
  const IllustrationComponent = Illustrations[name];

  if (!IllustrationComponent) {
    console.warn(`Illustration "${name}" not found`);
    return null;
  }

  return <IllustrationComponent className={className} {...props} />;
};
export default Illustration;
