import App from './App';
import './style.css';
import { StyledEngineProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>,
  document.getElementById('App')
);