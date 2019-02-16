const fs = require('fs');

const getMiddle = (list) => {
  const middleIndex = Math.round(list.length / 2) - 1;
  return list.length > 0 ? list[middleIndex] : '';
};

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
  const parsedFiles = files
    .filter(file => file[0] === '.')
    .sort();

  const middleFile = getMiddle(parsedFiles);
  const result = makePlural(middleFile).toUpperCase();

  return result || 'None files matched criteria';
};
