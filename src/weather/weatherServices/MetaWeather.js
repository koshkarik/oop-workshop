import _ from 'lodash';
import BaseWeatherService from './BaseWeatherService';

export default class MetaWeather extends BaseWeatherService {
  constructor(apiKey, httpProvider) {
    super(apiKey, httpProvider);
    this.url = 'https://www.metaweather.com/api/location/';
  }

  async getByCity(city) {
    if (!city) {
      throw new Error('You have to provide city name!!!');
    }
    const { httpProvider, url } = this;
    const parsedCity = city.trim().toLowerCase();
    const queryForCityId = `search?query=${city}`;

    const searchCityResponse = await httpProvider.get(`${url}${queryForCityId}`);

    const cityData = _.find(searchCityResponse.data, ({ title }) => {
      const cityTitle = title.trim().toLowerCase();
      return cityTitle === parsedCity;
    });

    if (!cityData || !cityData.woeid) {
      throw new Error('City not found!!!');
    }

    const weatherResponse = await httpProvider.get(`${url}${cityData.woeid}`);
    const weather = weatherResponse.data.consolidated_weather[0];

    return weather;
  }
}
