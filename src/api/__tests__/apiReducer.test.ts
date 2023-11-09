import { Actions, apiReducer } from '../apiReducer';


const mockData = [1, 2, 3];
const mockError = { name: '11', message: 'message' };

const initialState = { data: [], loading: false, error: null };

describe('apiReducer', () => {
  it('should handle response action', () => {
    const action = { type: Actions.SET_RESPONSE_DATA, payload: { response: mockData } };
    expect(apiReducer(initialState, action)).toMatchObject({ data: mockData, loading: false, error: null });
  });

  it('should handle error action', () => {
    const action = { type: Actions.SET_ERROR, payload: { error: mockError } };
    expect(apiReducer(initialState, action)).toMatchObject({ data: [], loading: false, error: mockError });
  });

  it('should handle loading action', () => {
    const action = { type: Actions.SET_LOADING };
    expect(apiReducer(initialState, action)).toMatchObject({ data: [], loading: true, error: null });
  });

  it('should return default state with incorrect action', () => {
    const action = { type: 'wrong action' };
    expect(apiReducer(initialState, action)).toMatchObject(initialState);
  });
});
