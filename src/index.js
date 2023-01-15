import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NewApp from './NewApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <App /> */}
     <NewApp />
  </React.StrictMode>
);
