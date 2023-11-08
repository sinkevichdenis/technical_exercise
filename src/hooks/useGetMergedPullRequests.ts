import { useEffect, useReducer } from 'react';

import { Actions, apiReducer, initialState, StateType } from '../api/apiReducer';
import { getMergedPullRequests, ResultType } from '../api/getMergedPullRequests';
import { AnyError } from '../types';


const START_DATE = '2023-07-01';

export const useGetMergedPullRequests = (): StateType<ResultType> => {
  const [data, dispatch] = useReducer(apiReducer<ResultType>, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: Actions.SET_LOADING });
      try {
        const response = await getMergedPullRequests({
          owner: 'apple',
          repo: 'swift',
          //TODO: the 'since' date validation according to mask is out of scope
          since: START_DATE,
        });
        dispatch({ type: Actions.SET_RESPONSE_DATA, payload: { response } });
      } catch (error) {
        dispatch({ type: Actions.SET_ERROR, payload: { error: error as AnyError } });
      }
    };

    fetchData();
  }, []);

  return data;
};
