import React from 'react';
import cx from 'classnames';
import { useBreakpoint } from 'light-react-grid';
import styles from './Menu.module.scss';

type MenuTypes = {
  title: string;
  path: string;
};

interface MenuProps {
  menu: MenuTypes[];
  menuOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ menu, menuOpen }) => {
  const breakpoint = useBreakpoint();
  return (
    <nav
      className={cx(styles.nav, {
        [styles.nav__open]: menuOpen,
        [styles.nav__compact]: breakpoint !== 'lg',
      })}
    >
      <ul className={cx(styles.ul, styles.menuPosition && menuOpen)}>
        {menu.map((menuItem) => (
          <li className={cx(styles.menuItem)} key={menuItem.title}>
            {menuItem.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
