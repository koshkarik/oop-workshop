import _ from 'lodash';
import WeatherService from '../src/weather/WeatherService';
import config from '../src/weather/config';

// it('should work', async () => {
//   const service = new WeatherService();
//   const weather = await service.getWeather('Moscow');
//   console.log(weather);
// });

const [, openWeather] = config.weatherServices;

const newServiceConfig = {
  name: 'weather_grabber',
  url: 'https://get.it',
  query: 'ququ',
  params: {},
};

const fixture = {
  [openWeather.url]: {
    Moscow: { data: -100 },
    Capetown: { data: -200 },
  },
  [newServiceConfig.url]: {
    Sydney: { data: 35 },
  },
};

it('should make request to desired weather provider', async () => {
  const city = 'Moscow';

  const httpFetcher = {
    get: (url, reqData) => {
      const { params } = reqData;
      const isRequestInfoCorrect = _.includes(url, openWeather.url)
      && params[openWeather.query] === city.toLowerCase().trim();
      return isRequestInfoCorrect ? fixture[url][city] : null;
    },
  };

  const service = new WeatherService(httpFetcher);
  const weather = await service
    .use(config.defaultWeatherService)
    .getWeather(city);

  expect(weather).toEqual(fixture[openWeather.url][city].data);
});

it('should create new service and grab weather', async () => {
  const city = 'Sydney';

  const httpFetcher = {
    get: (url, reqData) => {
      const { params } = reqData;
      const isRequestInfoCorrect = _.includes(url, newServiceConfig.url)
        && params[newServiceConfig.query] === city.toLowerCase().trim();
      return isRequestInfoCorrect ? fixture[url][city] : null;
    },
  };

  const service = new WeatherService(httpFetcher);
  const weather = await service
    .addService(newServiceConfig)
    .use(newServiceConfig.name)
    .getWeather(city);

  expect(weather).toEqual(fixture[newServiceConfig.url][city].data);
});
