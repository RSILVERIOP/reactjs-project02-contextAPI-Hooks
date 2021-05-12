import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global-styles.css';
import { Home }from './templates/Home';
import { CounterContextProvider } from './contexts/CounterContext';

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
