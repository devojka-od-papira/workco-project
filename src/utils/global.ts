import { DataItem, NewsData } from '../types/global';

export const chunk = (arr: NewsData[], len: number): NewsData[][] => {
  const chunks = [];
  let i = 0;
  const n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }

  return chunks;
};

export const mapNewsData = (data: DataItem[]): NewsData[] => {
  if (data.length) {
    return data.map((dataItem: DataItem) => ({
      title: dataItem.title,
      description: dataItem.shortText,
      image: {
        src: dataItem.img,
        alt: dataItem.title,
      },
    }));
  }
  return [];
};
