import React from 'react';
import { Column, Grid } from 'light-react-grid';
import Menu from '../menu/Menu';
import './Header.module.scss';

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
    <Grid>
      <Column size={{ lg: 3 }}>1</Column>
      <Column size={{ lg: 5 }}><Menu menu={menu} /></Column>
      <Column size={{ lg: 4 }}>3</Column>
    </Grid>
  );
}
export default Header;
