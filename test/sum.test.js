import sum from '../src/sum';

describe('Sum test', () => {
  test('Should add two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
