import React, { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes';
import Header from './components/header';
import Footer from './components/footer';
import Home from './views/home';
import NewsView from './views/newsView';

const App = (): ReactElement => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.NEWS} element={<NewsView />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
export default App;
