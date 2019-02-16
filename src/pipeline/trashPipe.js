const fs = require('fs');

function getMiddle() {
  const middleIndex = Math.round(this.length / 2) - 1;
  return this.length > 0 ? this[middleIndex] : '';
}

function makePlural() {
  if (!this.length) {
    return '';
  }
  return this[this.length - 1] === 's' ? this : `${this.toString()}s`;
}

export default (directory = './') => {
  const files = fs.readdirSync(directory);
  if (!files.length) {
    return 'Directory is empty';
  }

  Array.prototype.getMiddle = getMiddle; // eslint-disable-line
  String.prototype.makePlural = makePlural; // eslint-disable-line

  const result = files
    .filter(file => file[0] === '.')
    .sort()
    .getMiddle()
    .makePlural()
    .toUpperCase();

  Array.prototype.getMiddle = null; // eslint-disable-line
  String.prototype.makePlural = null; // eslint-disable-line

  return result || 'None files matched criteria';
};
