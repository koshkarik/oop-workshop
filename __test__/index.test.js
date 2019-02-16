import fs from 'fs';
import geoLocator from '../src/GeoLocator';
import parseFiles from '../src/pipeline';

it('should return smth', async () => {
  const data = 'fixtureData';
  const provider = { get: () => ({ data }) };
  const locatePosition = geoLocator({ provider });

  const locationData = await locatePosition();
  expect(locationData).toEqual(data);
});

it('should return parsed filename', async () => {
  const fixture = ['aaa', '.aaa', '.bbb', '.ccc', 'no'];
  const savedFunc = fs.readder;
  fs.readdirSync = () => fixture;
  const parsedName = await parseFiles();
  expect(parsedName).toEqual('.BBBS');
  fs.readdirSync = savedFunc;
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
