import React from 'react';
import { Column, Grid, useBreakpoint } from 'light-react-grid';
import Container from '../container';
import Menu from '../menu';
import Logo from '../logo';
import styles from './Header.module.scss';

function Header() {
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
      <Grid className={styles.header}>
        <Column size={{ sm: 1, md: 2, lg: 2 }}>
          <Logo />
        </Column>
        {breakpoint === 'lg' && <Column size={{ lg: 1 }} />}
        <Column className={styles.menuWrapper} size={{ md: 6, lg: 5 }}>
          <Menu menu={menu} />
        </Column>
      </Grid>
    </Container>
  );
}
export default Header;
