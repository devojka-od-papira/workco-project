import React from 'react';

import styles from './Section.module.scss';

interface SectionProps {
  title: string;
}

const Section: React.FC<SectionProps> = ({ title }) => (
  <div className={styles.content}>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.divider} />
    <div className={styles.absoluteDivider} />
  </div>
);

export default Section;
