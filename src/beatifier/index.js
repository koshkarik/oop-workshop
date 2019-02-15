import prettyjson from 'prettyjson';

const config = {
  keysColor: 'rainbow',
  dashColor: 'magenta',
  stringColor: 'white',
};

export default jsonData => prettyjson.render(jsonData, config);
