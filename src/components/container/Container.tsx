import React from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
  children: any
}

function Container({ children } :ContainerProps) {
  return (
    <div className={styles.container}>{children}</div>
  );
}

export default Container;
