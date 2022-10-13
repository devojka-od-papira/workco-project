import React from 'react';
import Container from '../container';
import styles from './MainNews.module.scss';

type NewsData = {
  title: string;
  src: string;
  alt: string;
  description: string;
};

interface MainNewsProps {
  newsData: NewsData;
}
const MainNews: React.FC<MainNewsProps> = ({ newsData }) => (
  <Container>
    <div className={styles.content}>
      <h2 className={styles.title}>{newsData.title}</h2>
      <div className={styles.mainImageWrapper}>
        <img className={styles.img} src={newsData.src} alt={newsData.alt} />
      </div>
      <p className={styles.shortText}>{newsData.description}</p>
    </div>
  </Container>
);

export default MainNews;
