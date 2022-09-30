import React from 'react';
import cx from 'classnames';
import styles from './MenuButton.module.scss';

export interface MenuButtonProps {
  icon: string;
  onClick: () => void;
  mobileMenuOpen: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  icon,
  onClick,
  mobileMenuOpen,
}) => (
  <button
    className={cx(styles.menuButton, !mobileMenuOpen && styles.menuClosed)}
    onClick={onClick}
  >
    <img src={icon} alt="menu" />
  </button>
);

export default MenuButton;
