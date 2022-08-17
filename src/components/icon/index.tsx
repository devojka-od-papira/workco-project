import React from 'react';

import styles from './Icon.module.scss';

export interface IconProps {
  icon: string;
  onClick: any;
}

const Icon: React.FC<IconProps> = ({ icon, onClick }) => (
  <div onClick={onClick}>
    <img className={styles.icon} src={icon} alt="" />
  </div>
);

export default Icon;
