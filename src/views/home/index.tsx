import React, { ReactElement } from 'react';
import 'light-react-grid/dist/index.css';
import News from '../../components/news';
import Classes from '../../components/classes';

const Home = (): ReactElement => (
  <>
    <News />
    <Classes />
  </>
);

export default Home;
