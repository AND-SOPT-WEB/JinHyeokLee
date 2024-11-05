import { Global, ThemeProvider } from '@emotion/react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './styles/global.js';
import theme from './styles/theme.js';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyle} />
    <App />
  </ThemeProvider>,
);
