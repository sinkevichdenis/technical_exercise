import { sortCollectionKeys } from '../sortCollectionKeys';


describe('sortCollectionKeys utils', () => {
  it('should sort data', () => {
    expect(sortCollectionKeys({
      t: 5, m: 10, '2023-11': 1, '2023-09': 100,
    })).toMatchObject({
      '2023-09': 100, '2023-11': 1, m: 10, t: 5,
    });
  });

  it('should handle empty object', () => {
    expect(sortCollectionKeys({})).toMatchObject({});
  });
});
