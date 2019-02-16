import geoLocatorFunc from '../src/geoLocatorFunctional';

it('should return smth', async () => {
  const data = 'fixtureData';
  const provider = { get: () => ({ data }) };
  const locatePosition = geoLocatorFunc(provider);

  const locationData = await locatePosition();
  expect(locationData).toEqual(data);
});

it('should return ip', async () => {
  const ip = '222.222.222';
  const provider = { get: () => ({ data: ip }) };
  const locatePosition = geoLocatorFunc(provider);

  const locationData = await locatePosition();
  expect(locationData).toEqual(ip);
});
