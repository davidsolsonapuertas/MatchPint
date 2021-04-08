import { processData } from './One.js';

const input = [
  { value: Math.random() * 100, multiplier: Math.random() * 100 },
  { value: Math.random() * 100, multiplier: Math.random() * 100 },
];

const output = [
  {
    value: input[0].value * input[0].multiplier,
    multiplier: input[0].multiplier,
  },
  {
    value: input[1].value * input[1].multiplier,
    multiplier: input[1].multiplier,
  },
];

describe('ProcessData function', () => {
  it('Output should be correct', () => {
    expect(processData(input)).toEqual(output);
  });

  it('Should return an array', () => {
    expect(Array.isArray(processData(input))).toBe(true);
  });
});
