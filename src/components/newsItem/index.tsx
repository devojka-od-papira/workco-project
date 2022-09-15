import React, { FC } from 'react';
import { Column, Grid } from 'light-react-grid';
import styles from './NewsItem.module.scss';

interface NewsItemProps {
  title: string;
  src: string;
  description: string;
  alt: string;
}

const NewsItem: FC<NewsItemProps> = ({ title, src, description, alt }) => (
  <div className={styles.item}>
    <h3 className={styles.title}>{title}</h3>
    <Grid>
      <Column size={{ sm: 4, lg: 3 }}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={src} alt={alt} />
        </div>
      </Column>
      <Column size={{ lg: 3 }}>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
      </Column>
    </Grid>
  </div>
);

export default NewsItem;
