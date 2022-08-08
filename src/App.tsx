import React from 'react';
import 'light-react-grid/dist/index.css'
import {Column, Grid, useBreakpoint} from "light-react-grid";

const App = () => {
  const breakpoint = useBreakpoint();

  return <div>
    <h2 className='h1'>Hello!</h2>
    <h2 className='h2'>Hello!</h2>
  </div>;
}

export default App;
