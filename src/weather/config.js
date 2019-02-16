export default {
  weatherServices: [
    {
      name: 'metaweather',
      url: 'https://www.metaweather.com/api/location',
      query: 'query',
      apiKey: null,
      params: {

      },
      responseDataField: null,
    },
    {
      name: 'open_weather',
      url: 'https://api.openweathermap.org/data/2.5/weather',
      query: 'q',
      params: {
        appid: '870192228ba99bcc2b7ce50e323c1914',
      },
      responseDataField: 'weather',
    },
  ],
  defaultWeatherService: 'open_weather',
};
