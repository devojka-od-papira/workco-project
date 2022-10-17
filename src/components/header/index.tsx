import React, { useState } from 'react';
import { Column, Grid, useBreakpoint } from 'light-react-grid';
import cx from 'classnames';
import Container from '../container';
import Menu from '../menu';
import Logo from '../logo';
import MenuButton from '../MenuButton';
import styles from './Header.module.scss';
import closeIcon from '../../assets/icons/close.svg';
import hamburgerIcon from '../../assets/icons/hamburger.svg';
import { ROUTES } from '../../routes';

const menu = [
  {
    title: 'home',
    path: ROUTES.HOME,
  },
  {
    title: 'classes',
    path: ROUTES.CLASSES,
  },
  {
    title: 'news',
    path: ROUTES.NEWS,
  },
  {
    title: 'galery',
    path: ROUTES.GALERY,
  },
  {
    title: 'about us',
    path: ROUTES.ABOUT_US,
  },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const breakpoint = useBreakpoint();
  return (
    <header className={cx(styles.header)}>
      <Container>
        <Grid>
          <Column size={{ sm: 1, md: 2, lg: 2 }}>
            <Logo />
          </Column>
          <Column size={{ sm: 3, md: 6, lg: 9 }} offsetLeft={{ lg: 1 }}>
            <Menu menu={menu} menuOpen={menuOpen} />
            {breakpoint !== 'lg' && (
              <MenuButton
                onClick={() => setMenuOpen(!menuOpen)}
                icon={menuOpen ? closeIcon : hamburgerIcon}
                menuOpen={menuOpen}
              />
            )}
          </Column>
        </Grid>
      </Container>
    </header>
  );
};
export default Header;
