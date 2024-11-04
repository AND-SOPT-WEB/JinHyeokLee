import { Global } from '@emotion/react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './styles/global.js';

createRoot(document.getElementById('root')).render(
  <>
    <Global styles={GlobalStyle} />
    <App />
  </>,
);
