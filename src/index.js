import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Props from './header'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Props />
    <App />
  </React.StrictMode>
);

reportWebVitals();
