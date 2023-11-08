import React, { useEffect, useReducer } from 'react';

import {
  Actions, ActionType, apiReducer, initialState, StateType
} from '../api/apiReducer';
import { getMergedPullRequests, ResultType } from '../api/getMergedPullRequests';
import { AnyError } from '../types';


const START_DATE = '2023-07-01';

const fetchData = async (dispatch: React.Dispatch<ActionType<ResultType>>): Promise<void> => {
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
