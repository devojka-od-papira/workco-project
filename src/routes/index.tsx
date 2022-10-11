import React from 'react';
import Home from '../views/home';
import NewsView from '../views/newsView';

export const routes = [
  {
    title: 'Home',
    path: '/',
    component: <Home />,
  },
  {
    title: 'Classes',
    path: '/classes',
    component: '',
  },
  {
    title: 'News',
    path: '/news',
    component: <NewsView />,
  },
  {
    title: 'Gallery',
    path: '/gallery',
    component: '',
  },
  {
    title: 'About us',
    path: '/about-us',
    component: '',
  },
];
