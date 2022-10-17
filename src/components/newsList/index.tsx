import React from 'react';
import { Column, Grid } from 'light-react-grid';
import Container from '../../components/container';
import styles from '../../views/newsView/NewsView.module.scss';
import NewsItem from '../newsItem';

type NewsData = {
  title: string;
  description: string;
  image: Image;
};

interface NewsListProps {
  newsData: NewsData[];
}

const NewsList: React.FC<NewsListProps> = ({ newsData }) => (
  <Container>
    <Grid>
      {newsData.map((newsItem: NewsData) => (
        <Column
          className={styles.wrapper}
          size={{ md: 4, lg: 6 }}
          key={newsItem.title}
        >
          <NewsItem
            title={newsItem.title}
            src={newsItem.image.src}
            description={newsItem.description}
            alt={newsItem.image.alt}
          />
        </Column>
      ))}
    </Grid>
  </Container>
);
export default NewsList;
