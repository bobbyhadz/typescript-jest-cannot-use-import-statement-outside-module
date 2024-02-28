import { sum } from './another-file';

describe('works', () => {
  it('returns the expected value', () => {
    expect(sum(10, 10)).toBe(20);
  });
});
