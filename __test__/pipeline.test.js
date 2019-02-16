import fs from 'fs';
import parseFiles from '../src/pipeline';

it('should return parsed filename', async () => {
  const fixture = ['aaa', '.aaa', '.bbb', '.ccc', 'no'];
  const savedFunc = fs.readder;
  fs.readdirSync = () => fixture;
  const parsedName = await parseFiles();
  expect(parsedName).toEqual('.BBBS');
  fs.readdirSync = savedFunc;
});

it('should not fail on empty dir', async () => {
  const fixture = [];
  const savedFunc = fs.readder;
  fs.readdirSync = () => fixture;
  const parsedName = await parseFiles();
  expect(parsedName).toEqual('Directory is empty');
  fs.readdirSync = savedFunc;
});

it('should not fail on files without point', async () => {
  const fixture = ['aaaa', 'bbbb'];
  const savedFunc = fs.readder;
  fs.readdirSync = () => fixture;
  const parsedName = await parseFiles();
  expect(parsedName).toEqual('None files matched criteria');
  fs.readdirSync = savedFunc;
});
