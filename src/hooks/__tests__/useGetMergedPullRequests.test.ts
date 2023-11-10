import { act, renderHook } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react-native';

import { useGetMergedPullRequests } from '../useGetMergedPullRequests';


const mockState = { data: [], error: null, loading: false };
const mockFetch = jest.fn();

jest.mock('api/apiReducer', () => ({
  apiReducer: jest.fn().mockImplementation(() => mockState),
}));

jest.mock('hooks/utils/fetchData', () => ({
  fetchData: () => mockFetch(),
}));

describe('useGetMergedPullRequests hook', () => {
  it('return initial state', () => {
    renderHook(useGetMergedPullRequests);

    waitFor(() => {
      expect(mockFetch).toHaveBeenCalledTimes(1);
    });
  });

  it('return refetch function', () => {
    const { result } = renderHook(useGetMergedPullRequests);
    const { refetch } = result.current;

    act(() => {
      refetch();
    });

    waitFor(() => {
      expect(mockFetch).toHaveBeenCalledTimes(2);
    });
  });
});
