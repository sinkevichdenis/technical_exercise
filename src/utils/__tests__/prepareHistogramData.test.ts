import { mockOctokitFilteredResponse } from '__mocks__/octokit.mock';

import { prepareHistogramData } from '../prepareHistogramData';


describe('prepareHistogramData utils', () => {
  it('should handle correct data', () => {
    expect(prepareHistogramData(mockOctokitFilteredResponse)).toMatchObject({
      'datasets': [{ 'data': [2, 6, 5, 3, 4] }],
      'labels': ['2023-07', '2023-08', '2023-09', '2023-10', '2023-11'],
    });
  });

  it('should ignore incorrect values', () => {
    expect(prepareHistogramData(
      [{ closed_at: null }, { closed_at: 'null' }, { closed_at: undefined }, {}]
    )).toMatchObject({});
  });
});
