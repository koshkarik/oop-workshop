import BaseWeatherService from './BaseWeatherService';

export default class OpenWeather extends BaseWeatherService {
  constructor(apiKey, httpProvider) {
    super(apiKey, httpProvider);
    this.url = 'https://api.openweathermap.org/data/2.5/weather';
    this.query = 'q';
  }

  buildQueryParams(city) {
    const { query, apiKey } = this;
    return {
      appid: apiKey,
      [query]: city,
    };
  }

  async getByCity(city) {
    if (!city) {
      throw new Error('You have to provide city name!!!');
    }

    const { httpProvider, url } = this;
    const queryParams = this.buildQueryParams(city);

    const response = await httpProvider.get(url, { params: queryParams });

    if (response.status !== 200 || !response.data) {
      throw new Error('Service is unavailable now');
    }
    const { data } = response;
    return data.main;
  }
}
