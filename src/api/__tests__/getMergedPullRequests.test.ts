// eslint-disable-next-line import/no-unresolved
import { OctokitResponse } from '@octokit/types';

import { mockOctokitFilteredResponse, mockOctokitResponse } from '__mocks__/octokit.mock';

import { filterCallback, getMergedPullRequests } from '../getMergedPullRequests';


describe('getMergedPullRequests', () => {
  it('request with default params', async () => {
    const result = await getMergedPullRequests({
      owner: 'owner',
      repo: 'repo',
    });
    expect(result).toEqual(mockOctokitResponse);
  });

  it('request with optional params', async () => {
    const result = await getMergedPullRequests({
      owner: 'owner',
      repo: 'repo',
      since: '2023-01-01',
    });
    expect(result).toEqual(mockOctokitResponse);
  });
});

describe('filterCallback  utils', () => {
  it('filter data', () => {
    expect(filterCallback({ data: mockOctokitResponse } as OctokitResponse<any[]>)).toEqual(mockOctokitFilteredResponse);
  });

  it('handle empty array', () => {
    expect(filterCallback({ data: [] } as OctokitResponse<any>)).toEqual([]);
  });

  it('handle incorrect array item', () => {
    expect(filterCallback({ data: [{}] } as OctokitResponse<any>)).toEqual([{ id: '', closed_at: '' }]);
  });
});
