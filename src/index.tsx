import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import {createRoot} from 'react-dom/client';
const protalDiv = document.getElementById('root') as HTMLElement;
createRoot(protalDiv).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
);

