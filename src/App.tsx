import React, { ReactElement } from 'react';
import 'light-react-grid/dist/index.css';
import Header from './components/header';
import News from './components/news';
import Classes from './components/classes';
import Footer from './components/footer';

<<<<<<< HEAD
function App(): ReactElement {
  return (
    <div>
      <Header />
      <News />
      <Classes />
      <Footer />
    </div>
  );
}
=======
const App = (): ReactElement => (
  <>
    <Header />
    <News />
    <Classes />
    <Footer />
  </>
);
>>>>>>> d63d51c (Refactored)

export default App;
