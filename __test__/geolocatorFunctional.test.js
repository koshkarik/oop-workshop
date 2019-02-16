import geoLocatorFunc from '../src/geoLocatorFunctional';
import getTestProvider, { testIp, testData } from '../testHelper';

const testProvider = getTestProvider(testIp, testData);

it('should return smth', async () => {
  const locatePosition = geoLocatorFunc(testProvider);

  const locationData = await locatePosition();
  const { city, country } = locationData;
  expect(city).toEqual(testData.default.data.city);
  expect(country).toEqual(testData.default.data.country);
});

it('should return ip', async () => {
  const locatePosition = geoLocatorFunc(testProvider);

  const locationData = await locatePosition(testIp);
  const { city, country } = locationData;
  expect(city).toEqual(testData[testIp].data.city);
  expect(country).toEqual(testData[testIp].data.country);
});
