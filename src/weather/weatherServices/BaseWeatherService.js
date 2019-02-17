import axios from 'axios';

export default class BaseWeatherService {
  constructor(apiKey, httpProvider) {
    this.httpProvider = httpProvider || axios;
    this.apiKey = apiKey || null;
  }
}
