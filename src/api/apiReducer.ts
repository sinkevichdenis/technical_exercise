import { AnyError } from 'types';


export enum Actions {
  SET_LOADING = 'setLoading',
  SET_ERROR = 'setError',
  SET_RESPONSE_DATA = 'setRequestData',
}

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

export const initialState = { data: [], loading: false, error: null };

export const apiReducer = <T>(state: StateType<T>, action: ActionType<T>): StateType<T> => {
  switch (action.type) {
  case Actions.SET_LOADING:
    return { ...state, error: null, loading: true };
  case Actions.SET_ERROR:
    return { ...state, error: action.payload?.error!, loading: false };
  case Actions.SET_RESPONSE_DATA:
    return { ...state, data: action.payload?.response!, loading: false };
  default:
    return state;
  }
};
