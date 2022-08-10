import React from 'react';
import './Menu.module.scss';

type MenuTypes = {
  title: string;
  path: string;
};

interface MenuProps {
  menu: MenuTypes[];
}

const Menu = ({ menu }: MenuProps) => (
  <ul>
    {menu.map((menuItem, index) => {
      return <li className='menuItem primary-font' key={index}>{menuItem.title}</li>;
    })}
  </ul>
)

export default Menu;
