import React, { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import Header from './components/header';
import Footer from './components/footer';

const App = (): ReactElement => (
  <BrowserRouter>
    <Header />
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
    </Routes>
    <Footer />
  </BrowserRouter>
);
export default App;
