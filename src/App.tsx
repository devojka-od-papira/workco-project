import React from "react";
import "light-react-grid/dist/index.css";
import { useBreakpoint, Grid, Column } from "light-react-grid";
import Header from "./components/header/Header";
import Container from "./components/container/Container"

function App() {
  const breakpoint = useBreakpoint();

  return (
    <Container>
      <Header />
    </Container>
  );
};

export default App;
