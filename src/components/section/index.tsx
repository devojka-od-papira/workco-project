import React from 'react';

import styles from './Section.module.scss';

interface SectionProps {
  title: string;
  dividerColor: string;
}

const Section: React.FC<SectionProps> = ({ title, dividerColor }) => (
  <div className={styles.content}>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.divider} style={{ backgroundColor: dividerColor }} />
    <div
      className={styles.absoluteDivider}
      style={{ backgroundColor: dividerColor }}
    />
  </div>
);

export default Section;
