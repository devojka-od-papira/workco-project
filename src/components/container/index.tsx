import React from 'react';

import styles from './Container.module.scss';

export interface ContainerProps {
  children: any;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
