import GeoLocator from '../src/GeoLocator';
import getTestProvider, { testIp, testData } from '../testHelper';

const testProvider = getTestProvider(testIp, testData);

it('should return data', async () => {
  const locator = new GeoLocator(testProvider);

  const locationData = await locator.getLocation();
  const { city, country } = locationData;

  expect(city).toEqual(testData.default.data.city);
  expect(country).toEqual(testData.default.data.country);
});

it('should handle ip adress', async () => {
  const locator = new GeoLocator(testProvider);

  const locationData = await locator.getLocation(testIp);
  const { city, country } = locationData;

  expect(city).toEqual(testData[testIp].data.city);
  expect(country).toEqual(testData[testIp].data.country);
});
