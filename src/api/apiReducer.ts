import { AnyError, ApiActions } from 'types';


export type StateType<T> = {
  data: T[],
  loading: boolean,
  error: AnyError | null,
};

export type ActionType<T> = {
  type: string,
  payload?: {
    response?: T[],
    error?: AnyError,
  },
};

export const initialState = { data: [11], loading: false, error: null };

export const apiReducer = <T>(state: StateType<T>, action: ActionType<T>): StateType<T> => {
  switch (action.type) {
  case ApiActions.SET_LOADING:
    return { ...state, error: null, loading: true };
  case ApiActions.SET_ERROR:
    return { ...state, error: action.payload?.error!, loading: false };
  case ApiActions.SET_RESPONSE_DATA:
    return { ...state, data: action.payload?.response!, loading: false };
  default:
    return state;
  }
};
