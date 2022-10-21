import React, { ReactElement, useEffect, useState } from 'react';
import 'light-react-grid/dist/index.css';
import HomeNews from '../../components/news';
import Classes from '../../components/classes';
import { NewsData } from '../../types/global';
import { mapNewsData } from '../../utils/global';

const Home = (): ReactElement => {
  const [newsData, setNewsData] = useState<NewsData[]>([]);
  const fetchNews = async () => {
    const response = await fetch('api/data.json');
    const data = await response.json();
    const formattedData = mapNewsData(data);
    setNewsData(formattedData.slice(0, 4));
  };
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <>
      <HomeNews newsData={newsData} />
      <Classes />
    </>
  );
};

export default Home;
