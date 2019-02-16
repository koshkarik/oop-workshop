import axios from 'axios';
import _ from 'lodash';
import config from './config';
import WeatherProvider from './WeatherProvider';
import validateCreate from './helpers';

export default class WeatherService {
  constructor(httpProvider = axios) {
    this.httpProvider = httpProvider;

    this.weatherProviders = config.weatherServices
      .reduce((acc, conf) => ({
        ...acc,
        [conf.name]: new WeatherProvider(conf)
      }), {});

    this.activeService = config.defaultWeatherService;
  }

  addService(serviceConfig) {
    const { weatherProviders } = this;
    const errors = validateCreate(serviceConfig);

    if (!_.isEmpty(errors)) {
      throw new Error(errors[0]);
    }

    if (this.weatherProviders[serviceConfig.name]) {
      return this;
    }

    const addedWeatherProvider = new WeatherProvider(serviceConfig);
    this.weatherProviders = {
      ...weatherProviders,
      [serviceConfig.name]: addedWeatherProvider,
    };

    return this;
  }

  use(serviceName) {
    const weatherService = this.weatherProviders[serviceName];
    if (!weatherService) {
      throw new Error('Weather service not found!!!');
    }
    this.activeService = serviceName;

    return this;
  }

  getWeather(city) {
    if (!city) {
      throw new Error('You have to provide name!!');
    }
    const parsedCity = city.trim().toLowerCase();
    const { weatherProviders, activeService } = this;

    return weatherProviders[activeService].getByCity(parsedCity, this.httpProvider);
  }
}
