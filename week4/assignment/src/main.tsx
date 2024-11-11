import { Global, ThemeProvider } from "@emotion/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./styles/global.ts";

import App from "./App.tsx";
import "./index.css";
import theme from "./styles/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
