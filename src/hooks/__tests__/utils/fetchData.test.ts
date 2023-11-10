import { waitFor } from '@testing-library/react-native';

import { getMergedPullRequests } from 'api/getMergedPullRequests';
import { ApiActions } from 'types';

import { fetchData } from '../../utils/fetchData';


const mockDispatch = jest.fn();

jest.mock('api/getMergedPullRequests');

describe('fetchData hooks util', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('handle success', async () => {
    (getMergedPullRequests as jest.Mock).mockResolvedValue([]);

    await fetchData(mockDispatch);
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledTimes(2);
      expect(mockDispatch).toHaveBeenCalledWith({ type: ApiActions.SET_LOADING });
      expect(mockDispatch).toHaveBeenCalledWith({ type: ApiActions.SET_RESPONSE_DATA, payload: { response: [] } });
    });
  });

  it('handle error', async () => {
    (getMergedPullRequests as jest.Mock).mockRejectedValue('error');

    await fetchData(mockDispatch);
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledTimes(2);
      expect(mockDispatch).toHaveBeenCalledWith({ type: ApiActions.SET_LOADING });
      expect(mockDispatch).toHaveBeenCalledWith({ type: ApiActions.SET_ERROR, payload: { error: 'error' } });
    });
  });
});
