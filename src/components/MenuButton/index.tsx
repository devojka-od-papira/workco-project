import React from 'react';
import cx from 'classnames';
import styles from './MenuButton.module.scss';

export interface MenuButtonProps {
  icon: string;
  onClick: () => void;
  menuOpen: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = ({ icon, onClick, menuOpen }) => (
  <button
    className={cx(styles.menuButton, !menuOpen && styles.menuClosed)}
    onClick={onClick}
  >
    <img src={icon} alt="menu" />
  </button>
);

export default MenuButton;
