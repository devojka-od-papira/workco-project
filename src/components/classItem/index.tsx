import React from 'react';

import styles from './ClassItem.module.scss';

interface ClassItemProps {
  title: string;
  src: string;
  alt: string;
}

const ClassItem: React.FC<ClassItemProps> = ({ title, src, alt }) => (
  <div className={styles.content}>
    <div className={styles.titleWrapper}>
      <h4 className={styles.title}>{title}</h4>
    </div>
    <div className={styles.imageWrapper}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  </div>
);
export default ClassItem;
