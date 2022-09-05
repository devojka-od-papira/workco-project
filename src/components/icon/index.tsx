import React from 'react';
import cx from 'classnames';
import styles from './Icon.module.scss';

export interface IconProps {
  icon: string;
  onClick: () => void;
  mobileMenuOpen: boolean;
}

const Icon: React.FC<IconProps> = ({ icon, onClick, mobileMenuOpen }) => (
  <button
    className={cx(styles.menu_button, !mobileMenuOpen && styles.menu_closed)}
    onClick={onClick}
  >
    <img src={icon} alt="menu" />
  </button>
);

export default Icon;
