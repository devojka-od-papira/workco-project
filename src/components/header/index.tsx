import React, { useState } from 'react';
import { Column, Grid, useBreakpoint } from 'light-react-grid';
import cx from 'classnames';
import Container from '../container';
import Menu from '../menu';
import Logo from '../logo';
import Icon from '../icon';
import styles from './Header.module.scss';
import closeIcon from '../../assets/icons/close.svg';
import hamburgerIcon from '../../assets/icons/hamburger.svg';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const breakpoint = useBreakpoint();
  const menu = [
    {
      title: 'Home',
      path: '',
    },
    {
      title: 'Classes',
      path: '',
    },
    {
      title: 'News',
      path: '',
    },
    {
      title: 'Gallery',
      path: '',
    },
    {
      title: 'About us',
      path: '',
    },
  ];
  return (
    <Container>
      <Grid
        className={cx(styles.header, {
          [styles.divider]: mobileMenuOpen && breakpoint === 'sm',
        })}
      >
        <Column
          className={cx(mobileMenuOpen && styles.menuOpen)}
          size={{ sm: 1, md: 2, lg: 2 }}
        >
          <Logo mobileMenuOpen={mobileMenuOpen} />
        </Column>
        <Column
          className={styles.menuOpen}
          size={{ sm: 3, md: 6, lg: 5 }}
          offsetLeft={{ lg: 1 }}
        >
          {(mobileMenuOpen || breakpoint !== 'sm') && (
            <Menu menu={menu} mobileMenuOpen={mobileMenuOpen} />
          )}
          {breakpoint === 'sm' && (
            <Icon
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              icon={mobileMenuOpen ? closeIcon : hamburgerIcon}
              mobileMenuOpen={mobileMenuOpen}
            />
          )}
        </Column>
      </Grid>
    </Container>
  );
}
export default Header;
