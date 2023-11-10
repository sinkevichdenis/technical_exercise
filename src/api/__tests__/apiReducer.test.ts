import { ApiActions } from 'types';

import { apiReducer } from '../apiReducer';


const mockData = [1, 2, 3];
const mockError = { name: '11', message: 'message' };

const initialState = { data: [], loading: false, error: null };

describe('apiReducer', () => {
  it('should handle response action', () => {
    const action = { type: ApiActions.SET_RESPONSE_DATA, payload: { response: mockData } };
    expect(apiReducer(initialState, action)).toEqual({ data: mockData, loading: false, error: null });
  });

  it('should handle error action', () => {
    const action = { type: ApiActions.SET_ERROR, payload: { error: mockError } };
    expect(apiReducer(initialState, action)).toEqual({ data: [], loading: false, error: mockError });
  });

  it('should handle loading action', () => {
    const action = { type: ApiActions.SET_LOADING };
    expect(apiReducer(initialState, action)).toEqual({ data: [], loading: true, error: null });
  });

  it('should return default state with incorrect action', () => {
    const action = { type: 'wrong action' };
    expect(apiReducer(initialState, action)).toEqual(initialState);
  });
});
