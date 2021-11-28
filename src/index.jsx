import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider as OpenProvider } from './Context/Aside';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <OpenProvider>
        <App />
      </OpenProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


