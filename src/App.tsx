import React, { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/home';
import NewsView from './views/newsView';

const App = (): ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<NewsView />} />
    </Routes>
  </BrowserRouter>
);
export default App;
