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
<<<<<<< HEAD
  <div className={styles.item}>
    <h3 className={styles.title}>{title}</h3>
    <Grid>
      <Column size={{ lg: 3 }}>
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
=======
  <Column className={styles.wrapper} size={{ lg: 6 }}>
    <div className={styles.item}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        <Column size={{ lg: 3 }}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={src} alt={alt} />
          </div>
        </Column>
        <Column size={{ lg: 3 }}>
          <div className={styles.description}>
            <p>{description}</p>
          </div>
        </Column>
      </div>
    </div>
  </Column>
>>>>>>> c63e851 (Image get alt prop)
);

export default NewsItem;
