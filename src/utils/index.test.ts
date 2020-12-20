import { square } from './';

describe('square', () => {
  it.each([
    [0, 0],
    [1, 1],
    [5, 25],
    [-5, 25],
  ])('should return positive numbers', (inputVal, expectedVal) => {
    expect.assertions(1);

    expect(square(inputVal)).toBe(expectedVal);
  });
});
