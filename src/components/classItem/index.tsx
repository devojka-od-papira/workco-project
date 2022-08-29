import React from 'react';
import { Column, Grid } from 'light-react-grid';

import styles from './ClassItem.module.scss';

interface ClassItemProps {
  title: string;
  src: string;
  alt: string;
}

const ClassItem: React.FC<ClassItemProps> = ({ title, src, alt }) => (
  <Column size={{ lg: 3 }}>
    <div className={styles.content}>
      <Grid>
        <Column className={styles.content} size={{ lg: 2 }}>
          <div className={styles.title_wrapper}>
            <h4 className={styles.title}>{title}</h4>
          </div>
        </Column>
      </Grid>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  </Column>
);
export default ClassItem;
