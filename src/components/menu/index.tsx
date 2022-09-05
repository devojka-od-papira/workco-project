import React from 'react';
import cx from 'classnames';
import styles from './Menu.module.scss';

type MenuTypes = {
  title: string;
  path: string;
};

interface MenuProps {
  menu: MenuTypes[];
  mobileMenuOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ menu, mobileMenuOpen }) => (
  <ul className={cx(styles.ul, styles.menu_position && mobileMenuOpen)}>
    {menu.map((menuItem) => (
      <li className={cx(styles.menu_item)} key={menuItem.title}>
        {menuItem.title}
      </li>
    ))}
  </ul>
);

export default Menu;
