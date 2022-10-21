import React from 'react';
import { Column, Grid } from 'light-react-grid';
import Section from '../section';
import styles from './News.module.scss';
import NewsItem from '../newsItem';
import { NewsData } from '../../types/global';

interface NewsProps {
  newsData: NewsData[];
}

const HomeNews: React.FC<NewsProps> = ({ newsData }) => (
  <Section classNames={styles.section} title="News">
    <Grid>
      {newsData.map((newsItem) => (
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
    <Grid>
      <Column size={{ lg: 2 }}>
        <div className={styles.moreNewsWrapper}>
          <a className={styles.moreNews} href="/news">
            More news
          </a>
        </div>
      </Column>
    </Grid>
  </Section>
);

export default HomeNews;
