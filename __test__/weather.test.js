import getWeatherService from '../src/weather';

it('shoud bring data from metaweather', async () => {
  const city = 'moscow';
  const cityId = '777';
  const serviceName = 'MetaWeather';
  const temprature = -40;
  const cityIdUrl = `https://www.metaweather.com/api/location/search?query=${city}`;
  const weatherUrl = `https://www.metaweather.com/api/location/${cityId}`;

  const fixture = {
    [cityIdUrl]: {
      data: [{
        woeid: cityId,
        title: city,
      }],
    },
    [weatherUrl]: {
      data: {
        consolidated_weather: [temprature],
      },
    },
  };

  const httpClient = {
    get: url => fixture[url],
  };

  const weatherService = getWeatherService(serviceName, { httpClient });
  const weather = await weatherService.getByCity(city);

  expect(weather).toBe(temprature);
});

// test with real http request

// it('should work', async () => {
//   const service = getWeatherService(
//    'OpenWeather', { apiKey: '870192228ba99bcc2b7ce50e323c1914' });
//   const weather = await service.getByCity('Moscow');
//   console.log(weather);
// });

// it('should work', async () => {
//   const service = getWeatherService('MetaWeather');
//   const weather = await service.getByCity('London');
//   console.log(weather);
// });
