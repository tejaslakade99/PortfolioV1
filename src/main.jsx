import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { PortfolioContextProvider } from "./context/PortfolioContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PortfolioContextProvider>
      <App />
    </PortfolioContextProvider>
  </StrictMode>
);
