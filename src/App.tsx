import React from 'react';
import 'light-react-grid/dist/index.css';
import Header from './components/header';
import News from './components/news';
import Classes from './components/classes';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header />
      <News />
      <Classes />
      <Footer />
    </div>
  );
}

export default App;
