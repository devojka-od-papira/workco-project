import React from 'react';
import 'light-react-grid/dist/index.css';
import { useBreakpoint } from 'light-react-grid';

function App() {
  const breakpoint = useBreakpoint();

  return (
    <div>
      <h2 className="h1">Hello!</h2>
      <h2 className="h2">Hello!</h2>
    </div>
  );
}

export default App;
