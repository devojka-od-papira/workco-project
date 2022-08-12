import React from 'react';

import styles from './Heading1.module.scss';

export interface Heading1Props {
  text: string;
}

const Heading1: React.FC<Heading1Props> = ({ text }) => (
  <h1 className={styles.root}>{text}</h1>
);

export default Heading1;
