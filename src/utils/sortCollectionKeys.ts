import { CollectionType } from 'types';


export const sortCollectionKeys = (unordered: CollectionType): CollectionType => (
  Object.keys(unordered).sort().reduce(
    (obj: CollectionType, key: string): CollectionType => {
      obj[key] = unordered[key];
      return obj;
    }, {}
  )
);
