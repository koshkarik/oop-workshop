#!/usr/bin/env node

import program from 'commander';
import beatify from '../beatifier';
import getWeatherService from '../weather/Weather';

program
  .arguments('<city>')
  .option('-s, --service <service>', 'choose one of those weather service: MetaWeather, WeatherBit')
  .action(async (city) => {
    try {
      const config = {
        apiKey: '870192228ba99bcc2b7ce50e323c1914',
      };
      const serviceName = program.service || '';

      const weatherService = getWeatherService(serviceName, config);
      const data = await weatherService.getData(city);
      console.log(beatify(data));
    } catch (e) {
      console.log(e);
      process.exit(1);
    }
  })
  .parse(process.argv);
