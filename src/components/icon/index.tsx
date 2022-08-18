import React from 'react';

import styles from './Icon.module.scss';

export interface IconProps {
  icon: string;
  onClick: () => void;
}

const Icon: React.FC<IconProps> = ({ icon, onClick }) => (
  <button onClick={onClick}>
    <img className={styles.icon} src={icon} alt="" />
  </button>
);

export default Icon;
