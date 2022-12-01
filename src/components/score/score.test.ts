import { Score } from './score';
import { series } from '../../series';

describe('Given "Score" function', () => {
  test('Then the result should be a template string', () => {
    const expected = typeof '';
    const result = typeof Score(series[0]);
    expect(result).toBe(expected);
  });
  test('Then the result should be another template string', () => {
    const expected = typeof '';
    const result = typeof Score(series[1]);
    expect(result).toBe(expected);
  });
});
