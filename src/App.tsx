import React from 'react';
import 'light-react-grid/dist/index.css';
import Header from './components/header/Header';
import Container from './components/container/Container';
import Heading1 from './components/Heading1';

function App() {
  return (
    <Container>
      <Heading1 text="Hello" />
      <Header />
    </Container>
  );
}

export default App;
