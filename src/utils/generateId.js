export const generateId = () => {
  const timestamp = Date.now().toString(36);
  let randomStr = '';

  while (randomStr.length < 8) {
    randomStr += Math.random().toString(36).substring(2);
  }

  const timePart = timestamp.slice(-3);
  const combined = timePart + randomStr;

  const cleanId = combined.replace(/\./g, '').replace(/^0+/, '').substring(0, 8);

  if (cleanId.length < 8) {
    return cleanId.padEnd(8, 'x');
  }

  return cleanId;
};
