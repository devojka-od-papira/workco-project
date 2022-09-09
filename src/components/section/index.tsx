import React from 'react';
import { Column, Grid } from 'light-react-grid';
import cx from 'classnames';
import styles from './Section.module.scss';
import Container from '../container';

interface SectionProps {
  title: string;
  classNames: string;
}

const Section: React.FC<SectionProps> = ({ title, children, classNames }) => (
  <Container>
    <Grid className={classNames}>
      <Column size={{ lg: 2 }} className={styles.section}>
        <h3 className={cx(styles.title, { classNames })}>{title}</h3>
      </Column>
    </Grid>
    {children}
  </Container>
);

export default Section;
