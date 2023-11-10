import { useEffect, useReducer } from 'react';

import { apiReducer, initialState, StateType } from 'api/apiReducer';
import { ResultType } from 'api/getMergedPullRequests';

import { fetchData } from './utils/fetchData';


export const useGetMergedPullRequests = (): StateType<ResultType> & { refetch: () => void } => {
  const [data, dispatch] = useReducer(apiReducer<ResultType>, initialState);

  useEffect(() => {
    fetchData(dispatch);
  }, []);

  return {
    ...data,
    refetch: () => fetchData(dispatch),
  };
};
