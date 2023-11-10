export type AnyError = Error & {[key: string]: any };

export type HistogramDataType = {
  labels: string[],
  datasets: [{ data: number[] }],
};

export type CollectionType = {[key: string]: number};

export enum ApiActions {
  SET_LOADING = 'setLoading',
  SET_ERROR = 'setError',
  SET_RESPONSE_DATA = 'setRequestData',
}
