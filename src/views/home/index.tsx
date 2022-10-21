import React, { ReactElement, useEffect, useState } from 'react';
import 'light-react-grid/dist/index.css';
import News from '../../components/news';
import Classes from '../../components/classes';

type DataItem = {
  img: string;
  thumbnail: string;
  title: string;
  shortText: string;
  slug: string;
  text: string;
};

type NewsData = {
  title: string;
  description: string;
  image: Image;
};

const Home = (): ReactElement => {
  const [newsData, setNewsData] = useState<NewsData[]>([]);
  const selectNews = newsData.slice(0, 4);
  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch('api/data.json ');
      const data = await response.json();
      if (data.length) {
        const formattedData = data.map((dataItem: DataItem) => ({
          title: dataItem.title,
          description: dataItem.shortText,
          image: {
            src: dataItem.img,
            alt: `${dataItem.title}`,
          },
        }));
        setNewsData(formattedData);
      }
    };
    fetchNews();
  }, []);
  return (
    <>
      <News newsData={selectNews} />
      <Classes />
    </>
  );
};

export default Home;
