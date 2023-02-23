import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const RouterTag = process.env.NODE_ENV === 'development' ? BrowserRouter : HashRouter

root.render(
  <RouterTag>
    <App/>
  </RouterTag>
);
