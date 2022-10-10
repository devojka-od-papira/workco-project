import React from 'react';
import cx from 'classnames';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();
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
            <a
              href={menuItem.path}
              className={cx({
                [styles.underline]: location.pathname === menuItem.path,
              })}
            >
              {menuItem.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
