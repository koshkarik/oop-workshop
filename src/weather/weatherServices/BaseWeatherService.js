import axios from 'axios';

export default class BaseWeatherService {
  constructor(config = {}) {
    this.httpProvider = config.httpClient || axios;
    this.apiKey = config.apiKey || null;
  }
}
