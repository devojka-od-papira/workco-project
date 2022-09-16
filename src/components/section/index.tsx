import React from 'react';
import { Column, Grid } from 'light-react-grid';
import styles from './Section.module.scss';
import Container from '../container';

interface SectionProps {
  title: string;
  classNames: string;
}

const Section: React.FC<SectionProps> = ({ title, children, classNames }) => (
  <Container>
    <Grid className={classNames}>
      <Column size={{ sm: 1, md: 1, lg: 2 }} className={styles.section}>
        <h3 className={styles.title}>{title}</h3>
      </Column>
    </Grid>
    {children}
  </Container>
);

export default Section;
