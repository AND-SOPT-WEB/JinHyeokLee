import { Global } from '@emotion/react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from '../styles/global.js';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <>
    <Global styles={GlobalStyle} />
    <App />
  </>,
);
