import React from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

type MenuTypes = {
  title: string;
  path: string;
};

interface MenuProps {
  menu: MenuTypes[];
  mobileMenuOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ menu, mobileMenuOpen }) => {
  const cx = classNames.bind(styles);
  return (
    <ul
      className={cx({
        ul: true,
        menu_position: mobileMenuOpen,
      })}
    >
      {menu.map((menuItem) => (
        <li className={cx({ menu_item: true })} key={menuItem.title}>
          {menuItem.title}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
