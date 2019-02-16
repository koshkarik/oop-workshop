import _ from 'lodash';

export default ({ name, url, query }) => {
  const errors = [];
  _.forEach([name, url, query], (field) => {
    if (!_.isString(field) || _.isEmpty(field)) {
      errors.push(`Wrong value - ${field}`);
    }
  });
  return errors;
};
