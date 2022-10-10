import React from 'react';
import styles from './Section.module.scss';
import Container from '../container';

interface SectionProps {
  title: string;
  classNames: string;
  hideTitle?: boolean;
}

const Section: React.FC<SectionProps> = ({
  title,
  children,
  classNames,
  hideTitle = false,
}) => (
  <Container>
    {!hideTitle && (
      <div className={classNames}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    )}
    {children}
  </Container>
);

export default Section;
