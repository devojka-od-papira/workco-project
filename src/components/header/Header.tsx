import React from 'react';
import { Column, Grid } from 'light-react-grid';
import Menu from '../menu/Menu';
import Logo from '../logo/Logo';
import styles from './Header.module.scss';

function Header() {
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
    <Grid className={styles.heared}>
      <Column size={{ lg: 3 }}><Logo /></Column>
      <Column size={{ lg: 5 }}><Menu menu={menu} /></Column>
      <Column size={{ lg: 4 }} />
    </Grid>
  );
}
export default Header;
