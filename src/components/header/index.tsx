import React, { useState } from 'react';
import { Column, Grid, useBreakpoint } from 'light-react-grid';
import classNames from 'classnames/bind';
import Container from '../container';
import Menu from '../menu';
import Logo from '../logo';
import Icon from '../icon';
import styles from './Header.module.scss';
import closeIcon from '../../assets/icons/close.svg';
import hamburgerIcon from '../../assets/icons/hamburger.svg';

function Header() {
  const cx = classNames.bind(styles);
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
        className={cx({
          header: true,
          divider: mobileMenuOpen && breakpoint === 'sm',
        })}
      >
        <Column size={{ sm: 1, md: 2, lg: 2 }}>
          <Logo />
        </Column>
        <Column
          className={cx(styles.menuMobileWrapper)}
          size={{ sm: 3, md: 6, lg: 5 }}
          offsetLeft={{ lg: 1 }}
        >
          {(mobileMenuOpen || breakpoint !== 'sm') && (
            <Menu
              className={cx({ menuPosition: mobileMenuOpen })}
              menu={menu}
            />
          )}
          {breakpoint === 'sm' && (
            <Icon
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              icon={mobileMenuOpen ? closeIcon : hamburgerIcon}
            />
          )}
        </Column>
      </Grid>
    </Container>
  );
}
export default Header;