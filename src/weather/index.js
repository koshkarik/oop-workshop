import _ from 'lodash';
import MetaWeather from './weatherServices/MetaWeather';
import OpenWeather from './weatherServices/OpenWeather';

const defaultService = OpenWeather;

export default (serviceName, config = {}, CustomService) => {
  const services = {
    MetaWeather,
    OpenWeather,
    CustomService,
  };

  const ActiveService = _.get(services, serviceName, defaultService);
  return new ActiveService(config);
};
