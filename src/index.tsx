import React from 'react';
import ReactDOM from 'react-dom';
import { GridSystem } from 'light-react-grid';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { gridSettings } from './constants';

import './assets/styles/main.scss';

ReactDOM.render(
  <GridSystem useGridHelper={true} settings={gridSettings}>
    <App />
  </GridSystem>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
