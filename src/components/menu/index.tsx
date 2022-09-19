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
  <nav className={cx(styles.nav)}>
    <ul className={cx(styles.ul, styles.menuPosition && mobileMenuOpen)}>
      {menu.map((menuItem) => (
        <li className={cx(styles.menuItem)} key={menuItem.title}>
          {menuItem.title}
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
