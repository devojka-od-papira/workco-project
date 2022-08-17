import React from 'react';
import styles from './Menu.module.scss';

type MenuTypes = {
  title: string;
  path: string;
};

interface MenuProps {
  menu: MenuTypes[];
  className: string;
}

const Menu: React.FC<MenuProps> = ({ menu, className }) => {
  console.log(className);
  return (
    <ul className={`${className} ${styles.ul}`}>
      {menu.map((menuItem) => (
        <li className={styles.menuItem} key={menuItem.title}>
          {menuItem.title}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
