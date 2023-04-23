import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ToastContainer } from 'react-toastify';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> <ToastContainer />
  </React.StrictMode>
);
