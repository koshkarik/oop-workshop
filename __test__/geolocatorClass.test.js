import GeoLocator from '../src/GeoLocator';

it('should return data', async () => {
  const data = 'fixtureData';
  const provider = { get: () => ({ data }) };
  const locator = new GeoLocator(provider);

  const locationData = await locator.getLocation();
  expect(locationData).toEqual(data);
});

it('should handle ip adress', async () => {
  const ip = '111.111.111';
  const provider = { get: () => ({ data: ip }) };
  const locator = new GeoLocator(provider);

  const locationData = await locator.getLocation(ip);
  expect(locationData).toEqual(ip);
});
