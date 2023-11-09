export type AnyError = Error & {[key: string]: any };

export type HistogramDataType = {
  labels: string[],
  datasets: [{ data: number[] }],
};

export type CollectionType = {[key: string]: number};
