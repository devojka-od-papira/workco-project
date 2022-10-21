import React from 'react';
import Container from '../container';
import styles from './MainNews.module.scss';
import { NewsData } from '../../types/global';

interface MainNewsProps {
  newsData: NewsData;
}
const MainNews: React.FC<MainNewsProps> = ({ newsData }) => (
  <Container>
    {newsData && (
      <div className={styles.content}>
        <h2 className={styles.title}>{newsData.title}</h2>
        <div className={styles.mainImageWrapper}>
          <img
            className={styles.img}
            src={newsData.image.src}
            alt={newsData.image.alt}
          />
        </div>
        <p className={styles.shortText}>{newsData.description}</p>
      </div>
    )}
  </Container>
);

export default MainNews;
