import React from 'react';

import { ActionType } from 'api/apiReducer';
import { getMergedPullRequests, ResultType } from 'api/getMergedPullRequests';
import { AnyError, ApiActions } from 'types';


const START_DATE = '2023-07-01T00-00-01Z';

export const fetchData = async (dispatch: React.Dispatch<ActionType<ResultType>>): Promise<void> => {
  dispatch({ type: ApiActions.SET_LOADING });
  try {
    const response = await getMergedPullRequests({
      owner: 'apple',
      repo: 'swift',
      //TODO: the 'since' date validation according to mask is out of scope
      since: START_DATE,
    });
    dispatch({ type: ApiActions.SET_RESPONSE_DATA, payload: { response } });
  } catch (error) {
    dispatch({ type: ApiActions.SET_ERROR, payload: { error: error as AnyError } });
  }
};
