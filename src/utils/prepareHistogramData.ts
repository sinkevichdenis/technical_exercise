import { ResultType } from 'api/getMergedPullRequests';
import { CollectionType, HistogramDataType } from 'types';

import { sortCollectionKeys } from './sortCollectionKeys';


export const prepareHistogramData = (data: ResultType[]): HistogramDataType => {
  const collection = data.reduce((acc, item): CollectionType => {
    const key = item?.closed_at?.slice(0, 7);
    if (!key) return acc;

    if (acc[key]) {
      acc[key] += 1;
    } else {
      acc[key] = 1;
    }
    return acc;
  }, {} as CollectionType);

  const sortedCollection = sortCollectionKeys(collection);
  return { labels: Object.keys(sortedCollection), datasets: [{ data: Object.values(sortedCollection) }] };
};
