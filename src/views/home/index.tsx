import React, { ReactElement, useEffect } from 'react';
import 'light-react-grid/dist/index.css';
import News from '../../components/news';
import Classes from '../../components/classes';

const Home = (): ReactElement => {
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('api/data.json ');
        if (response.ok) {
          const data = await response.json();
          console.log('data', data);
        }
      } catch (err) {
        console.log('error', err);
      }
    };

    fetchNews();
  }, []);
  // const loadNews = () => {};
  return (
    <>
      <News />
      <Classes />
    </>
  );
};

export default Home;
