const fs = require('fs');

const getMiddle = list => (list.length ? list[Math.round(list.length / 2) - 1] : '');
const makePlural = (item) => {
  if (!item.length) {
    return '';
  }
  return item[item.length - 1] === 's' ? item : `${item}s`;
};

export default (directory = './') => {
  const files = fs.readdirSync(directory);
  if (!files.length) {
    return 'Directory is empty';
  }
  return makePlural(getMiddle(files.filter(file => file[0] === '.').sort())).toUpperCase()
    || 'None files matched criteria';
};
