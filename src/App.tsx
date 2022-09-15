import React, { ReactElement } from 'react';
import 'light-react-grid/dist/index.css';
import Header from './components/header';
import News from './components/news';
import Classes from './components/classes';
import Footer from './components/footer';

const App = (): ReactElement => (
  <>
    <Header />
    <News />
    <Classes />
    <Footer />
  </>
);

export default App;
