import React, { ReactElement, useEffect, useState } from 'react';
import styles from './NewsView.module.scss';
import MainNews from '../../components/mainNews';
import Container from '../../components/container';
import NewsList from '../../components/newsList';
import Button from '../../components/button';
import { chunk, mapNewsData } from '../../utils/global';
import { NewsData } from '../../types/global';

const NewsView = (): ReactElement => {
  const [news, setNews] = useState<NewsData[]>([]);
  const [mainNews, setMainNews] = useState<NewsData>();
  const [loadedNews, setLoadedNews] = useState<NewsData[][]>([]);
  const [page, setPage] = useState(0);

  const loadMoreNews = () => {
    const pageNext = page + 1;

    if (loadedNews[pageNext]) {
      setPage(pageNext);
      setNews([...news, ...loadedNews[pageNext]]);
    }
  };

  useEffect(() => {
    fetch('api/data.json')
      .then((response) => response.json())
      .then((data) => {
        const formattedData = mapNewsData(data);
        setMainNews(formattedData[0]);
        formattedData.splice(0, 1);
        const showNews = chunk(formattedData, 4);
        setLoadedNews(showNews);
        setNews(showNews[page]);
      });
  }, []);
  return (
    <>
      <Container>
        <h1 className={styles.title}>News</h1>
      </Container>
      {mainNews && <MainNews newsData={mainNews} />}
      <NewsList newsData={news} />
      {loadedNews[page + 1] && (
        <Button text="Load more news" onClick={loadMoreNews} />
      )}
    </>
  );
};

export default NewsView;
