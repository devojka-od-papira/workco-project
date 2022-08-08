import React from 'react';
import ReactDOM from 'react-dom';
import { GRID_SETTINGS, GridSystem } from 'light-react-grid';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './main.scss';

ReactDOM.render(
  <GridSystem
    useGridHelper={true}
    settings={{
      ...GRID_SETTINGS,
      gridHelperColumnColor: 'rgba(0, 0, 0, .05)',
      gridHelperMargins: {
        sm: '5%',
        md: '5%',
        lg: '5%',
      },
    }}
  >
    <App />
  </GridSystem>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
