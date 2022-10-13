import React from 'react';
import styles from './Section.module.scss';
import Container from '../container';

interface SectionProps {
  title?: string;
  classNames: string;
}

const Section: React.FC<SectionProps> = ({ title, children, classNames }) => (
  <Container>
    <div className={classNames}>
      {title && <h3 className={styles.title}>{title}</h3>}
    </div>
    {children}
  </Container>
);

export default Section;
