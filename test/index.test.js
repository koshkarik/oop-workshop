import geoLocator from '../src/GeoLocator';

it('should return smth', async () => {
  const data = 'fixtureData';
  const provider = { get: () => ({ data }) };
  const locatePos = geoLocator({ provider });

  const locationData = await locatePos();
  expect(locationData).toEqual(data);
});

// test for class

// import GeoLocator from '../src/geolocator';

// test class

// it('should return smth', async () => {
// const data = 'fixtureData';
// const provider = { get: () => ({ data }) };
// const locator = new GeoLocator({ provider });

// const locationData = await locator.getLocation();
// expect(locationData).toEqual(data);
// });
