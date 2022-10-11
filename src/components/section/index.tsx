import React from 'react';
import cx from 'classnames';
import styles from './Section.module.scss';
import Container from '../container';

interface SectionProps {
  title?: string;
  classNames: string;
}

const Section: React.FC<SectionProps> = ({ title, children, classNames }) => (
  <Container>
    <div className={classNames}>
      <h3
        className={cx({
          [styles.title]: title,
        })}
      >
        {title}
      </h3>
    </div>
    {children}
  </Container>
);

export default Section;
