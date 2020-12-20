/**
 * Generates a random negative or positive integer within a specified range.
 * @param magnitude The absolute size of the range for which to generate random integers in (i.e. [`-magnitude`, `magnitude`]).
 */
export const genRandomInteger = (magnitude: number): number => {
  const negationMultiplier = Math.round(Math.random()) ? 1 : -1;

  return Math.round(Math.random() * magnitude) * negationMultiplier;
};

/**
 * Returns `number^2`.
 *
 * @param number The number to square.
 */
export const square = (number: number): number => {
  return number * number;
};
